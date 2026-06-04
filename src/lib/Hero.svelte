<script lang="ts">
    import {
        Sparkles,
        ArrowRight,
        ArrowUpRight,
        Send,
        Cpu,
    } from "lucide-svelte";
    import { profile, openToWork } from "./data";
</script>

<section
    id="about-philosophy"
    class="relative py-24 sm:py-32 border-b border-white/[0.03] overflow-hidden bg-dot"
>
    <div
        class="absolute inset-0 bg-gradient-to-b from-transparent via-[#1b1c22]/40 to-[#1b1c22] pointer-events-none"
    ></div>

    <div
        class="relative max-w-6xl mx-auto px-6 z-10 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center"
    >
        <div class="lg:col-span-12 xl:col-span-8 space-y-6 text-left">
            <div
                class="inline-flex items-center gap-1.5 px-3 py-1 bg-slate-800 border border-sky-500/20 text-sky-400 rounded-md text-[10px] font-bold font-mono uppercase tracking-wider"
            >
                <Sparkles class="w-3.5 h-3.5 text-sky-400" />
                <span>{openToWork}</span>
            </div>

            <h1
                class="text-4xl sm:text-6xl font-black text-white tracking-tight leading-[1.05] max-w-4xl"
            >
                Architecting clean <span
                    class="font-serif italic text-sky-400 font-normal"
                    >Web Architectures</span
                >, custom bots & native mobile systems
            </h1>

            <p
                class="text-slate-300 text-sm sm:text-base leading-relaxed max-w-3xl font-medium"
            >
                {profile.bio} I specialize in shipping visually polished front-ends
                using React, Next.js, and Vue, crafting feature-rich cross-platform
                apps in Flutter, and spinning up highly automated custom servers and
                Telegram bot systems.
            </p>

            <div class="flex flex-wrap gap-4 pt-4">
                <a
                    href="#projects"
                    class="bg-sky-500 text-slate-950 font-bold hover:bg-sky-400 text-xs px-6 py-3 rounded-md transition-all shadow-md shadow-sky-500/10 duration-150 cursor-pointer flex items-center gap-1.5 font-mono uppercase tracking-wider"
                >
                    <span>Explore Workspace</span>
                    <ArrowRight class="w-4 h-4" />
                </a>
                <a
                    href="#contact-gate"
                    class="bg-slate-900 border border-white/10 hover:border-sky-500/40 text-slate-200 font-mono text-xs px-6 py-3 rounded-md transition duration-150 flex items-center gap-1.5 cursor-pointer uppercase tracking-wider font-bold"
                >
                    <span>Transmit Envelope</span>
                    <ArrowUpRight class="w-4 h-4 text-sky-400" />
                </a>
            </div>
        </div>

        <div class="lg:col-span-12 xl:col-span-4 space-y-4">
            <div
                class="bg-slate-900/85 border border-slate-800 rounded-xl p-6 text-left space-y-5 shadow-2xl relative group hover:border-[#17213d] transition-all duration-300"
            >
                <div
                    class="absolute top-0 right-0 w-32 h-32 bg-sky-500/5 blur-2xl rounded-full pointer-events-none"
                ></div>

                <div
                    class="flex justify-between items-center text-[10px] font-mono text-slate-500 border-b border-white/[0.04] pb-2.5"
                >
                    <span
                        class="flex items-center gap-1.5 font-bold tracking-widest uppercase"
                    >
                        <Cpu class="w-3.5 h-3.5 text-sky-500/80" /> Operator Credentials
                    </span>
                    <span
                        class="text-sky-400 font-bold flex items-center gap-1 font-mono"
                    >
                        <span
                            class="w-1.5 h-1.5 rounded-full bg-sky-500 animate-ping"
                        ></span>
                        ACTIVE_NODE
                    </span>
                </div>

                <div class="space-y-3.5 font-mono text-xs">
                    <div class="flex justify-between items-baseline">
                        <span
                            class="text-slate-500 font-bold uppercase text-[10px]"
                            >Developer:</span
                        >
                        <span
                            class="text-slate-200 font-black text-sm tracking-tight"
                            >{profile.name}</span
                        >
                    </div>
                    <div class="flex justify-between items-baseline">
                        <span
                            class="text-slate-500 font-bold uppercase text-[10px]"
                            >Sectors:</span
                        >
                        <span class="text-sky-400 font-black"
                            >{profile.role}</span
                        >
                    </div>
                    <div
                        class="flex justify-between items-center pt-2 border-t border-white/[0.02]"
                    >
                        <span
                            class="text-slate-500 font-bold uppercase text-[10px]"
                            >Source Hub:</span
                        >
                        <a
                            href={profile.github}
                            target="_blank"
                            rel="noopener noreferrer"
                            class="text-slate-200 hover:text-sky-400 font-bold flex items-center gap-1.5 transition-colors"
                        >
                            <svg
                                class="w-4 h-4 text-slate-400"
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
                            <span>@{profile.github.split("/").pop()}</span>
                        </a>
                    </div>
                    <div class="flex justify-between items-center">
                        <span
                            class="text-slate-500 font-bold uppercase text-[10px]"
                            >T-Client:</span
                        >
                        <a
                            href={profile.telegram}
                            target="_blank"
                            rel="noopener noreferrer"
                            class="text-slate-200 hover:text-sky-400 font-bold flex items-center gap-1.5 transition-colors"
                        >
                            <Send class="w-4 h-4 text-slate-400" />
                            <span>@{profile.telegram.split("/").pop()}</span>
                        </a>
                    </div>
                    <div class="flex justify-between items-center">
                        <span
                            class="text-slate-500 font-bold uppercase text-[10px]"
                            >Linkedin:</span
                        >
                        <a
                            href={profile.linkedin}
                            target="_blank"
                            rel="noopener noreferrer"
                            class="text-slate-200 hover:text-sky-400 font-bold flex items-center gap-1.5 transition-colors"
                        >
                            <svg
                                class="w-4 h-4 text-slate-400"
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
                            <span>{profile.name}</span>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    </div>
</section>
