Product Design Document (PDD)
Project

Premium Animated Engagement Invitation Website

Couple: Adarsh & Harshita
Event: Engagement Ceremony
Primary Device: Mobile First

1. Design Vision

The website should feel like a royal Indian invitation card coming to life.

The visual concept is a Luxury Indian Storybook / Paper-Theatre aesthetic inspired by:

Mughal miniature art

handcrafted layered paper illustrations

cinematic parallax storytelling

luxury Indian wedding invitations

Instead of a static page, the website behaves like a scrollable animated stage, where decorative elements move at different depths to create a 3D diorama illusion.

The experience should feel like opening a magical engagement invitation under a starry sky.

2. Experience Flow

User journey:

Intro Screen

Invitation Scene

Couple Story Gallery

Contact + Location Scene

Navigation style:

Scroll-based storytelling

Each section animates into view as the user scrolls.

3. Intro Screen (Tap to Open)
Purpose

Create emotional impact before the invitation appears.

Layout

Center element:

Decorative royal invitation card frame

Inside text:

“Tap to Open Invitation”

Background:

deep midnight sky

floating stars

decorative clouds

Animations

Idle animations:

stars twinkling

clouds slowly drifting

moon glowing softly

Interaction:

When user taps:

card glows

frame opens like a storybook page

clouds move aside

scroll begins automatically to Page 1

4. Page 1 — Engagement Invitation Scene
Content (exact wording)

“Join us as we celebrate the engagement of Adarsh and Harshita.”

“Time - 2 PM”

“Date - 28th March”

“Venue - JMD resort, Mandav”

“Note: We request your timely presence to help us begin the celebration together”

“Regards, Sarita and Dinesh Bapna”

Scene Design

Foreground:

ornamental invitation frame

golden floral decorations

Midground:

palace / mandap silhouette

Background:

starry midnight sky

moon

floating lanterns

Layer structure:

Layer 1 (front)

ornamental gold frame
text content

Layer 2

decorative flowers
lanterns

Layer 3

clouds

Layer 4

palace silhouette

Layer 5

sky + stars

Animations

When section enters viewport:

clouds slide apart

lanterns float upward slowly

title fades in

gold ornaments shimmer briefly

Continuous animation:

stars twinkle

lanterns drift upward

clouds move slowly

5. Page 2 — Couple Story
Title

“The stars of the celebration - Adarsh and Harshita”

Layout

Mobile first layout:

Vertical gallery.

Structure:

Title
Short couple story (later)
Photo grid

Grid style:

2 columns

Images:

4–5 photos

Photo Frame Style

Each photo should look like:

luxury photo card

gold border

floral corners

Hover (desktop):

slight zoom

soft glow frame

Tap (mobile):

open full screen view

Animations

Photos reveal sequentially:

scroll → photo fade up → next photo → next photo

Micro animations:

sparkle particles

gentle frame glow

6. Page 3 — Contact & Location
Content

“Please contact us if you need any help - +91 93403 01193 or +91 62606 02228”

Google map:

https://maps.app.goo.gl/9tFzULpfX4sHLJsV8

Instagram link (to be added later)

Layout

Sections stacked vertically:

Contact info
Map card
Instagram button

Map Design

Google map embedded inside:

gold framed card

Animation:

map fades upward into view

Buttons

Style:

pill shape
gold outline
soft shadow

Hover effect:

gold glow

Examples:

View Location
Instagram Page

7. Background Music

Music should begin after invitation opens.

Type:

soft romantic instrumental
traditional Indian instrumental

Controls:

Top right floating button.

Icons:

play icon
pause icon

Animation:

button rotates slightly on hover.

8. Typography System
Heading Font

Playfair Display / Canela style

Properties:

large size
gold color
wide letter spacing

Example:

Engagement title.

Body Text

Font:

Libre Baskerville / Lora

Properties:

high readability
invitation card style

9. Color System

Primary colors:

Midnight Blue
Deep Maroon
Antique Gold
Ivory

Example palette:

Background
#0B132B

Gold text
#D4AF37

Accent glow
#F6E27F

10. Button Design

Shape:

pill shaped

Style:

gold outline
soft shadow
subtle emboss

States:

Normal
Hover → glow
Active → pressed shadow

11. Animation System

Framework recommendation:

GSAP ScrollTrigger

Animation types used:

Parallax scroll
Floating motion
Reveal animations
Glow effects
Particle sparkle

Frame rate target:

60fps smooth motion.

12. Mobile Optimization

Mobile is primary device.

Rules:

large touch buttons

readable text size

reduced heavy animations

compressed images

13. Performance Targets

Load time:

under 3 seconds.

Image compression:

WebP format.

Lazy loading:

photo gallery.

14. Technical Stack

Recommended stack:

Frontend

HTML
CSS
Tailwind

Animation

GSAP
ScrollTrigger

Optional

Three.js (if deeper 3D effect needed)

15. Content That Will Be Added Later

Pending items:

couple story text

couple photos

Instagram page link

background music file

16. Restrictions

Do NOT include:

RSVP

wedding ceremony

gift registry

countdown timer

The website must clearly represent an engagement celebration only.