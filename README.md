# Rise at Seven | Pixel-Perfect Agency Clone

[![Vercel Deploy](https://img.shields.io/badge/Vercel-Deployed-black?style=for-the-badge&logo=vercel)](https://rise-at-seven-ivory.vercel.app)
[![Next.js Version](https://img.shields.io/badge/Next.js-15.x-black?style=for-the-badge&logo=next.js)](https://nextjs.org)
[![Tailwind CSS 4](https://img.shields.io/badge/Tailwind_CSS-v4-38B2AC?style=for-the-badge&logo=tailwind-css)](https://tailwindcss.com)
[![GSAP](https://img.shields.io/badge/GSAP-3.15-88CE02?style=for-the-badge&logo=greensock)](https://greensock.com/gsap/)

A high-fidelity, performance-grade reconstruction of the **Rise at Seven** agency homepage. This project serves as a technical showcase of advanced frontend orchestration, utilizing a cutting-edge stack to replicate complex agency-grade UI/UX patterns.

**[Live Demo](https://rise-at-seven-ivory.vercel.app) • [Original Site](https://riseatseven.com)**

---

## ⚡ The Challenge

Rise at Seven is renowned for its "search-first" creative approach and its highly interactive, editorial-style web presence. The goal of this project was to replicate their core homepage experience with pixel-perfect precision, maintaining all fluid animations, scroll-triggered sequences, and interactive states while ensuring a seamless transition to their original internal pages.

---

## 🛠️ Tech Stack

| Category       | Technology                                                                        |
| :------------- | :-------------------------------------------------------------------------------- |
| **Framework**  | [Next.js 15+](https://nextjs.org/) (App Router)                                   |
| **Library**    | [React 19](https://react.dev/)                                                    |
| **Styling**    | [Tailwind CSS 4](https://tailwindcss.com/) (Beta/Alpha)                           |
| **Animation**  | [GSAP](https://greensock.com/gsap/) (ScrollTrigger, MatchMedia, Custom Modifiers) |
| **Slider**     | [Swiper.js](https://swiperjs.com/)                                                |
| **Icons**      | [React Icons](https://react-icons.github.io/react-icons/)                         |
| **Deployment** | [Vercel](https://vercel.com)                                                      |

---

## ✨ Key Features

- **🚀 Cinematic Entry Sequence:** A custom SVG mask-based reveal (`CinematicTransition`) that orchestrates the initial page load with a premium "peeling" effect.
- **💎 Advanced Desktop Mega Menu:**
  - **Layout-Aware Morphing:** Uses GSAP to calculate scale factors (`scaleX`/`scaleY`) between different menu sizes to prevent visual "jumping."
  - **Sliding Pill Navigation:** A context-aware hover background that fluidly follows the cursor across navigation items.
  - **Asset Previews:** Real-time image previews that update on link hover with scale/blur transitions.
- **📜 Scroll-Driven "Peeling" Stack:** The `LegacyAccordion` component features a tactile card stack where cards slide upward and rotate slightly (`-5deg`) as the user scrolls, revealing the content beneath.
- **🎨 Interactive Gallery:** A "sticky-panel" work section where project titles remain fixed on the left while a vertical stack of image cards scrolls on the right, synchronized via `ScrollTrigger`.
- **🌀 Responsive Infinite Marquee:**
  - **Velocity Sensing:** The marquee speed dynamically scales based on the user's scroll speed.
  - **Seamless Loop:** Implemented using GSAP's modulo unitize modifier for zero-jump repetition.
- **🖱️ Magnetic Custom Cursor:** A floating interactive cursor that reacts to specific sections (Gallery, Marquee) to provide contextual feedback.
- **📱 Hybrid Mobile UX:** Graceful degradation of complex desktop animations into touch-optimized Swiper carousels and accordion navigation.

---

## 📂 Project Structure

```text
RiseAtSeven/
├── public/                 # High-performance WebP/SVG assets
│   ├── Header/             # Mega menu preview images
│   ├── InfiniteMarquee/    # Slogan-related visual assets
│   ├── LegacyAccordion/    # Peeling stack thumbnails
│   ├── asset/              # Global brand icons & social proof
│   ├── banner-*.jpg        # Hero background pool (randomized)
│   └── featuredWorks/      # Case study gallery assets
├── src/
│   ├── app/                # Next.js App Router orchestration
│   │   ├── globals.css     # Tailwind v4 CSS-first config & custom blurs
│   │   ├── layout.jsx      # Global architecture & cinematic entry sequence
│   │   └── page.jsx        # Narrative-driven homepage sections
│   └── components/
│       ├── home/           # Homepage feature components
│       │   ├── AboutMission.jsx      # Typography-focused staggered reveal
│       │   ├── ClientLogos.jsx       # Infinite scrolling brand ticker
│       │   ├── FeaturedWork.jsx      # Sticky-panel scroll-driven gallery
│       │   ├── HeroSection.jsx       # Randomized cinematic impact zone
│       │   ├── InfiniteMarquee.jsx   # Velocity-aware slogans with custom cursor
│       │   ├── LegacyAccordion.jsx   # Peeling card stack (Dual-device logic)
│       │   ├── ReadyToRise.jsx       # Conversion-focused bottom anchor
│       │   ├── Service.jsx           # Expertise/Service breakdown cards
│       │   └── WhatsNew.jsx          # Dynamic insights & news layer
│       └── layout/         # Persistent architectural components
│           ├── AnnouncementBar.jsx   # Top-level global ticker
│           ├── CinematicTransition.jsx # Custom SVG mask entry sequence
│           ├── Footer.jsx            # Multi-column brand navigation
│           └── Header.jsx            # The "Engine" (Mega-menu & GSAP morphing)
├── next.config.mjs         # Image optimization & routing config
├── jsconfig.json           # Path aliasing (@/*)
└── package.json            # Cutting-edge stack (React 19, Tailwind v4)
```

---

## ⚙️ Getting Started

### Prerequisites

- Node.js 20.x or later
- npm or pnpm

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/rakibsbase/RiseAtSeven.git
   ```
2. Navigate to the directory:
   ```bash
   cd RiseAtSeven
   ```
3. Install dependencies:
   ```bash
   npm install
   ```

### Development

Run the local dev server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the project.

### Build

Generate a production bundle:

```bash
npm run build
```

---

## 🧠 Architecture & Implementation Notes

### 1. GSAP Layout-Aware Scaling

In `Header.jsx`, the mega menu doesn't just "show" and "hide." It remembers the dimensions of the _previous_ menu. When switching between "Services" (wide) and "Industries" (narrow), GSAP calculates the scale ratio and transforms the panel fluidly, making the change feel organic rather than a simple toggle.

### 2. Scroll Velocity Detection

The `InfiniteMarquee` uses `ScrollTrigger.getVelocity()` to normalize user input. This value is mapped to the `timeScale` of the GSAP tween, allowing the text to "rush" ahead when the user scrolls fast and settle back to its base speed when the scroll stops.

### 3. The "Min-W-0" Flexbox Fix

Throughout the codebase (especially in the Mega Menu and Featured Work), `min-w-0` is used strategically on flex/grid items to allow text truncation (`truncate`) to function correctly within deeply nested animated containers.

### 4. Overflow-Hidden Character Reveal

Typography in `HeroSection` and `AboutMission` utilizes an `overflow-hidden` wrapper on individual words/lines. GSAP then animates these elements from `y: 40` with a slight `rotateX`, creating a "reveal from the floor" effect that is a staple of high-end design.

---

## 📸 Screenshots

|                                Desktop View                                |                                Mobile View                                |
| :------------------------------------------------------------------------: | :-----------------------------------------------------------------------: |
| ![Desktop Screenshot Placeholder](https://i.ibb.co.com/Vcn1hLp7/image.png) | ![Mobile Screenshot Placeholder](https://i.ibb.co.com/F49fNwhC/image.png) |
|                    _High-impact Hero & Sticky Gallery_                     |                   _Touch-optimized Swiper & Accordions_                   |

---

## ⚖️ Disclosure

This is a **Frontend Portfolio Project**.

- **What was cloned:** The entire homepage UI, animation system, and responsive architecture.
- **What links back:** To provide a full-site experience, all internal links (e.g., specific case studies, blog posts, service pages) point directly to the original `riseatseven.com` domain. This ensures visitors can explore the agency's full depth while focusing the project's scope on the technical frontend implementation of the home view.

---

## 🔮 Future Improvements

- [ ] Integration of a headless CMS (Sanity/Contentful) for the `WhatsNew` section.
- [ ] Dark mode toggle (original site is light-mode focused).
- [ ] Further LCP optimizations for the Hero background randomization logic.

---

## 👤 Author

**Rakib**

- GitHub: [@rakibsbase](https://github.com/rakibsbase)
- Portfolio: [rakib.dev](https://rakib-portfolio-beryl.vercel.app)
- LinkedIn: [Connect with me](https://www.linkedin.com/in/rakib-aziz-b33553147)

---

_Built with passion for pixel-perfection._
