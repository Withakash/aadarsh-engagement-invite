const body = document.body;
const intro = document.getElementById("intro");
const openButton = document.getElementById("open-invite");
const invitation = document.getElementById("invitation");
const musicToggle = document.getElementById("music-toggle");
const musicIconPath = document.getElementById("music-icon-path");
const music = document.getElementById("bg-music");
const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

const ICONS = {
  play: "M8 5v14l11-7z",
  pause: "M7 5h4v14H7zm6 0h4v14h-4z",
};

body.classList.add("locked");

const setMusicState = (isPlaying) => {
  musicToggle.setAttribute("data-playing", isPlaying ? "true" : "false");
  musicToggle.setAttribute("aria-pressed", isPlaying ? "true" : "false");
  musicToggle.setAttribute("aria-label", isPlaying ? "Pause music" : "Play music");
  if (musicIconPath) {
    musicIconPath.setAttribute("d", isPlaying ? ICONS.pause : ICONS.play);
  }
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

const attachSpotlight = (target, options = {}) => {
  if (!target || reduceMotion) {
    return;
  }

  const {
    spotXVar = "--spot-x",
    spotYVar = "--spot-y",
    tiltTarget,
    tiltXVar = "--intro-tilt-x",
    tiltYVar = "--intro-tilt-y",
    maxTilt = 6,
    defaultSpot = { x: 50, y: 35 },
  } = options;

  let rafId = null;

  const update = (event) => {
    if (event.pointerType && event.pointerType !== "mouse") {
      return;
    }

    const rect = target.getBoundingClientRect();
    const x = Math.max(0, Math.min(1, (event.clientX - rect.left) / rect.width));
    const y = Math.max(0, Math.min(1, (event.clientY - rect.top) / rect.height));

    if (rafId) {
      cancelAnimationFrame(rafId);
    }

    rafId = requestAnimationFrame(() => {
      target.style.setProperty(spotXVar, `${x * 100}%`);
      target.style.setProperty(spotYVar, `${y * 100}%`);

      if (tiltTarget) {
        const tiltX = (0.5 - y) * maxTilt;
        const tiltY = (x - 0.5) * maxTilt;
        tiltTarget.style.setProperty(tiltXVar, `${tiltX}deg`);
        tiltTarget.style.setProperty(tiltYVar, `${tiltY}deg`);
      }
    });
  };

  const reset = () => {
    target.style.setProperty(spotXVar, `${defaultSpot.x}%`);
    target.style.setProperty(spotYVar, `${defaultSpot.y}%`);
    if (tiltTarget) {
      tiltTarget.style.setProperty(tiltXVar, "0deg");
      tiltTarget.style.setProperty(tiltYVar, "0deg");
    }
  };

  target.addEventListener("pointermove", update);
  target.addEventListener("pointerleave", reset);
  reset();
};

attachSpotlight(intro, {
  spotXVar: "--intro-spot-x",
  spotYVar: "--intro-spot-y",
  tiltTarget: openButton,
  tiltXVar: "--intro-tilt-x",
  tiltYVar: "--intro-tilt-y",
  maxTilt: 10,
  defaultSpot: { x: 50, y: 30 },
});

attachSpotlight(invitation, {
  spotXVar: "--spot-x",
  spotYVar: "--spot-y",
  defaultSpot: { x: 50, y: 35 },
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

if (music) {
  music.addEventListener("play", () => setMusicState(true));
  music.addEventListener("pause", () => setMusicState(false));
  music.addEventListener("ended", () => setMusicState(false));
}

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
