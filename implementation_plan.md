# JDMZN Blog Implementation Plan

## Goal Description & Conceptual Niche
Based on the provided examples and the Telegram channel "جُودُ المُزن" (Joud Al-Muzn), the conceptual niche for this blog is a **Narrative-Heavy Literary & Contemplative Journal**. 

**The Core Vibe:**
The design direction is **moody, introspective, elegant, and grounded in nature**. It should feel like a quiet, premium reading room. The aesthetics will lean away from loud, standard tech blogs and instead focus on deep earthy tones, soft micro-animations, and exquisite Arabic typography to honor the poetic and reflective nature of the content.

## UI/UX Design System & Color Mapping

Drawing from the attached color palettes (specifically blending the earthy greens, deep browns, and soft parchment/rosy tones from palettes like Casa Chromatica and the Lotus-themed palette), here is the mapped UI Design System:

*   **Background / Canvas (`#F7F4D5` / Beige or `#F1E4E4` / Peony):** A warm, soft off-white or parchment color to reduce eye strain and give a classic "book-like" feel.
*   **Primary Text (`#105666` / Midnight Green or `#2A2E30` / Midnight):** A very dark, rich green or charcoal instead of pure black for softer contrast and premium readability.
*   **Muted Text / Meta Info (`#878679` / Mountain Road or `#7D5E3C` / Berkeley Hills):** For dates, tags, and secondary information.
*   **Accent / Links (`#D3968C` / Rosy Brown or `#9E5D58` / Terracotta):** A subtle, warm floral accent for hover states, buttons, and important links.
*   **Card Backgrounds / Elevated Surfaces (`#EFEBE0` or slightly lighter than Canvas):** Subtle distinction for post cards, utilizing soft shadows.
*   **Dark Mode (Optional but recommended for the "moody" vibe):** 
    *   Canvas: `#244341` (Dark Slate Green) or `#402615` (Coffee Grounds)
    *   Primary Text: `#D6C8B1` (Almond Wisp)

**Typography:**
*   **Headings:** `Amiri` or `Aref Ruqaa` (Google Fonts) for an elegant, literary, and traditional Arabic feel.
*   **Body Text:** `Tajawal` or `Alexandria` (Google Fonts) for clean, modern, and highly legible reading.

## Tech Stack Architecture

To make this completely free to host and extremely user-friendly for a non-tech-savvy editor, I propose the following stack:

1.  **Framework:** **Astro**. It ships zero JavaScript by default, making the blog blazingly fast. It has superb support for Markdown/MDX, which is perfect for blogs.
2.  **CMS:** **Keystatic**. It's a highly intuitive, lightweight, and user-friendly CMS that integrates directly with GitHub. When the user writes a post in the Keystatic UI, it automatically commits a Markdown file to the GitHub repository. It requires no database.
3.  **Hosting:** **GitHub Pages** (via GitHub Actions). Whenever a new post is saved in the CMS (or code is pushed), an action will build the Astro site and deploy it instantly for free.
4.  **Styling:** **Vanilla CSS**. We will set up a robust CSS variable system (`index.css`) for our themes, ensuring we can easily tweak the aesthetic without heavy frameworks.

> [!TIP]
> **Why Keystatic?** Unlike older systems like WordPress, Keystatic feels modern and fast. The editor will go to `yourdomain.com/keystatic`, log in, write their post in a beautiful Notion-like editor, and hit save. Everything else is automated.

## User Review Required

> [!IMPORTANT]
> Please review the chosen tech stack (Astro + Keystatic + GitHub Pages). If you are comfortable with this, we will initialize the project.
> 
> Also, please confirm if you want a **Light theme by default** (parchment/beige background) or a **Dark theme by default** (deep slate green/brown background) to best match the channel's vibe.

## Open Questions

1.  Do you have a specific domain name in mind, or will we stick to `[username].github.io` for now?
2.  Would you like me to generate a placeholder hero image/logo using the `generate_image` tool to visualize the design?

## Proposed Changes

### Initial Setup
#### [NEW] `package.json`
#### [NEW] `astro.config.mjs`
#### [NEW] `keystatic.config.ts`

### Architecture & Design Tokens
#### [NEW] `src/styles/global.css` (CSS Variables and core typography)
#### [NEW] `src/layouts/Layout.astro` (Base HTML shell, fonts, SEO tags)

### Components
#### [NEW] `src/components/Header.astro`
#### [NEW] `src/components/PostCard.astro`
#### [NEW] `src/components/Footer.astro`

### Pages
#### [NEW] `src/pages/index.astro` (Blog homepage with post grid)
#### [NEW] `src/pages/blog/[slug].astro` (Dynamic routing for blog posts)
#### [NEW] `src/pages/keystatic/[...params].astro` (Admin UI dashboard)

## Verification Plan

### Automated Checks
- Run `npm run build` to ensure Astro generates static HTML successfully.
- Verify that Keystatic config parses correctly without type errors.

### Manual Verification
- Start `npm run dev` and check the local server.
- Navigate to `/keystatic` to ensure the CMS loads and is usable.
- Create a test post in the CMS and verify it appears on the homepage with the correct styling and premium Arabic typography.
