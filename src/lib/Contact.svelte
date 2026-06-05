<script lang="ts">
    import { Mail, Send, MapPin, Clock } from "lucide-svelte";
    import { profile } from "./data";

    let { currentTime = "" } = $props<{
        currentTime: string;
    }>();

    let copied = $state(false);

    const handleCopy = () => {
        navigator.clipboard.writeText(profile.email);
        copied = true;
        setTimeout(() => (copied = false), 2000);
    };

    const handleDirectMail = () => {
        window.location.href = `mailto:ssdcv608@gmail.com`;
    };
</script>

<section id="contact-gate" class="py-24 max-w-4xl mx-auto px-6">
    <div
        class="bg-slate-900/70 border border-slate-800 rounded-2xl overflow-hidden shadow-2xl p-8 sm:p-10 relative z-10 text-left"
    >
        <div class="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div class="space-y-5">
                <div
                    class="flex justify-between items-center bg-slate-950 p-2.5 rounded border border-[#101625]"
                >
                    <span
                        class="text-[10px] font-mono font-bold text-sky-400 uppercase tracking-widest block"
                    >
                        Gateway Telemetry
                    </span>
                    <span class="w-2 h-2 rounded-full bg-sky-500 animate-pulse"
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
                        Submit an inquiry to transmit a raw message envelope
                        directly to my inbound mail interface routing terminal.
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

            <div
                class="space-y-4 bg-slate-950/50 p-6 rounded-xl border border-slate-800/60 flex flex-col justify-center"
            >
                <div
                    class="text-[10px] tracking-wide text-slate-500 font-mono text-center"
                >
                    Direct Endpoint:
                    <span
                        class="block font-mono text-sky-400 bg-slate-950 px-3 py-3 rounded border border-slate-800 mt-2 select-all text-center font-bold text-xs"
                    >
                        {profile.email}
                    </span>
                </div>

                <div class="space-y-2 pt-2">
                    <button
                        onclick={handleDirectMail}
                        class="bg-sky-500 hover:bg-sky-400 text-slate-950 font-mono font-bold text-xs px-5 py-3 rounded-lg transition-all flex items-center justify-center gap-2 cursor-pointer w-full uppercase tracking-wider"
                    >
                        <Send class="w-4 h-4 text-slate-900" />
                        <span>Transmit Payload</span>
                    </button>

                    <button
                        onclick={handleCopy}
                        class="bg-slate-950 border border-white/10 text-sky-400 px-3 py-2.5 rounded-lg text-[10px] cursor-pointer hover:bg-slate-900 hover:text-sky-300 transition-all w-full font-bold uppercase tracking-widest font-mono"
                    >
                        {copied ? "Endpoint Copied!" : "Copy Endpoint Address"}
                    </button>
                </div>
            </div>
        </div>
    </div>
</section>
