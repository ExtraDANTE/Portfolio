<script lang="ts">
    import { onMount } from "svelte";
    import {
        Folder,
        FileCode,
        Search,
        Terminal,
        GitBranch,
    } from "lucide-svelte";
    import type { RepoFile, SkillCategory, Project } from "../lib/data";

    let {
        repoFiles = [],
        skillsData = [],
        projectsData = [],
        selectedFile = $bindable(),
    } = $props<{
        repoFiles: RepoFile[];
        skillsData: SkillCategory[];
        projectsData: Project[];
        selectedFile: RepoFile;
    }>();

    let terminalSearch = $state("");
    let commandInput = $state("");

    const neofetchOutput = `OS: NixOS 26.05 (Yarara) x86_64
Host: GF63 Thin 11SC (REV:1.0)
Kernel: Linux 6.18.22
Packages: 2369 (nix-system), 3526 (nix-user)
Shell: zsh 5.9
Display (CMN1521): 1920x1080 in 15", 144 Hz
WM: niri (Wayland)
Theme: Base16Kvantum [Qt], adw-gtk3 [GTK2/3]
Icons: Gruvbox-Plus-Dark [Qt]
Font: Source Sans 3 (13pt) [Qt]
Cursor: Bibata-Modern-Ice (24px)
Terminal: alacritty 0.17.0
Terminal Font: JetBrainsMono Nerd Font (13pt)
CPU: 11th Gen Intel(R) Core(TM) i7-11800H
GPU 1: NVIDIA GeForce GTX 1650 Mobile
GPU 2: Intel UHD Graphics @ 1.45 GHz
Memory: 2.95 GiB / 15.33 GiB (19%)`;

    let commandsHistory = $state<{ cmd: string; output: string }[]>([]);

    onMount(() => {
        commandsHistory = [
            {
                cmd: "neofetch",
                output: neofetchOutput,
            },
        ];
    });

    let filteredFiles = $derived(
        repoFiles.filter((item) =>
            item.name.toLowerCase().includes(terminalSearch.toLowerCase()),
        ),
    );

    const executeTerminalCommand = (e: Event) => {
        e.preventDefault();
        if (!commandInput.trim()) return;

        const cmd = commandInput.trim().toLowerCase();
        let opt = "";

        if (cmd === "help") {
            opt =
                "Available commands: neofetch, whoami, skills, projects, sysinfo, git log, cat <filename>, clear";
        } else if (cmd === "neofetch") {
            opt = neofetchOutput;
        } else if (cmd === "whoami") {
            opt =
                "DANTE (@ExtraDANTE) - Software Developer from Hillah, Babil, Iraq. I build custom bot systems, full-stack applications, mobile apps, and robust server automation.";
        } else if (cmd === "skills") {
            opt = skillsData
                .map((c) => `[${c.category}] ${c.items.join(", ")}`)
                .join("\n");
        } else if (cmd === "projects") {
            opt = projectsData
                .map((p) => `• ${p.title} - ${p.description}`)
                .join("\n");
        } else if (cmd === "sysinfo") {
            opt = neofetchOutput;
        } else if (cmd === "git log" || cmd === "git" || cmd === "git status") {
            opt = `Commit d4n7e231 [branch: main] - 3 days ago
Author: Dante <@ExtraDANTE>
    fix: rebuilt secure static front-end assets from updated local codebases

Commit a9f123c8 [branch: main] - 3 days ago
Author: Dante <@ExtraDANTE>
    feat: transition portfolio build process to optimal serverless target for exitinger.github.io

Commit b8c302fa [branch: main] - 1 week ago
Author: Dante <@ExtraDANTE>
    fix: update responsive margins and mobile layouts in sandbox terminal workbench view

Commit c10dcf89 [branch: main] - 1 week ago
Author: Dante <@ExtraDANTE>
    refactor: restructure project inventory and optimize dynamic api configurations

Commit f5e1281e [branch: main] - 2 weeks ago
Author: Dante <@ExtraDANTE>
    style: redesign profile layout into a beautiful high-rigidity dark theme with purpose animations`;
        } else if (cmd.startsWith("cat ")) {
            const fileName = cmd.substring(4).trim();
            const found = repoFiles.find(
                (f) => f.name.toLowerCase() === fileName,
            );
            if (found && found.content) {
                opt = found.content;
                selectedFile = found;
            } else {
                opt = `Error: Live file "${fileName}" not cached in sandbox environment. Try: "cat about_me.md"`;
            }
        } else if (cmd === "clear") {
            commandsHistory = [];
            commandInput = "";
            return;
        } else {
            opt = `zsh: command not found: ${cmd}. Type "help" to list available system calls.`;
        }

        commandsHistory = [
            ...commandsHistory,
            { cmd: commandInput, output: opt },
        ];
        commandInput = "";
    };
</script>

<div
    class="bg-[#03060f] rounded-2xl border border-slate-800 shadow-2xl overflow-hidden font-mono text-xs text-left"
>
    <div
        class="bg-[#080d1a] px-4 py-3 border-b border-slate-800/80 flex justify-between items-center text-xs"
    >
        <div class="flex items-center gap-2">
            <div class="w-3 h-3 bg-rose-500 rounded-full"></div>
            <div class="w-3 h-3 bg-amber-500 rounded-full"></div>
            <div class="w-3 h-3 bg-sky-500 rounded-full"></div>
            <span class="text-slate-400 ml-2">ssh guest@dante.dev -p 3000</span>
        </div>
        <div class="flex items-center gap-3 text-slate-500 font-mono">
            <div class="flex items-center gap-1">
                <GitBranch class="w-3.5 h-3.5 text-sky-500" />
                <span>nixos-flake</span>
            </div>
        </div>
    </div>

    <div class="grid grid-cols-1 sm:grid-cols-12 min-h-[340px]">
        <div
            class="sm:col-span-4 bg-[#050811] p-3 border-r border-slate-800/60 flex flex-col gap-3"
        >
            <div
                class="flex justify-between items-center font-bold text-slate-400 uppercase tracking-wider text-[10px] pb-1 border-b border-slate-900"
            >
                <span>Systems Inventory</span>
                <Terminal class="w-3.5 h-3.5" />
            </div>

            <div class="relative">
                <Search
                    class="absolute left-2 top-2.5 w-3 h-3 text-slate-500"
                />
                <input
                    type="text"
                    placeholder="Search cache logs..."
                    bind:value={terminalSearch}
                    class="w-full bg-[#03060d] border border-slate-800 rounded-md p-1.5 pl-6 text-[10px] text-white focus:outline-none focus:border-sky-400/50"
                />
            </div>

            <div class="space-y-1 overflow-y-auto max-h-48 pt-1">
                {#each filteredFiles as file}
                    <button
                        onclick={() => {
                            if (file.content) {
                                selectedFile = file;
                            }
                        }}
                        class="w-full flex items-center justify-between text-left p-1.5 rounded-lg text-[11px] transition-colors cursor-pointer {selectedFile.name ===
                        file.name
                            ? 'bg-sky-500/10 text-sky-400 border border-sky-500/20'
                            : 'hover:bg-slate-900 text-slate-400 hover:text-white'}"
                    >
                        <span class="flex items-center gap-1.5">
                            {#if file.type === "folder"}
                                <Folder class="w-3.5 h-3.5 text-amber-500" />
                            {:else}
                                <FileCode class="w-3.5 h-3.5 text-indigo-400" />
                            {/if}
                            <span>{file.name}</span>
                        </span>
                        {#if file.size}
                            <span class="text-[9px] text-slate-600"
                                >{file.size}</span
                            >
                        {/if}
                    </button>
                {/each}
            </div>
        </div>

        <div
            class="sm:col-span-8 bg-slate-950 p-4 flex flex-col justify-between min-h-[340px]"
        >
            <div class="space-y-2 flex-grow">
                <div
                    class="flex justify-between items-center text-[10px] text-slate-500 uppercase tracking-widest pb-1 border-b border-slate-900"
                >
                    <span>ACTIVE BUFFER: {selectedFile.name}</span>
                    <span class="text-sky-500"
                        >{selectedFile.language || "text"}</span
                    >
                </div>

                <pre
                    class="text-[11px] text-slate-300 overflow-x-auto whitespace-pre-wrap max-h-48 scrollbar-thin select-text leading-relaxed font-mono">
          {selectedFile.content
                        ? selectedFile.content
                        : `Inspecting filesystem node: ${selectedFile.lastCommitMessage}`}
        </pre>
            </div>

            <div class="space-y-2 border-t border-slate-900 pt-3">
                <span
                    class="text-[10px] font-bold text-slate-500 tracking-wider"
                    >SHELL WORKBENCH METRICS</span
                >

                <div
                    class="bg-[#050811] p-3 rounded-lg border border-slate-900 text-[10px] text-slate-400 space-y-2.5 max-h-32 overflow-y-auto font-mono scrollbar-thin"
                >
                    {#each commandsHistory as item}
                        <div class="space-y-1">
                            <div class="flex items-center gap-1 text-slate-400">
                                <span class="text-sky-400 font-bold">&gt;</span>
                                <span>{item.cmd}</span>
                            </div>
                            <div
                                class="text-slate-300 bg-slate-950/60 p-1.5 rounded border border-slate-900/50 whitespace-pre-wrap text-[9px] leading-relaxed font-mono"
                            >
                                {item.output}
                            </div>
                        </div>
                    {/each}
                </div>

                <form onsubmit={executeTerminalCommand} class="flex gap-2">
                    <div class="text-sky-400 font-bold self-center">&gt;</div>
                    <input
                        type="text"
                        bind:value={commandInput}
                        placeholder="Type 'help' for available calls..."
                        class="flex-1 bg-[#050811] border border-slate-800 rounded-lg px-2.5 py-1.5 text-xs text-white focus:outline-none focus:border-sky-400 font-mono"
                    />
                </form>
            </div>
        </div>
    </div>
</div>
