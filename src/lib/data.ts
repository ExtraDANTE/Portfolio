export interface Profile {
  name: string;
  role: string;
  location: string;
  bio: string;
  email: string;
  github: string;
  telegram: string;
  linkedin: string;
}

export const profile: Profile = {
  name: "DANTE",
  role: "Full-Stack & Mobile Developer",
  location: "Babil, Hilla, Iraq",
  bio: "Ahmed Ali (DANTE) — A versatile developer focused on modern web applications, native/cross-platform mobile apps, and refined bot automation.",
  email: "ssdcv608@gmail.com",
  github: "https://github.com/ExtraDANTE",
  telegram: "https://t.me/ExtraDANTE",
  linkedin: "https://www.linkedin.com/in/extradante",
};

export const about = `
I'm a versatile developer focused on building high-performance, polished web and mobile solutions.
My capabilities span responsive frontend architectures in React, Next.js, and Vue, feature-rich cross-platform applications in Flutter, and robust server automations.

I prioritize visual feedback, clean component architectures, and shipping apps with smooth native feelings.
`.trim();

export interface SkillCategory {
  category: string;
  description: string;
  items: string[];
  type: "frontend" | "backend" | "devops" | "tools";
}

export const skills: SkillCategory[] = [
  {
    category: "Front-End Developer (UI/UX Clients)",
    description:
      "What is it? The Front-End is the user-facing side of software — everything users see, touch, and interact with in their browser or mobile screen. I specialize in building fully responsive, interactive, and visually polished interfaces. For core JavaScript/TypeScript frameworks, I utilize React, Next.js, Svelte, and Vue.js to construct high-speed web architectures. I also build premium cross-platform and native mobile apps with Flutter (Dart) and native Android (Kotlin, Java).",
    items: [
      "React",
      "Next.js",
      "Svelte",
      "Vue.js",
      "Flutter",
      "TypeScript",
      "JavaScript",
      "Dart",
      "Kotlin",
      "Java",
      "HTML5",
      "CSS3",
      "SASS",
    ],
    type: "frontend",
  },
  {
    category: "Back-End Developer (Core APIs & Automations)",
    description:
      "What is it? The Back-End is the powerhouse and brain operating behind the scenes — it processes application logic, manages user authentication, queries databases, handles structured performance caching, and hosts custom background automations like automated Telegram bots. I design rapid, highly scalable server modules and secure REST/GraphQL API nodes.",
    items: [
      "Node.js",
      "Bun",
      "Python",
      "MySQL",
      "PostgreSQL",
      "MongoDB",
      "SQLite",
      "Redis",
      "Shell",
      "zsh",
    ],
    type: "backend",
  },
  {
    category: "DevOps & Cloud Infrastructure",
    description:
      "What is it? DevOps secures, deploys, and maintains live servers and databases so your apps stay online and run smoothly under load. I provision isolated virtualization processes, manage standard container actions, and coordinate robust web deployments.",
    items: ["Docker", "Kubernetes", "Firebase", "Heroku", "Linux"],
    type: "devops",
  },
  {
    category: "Developer Toolkits",
    description:
      "What is it? Tools and environments that optimize developer velocity and enable transparent code tracking. I coordinate source code version controls, test integration payloads, and maintain polished development systems.",
    items: [
      "Git",
      "GitHub",
      "GitLab",
      "Bitbucket",
      "VSCode",
      "Android Studio",
      "Postman",
    ],
    type: "tools",
  },
];

export interface Experience {
  role: string;
  company: string;
  period: string;
  description: string;
}

export const experience: Experience[] = [
  {
    role: "Full-Stack & App Developer",
    company: "Independent",
    period: "2023 - Present",
    description:
      "Developing modern web applications, custom automated bot systems, cross-platform Android & iOS apps (Flutter), and clean developer utilities.",
  },
];

export interface Project {
  title: string;
  description: string;
  link: string;
  tags?: string[];
  featured?: boolean;
}

export const projects: Project[] = [
  {
    title: "Portfolio",
    description:
      "A highly interactive, beautiful personal developer portfolio website showcasing responsive layouts, terminal-like sandboxes, and modern frontend designs.",
    link: "https://github.com/ExtraDANTE/Portfolio/",
    tags: ["Svelte", "Vite", "Tailwind CSS", "TypeScript"],
    featured: true,
  },
];

export const openToWork =
  "Available for remote full-stack web, mobile app development (Flutter/Native), and automation solutions.";

export interface RepoFile {
  name: string;
  path: string;
  type: "file" | "folder";
  size?: string;
  lastCommitMessage: string;
  lastCommitDate: string;
  content?: string;
  language?: string;
}

export const repoFiles: RepoFile[] = [
  {
    name: "package.json",
    path: "package.json",
    type: "file",
    size: "1.4 KB",
    language: "json",
    lastCommitMessage:
      "chore: update dependencies for React, Next.js, and Vue frameworks",
    lastCommitDate: "5 mins ago",
    content: `{
  "name": "dante-workspace",
  "version": "1.0.0",
  "private": true,
  "scripts": {
    "dev:next": "next dev",
    "dev:vue": "vite",
    "build": "next build"
  },
  "dependencies": {
    "react": "^18.3.1",
    "next": "^14.2.4",
    "vue": "^3.4.29"
  }
}`,
  },

  {
    name: "App.vue",
    path: "App.vue",
    type: "file",
    size: "1.2 KB",
    language: "html",
    lastCommitMessage:
      "feat: design highly reactive front-end dashboard core viewport",
    lastCommitDate: "Yesterday",
    content: `<script setup lang="ts">
import { ref } from 'vue';

const activeTab = ref('dashboard');
const message = ref('DANTE Web Workspace');
</script>

<template>
  <main class="min-h-screen bg-slate-950 text-white flex flex-col items-center justify-center p-6">
    <div class="space-y-4 max-w-md text-center">
      <h1 class="text-3xl font-black tracking-tight text-sky-400">{{ message }}</h1>
      <p class="text-xs text-slate-400 font-semibold leading-relaxed">
        Engineered cleanly under refined client layouts. Highly optimized.
      </p>
    </div>
  </main>
</template>`,
  },
  {
    name: "about_me.md",
    path: "about_me.md",
    type: "file",
    size: "1.9 KB",
    language: "markdown",
    lastCommitMessage: "docs: refine infrastructure development bio",
    lastCommitDate: "Just now",
    content: `# Hello! I'm DANTE

A Software Developer based in Hillah, Babil, Iraq. I specialize in building robust full-stack web applications, custom automated bot architectures, cross-platform Android & iOS apps (Flutter), and clean development utilities.

## Core Philosophy
I focus on user interfaces, developer ergonomics, and clean modular solutions that scale elegantly.

## Developer Toolkit
- **Frontend & App Engineering (React/Vue/Flutter)**
- **Backend Rest Core APIs (Node.js/Express/Next.js)**
- **Database Engineering & Caching (Postgres/MySQL/Redis)**
- **DevOps & Automations (Docker/Linux/zsh)**`,
  },
];
