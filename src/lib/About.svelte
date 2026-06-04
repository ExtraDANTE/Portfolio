<script lang="ts">
    import { Terminal, Cpu, Shield, Zap } from "lucide-svelte";
    import { about } from "./data";

    const paragraphs = about.split("\n\n");
</script>

<section
    id="about-creed"
    class="py-24 max-w-6xl mx-auto px-6 border-b border-white/[0.03] text-left relative"
>
    <div
        class="absolute top-1/2 left-1/2 w-[300px] h-[300px] bg-sky-500/5 blur-3xl rounded-full pointer-events-none -translate-x-1/2 -translate-y-1/2"
    ></div>

    <div class="flex items-center gap-4 mb-16">
        <span
            class="text-xs font-mono font-bold tracking-widest text-sky-400 uppercase"
            >Development Creed // Core Philosophy</span
        >
        <div class="flex-1 h-[1px] bg-white/[0.05]"></div>
    </div>

    <div
        class="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start relative z-10"
    >
        <div class="lg:col-span-6 space-y-6">
            <h2
                class="text-2xl sm:text-3.5xl font-extrabold text-white tracking-tight leading-tight"
            >
                How I architect <span
                    class="font-serif italic text-sky-400 font-normal"
                    >resilient applications</span
                >
            </h2>
            <div
                class="text-slate-300 text-sm sm:text-base leading-relaxed space-y-4"
            >
                {#each paragraphs as para}
                    <p class="font-semibold">{para}</p>
                {/each}
            </div>
            <p
                class="text-slate-400 text-xs sm:text-sm leading-relaxed font-semibold"
            >
                By opting for optimized code, clean state stores, and
                lightweight bundle architectures, my web systems, bot engines,
                and native mobile layouts boot instantaneously and operate
                seamlessly.
            </p>
        </div>

        <div class="lg:col-span-6 grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div
                class="p-6 border border-[#111626] rounded-xl bg-slate-900/50 space-y-3 hover:border-sky-500/20 transition-all duration-300"
            >
                <div
                    class="w-10 h-10 rounded-lg bg-sky-950/40 border border-sky-500/10 flex items-center justify-center"
                >
                    <Cpu class="w-5 h-5 text-sky-400" />
                </div>
                <h4
                    class="text-xs font-mono font-bold text-slate-200 uppercase tracking-widest"
                >
                    Optimized Code
                </h4>
                <p class="text-[11px] text-slate-400 leading-relaxed font-bold">
                    Strict control over component re-renders. Clean React/Vue
                    tree hierarchies and modular Flutter styles.
                </p>
            </div>

            <div
                class="p-6 border border-[#111626] rounded-xl bg-slate-900/50 space-y-3 hover:border-sky-500/20 transition-all duration-300"
            >
                <div
                    class="w-10 h-10 rounded-lg bg-sky-950/40 border border-sky-500/10 flex items-center justify-center"
                >
                    <Shield class="w-5 h-5 text-sky-400" />
                </div>
                <h4
                    class="text-xs font-mono font-bold text-slate-200 uppercase tracking-widest"
                >
                    Stable Automation
                </h4>
                <p class="text-[11px] text-slate-400 leading-relaxed font-bold">
                    Resilient custom servers, automated process tasks, and
                    reliable, secure runtime configurations.
                </p>
            </div>

            <div
                class="p-6 border border-[#111626] rounded-xl bg-slate-900/50 space-y-3 hover:border-sky-500/20 transition-all duration-300"
            >
                <div
                    class="w-10 h-10 rounded-lg bg-amber-950/40 border border-amber-500/10 flex items-center justify-center"
                >
                    <Zap class="w-5 h-5 text-amber-400" />
                </div>
                <h4
                    class="text-xs font-mono font-bold text-slate-200 uppercase tracking-widest"
                >
                    Responsive UX
                </h4>
                <p class="text-[11px] text-slate-400 leading-relaxed font-bold">
                    Sleek transitions, reactive client models, and
                    high-performance server integrations.
                </p>
            </div>

            <div
                class="p-6 border border-[#111626] rounded-xl bg-slate-900/50 space-y-3 hover:border-sky-500/20 transition-all duration-300"
            >
                <div
                    class="w-10 h-10 rounded-lg bg-indigo-950/40 border border-indigo-500/10 flex items-center justify-center"
                >
                    <Terminal class="w-5 h-5 text-indigo-400" />
                </div>
                <h4
                    class="text-xs font-mono font-bold text-slate-200 uppercase tracking-widest"
                >
                    Keyboard-Driven Tooling
                </h4>
                <p class="text-[11px] text-slate-400 leading-relaxed font-bold">
                    Custom terminal simulators and zsh integrations built to
                    streamline modern development workflows.
                </p>
            </div>
        </div>
    </div>
</section>
