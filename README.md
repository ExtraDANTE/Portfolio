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

### 3. Live Telegram Notification Setup
Integrates direct, client-to-host notification routing:
- **Telegram Visit Notification:** When a user visits the page, a privacy-compliant IP geo-location summary is dispatched as an alert to the host's Telegram Bot.
- **Direct Telegram Inbox:** Captures contact form entries and instantly forwards names, emails, and messages as clean alerts to the host.

---

## Telegram Configuration

To enable direct Telegram notifications on your deployed static build (gh-pages / exitinger.github.io), you need to configure your environment variables:

1. Create a `.env` file in the root of your project.
2. Define the Telegram-specific environment variables for your Svelte/Vite application. The Svelte application reads these variables to send notifications to your chat.
3. Place your Telegram Bot Token and Chat ID inside the `.env` file like this:

ViteTeleGramBotToken=
ViteTelegramChatId=

Since your application builds as a static front-end, Vite compiles these variables into the static production bundle securely during build time.

---

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
