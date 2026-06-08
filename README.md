# DANTE - Full Stack Web Developer

A high-performance, responsive full-stack developer portfolio focused on clean UX design patterns, refined dark aesthetics, and reliable code.

This portfolio showcases web development applications, a lightweight interactive Unix-style terminal, and integrated real-time contact notifications.

---

## Core Philosophy & Design

Every millisecond of delay and unnecessary screen clutter adds cognitive friction for users. This site aims to show how a straightforward layout with strong typography makes a web application easy to navigate.

- **Clean Dark Aesthetic:** Built on a deep charcoal and slate canvas with high-contrast text, borders, and subtle glowing details that remain highly legible.
- **Pure Code:** Handcrafted codebases with modular, reusable components and no bloated libraries or useless tracking.
- **Iraq Time Anchor:** Integrated real-time Baghdad, Iraq clock (UTC+3) tracking operations locally.

---

## Features & Interactive Elements

### 1. Interactive UX Laws Simulator
A live playground illustrating three foundational guidelines of human-computer interaction (HCI):
- **Fitts's Law Target Arena:** Compares target acquisition speeds for small, hard-to-click controls versus comfortable, thumb-friendly touch targets.
- **Hick's Choice Complexity Grid:** Examines the decision-making speed difference between unstructured menus and focused, categorized layouts.
- **Zeigarnik Milestone Completion Wizard:** Encourages higher completion rates using friendly progress indicators rather than monolithic, overwhelming input forms.

### 2. High-Fidelity Terminal Simulator (Unix Shell Workbench)
An embedded, fully functional terminal and file tree simulator.
- Guests can run commands like whoami, skills, projects, sysinfo, git log, and clear or print cached project writeups using cat directly in the viewport.

## Developed Tech Stack

- **Core Library:** Svelte 5 (Runes state orchestration)
- **Styling Utility:** Tailwind CSS v4.0
- **Module Bundler:** Vite 6 + ESBuild
- **Vector Assets:** Lucide Icons
- **Motion Animation:** Custom fluid transit states

---

Development

    Install dependencies:

    bun install

    Start the development server:

    bun dev

    The site will be available at http://localhost:3000.

Production Build

    Build the project:

    bun run build

    Preview the build:

    bun run preview

Project Structure

    src/main.ts: Entry point.
    src/App.svelte: Main application layout.
    src/lib/: Svelte components and data.
        data.ts: Centralized content and type definitions.
        Hero.svelte,
        About.svelte,
        Contact.svelte,
        Experience.svelte,
        Skills.svelte,
        Projects.svelte,
        telemetry.ts

---

Built by [DANTE](https://github.com/ExtraDANTE).
