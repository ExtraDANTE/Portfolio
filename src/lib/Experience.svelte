<script lang="ts">
    import { Calendar, Building, Cpu } from "lucide-svelte";
    import { experience } from "./data";
</script>

<section
    id="experience-timeline"
    class="py-24 max-w-6xl mx-auto px-6 border-b border-white/[0.03] text-left"
>
    <div class="flex items-center gap-4 mb-16">
        <span
            class="text-xs font-mono font-bold tracking-widest text-sky-400 uppercase"
            >Chronology of Work</span
        >
        <div class="flex-1 h-[1px] bg-white/[0.05]"></div>
    </div>

    <div class="max-w-4xl space-y-12">
        {#each experience as exp}
            <div
                class="relative pl-8 border-l border-white/[0.05] space-y-4 group"
            >
                <div
                    class="absolute -left-[5.5px] top-[6px] w-2.5 h-2.5 rounded-full bg-slate-950 border border-sky-500/35 group-hover:bg-sky-400 group-hover:border-sky-500/80 transition-all duration-300 shadow-[0_0_10px_rgba(56,189,248,0.1)]"
                ></div>

                <div
                    class="flex flex-col sm:flex-row justify-between sm:items-baseline gap-2"
                >
                    <div class="space-y-1">
                        <h3
                            class="text-lg font-black text-white group-hover:text-sky-400 transition-colors duration-300"
                        >
                            {exp.role}
                        </h3>
                        <div
                            class="flex items-center gap-2 text-xs text-sky-400/85 font-mono"
                        >
                            <Building class="w-3.5 h-3.5 shrink-0" />
                            <span class="font-bold tracking-wider uppercase"
                                >{exp.company}</span
                            >
                        </div>
                    </div>
                    <div
                        class="flex items-center gap-1.5 text-[11px] font-mono text-slate-500 font-bold shrink-0 bg-slate-950/60 px-2.5 py-1 rounded border border-white/[0.03]"
                    >
                        <Calendar class="w-3.5 h-3.5 text-slate-500" />
                        <span>{exp.period}</span>
                    </div>
                </div>

                <div
                    class="bg-slate-900/40 rounded-xl p-5 border border-white/[0.03] space-y-4"
                >
                    <p
                        class="text-xs sm:text-sm text-slate-300 leading-relaxed font-semibold"
                    >
                        {exp.description}
                    </p>

                    <div class="space-y-2 pt-2 border-t border-white/[0.02]">
                        <div
                            class="flex items-center gap-1.5 text-[10px] font-mono text-slate-400 uppercase tracking-widest font-black"
                        >
                            <Cpu class="w-3.5 h-3.5 text-sky-500" />
                            <span>Key Systems Operations Deliverables</span>
                        </div>
                        <ul
                            class="space-y-2 pl-4 list-disc text-xs text-slate-400 font-medium leading-relaxed"
                        >
                            <li>
                                Formulating the core synchronous MTProto client
                                layers utilizing SQLite sessions persistence.
                            </li>
                            <li>
                                Designing decoupled polyglot child process
                                controller hooks executing securely in CLI/TUI
                                modes.
                            </li>
                            <li>
                                Configuring persistent reproducible nix flasks
                                minimizing server dependencies down to locked
                                hashes.
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        {/each}
    </div>
</section>
