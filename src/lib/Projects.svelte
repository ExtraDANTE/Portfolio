<script lang="ts">
    import { ExternalLink, Sparkles } from "lucide-svelte";
    import { projects } from "./data";
</script>

<section
    id="projects"
    class="py-24 max-w-6xl mx-auto px-6 border-b border-white/[0.03]"
>
    <div
        class="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16 text-left"
    >
        <div class="space-y-2">
            <span
                class="text-xs font-mono font-bold tracking-widest text-sky-400 uppercase"
            >
                Featured Projects &amp; Creations
            </span>
            <h2
                class="text-2xl sm:text-3.5xl font-black text-white tracking-tight"
            >
                Interactive Web &amp; Mobile Portfolios
            </h2>
            <p
                class="text-xs sm:text-sm text-slate-400 max-w-xl font-semibold leading-relaxed"
            >
                I design and build responsive web applications, interactive
                layouts, beautiful front-ends, and robust automations.
            </p>
        </div>
    </div>

    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {#each projects as proj}
            {@const isFeatured = proj.featured}

            <div
                class="bg-slate-900/50 border border-slate-800 rounded-xl p-6 flex flex-col justify-between hover:border-sky-500/20 transition-all duration-300 group hover:bg-slate-850/50 relative text-left"
            >
                {#if isFeatured}
                    <div
                        class="absolute top-4 right-4 flex items-center gap-1 bg-sky-500/10 text-sky-400 border border-sky-500/20 text-[8px] font-mono px-2 py-0.5 rounded font-black uppercase tracking-wider"
                    >
                        <Sparkles class="w-2.5 h-2.5" />
                        <span>Featured</span>
                    </div>
                {/if}

                <div class="space-y-4">
                    <div class="flex items-center gap-2.5">
                        <div
                            class="w-8 h-8 rounded bg-slate-850 border border-sky-500/15 flex items-center justify-center font-mono font-bold text-xs text-sky-400 uppercase"
                        >
                            {proj.title.slice(0, 2)}
                        </div>
                        <h3
                            class="font-mono font-black text-lg text-slate-100 group-hover:text-sky-400 transition-colors duration-200"
                        >
                            {proj.title}
                        </h3>
                    </div>

                    <p
                        class="text-xs sm:text-[13px] text-slate-300 leading-relaxed font-semibold"
                    >
                        {proj.description}
                    </p>
                </div>

                <div class="pt-6 border-t border-white/[0.03] mt-6 space-y-4">
                    {#if proj.tags}
                        <div class="flex flex-wrap gap-1.5">
                            {#each proj.tags as tag}
                                <span
                                    class="px-2 py-0.5 bg-slate-950 border border-sky-500/10 text-sky-300 rounded text-[9px] font-mono font-bold uppercase tracking-wider"
                                >
                                    {tag}
                                </span>
                            {/each}
                        </div>
                    {/if}

                    <div
                        class="flex items-center justify-between text-[11px] font-mono pt-1"
                    >
                        <span class="text-slate-500 font-bold"
                            >Scope: Open Source</span
                        >
                        <a
                            href={proj.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            class="flex items-center gap-1.5 text-sky-400 hover:text-sky-300 font-bold transition-all"
                        >
                            <span>Inspect Hub</span>
                            <ExternalLink class="w-3.5 h-3.5" />
                        </a>
                    </div>
                </div>
            </div>
        {/each}
    </div>
</section>
