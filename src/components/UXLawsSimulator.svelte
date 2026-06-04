<script lang="ts">
    import {
        Pointer,
        Layers,
        Brain,
        CheckCircle2,
        ChevronLeft,
        ChevronRight,
    } from "lucide-svelte";

    let activePlaygroundTab = $state("fitts");

    let fittsMode = $state<"before" | "after">("before");
    let fittsClicks = $state(0);
    let fittsSuccess = $state(false);
    let fittsStartTime = $state<number | null>(null);
    let fittsScore = $state<number | null>(null);
    let fittsTargetPos = $state<{ x: number; y: number }>({ x: 50, y: 50 });

    let hicksMode = $state<"before" | "after">("before");
    let hicksState = $state<"idle" | "counting" | "success">("idle");
    let hicksSelectedOption = $state<string | null>(null);
    let hicksTimer = $state<number | null>(null);
    let hicksTimeElapsed = $state<number | null>(null);

    let zeigarnikMode = $state<"before" | "after">("after");
    let zeigarnikStep = $state(1);
    let formData = $state({
        name: "",
        email: "",
        choice: "",
    });

    $effect(() => {
        if (activePlaygroundTab === "fitts") {
            fittsStartTime = Date.now();
        }
    });

    const handleFittsClick = () => {
        if (fittsSuccess) return;
        if (fittsMode === "before") {
            const needed = 5;
            if (fittsClicks < needed - 1) {
                fittsClicks += 1;
                fittsTargetPos = {
                    x: Math.floor(Math.random() * 80) + 10,
                    y: Math.floor(Math.random() * 80) + 10,
                };
            } else {
                fittsClicks = needed;
                fittsSuccess = true;
                if (fittsStartTime) {
                    fittsScore = Date.now() - fittsStartTime;
                }
            }
        } else {
            fittsClicks = 1;
            fittsSuccess = true;
            if (fittsStartTime) {
                fittsScore = Date.now() - fittsStartTime;
            }
        }
    };

    const resetFittsPlayground = (mode: "before" | "after") => {
        fittsMode = mode;
        fittsClicks = 0;
        fittsSuccess = false;
        fittsStartTime = Date.now();
        fittsScore = null;
        fittsTargetPos = { x: 50, y: 50 };
    };

    const startHicksChallenge = (mode: "before" | "after") => {
        hicksMode = mode;
        hicksState = "counting";
        hicksSelectedOption = null;
        hicksTimer = Date.now();
        hicksTimeElapsed = null;
    };

    const handleHicksSelect = (option: string) => {
        if (hicksState !== "counting") return;
        hicksSelectedOption = option;
        hicksState = "success";
        if (hicksTimer) {
            hicksTimeElapsed = Date.now() - hicksTimer;
        }
    };

    const handleNextZeigarnik = () => {
        if (zeigarnikStep < 4) {
            zeigarnikStep += 1;
        }
    };
</script>

<div id="workbench-container" class="space-y-10 text-left">
    <div class="flex border-b border-slate-800 overflow-x-auto gap-2">
        {#each [{ id: "fitts", label: "Fitts's Proximity", desc: "Target Sizes & Distances" }, { id: "hick", label: "Hick's Choice Reduction", desc: "Clutter-Elimination Trials" }, { id: "zeigarnik", label: "Zeigarnik Milestone", desc: "Progress-Aware Wizard" }] as tab}
            <button
                onclick={() => (activePlaygroundTab = tab.id)}
                class="py-3 px-4 font-mono text-left transition border-b-2 shrink-0 cursor-pointer {activePlaygroundTab ===
                tab.id
                    ? 'border-sky-400 text-sky-400 bg-slate-900/60'
                    : 'border-transparent text-slate-400 hover:text-white'}"
            >
                <div class="font-bold text-xs sm:text-sm">{tab.label}</div>
                <div
                    class="text-[10px] text-slate-500 font-sans font-medium mt-0.5"
                >
                    {tab.desc}
                </div>
            </button>
        {/each}
    </div>

    <div
        class="bg-[#050811] border border-slate-800/80 rounded-2xl overflow-hidden p-6 sm:p-10"
    >
        {#if activePlaygroundTab === "fitts"}
            <div class="space-y-6">
                <div class="space-y-2">
                    <h3
                        class="text-xl font-bold font-mono text-white flex items-center gap-2"
                    >
                        <Pointer class="w-5 h-5 text-sky-400" />
                        <span
                            >Fitts's Law Simulator: Touch Target Proximity Arena</span
                        >
                    </h3>
                    <p
                        class="text-xs sm:text-sm text-slate-400 leading-relaxed max-w-4xl font-semibold"
                    >
                        Equation: <span class="font-mono text-sky-300"
                            >Movement Time = a + b * log2(Distance / Size + 1)</span
                        >. Larger triggers located in natural, comfortable
                        thumbs-reach zones minimize target acquisition failure.
                        Try clicking both configurations to witness speed logs.
                    </p>
                </div>

                <div class="flex flex-wrap gap-2 font-mono">
                    <button
                        onclick={() => resetFittsPlayground("before")}
                        class="px-4 py-2 text-xs font-bold rounded-lg cursor-pointer transition-all duration-150 {fittsMode ===
                        'before'
                            ? 'bg-rose-600 text-white'
                            : 'bg-slate-900 hover:bg-slate-800 text-slate-300 border border-slate-800'}"
                    >
                        Cluttered Tiny Corner (Before)
                    </button>
                    <button
                        onclick={() => resetFittsPlayground("after")}
                        class="px-4 py-2 text-xs font-bold rounded-lg cursor-pointer transition-all duration-150 {fittsMode ===
                        'after'
                            ? 'bg-sky-500 text-slate-950 font-extrabold'
                            : 'bg-slate-900 hover:bg-slate-800 text-slate-300 border border-slate-800'}"
                    >
                        Natural Sweep Area (After)
                    </button>
                </div>

                <div class="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
                    <div
                        class="lg:col-span-8 bg-slate-950 border border-slate-850 rounded-xl p-4 min-h-[300px] relative overflow-hidden flex flex-col justify-between"
                    >
                        <span
                            class="text-[10px] font-mono text-slate-500 uppercase tracking-widest block border-b border-slate-900 pb-1.5 mb-2"
                        >
                            {fittsMode === "before"
                                ? "STAGE VIEW: MINISCULE TARGET IN THE OFF-SET LIMITS"
                                : "STAGE VIEW: FLUID THUMB REACH COGNITIVE ZONE"}
                        </span>

                        <div
                            class="h-48 relative w-full border border-slate-900 bg-slate-900/10 rounded-lg flex items-center justify-center"
                        >
                            {#if fittsMode === "before"}
                                <button
                                    onclick={handleFittsClick}
                                    class="absolute w-3.5 h-3.5 bg-rose-500 rounded-full hover:bg-rose-450 animate-pulse border border-rose-300 cursor-pointer"
                                    style="left: {fittsTargetPos.x}%; top: {fittsTargetPos.y}%; transform: translate(-50%, -50%);"
                                ></button>
                            {:else}
                                <div class="absolute inset-x-0 bottom-4 px-6">
                                    <button
                                        onclick={handleFittsClick}
                                        class="w-full bg-sky-450 hover:bg-sky-400 text-slate-950 font-sans font-black text-xs py-3 rounded-xl shadow-lg transition-transform hover:scale-[1.01] cursor-pointer flex items-center justify-center gap-2 uppercase tracking-wider"
                                    >
                                        <CheckCircle2
                                            class="w-5 h-5 text-slate-950"
                                        />
                                        <span
                                            >Confirm Savings Deposit (After
                                            Layout)</span
                                        >
                                    </button>
                                </div>
                            {/if}

                            {#if fittsSuccess}
                                <div
                                    class="absolute inset-0 bg-slate-950/95 flex flex-col items-center justify-center text-center p-4"
                                >
                                    <span
                                        class="text-3xl text-sky-450 font-mono font-black animate-bounce"
                                    >
                                        {fittsScore
                                            ? `${(fittsScore / 1000).toFixed(2)}s`
                                            : "0.42s"}
                                    </span>
                                    <span
                                        class="text-xs text-slate-300 font-medium mt-2 max-w-md leading-relaxed font-semibold"
                                    >
                                        {fittsMode === "before"
                                            ? "Friction detected! Requires highly artificial movement to strike isolated targets."
                                            : "Instant completion achieved! Native sweep region maximizes kinetic optimization."}
                                    </span>
                                </div>
                            {/if}
                        </div>

                        <div
                            class="flex justify-between items-center text-xs font-mono text-slate-400 pt-2 border-t border-slate-900 mt-2"
                        >
                            <span
                                >Registered attempts: <strong
                                    class="text-sky-450">{fittsClicks}</strong
                                ></span
                            >
                            <button
                                onclick={() => resetFittsPlayground(fittsMode)}
                                class="text-slate-300 hover:text-white underline cursor-pointer text-[11px]"
                            >
                                Reset Simulator
                            </button>
                        </div>
                    </div>

                    <div
                        class="lg:col-span-4 bg-slate-900/50 border border-slate-800 rounded-xl p-5 space-y-4"
                    >
                        <div class="space-y-1">
                            <span
                                class="text-[10px] font-mono text-sky-400 font-bold uppercase tracking-widest"
                                >DIAGNOSTIC TELEMETRY</span
                            >
                            <h4 class="font-extrabold text-white text-base">
                                Anatomical Sweeping Log
                            </h4>
                        </div>

                        <div class="space-y-3 font-mono text-xs">
                            <div
                                class="flex justify-between items-center pb-2 border-b border-slate-800"
                            >
                                <span class="text-slate-500"
                                    >Avg completion speed:</span
                                >
                                <span
                                    class={fittsMode === "before"
                                        ? "text-rose-400 font-bold"
                                        : "text-sky-400 font-bold"}
                                >
                                    {fittsMode === "before" ? "8.50s" : "1.20s"}
                                </span>
                            </div>
                            <div
                                class="flex justify-between items-center pb-2 border-b border-slate-800"
                            >
                                <span class="text-slate-500"
                                    >Cognitive fatigue:</span
                                >
                                <span
                                    class={fittsMode === "before"
                                        ? "text-rose-400 font-bold"
                                        : "text-sky-400 font-bold"}
                                >
                                    {fittsMode === "before"
                                        ? "Strenuous Drag"
                                        : "Zero Kinetic Drag"}
                                </span>
                            </div>
                        </div>

                        <p
                            class="text-xs text-slate-300 leading-relaxed bg-slate-950 p-3 rounded-lg border border-slate-850 font-semibold"
                        >
                            {fittsMode === "before"
                                ? "Sub-44px isolated targets require stressful coordination, forcing user drop-offs especially on mobile panels."
                                : "Wide reach triggers structured closely inside physiological sweeps trigger immediate conversions up to 42%."}
                        </p>
                    </div>
                </div>
            </div>
        {/if}

        {#if activePlaygroundTab === "hick"}
            <div class="space-y-6">
                <div class="space-y-2">
                    <h3
                        class="text-xl font-bold font-mono text-white flex items-center gap-2"
                    >
                        <Layers class="w-5 h-5 text-sky-400" />
                        <span
                            >Hick's Law Simulator: Choice Simplification Arena</span
                        >
                    </h3>
                    <p
                        class="text-xs sm:text-sm text-slate-400 leading-relaxed max-w-4xl font-semibold"
                    >
                        Every competing menu link added increases selection
                        latency exponentially. Grouping features into discrete
                        paths reduces mental friction. Try choosing options in
                        both layouts.
                    </p>
                </div>

                <div class="flex flex-wrap gap-2 font-mono">
                    <button
                        onclick={() => startHicksChallenge("before")}
                        class="px-4 py-2 text-xs font-bold rounded-lg cursor-pointer transition-all duration-150 {hicksMode ===
                        'before'
                            ? 'bg-rose-600 text-white'
                            : 'bg-slate-900 border border-slate-800 hover:bg-slate-800 text-slate-300'}"
                    >
                        Cluttered 12-Choice Grid (Before)
                    </button>
                    <button
                        onclick={() => startHicksChallenge("after")}
                        class="px-4 py-2 text-xs font-bold rounded-lg cursor-pointer transition-all duration-150 {hicksMode ===
                        'after'
                            ? 'bg-sky-500 text-slate-950 font-extrabold'
                            : 'bg-slate-900 border border-slate-800 hover:bg-slate-800 text-slate-300'}"
                    >
                        3-Category Pillars (After)
                    </button>
                </div>

                <div class="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
                    <div
                        class="lg:col-span-8 bg-slate-950 border border-slate-850 rounded-xl p-4 min-h-[300px] flex flex-col justify-between"
                    >
                        <span
                            class="text-[10px] font-mono text-slate-500 uppercase tracking-widest block border-b border-slate-900 pb-1.5 mb-2"
                        >
                            {hicksMode === "before"
                                ? "STAGE VIEW: OVERWHELMING OPTIONS MATRIX"
                                : "STAGE VIEW: ARCHITECTURAL FILTERED PILLARS"}
                        </span>

                        {#if hicksState === "idle"}
                            <div
                                class="h-44 flex flex-col items-center justify-center text-center"
                            >
                                <button
                                    onclick={() =>
                                        startHicksChallenge(hicksMode)}
                                    class="bg-slate-900 hover:bg-slate-850 border border-slate-800 px-5 py-2.5 rounded-xl text-sky-400 font-mono text-xs font-bold cursor-pointer transition-transform hover:scale-105"
                                >
                                    Launch Latency Choice Evaluation
                                </button>
                            </div>
                        {/if}

                        {#if hicksState === "counting"}
                            <div
                                class="p-4 bg-slate-900/10 rounded-lg min-h-[176px] flex flex-col justify-center"
                            >
                                <p
                                    class="text-[11px] font-mono text-amber-400 font-bold mb-4 text-center animate-pulse"
                                >
                                    CHOOSE ONE TARGET TO LOG RETRIEVAL TIMES:
                                </p>

                                {#if hicksMode === "before"}
                                    <div
                                        class="grid grid-cols-2 sm:grid-cols-4 gap-2"
                                    >
                                        {#each ["Ceramic Cup v1", "Copper Jug B90", "Nomad Wool Carpet", "Glayed Pottery Cl", "Arabic Dallah S1", "Vase Terracotta", "Woven basket craft", "Silver craft plate", "Traditional incense", "Palm leaves box", "Clay vessel historical", "Handicraft pack"] as opt}
                                            <button
                                                onclick={() =>
                                                    handleHicksSelect(opt)}
                                                class="p-2 bg-slate-900 hover:bg-slate-800 border border-slate-850 text-[10px] font-mono rounded-md text-slate-350 cursor-pointer"
                                            >
                                                {opt}
                                            </button>
                                        {/each}
                                    </div>
                                {:else}
                                    <div
                                        class="grid grid-cols-1 sm:grid-cols-3 gap-3"
                                    >
                                        {#each [{ label: "Ceramics & Clays", desc: "Clays, stones & historical pots" }, { label: "Hand-Hammered Coppers", desc: "Dallahs & silver craft works" }, { label: "Traditional Nomad Sadu", desc: "Vibrant woven carpets & mats" }] as opt}
                                            <button
                                                onclick={() =>
                                                    handleHicksSelect(
                                                        opt.label,
                                                    )}
                                                class="p-3 bg-slate-900 hover:bg-slate-800 border border-slate-800 hover:border-sky-500/50 text-left rounded-xl cursor-pointer"
                                            >
                                                <span
                                                    class="block text-xs font-bold text-white"
                                                    >{opt.label}</span
                                                >
                                                <span
                                                    class="block text-[10px] text-slate-400 mt-1 leading-snug font-semibold"
                                                    >{opt.desc}</span
                                                >
                                            </button>
                                        {/each}
                                    </div>
                                {/if}
                            </div>
                        {/if}

                        {#if hicksState === "success"}
                            <div
                                class="h-44 flex flex-col items-center justify-center text-center p-4"
                            >
                                <span
                                    class="text-3xl text-sky-400 font-mono font-black"
                                >
                                    {hicksTimeElapsed
                                        ? `${(hicksTimeElapsed / 1000).toFixed(2)}s`
                                        : "0.62s"}
                                </span>
                                <span
                                    class="text-xs text-slate-300 mt-2 font-semibold"
                                >
                                    Selection registered: <span
                                        class="text-sky-400"
                                        >"{hicksSelectedOption}"</span
                                    >
                                </span>
                                <button
                                    onclick={() =>
                                        startHicksChallenge(hicksMode)}
                                    class="mt-3 text-xs text-sky-400 underline hover:text-sky-355 cursor-pointer font-bold font-mono"
                                >
                                    Perform another trial
                                </button>
                            </div>
                        {/if}

                        <span
                            class="text-[10px] text-slate-500 font-mono text-center block pt-2 border-t border-slate-905 mt-2"
                        >
                            Formula: Choice Latency (T) = b * log2(n + 1) where
                            n is total options.
                        </span>
                    </div>

                    <div
                        class="lg:col-span-4 bg-slate-900/50 border border-slate-805 border-slate-800 rounded-xl p-5 space-y-4"
                    >
                        <div class="space-y-1">
                            <span
                                class="text-[10px] font-mono text-sky-400 font-bold uppercase tracking-widest"
                                >COGNITIVE REDUCTION LOG</span
                            >
                            <h4 class="font-extrabold text-white text-base">
                                Select Complexity Index
                            </h4>
                        </div>

                        <div class="space-y-3 font-mono text-xs">
                            <div
                                class="flex justify-between items-center pb-2 border-b border-slate-800"
                            >
                                <span class="text-slate-500"
                                    >Unfiltered Choices:</span
                                >
                                <span
                                    class="text-rose-445 font-bold text-rose-400"
                                    >3.80s</span
                                >
                            </div>
                            <div
                                class="flex justify-between items-center pb-2 border-b border-slate-800"
                            >
                                <span class="text-slate-500"
                                    >Pillar Structures:</span
                                >
                                <span class="text-sky-400 font-bold">0.80s</span
                                >
                            </div>
                        </div>

                        <p
                            class="text-xs text-slate-300 leading-relaxed bg-slate-950 p-3 rounded-lg border border-slate-850 font-semibold font-sans"
                        >
                            {hicksMode === "before"
                                ? "Overwhelming users with infinite parallel options stalls active conversions. They spend visual energy finding coordinates."
                                : "Chunking structures into simple parent segments speeds user paths, converting complex matrices into effortless decisions."}
                        </p>
                    </div>
                </div>
            </div>
        {/if}

        {#if activePlaygroundTab === "zeigarnik"}
            <div class="space-y-6">
                <div class="space-y-2">
                    <h3
                        class="text-xl font-bold font-mono text-white flex items-center gap-2"
                    >
                        <Brain class="w-5 h-5 text-sky-400" />
                        <span
                            >Zeigarnik Effect Simulator: Progress-Aware Wizard
                            Onboarding</span
                        >
                    </h3>
                    <p
                        class="text-xs sm:text-sm text-slate-400 leading-relaxed max-w-4xl font-semibold"
                    >
                        Long, tedious monolithic layout forms trigger instant
                        fatigue. Chunking long processes into progress-tracked
                        wizard steps leverages human completion bias to increase
                        onboarding.
                    </p>
                </div>

                <div class="flex flex-wrap gap-2 font-mono">
                    <button
                        onclick={() => {
                            zeigarnikMode = "before";
                            zeigarnikStep = 1;
                        }}
                        class="px-4 py-2 text-xs font-bold rounded-lg cursor-pointer transition-all duration-150 {zeigarnikMode ===
                        'before'
                            ? 'bg-rose-600 text-white'
                            : 'bg-slate-900 border border-slate-800 hover:bg-slate-800 text-slate-300'}"
                    >
                        Monolithic Form (Before)
                    </button>
                    <button
                        onclick={() => {
                            zeigarnikMode = "after";
                            zeigarnikStep = 1;
                        }}
                        class="px-4 py-2 text-xs font-bold rounded-lg cursor-pointer transition-all duration-150 {zeigarnikMode ===
                        'after'
                            ? 'bg-sky-500 text-slate-950 font-extrabold'
                            : 'bg-slate-900 border border-slate-800 hover:bg-slate-800 text-slate-300'}"
                    >
                        4-Step Visual Wizard (After)
                    </button>
                </div>

                <div class="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
                    <div
                        class="lg:col-span-8 bg-slate-950 border border-slate-850 rounded-xl p-6 min-h-[300px] flex flex-col justify-between"
                    >
                        <span
                            class="text-[10px] font-mono text-slate-500 uppercase tracking-widest block border-b border-slate-900 pb-1.5 mb-4"
                        >
                            {zeigarnikMode === "before"
                                ? "STAGE VIEW: DAUNTING MONOLITHIC INVENTORY FORM"
                                : "STAGE VIEW: STEP REVEAL COGNITIVE PROGRESS WIZARD"}
                        </span>

                        {#if zeigarnikMode === "before"}
                            <form
                                class="space-y-3 text-left"
                                onsubmit={(e) => {
                                    e.preventDefault();
                                    alert("High-friction dispatch complete.");
                                }}
                            >
                                <div
                                    class="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs"
                                >
                                    <div>
                                        <label
                                            class="block text-slate-400 mb-1 font-mono"
                                            >Full Name *</label
                                        >
                                        <input
                                            type="text"
                                            placeholder="Arthur Pendragon"
                                            class="w-full bg-slate-900 border border-slate-800 rounded-md p-2 text-white text-xs text-left"
                                            required
                                        />
                                    </div>
                                    <div>
                                        <label
                                            class="block text-slate-400 mb-1 font-mono"
                                            >Target Email *</label
                                        >
                                        <input
                                            type="email"
                                            placeholder="arthur@example.com"
                                            class="w-full bg-slate-900 border border-slate-800 rounded-md p-2 text-white text-xs text-left"
                                            required
                                        />
                                    </div>
                                </div>
                                <div
                                    class="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs"
                                >
                                    <div>
                                        <label
                                            class="block text-slate-400 mb-1 font-mono"
                                            >Enterprise Node *</label
                                        >
                                        <input
                                            type="text"
                                            placeholder="Aviation Hub Setup"
                                            class="w-full bg-slate-900 border border-slate-800 rounded-md p-2 text-white text-xs text-left"
                                            required
                                        />
                                    </div>
                                    <div>
                                        <label
                                            class="block text-slate-400 mb-1 font-mono"
                                            >Deployment Budget (USD) *</label
                                        >
                                        <input
                                            type="number"
                                            placeholder="100000"
                                            class="w-full bg-slate-900 border border-slate-800 rounded-md p-2 text-white text-xs text-left"
                                            required
                                        />
                                    </div>
                                </div>
                                <div>
                                    <label
                                        class="block text-slate-400 text-xs mb-1 font-mono"
                                        >Security Requirements *</label
                                    >
                                    <textarea
                                        rows="2"
                                        placeholder="Explain systems configurations..."
                                        class="w-full bg-slate-900 border border-slate-800 rounded-md p-2 text-white text-xs text-left"
                                        required
                                    ></textarea>
                                </div>
                                <div class="flex justify-end pt-2">
                                    <button
                                        type="submit"
                                        class="bg-rose-600 hover:bg-rose-700 text-white font-mono text-xs px-5 py-2 rounded-lg cursor-pointer"
                                    >
                                        Submit Monolithic Sheet
                                    </button>
                                </div>
                            </form>
                        {:else}
                            <div class="space-y-6">
                                <div class="space-y-2">
                                    <div
                                        class="flex justify-between text-xs font-mono"
                                    >
                                        <span
                                            class="text-sky-450 font-bold text-sky-400"
                                            >{zeigarnikStep === 4
                                                ? "100% Resolved"
                                                : `${(zeigarnikStep - 1) * 33}% Completed`}</span
                                        >
                                        <span class="text-slate-500"
                                            >Step: {zeigarnikStep} of 4</span
                                        >
                                    </div>
                                    <div
                                        class="h-2 w-full bg-slate-900 rounded-full overflow-hidden"
                                    >
                                        <div
                                            class="h-full bg-gradient-to-r from-sky-500 to-indigo-500 transition-all duration-300"
                                            style="width: {(zeigarnikStep - 1) *
                                                33 +
                                                1}%;"
                                        ></div>
                                    </div>
                                </div>

                                <div
                                    class="p-5 bg-slate-900/40 rounded-xl border border-slate-850 min-h-[140px] flex flex-col justify-between"
                                >
                                    {#if zeigarnikStep === 1}
                                        <div class="space-y-3">
                                            <span
                                                class="text-[10px] uppercase font-mono text-slate-450 tracking-wider block font-bold"
                                                >Phase 1: Human Persona Setup</span
                                            >
                                            <div>
                                                <label
                                                    class="block text-slate-400 text-xs font-mono mb-1"
                                                    >Your Full Name:</label
                                                >
                                                <input
                                                    type="text"
                                                    bind:value={formData.name}
                                                    placeholder="Arthur Pendragon"
                                                    class="w-full bg-slate-950 border border-slate-800 rounded-lg p-2.5 text-xs text-white focus:outline-none focus:border-sky-400"
                                                />
                                            </div>
                                        </div>
                                    {/if}

                                    {#if zeigarnikStep === 2}
                                        <div class="space-y-3">
                                            <span
                                                class="text-[10px] uppercase font-mono text-slate-450 tracking-wider block font-bold"
                                                >Phase 2: Contact Gateway</span
                                            >
                                            <div>
                                                <label
                                                    class="block text-slate-400 text-xs font-mono mb-1"
                                                    >Secure Contact Email:</label
                                                >
                                                <input
                                                    type="email"
                                                    bind:value={formData.email}
                                                    placeholder="arthur@example.com"
                                                    class="w-full bg-slate-950 border border-slate-800 rounded-lg p-2.5 text-xs text-white focus:outline-none focus:border-sky-400"
                                                />
                                            </div>
                                        </div>
                                    {/if}

                                    {#if zeigarnikStep === 3}
                                        <div class="space-y-3">
                                            <span
                                                class="text-[10px] uppercase font-mono text-slate-450 tracking-wider block font-bold"
                                                >Phase 3: Service Track
                                                Selection</span
                                            >
                                            <div
                                                class="grid grid-cols-2 gap-2 text-xs"
                                            >
                                                {#each ["Full-Stack Architect Hire", "Behavioral UX Research", "Custom Software Engineering", "Secure Server Integration"] as choice}
                                                    <button
                                                        type="button"
                                                        onclick={() =>
                                                            (formData.choice =
                                                                choice)}
                                                        class="p-2.5 border rounded-lg text-left text-[11px] font-sans cursor-pointer {formData.choice ===
                                                        choice
                                                            ? 'bg-sky-500/15 border-sky-400/80 text-sky-300'
                                                            : 'bg-slate-950 border-slate-850 text-slate-400 hover:border-slate-800'}"
                                                    >
                                                        {choice}
                                                    </button>
                                                {/each}
                                            </div>
                                        </div>
                                    {/if}

                                    {#if zeigarnikStep === 4}
                                        <div class="space-y-3 text-center">
                                            <span
                                                class="text-[10px] uppercase font-mono text-sky-400 tracking-wider block"
                                                >Phase 4: Setup Verified</span
                                            >
                                            <p class="text-xs text-slate-200">
                                                Onboarding credentials completed
                                                cleanly without cognitive
                                                fatigue!
                                            </p>
                                            <div
                                                class="inline-block p-2 bg-slate-950 rounded border border-slate-800 text-[10px] font-mono text-slate-400 text-center font-bold"
                                            >
                                                {formData.name || "----"} • {formData.email ||
                                                    "----"} • {formData.choice ||
                                                    "----"}
                                            </div>
                                        </div>
                                    {/if}

                                    <div
                                        class="flex justify-between items-center pt-4 border-t border-slate-900 mt-4"
                                    >
                                        {#if zeigarnikStep > 1}
                                            <button
                                                onclick={() =>
                                                    (zeigarnikStep -= 1)}
                                                class="text-slate-500 hover:text-white font-mono text-xs cursor-pointer flex items-center gap-1 font-bold"
                                            >
                                                <ChevronLeft class="w-4 h-4" />
                                                <span>Back</span>
                                            </button>
                                        {:else}
                                            <div></div>
                                        {/if}

                                        {#if zeigarnikStep < 4}
                                            <button
                                                onclick={handleNextZeigarnik}
                                                class="bg-sky-500 hover:bg-sky-400 text-slate-950 font-bold text-xs px-4 py-2 rounded-lg cursor-pointer transition-all flex items-center gap-1 font-mono uppercase"
                                            >
                                                <span>Next</span>
                                                <ChevronRight class="w-4 h-4" />
                                            </button>
                                        {:else}
                                            <button
                                                onclick={() => {
                                                    alert(
                                                        "Setup credentials successfully transmitted!",
                                                    );
                                                    zeigarnikStep = 1;
                                                    formData = {
                                                        name: "",
                                                        email: "",
                                                        choice: "",
                                                    };
                                                }}
                                                class="bg-sky-500 hover:bg-sky-400 text-slate-950 font-extrabold text-xs px-5 py-2.5 rounded-xl cursor-pointer transition-all shadow-lg uppercase tracking-wider"
                                            >
                                                Submit Onboarding
                                            </button>
                                        {/if}
                                    </div>
                                </div>
                            </div>
                        {/if}
                    </div>

                    <div
                        class="lg:col-span-4 bg-slate-900/50 border border-slate-800 rounded-xl p-5 space-y-4"
                    >
                        <div class="space-y-1">
                            <span
                                class="text-[10px] font-mono text-sky-400 font-bold uppercase tracking-widest"
                                >ONBOARDING RETRO</span
                            >
                            <h4 class="font-extrabold text-white text-base">
                                Progress Drivers
                            </h4>
                        </div>

                        <div class="space-y-3 font-mono text-xs font-semibold">
                            <div
                                class="flex justify-between items-center pb-2 border-b border-slate-800"
                            >
                                <span class="text-slate-500"
                                    >Monolithic forms:</span
                                >
                                <span class="text-rose-400 font-bold font-mono"
                                    >48% completion</span
                                >
                            </div>
                            <div
                                class="flex justify-between items-center pb-2 border-b border-slate-800"
                            >
                                <span class="text-slate-500"
                                    >Visual layout trackers:</span
                                >
                                <span class="text-sky-400 font-bold font-mono"
                                    >92% completion</span
                                >
                            </div>
                        </div>

                        <p
                            class="text-xs text-slate-300 leading-relaxed bg-slate-950 p-3 rounded-lg border border-slate-850 font-semibold font-sans"
                        >
                            {zeigarnikMode === "before"
                                ? "Presenting massive inputs simultaneously leads to visual panic. Users immediately abandon forms rather than execute them."
                                : "Revealing progress lines triggers the natural human compulsion to satisfy incomplete milestones, multiplying form completion."}
                        </p>
                    </div>
                </div>
            </div>
        {/if}
    </div>
</div>
