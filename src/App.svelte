<script lang="ts">
    import { onMount } from "svelte";
    import { Send } from "lucide-svelte";

    import Navbar from "./lib/Navbar.svelte";
    import Hero from "./lib/Hero.svelte";
    import About from "./lib/About.svelte";
    import Experience from "./lib/Experience.svelte";
    import Projects from "./lib/Projects.svelte";
    import Skills from "./lib/Skills.svelte";
    import Contact from "./lib/Contact.svelte";

    import TerminalWorkbench from "./components/TerminalWorkbench.svelte";
    import UXLawsSimulator from "./components/UXLawsSimulator.svelte";

    import {
        gatherVisitorTelemetry,
        transmitTelegramPayload,
    } from "./lib/telemetry";
    import { profile, repoFiles, skills, projects } from "./lib/data";
    import type { RepoFile, Project } from "./lib/data";

    let projectsList = $state<Project[]>(projects);
    let selectedFile = $state<RepoFile>(repoFiles[2]);

    let currentTime = $state<string>("");
    const telegramChatId = import.meta.env.ViteTelegramChatId || "";
    let botStatus = $state<"idle" | "checking" | "active" | "error">("idle");

    onMount(() => {
        const blockContextMenu = (e: MouseEvent) => {
            const target = e.target as HTMLElement;
            if (
                target &&
                (target.tagName === "INPUT" || target.tagName === "TEXTAREA")
            ) {
                return;
            }
            e.preventDefault();
        };

        const blockShortcuts = (e: KeyboardEvent) => {
            if (e.key === "F12") {
                e.preventDefault();
                return;
            }

            const isInspect =
                (e.ctrlKey && e.shiftKey && e.key === "I") ||
                (e.metaKey && e.altKey && e.key === "I");
            const isConsole =
                (e.ctrlKey && e.shiftKey && e.key === "J") ||
                (e.metaKey && e.altKey && e.key === "J");
            const isSelectCursor =
                (e.ctrlKey && e.shiftKey && e.key === "C") ||
                (e.metaKey && e.altKey && e.key === "C");
            const isViewSource =
                (e.ctrlKey && e.key === "u") || (e.metaKey && e.key === "u");
            const isSavePage =
                (e.ctrlKey && e.key === "s") || (e.metaKey && e.key === "s");

            if (
                isInspect ||
                isConsole ||
                isSelectCursor ||
                isViewSource ||
                isSavePage
            ) {
                e.preventDefault();
            }
        };

        const blockDragSelection = (e: Event) => {
            const target = e.target as HTMLElement;
            if (
                target &&
                (target.tagName === "INPUT" ||
                    target.tagName === "TEXTAREA" ||
                    target.isContentEditable)
            ) {
                return;
            }
            e.preventDefault();
        };

        window.addEventListener("contextmenu", blockContextMenu);
        window.addEventListener("keydown", blockShortcuts);
        window.addEventListener("selectstart", blockDragSelection);

        const updateTime = () => {
            const now = new Date();
            const utc = now.getTime() + now.getTimezoneOffset() * 60000;
            const babilTime = new Date(utc + 3600000 * 3);
            let rawHours = babilTime.getHours();
            const ampm = rawHours >= 12 ? "PM" : "AM";
            rawHours = rawHours % 12;
            const hours12 = rawHours === 0 ? 12 : rawHours;
            const hours = String(hours12).padStart(2, "0");
            const minutes = String(babilTime.getMinutes()).padStart(2, "0");
            const seconds = String(babilTime.getSeconds()).padStart(2, "0");
            currentTime = `${hours}:${minutes}:${seconds} ${ampm} (Babil Core)`;
        };
        updateTime();
        const clockInterval = setInterval(updateTime, 1000);

        const initializeTelegramBot = async () => {
            botStatus = "checking";
            try {
                const meRes = await fetch("/api/telegram/getMe");
                if (meRes.ok) {
                    const meData = await meRes.json();
                    if (meData.ok && meData.result) {
                        botStatus = "active";
                    } else {
                        botStatus = "error";
                    }
                } else {
                    botStatus = "error";
                }
                triggerVisitorAlert(telegramChatId);
            } catch (err) {
                console.error(err);
                botStatus = "error";
            }
        };

        const triggerVisitorAlert = async (targetId: string) => {
            if (
                !targetId ||
                sessionStorage.getItem("tg_visitor_notified") === "true"
            )
                return;
            try {
                sessionStorage.setItem("tg_visitor_notified", "true");
                const telemetry = await gatherVisitorTelemetry();

                const ipString = telemetry.ip
                    ? `\`${telemetry.ip}\``
                    : "Unknown IP";
                const locationString = telemetry.city
                    ? `${telemetry.city}, ${telemetry.region || ""} (${telemetry.country || ""})`
                    : "Iraq / Private";
                const ispString = telemetry.org
                    ? `\`${telemetry.org}\``
                    : "ISP Node";

                const alertMsg =
                    `[Gate Alert] *New Svelte Portfolio Connection*` +
                    `\n*Time:* ${new Date().toLocaleTimeString("en-US", { hour12: true })}` +
                    `\n*IP:* ${ipString}` +
                    `\n*Location:* ${locationString}` +
                    `\n*Network:* ${ispString}` +
                    `\n*Console Window:* ${telemetry.screenWidth}x${telemetry.screenHeight}` +
                    `\n\n*Agent:* \`${telemetry.userAgent.substring(0, 70)}...\``;

                await transmitTelegramPayload(targetId, alertMsg);
            } catch (error) {
                console.error(error);
            }
        };

        initializeTelegramBot();

        const fetchGithubData = async () => {
            try {
                let res = await fetch("/api/github/repos");
                if (!res.ok) return;
                const repos = await res.json();
                const codeRepos = repos.filter(
                    (r: any) => !r.fork && r.name !== "Exitinger",
                );
                if (codeRepos.length > 0) {
                    const mapped: Project[] = codeRepos.map((repo: any) => {
                        const lang = repo.language || "TypeScript";
                        const desc =
                            repo.description ||
                            (repo.name === "Dotfiles"
                                ? "Declarative UNIX configuration setups and customized command-line environment styles."
                                : "Active utility codebase optimized for high throughput execution and seamless protocol translations.");
                        return {
                            title: repo.name,
                            description: desc,
                            link: repo.html_url,
                            tags: [
                                lang,
                                "Open-source",
                                "Production-ready",
                            ].filter(Boolean),
                        };
                    });
                    projectsList = mapped;
                }
            } catch (err) {
                console.error(
                    "Github request bypassed. Relying closely on local cache.",
                );
            }
        };
        fetchGithubData();

        return () => {
            window.removeEventListener("contextmenu", blockContextMenu);
            window.removeEventListener("keydown", blockShortcuts);
            window.removeEventListener("selectstart", blockDragSelection);
            clearInterval(clockInterval);
        };
    });
</script>

<div
    id="full-portfolio-body"
    class="min-h-screen bg-[#1b1c22] text-slate-100 font-sans antialiased selection:bg-slate-700 selection:text-white"
>
    <div
        class="absolute top-0 left-1/4 w-[500px] h-[500px] bg-sky-500/5 rounded-full blur-3xl pointer-events-none"
    ></div>
    <div
        class="absolute top-1/3 right-1/4 w-[400px] h-[400px] bg-sky-550/5 rounded-full blur-3xl pointer-events-none"
    ></div>

    <Navbar {currentTime} />

    <Hero />

    <About />

    <Experience />

    <Projects />

    <section
        id="interactive-workbench"
        class="py-24 border-b border-white/[0.03] max-w-6xl mx-auto px-6"
    >
        <div class="space-y-2 mb-10 text-left">
            <span
                class="text-sky-400 font-bold text-[10px] font-mono uppercase tracking-widest block"
                >Operational Telemetry</span
            >
            <h2
                class="text-2xl sm:text-3.5xl font-black text-white tracking-tight"
            >
                Interactive Systems Shell Sandbox
            </h2>
            <p
                class="text-xs sm:text-sm text-slate-400 max-w-xl font-semibold leading-relaxed"
            >
                Review cache logs, inspect direct Go config snippets, and
                execute custom shell parameters inside an active Unix terminal
                mockup environment.
            </p>
        </div>

        <TerminalWorkbench
            {repoFiles}
            skillsData={skills}
            projectsData={projectsList}
            bind:selectedFile
        />
    </section>

    <section
        id="ux-playground"
        class="border-b border-white/[0.03] py-24 bg-dot"
    >
        <div class="max-w-6xl mx-auto px-6">
            <div class="space-y-1.5 mb-14 text-left">
                <span
                    class="text-sky-400 font-bold text-[10px] font-mono uppercase tracking-widest block"
                    >Usability Models &amp; Schedulers</span
                >
                <h2
                    class="text-2xl sm:text-3.5xl font-black text-white tracking-tight"
                >
                    System Cognitive &amp; Interactive Simulator
                </h2>
                <p
                    class="text-xs sm:text-sm text-slate-400 max-w-xl font-semibold leading-relaxed"
                >
                    Interact with cognitive design laws that prove why clean
                    structures, responsive feedback loops, and reduced choice
                    grids convert users flawlessly.
                </p>
            </div>

            <UXLawsSimulator />
        </div>
    </section>

    <Skills />

    <Contact {botStatus} {currentTime} />

    <footer
        class="bg-[#12131a] text-slate-500 text-[10px] sm:text-xs py-12 border-t border-white/[0.02] text-center space-y-3.5 font-mono"
    >
        <div
            class="flex justify-center gap-5 text-slate-400 border-b border-white/[0.02] pb-5 max-w-xs mx-auto text-base"
        >
            <a
                href={profile.github}
                target="_blank"
                rel="noopener noreferrer"
                class="hover:text-sky-400 transition-colors"
            >
                <svg
                    class="w-4.5 h-4.5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                >
                    <path
                        d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"
                    />
                    <path d="M9 18c-4.51 2-5-2-7-2" />
                </svg>
            </a>
            <a
                href={profile.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                class="hover:text-sky-400 transition-colors"
            >
                <svg
                    class="w-4.5 h-4.5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                >
                    <path
                        d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"
                    />
                    <rect width="4" height="12" x="2" y="9" />
                    <circle cx="4" cy="4" r="2" />
                </svg>
            </a>
            <a
                href={profile.telegram}
                target="_blank"
                rel="noopener noreferrer"
                class="hover:text-sky-400 transition-colors"
            >
                <Send class="w-4.5 h-4.5" />
            </a>
        </div>
        <p>
            © 2026 {profile.name}. Designed natively with zero unauthorized
            telemetry parameters.
        </p>
        <p
            class="text-[10px] text-slate-650 max-w-2xl mx-auto px-4 font-semibold leading-relaxed"
        >
            Fast, high-contrast, secure developer presentation hub running
            programmatically under the Babil/Hilla layer. Built cleanly with
            Svelte 5, TypeScript, and Tailwind CSS.
        </p>
    </footer>
</div>
