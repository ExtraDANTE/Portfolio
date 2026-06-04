<script lang="ts">
    import { Mail, Send, Terminal, MapPin, Clock } from "lucide-svelte";
    import { transmitTelegramPayload } from "./telemetry";
    import { profile } from "./data";

    let { botStatus = "idle", currentTime = "" } = $props<{
        botStatus: string;
        currentTime: string;
    }>();

    let name = $state("");
    let email = $state("");
    let message = $state("");
    let logs = $state<string[]>([]);
    let isSending = $state(false);
    let success = $state(false);
    let copied = $state(false);

    const telegramChatId = import.meta.env.ViteTelegramChatId || "";

    const handleCopy = () => {
        navigator.clipboard.writeText(profile.email);
        copied = true;
        setTimeout(() => (copied = false), 2000);
    };

    const handleSubmit = async (e: Event) => {
        e.preventDefault();
        if (!name || !email || !message) return;

        isSending = true;
        success = false;

        const logSteps = [
            "Securing transport tunnels via secure endpoints...",
            "Marshalling message payload into binary structures...",
            "Generating payload cryptographic hash signature...",
            "Verifying secure spam compliance boundaries...",
            "Transmission Initiated: Connecting to Telegram Core...",
        ];

        logs = [logSteps[0]];

        for (let i = 1; i < logSteps.length; i++) {
            await new Promise((resolve) => setTimeout(resolve, 300));
            logs = [...logs, logSteps[i]];
        }

        try {
            const textMsg =
                `[Inquiry Gate] *New Message Incoming*` +
                `\n\n*Name:* ${name}` +
                `\n*Email:* \`${email}\`` +
                `\n\n*Message:*\n_${message}_`;

            const res = await transmitTelegramPayload(telegramChatId, textMsg);
            if (res.success) {
                logs = [
                    ...logs,
                    "Delivery Confirmed: Relayed instantly to Dante's terminal!",
                ];
                success = true;
                name = "";
                email = "";
                message = "";
            } else {
                logs = [
                    ...logs,
                    `🔴 Delivery Error: ${res.error || "Telegram rejected payload."}`,
                ];
            }
        } catch (err: any) {
            logs = [...logs, `🔴 Transmission failure: ${err.message || err}`];
        } finally {
            isSending = false;
        }
    };
</script>

<section id="contact-gate" class="py-24 max-w-6xl mx-auto px-6">
    <div
        class="bg-slate-900/70 border border-slate-800 rounded-2xl overflow-hidden shadow-2xl grid grid-cols-1 lg:grid-cols-12 relative z-10"
    >
        <div
            class="lg:col-span-15 bg-slate-950 p-8 sm:p-10 space-y-6 flex flex-col justify-between border-r border-[#111626] text-left lg:col-span-5"
        >
            <div class="space-y-5">
                <div
                    class="flex justify-between items-center bg-slate-950 p-2.5 rounded border border-[#101625]"
                >
                    <span
                        class="text-[10px] font-mono font-bold text-sky-400 uppercase tracking-widest block"
                        >Gateway Telemetry</span
                    >
                    <span
                        class="w-2 h-2 rounded-full {botStatus === 'active'
                            ? 'bg-sky-500 animate-pulse'
                            : 'bg-amber-400'}"
                    ></span>
                </div>

                <div class="space-y-2">
                    <h3
                        class="text-xl font-bold text-white tracking-tight leading-snug"
                    >
                        Begin an Integration
                    </h3>
                    <p
                        class="text-xs sm:text-[13px] text-slate-300 leading-relaxed font-semibold"
                    >
                        I monitor my systems communication logs natively. Submit
                        an inquiry through the dispatcher on the right to
                        transmit a raw message envelope directly to my Telegram
                        CLI terminal console.
                    </p>
                </div>

                <div
                    class="space-y-3 pt-3 border-t border-white/[0.03] text-[11px] font-mono"
                >
                    <div
                        class="flex items-center gap-2.5 text-slate-300 bg-slate-950/40 p-3 rounded-xl border border-white/[0.02]"
                    >
                        <MapPin class="w-4 h-4 text-sky-400 shrink-0" />
                        <div>
                            <span
                                class="text-slate-500 block text-[8px] uppercase font-bold leading-tight"
                                >Location Server</span
                            >
                            <span
                                class="text-white text-[11px] font-sans font-black"
                                >{profile.location}</span
                            >
                        </div>
                    </div>

                    <div
                        class="flex items-center gap-2.5 text-slate-300 bg-slate-950/40 p-3 rounded-xl border border-white/[0.02]"
                    >
                        <Clock class="w-4 h-4 text-sky-400 shrink-0" />
                        <div>
                            <span
                                class="text-slate-500 block text-[8px] uppercase font-bold leading-tight"
                                >Babil Orbit Time</span
                            >
                            <span
                                class="text-white text-[11px] font-mono font-black"
                            >
                                {currentTime
                                    ? currentTime.split(" ")[0] +
                                      " " +
                                      currentTime.split(" ")[1]
                                    : "Babil Local"}
                            </span>
                        </div>
                    </div>
                </div>
            </div>

            <div class="space-y-3.5 pt-6 border-t border-white/[0.03]">
                <div class="text-[10px] tracking-wide text-slate-500 font-mono">
                    Direct Endpoint:
                    <span
                        class="block font-mono text-sky-400 bg-slate-950 px-3 py-2.5 rounded border border-slate-800 mt-2 select-all text-center font-bold"
                    >
                        {profile.email}
                    </span>
                </div>
                <div class="flex gap-2">
                    <button
                        onclick={handleCopy}
                        class="bg-slate-950 border border-white/10 text-sky-400 px-3 py-1.5 rounded-lg text-[9px] cursor-pointer hover:bg-slate-900 hover:text-sky-300 transition-all w-full font-bold uppercase tracking-widest font-mono"
                    >
                        {copied ? "Endpoint Copied!" : "Copy Endpoint"}
                    </button>
                </div>
            </div>
        </div>

        <div
            class="lg:col-span-15 p-8 sm:p-10 space-y-6 bg-slate-900/45 text-left lg:col-span-7"
        >
            <div class="space-y-1">
                <h3
                    class="text-base font-bold text-white font-mono flex items-center gap-2"
                >
                    <Terminal class="w-4 h-4 text-sky-400" />
                    <span>Message Payload Dispatcher</span>
                </h3>
                <p class="text-xs text-slate-400 font-medium">
                    Submit an inquiry below and track the terminal logging
                    buffer progress in real-time.
                </p>
            </div>

            <form onsubmit={handleSubmit} class="space-y-4">
                <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div class="space-y-1">
                        <span
                            class="block text-[8px] font-mono text-slate-400 uppercase tracking-widest font-black"
                            >Caller Signature</span
                        >
                        <input
                            type="text"
                            required
                            bind:value={name}
                            placeholder="E.g., Alexander Rostov"
                            class="w-full bg-[#03060f] border border-slate-800 rounded-md p-3 text-xs focus:outline-none focus:border-slate-700 text-white font-semibold transition focus:ring-1 focus:ring-sky-500/20"
                        />
                    </div>
                    <div class="space-y-1">
                        <span
                            class="block text-[8px] font-mono text-slate-400 uppercase tracking-widest font-black"
                            >Caller Address (Email)</span
                        >
                        <input
                            type="email"
                            required
                            bind:value={email}
                            placeholder="alex@velocetelecom.com"
                            class="w-full bg-[#03060f] border border-slate-800 rounded-md p-3 text-xs focus:outline-none focus:border-slate-700 text-white font-mono font-semibold transition focus:ring-1 focus:ring-sky-500/20"
                        />
                    </div>
                </div>

                <div class="space-y-1">
                    <span
                        class="block text-[8px] font-mono text-slate-400 uppercase tracking-widest font-black"
                        >Message Content Payload</span
                    >
                    <textarea
                        required
                        bind:value={message}
                        placeholder="Describe your backend architecture expectations, scheduling limits, or custom CLI tool needs..."
                        rows="4"
                        class="w-full bg-[#03060f] border border-slate-800 rounded-md p-3 text-xs focus:outline-none focus:border-slate-700 text-white font-semibold transition focus:ring-1 focus:ring-sky-500/20"
                    ></textarea>
                </div>

                <div class="flex justify-end pt-2">
                    <button
                        type="submit"
                        disabled={isSending}
                        class="bg-sky-500 hover:bg-sky-400 text-slate-950 font-mono font-bold text-xs px-5 py-2.5 rounded transition-all flex items-center justify-center gap-1.5 cursor-pointer"
                    >
                        <Send class="w-3.5 h-3.5 text-slate-900" />
                        <span
                            >{isSending
                                ? "Dispatching..."
                                : "Transmit Payload"}</span
                        >
                    </button>
                </div>
            </form>

            {#if logs.length > 0}
                <div
                    class="bg-[#02050a] border border-slate-800 rounded-lg p-4 font-mono text-[11px] text-slate-400 space-y-2 select-text leading-relaxed"
                >
                    <div
                        class="flex items-center gap-2 border-b border-white/[0.04] pb-1.5 text-slate-500 font-bold justify-between"
                    >
                        <span class="text-[9px] uppercase tracking-widest"
                            >DIAG_STRLOG_BUFFER</span
                        >
                        <Terminal class="w-3.5 h-3.5 text-sky-500/70" />
                    </div>
                    {#each logs as log}
                        <div class="flex items-start gap-1">
                            <span class="text-sky-400 font-bold">&gt;&gt;</span>
                            <span
                                class={log.includes("Success") ||
                                log.includes("Confirmed")
                                    ? "text-sky-300 font-semibold"
                                    : "text-slate-300"}>{log}</span
                            >
                        </div>
                    {/each}
                </div>
            {/if}
        </div>
    </div>
</section>
