<script lang="ts">
    import {
        Clock,
        Compass,
        Layers,
        Terminal,
        Code,
        Mail,
    } from "lucide-svelte";
    import { profile } from "./data";

    let { currentTime = "--:--:--" } = $props<{ currentTime?: string }>();
</script>

<header
    id="navbar-main"
    class="sticky top-0 z-50 bg-[#1b1c22]/85 backdrop-blur-md border-b border-white/[0.04] transition-all duration-300"
>
    <div
        class="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between gap-4"
    >
        <div id="brand-logo" class="flex items-center gap-3">
            <div
                class="w-9 h-9 rounded-lg bg-[#14233c] border border-sky-500/20 flex items-center justify-center font-mono font-black text-sky-400 text-sm tracking-widest leading-none"
            >
                D
            </div>
            <div class="text-left">
                <div class="flex items-center gap-1.5">
                    <span
                        id="brand-name"
                        class="font-bold text-sm text-slate-100 tracking-tight"
                        >{profile.name}</span
                    >
                    <span
                        class="bg-sky-500/10 text-sky-300 border border-sky-400/15 text-[8px] font-mono px-1.5 py-0.5 rounded font-black tracking-wider uppercase"
                    >
                        SYSTEMS
                    </span>
                </div>
                <span
                    class="text-[10px] text-slate-400 font-mono block leading-none mt-1"
                    >{profile.location}</span
                >
            </div>
        </div>

        <nav
            id="nav-element-list"
            class="hidden md:flex items-center gap-6 text-[11px] font-mono text-slate-400 tracking-wider uppercase font-bold"
        >
            <a
                href="#about-philosophy"
                class="hover:text-sky-400 transition-colors flex items-center gap-1"
            >
                <Compass class="w-3.5 h-3.5 text-sky-500/80" /> About
            </a>
            <a
                href="#projects"
                class="hover:text-sky-400 transition-colors flex items-center gap-1"
            >
                <Layers class="w-3.5 h-3.5 text-sky-500/80" /> Work
            </a>
            <a
                href="#interactive-workbench"
                class="hover:text-sky-400 transition-colors flex items-center gap-1"
            >
                <Terminal class="w-3.5 h-3.5 text-sky-500/80" /> Sandbox
            </a>
            <a
                href="#skills-toolkit"
                class="hover:text-sky-400 transition-colors flex items-center gap-1"
            >
                <Code class="w-3.5 h-3.5 text-sky-500/80" /> Tech Matrix
            </a>
            <a
                href="#contact-gate"
                class="hover:text-sky-400 transition-colors flex items-center gap-1"
            >
                <Mail class="w-3.5 h-3.5 text-sky-500/80" /> Gateway
            </a>
        </nav>

        <div class="flex items-center gap-3 text-[10px] font-mono">
            <div
                class="flex items-center gap-2 text-slate-400 bg-slate-950/70 px-3 py-1.5 rounded-md border border-white/[0.04]"
            >
                <Clock class="w-3.5 h-3.5 text-sky-400" />
                <span
                    class="text-slate-500 uppercase tracking-widest text-[9px]"
                    >Sys_Time:</span
                >
                <span
                    id="nav-pipeline-clock"
                    class="text-sky-400 font-black tracking-wider"
                    >{currentTime || "--:--:--"}</span
                >
            </div>
        </div>
    </div>
</header>
