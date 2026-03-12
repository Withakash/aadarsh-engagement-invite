const body = document.body;
const intro = document.getElementById("intro");
const openButton = document.getElementById("open-invite");
const musicToggle = document.getElementById("music-toggle");
const music = document.getElementById("bg-music");
const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

body.classList.add("locked");

const setMusicState = (isPlaying) => {
  musicToggle.setAttribute("data-playing", isPlaying ? "true" : "false");
  musicToggle.setAttribute("aria-pressed", isPlaying ? "true" : "false");
};

const startMusic = async () => {
  if (!music || !music.getAttribute("src")) {
    return;
  }

  try {
    music.muted = false;
    await music.play();
    setMusicState(true);
  } catch (error) {
    setMusicState(false);
  }
};

const openInvitation = () => {
  body.classList.remove("locked");
  body.classList.add("opened");
  intro.setAttribute("aria-hidden", "true");
  startMusic();
  document.getElementById("invitation").scrollIntoView({ behavior: "smooth" });
};

openButton.addEventListener("click", openInvitation);
openButton.addEventListener("keydown", (event) => {
  if (event.key === "Enter" || event.key === " ") {
    event.preventDefault();
    openInvitation();
  }
});

musicToggle.addEventListener("click", async () => {
  if (!music) {
    return;
  }

  if (music.paused || music.muted) {
    await startMusic();
  } else {
    music.pause();
    setMusicState(false);
  }
});

const revealItems = document.querySelectorAll("[data-reveal]");

if (!reduceMotion && window.gsap && window.ScrollTrigger) {
  gsap.registerPlugin(ScrollTrigger);

  gsap.utils.toArray(revealItems).forEach((item) => {
    gsap.fromTo(
      item,
      { autoAlpha: 0, y: 40 },
      {
        autoAlpha: 1,
        y: 0,
        duration: 1,
        ease: "power2.out",
        scrollTrigger: {
          trigger: item,
          start: "top 85%",
        },
      }
    );
  });

  gsap.utils.toArray(".parallax").forEach((layer) => {
    const speed = parseFloat(layer.dataset.speed || "0.2");
    gsap.to(layer, {
      y: () => window.innerHeight * speed,
      ease: "none",
      scrollTrigger: {
        trigger: layer.closest(".section"),
        start: "top bottom",
        end: "bottom top",
        scrub: true,
      },
    });
  });
} else {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("reveal-in");
        }
      });
    },
    { threshold: 0.2 }
  );

  revealItems.forEach((item) => observer.observe(item));
}

window.addEventListener("load", () => {
  setMusicState(false);
});
