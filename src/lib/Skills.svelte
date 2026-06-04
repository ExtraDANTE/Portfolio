<script lang="ts">
    import { Cpu, Server, Cloud, Terminal } from "lucide-svelte";
    import { skills } from "./data";
</script>

<section
    id="skills-toolkit"
    class="py-24 max-w-6xl mx-auto px-6 border-b border-white/[0.03]"
>
    <div class="space-y-2 mb-16 text-left">
        <span
            class="text-sky-400 font-bold text-[10px] font-mono uppercase tracking-widest block"
            >Toolchain Matrix</span
        >
        <h2 class="text-2xl sm:text-3.5xl font-black text-white tracking-tight">
            Development Technologies &amp; Capabilities
        </h2>
        <p
            class="text-xs sm:text-sm text-slate-400 max-w-xl font-semibold leading-relaxed"
        >
            A clear breakdown of my core sectors, showcasing exactly what
            technologies I work with and how I apply them to real-world
            applications.
        </p>
    </div>

    <div class="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {#each skills as cat}
            {@const hoverBorder =
                cat.type === "frontend"
                    ? "hover:border-sky-500/25"
                    : cat.type === "backend"
                      ? "hover:border-emerald-500/25"
                      : cat.type === "devops"
                        ? "hover:border-purple-500/25"
                        : "hover:border-amber-500/25"}

            {@const badgeClass =
                cat.type === "frontend"
                    ? "bg-[#14233c]/60 border-sky-500/10 text-sky-300 hover:border-sky-400/35"
                    : cat.type === "backend"
                      ? "bg-[#0e2d20]/60 border-emerald-500/10 text-emerald-300 hover:border-emerald-400/35"
                      : cat.type === "devops"
                        ? "bg-[#24143a]/60 border-purple-500/10 text-purple-300 hover:border-purple-400/35"
                        : "bg-[#2b2114]/60 border-amber-500/10 text-amber-300 hover:border-amber-400/35"}

            <div
                class="bg-slate-900/55 border border-slate-800 rounded-2xl p-6 sm:p-8 space-y-6 transition-all duration-300 hover:bg-slate-850/50 {hoverBorder} text-left flex flex-col justify-between"
            >
                <div class="space-y-4">
                    <div
                        class="flex items-center gap-3.5 border-b border-white/[0.03] pb-4"
                    >
                        <div
                            class="p-2.5 bg-slate-950/50 rounded-xl border border-white/[0.02]"
                        >
                            {#if cat.type === "frontend"}
                                <Cpu class="w-5.5 h-5.5 text-sky-400" />
                            {:else if cat.type === "backend"}
                                <Server class="w-5.5 h-5.5 text-emerald-400" />
                            {:else if cat.type === "devops"}
                                <Cloud class="w-5.5 h-5.5 text-purple-400" />
                            {:else}
                                <Terminal class="w-5.5 h-5.5 text-amber-400" />
                            {/if}
                        </div>
                        <div>
                            <h4
                                class="text-sm font-mono font-black text-slate-100 uppercase tracking-widest leading-none mb-1"
                            >
                                {cat.category}
                            </h4>
                            <span
                                class="text-[9px] font-mono text-slate-500 uppercase font-black"
                            >
                                {cat.type} layer
                            </span>
                        </div>
                    </div>

                    <p
                        class="text-xs sm:text-sm text-slate-350 leading-relaxed font-semibold"
                    >
                        {cat.description}
                    </p>
                </div>

                <div class="pt-4 border-t border-white/[0.02]">
                    <span
                        class="text-[9px] font-mono text-slate-500 uppercase font-black block mb-3"
                        >Core Stack:</span
                    >
                    <div class="flex flex-wrap gap-2">
                        {#each cat.items as item}
                            <span
                                class="text-[10px] font-mono font-bold border px-2.5 py-1.5 rounded-lg transition-colors duration-200 {badgeClass}"
                            >
                                {item}
                            </span>
                        {/each}
                    </div>
                </div>
            </div>
        {/each}
    </div>
</section>
