Premium Animated Engagement Invitation
Complete Development TODO Roadmap

Project: Adarsh & Harshita Engagement Invitation

Target: Luxury animated storytelling website

Tech Stack:

Next.js

React

Tailwind CSS

GSAP + ScrollTrigger

Three.js (light use)

Next/Image optimization

Vercel deployment

Primary device: Mobile first

PHASE 1 — Project Initialization

Goal: Create the base architecture and development environment.

1.1 Initialize Next.js Project

TODO

npx create-next-app engagement-invite
cd engagement-invite

Choose:

JavaScript

App router OR Pages router (either works)

Tailwind: YES

Purpose

This creates:

React framework

routing

performance optimization

SEO support

1.2 Install Core Dependencies

TODO

npm install gsap
npm install three
npm install lucide-react

Optional:

npm install react-use

Why each tool is needed

GSAP

Controls:

scroll animations

timeline animations

parallax movement

section reveal

Key plugin:

ScrollTrigger
Three.js

Used only for:

particles

star sparkle

subtle depth glow

ambient effects

DO NOT create heavy 3D scenes.

Lucide Icons

Used for:

music play button

map icon

instagram icon

PHASE 2 — Project Folder Architecture

Create clean structure.

TODO

/public
   /images
      /clouds
      /lanterns
      /palace
      /couple
   /music

/components
   IntroScreen.jsx
   InvitationSection.jsx
   CoupleGallery.jsx
   ContactSection.jsx
   MusicControl.jsx

/animations
   introAnimation.js
   invitationScene.js
   galleryReveal.js
   contactReveal.js
   parallax.js

/styles
   globals.css

/pages
   index.js

/utils
   audioPlayer.js

Purpose

Separating:

UI

animations

assets

This prevents messy code.

PHASE 3 — Global Styling System

Goal: Create royal luxury theme.

3.1 Define Color System

Add to Tailwind config.

Colors:

midnightBlue #0B1A2F
deepMaroon #5B0F1A
antiqueGold #C6A65A
champagneGold #E6D3A3
ivory #F7F3E9
rosePink #E8A0A8

Use cases

Color	Purpose
Midnight blue	background sky
Maroon	section accents
Gold	frames & typography
Ivory	body text
3.2 Typography Setup

Import fonts.

Example

Playfair Display
Libre Baskerville

Usage

Font	Usage
Playfair	titles
Libre Baskerville	text

Style:

gold headings

letter spacing

elegant serif look

PHASE 4 — Intro Screen (Tap to Open)

This is the first user experience moment.

Goal: create emotional anticipation.

4.1 Build Intro UI

Component

components/IntroScreen.jsx

Layout

Center element:

Royal invitation card

Text inside:

Tap to Open Invitation

Background

starry sky

moon

clouds

4.2 Idle Animations

Use GSAP.

Animations

Element	Animation
stars	twinkle
clouds	slow drift
moon	glow pulse

Example

gsap.to(".cloud", {
  x: 50,
  duration: 20,
  repeat: -1,
  yoyo: true
})
4.3 Tap Interaction

When user taps card:

Animation sequence

Card glow

Frame opens

Clouds move apart

Scroll automatically to invitation section

Use GSAP timeline.

Example

const tl = gsap.timeline()

tl.to(".card", {scale:1.1})
tl.to(".clouds", {x:200})
tl.to(window,{scrollTo:"#invitation"})
PHASE 5 — Invitation Scene

This is the main engagement announcement.

5.1 Layout Design

Layer system (critical)

Layer 1

gold frame
text content

Layer 2

flowers
lanterns

Layer 3

clouds

Layer 4

palace silhouette

Layer 5

sky background
stars

This layered structure creates 2.5D depth illusion.

5.2 Add Required Text Content

Must appear EXACTLY as PRD states.

Join us as we celebrate the engagement of Adarsh and Harshita.

Time - 2 PM

Date - 28th March

Venue - JMD resort, Mandav

Note: We request your timely presence to help us begin the celebration together

Regards, Sarita and Dinesh Bapna
5.3 ScrollTrigger Animations

When section enters viewport.

Animations:

Element	Animation
clouds	slide apart
lanterns	float upward
title	fade reveal
ornaments	shimmer

Example

gsap.from(".title", {
 opacity:0,
 y:80,
 scrollTrigger:{
  trigger:".invitation",
  start:"top 80%"
 }
})
PHASE 6 — Couple Story Gallery

Goal: romantic storytelling section.

6.1 Layout

Structure

Title
Short story text
Photo grid

Grid

Mobile:

2 columns

Images

4–5 photos
6.2 Photo Frame Design

Each image should look like:

luxury photo card

gold border

floral corners

Add hover effect (desktop)

transform: scale(1.05)
6.3 Scroll Reveal Animation

Photos appear sequentially.

Example

gsap.from(".photo",{
 opacity:0,
 y:80,
 stagger:0.3,
 scrollTrigger:{
   trigger:".gallery"
 }
})
6.4 Micro Animations

Add:

sparkle particles

subtle frame glow

Three.js can generate sparkle particles.

PHASE 7 — Contact & Location Page

Final section.

7.1 Contact Information

Text (must stay exact)

Please contact us if you need any help - 
+91 93403 01193 
or 
+91 62606 02228

Design:

gold framed card

elegant icons

7.2 Google Maps Embed

Embed

https://maps.app.goo.gl/9tFzULpfX4sHLJsV8

Design

map inside gold card

soft shadow

Animation

fade + scale reveal
7.3 Instagram Button

Button style:

pill shape
gold outline
hover glow

Animation

scale 1.05 on hover
PHASE 8 — Background Music System

Goal: romantic atmosphere.

8.1 Audio Setup

Place file:

/public/music/romantic-instrumental.mp3

Use HTML Audio API.

8.2 Music Control Button

Component

MusicControl.jsx

Features:

play

pause

icon change

Example

const audio = new Audio("/music/song.mp3")
8.3 UX Rules

Music should:

start AFTER invitation opens

be muted initially

user controls playback

PHASE 9 — Performance Optimization

Critical.

Image Rules

Use:

next/image

Limits

Asset	Size
background	< 400kb
photos	< 300kb

Format:

WebP
Animation Rules

Maximum layers

10–12

Avoid

heavy SVG filters

huge PNG

complex 3D models

PHASE 10 — Mobile Optimization

Since mobile is primary device.

Adjust animations

reduce parallax intensity

smaller image sizes

fewer particles

Test on:

375px
768px
1024px
PHASE 11 — Deployment

Deploy on Vercel.

Steps

push code to GitHub
connect repo to Vercel
deploy

Benefits

global CDN

fast loading

free hosting

PHASE 12 — Final Content Updates

Later updates required:

Add:

couple photos

couple story text

instagram link

final music track

Ensure content is easy to replace.

FINAL DEVELOPMENT FLOW

Step-by-step execution order:

1 Project setup
2 Folder structure
3 Global styles
4 Intro screen
5 Invitation scene
6 Gallery section
7 Contact page
8 Music system
9 Animations polish
10 Performance optimization
11 Mobile optimization
12 Deployment
Estimated Development Time
Level	Time
Basic site	6–8 hours
Premium cinematic version	2–3 days