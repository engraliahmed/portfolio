# ⚡️ High-Performance Portfolio Engine v2.0

A next-generation, server-rendered portfolio system engineered with **Next.js 16** and **Tailwind CSS**. Built for sub-second LCP (Largest Contentful Paint) and high-fidelity technical storytelling.

![Next.js](https://img.shields.io/badge/Next.js-000000?style=for-the-badge&logo=nextdotjs&logoColor=white)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)
![Vercel](https://img.shields.io/badge/Vercel-000000?style=for-the-badge&logo=vercel&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)

---

## 🏗 System Architecture & Design Patterns

The system is built on a **Modular Server-Side Component (SSC)** architecture, ensuring that heavy logic stays on the server while the client receives minimal, interactive bundles.

### 🛠 Core Stack & Technologies

1. **Presentation Layer**: Built with **Tailwind CSS** using a custom design system for consistent spacing and hardware-accelerated animations.
2. **Logic Layer**: Custom hooks and utility functions for clipboard management and RAG simulations.
3. **Data Bridge**: A headless integration with **resend API**, allowing smooth contact servcice.

* **Framework**: Next.js 16 (Turbopack).
* **Syntax Highlighting**: Custom implementation using **Sugar-High** (1KB footprint).
* **Styling Engine**: Utility-first CSS via **Tailwind CSS** with a custom color tokens system.
* **State Management**: React Hooks (useMemo, useCallback) for GPU-accelerated UI updates.
* **API Integration**: resend API for smooth contact


---

## 🚀 Engineering Highlights & Implementations

### 1. Nano-Speed Syntax Highlighting
Instead of using traditional heavy highlighters (like Shiki or Prism) that bloat the JS bundle by 200KB+, this project uses a custom **Sugar-High** integration. 
* **Optimization**: Highlights code blocks during build time/server-side.
* **Performance**: Near-zero impact on Cumulative Layout Shift (CLS).

### 2. High-Fidelity Code Window
A custom-engineered UI component designed for developer experience.
* **Copy-to-Clipboard API**: Implements a fail-safe mechanism with a hidden `textarea` fallback for 100% reliability on mobile browsers (Safari/Chrome iOS).
* **Hardware Acceleration**: Uses `will-change-transform` for smooth animations in the bento grid.

### 4. Semantic SEO & PWA Support
* **SEO**: Structured with HTML5 semantic tags (`article`, `section`) and dynamic metadata generation for social crawlers.
* [cite_start]**Asset Management**: Implements a `site.webmanifest` for PWA capabilities and multi-device icon support (16x16 up to 512x512)[cite: 1, 10].

---
