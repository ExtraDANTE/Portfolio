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
  const data: TelemetryData = {
    userAgent: navigator.userAgent,
    timestamp: new Date().toLocaleTimeString("en-US", { hour12: true }),
    screenWidth: window.screen.width,
    screenHeight: window.screen.height,
  };

  try {
    const res = await fetch("https://ipapi.co/json/");
    if (res.ok) {
      const ipData = await res.json();
      data.ip = ipData.ip;
      data.city = ipData.city;
      data.region = ipData.region;
      data.country = ipData.country_name;
      data.org = ipData.org;
    }
  } catch (error) {
    console.warn("Network boundaries telemetry lookup bypassed.");
  }

  return data;
}

export async function transmitTelegramPayload(
  chatId: string,
  message: string,
): Promise<{ success: boolean; error?: string }> {
  if (!chatId) return { success: false, error: "Chat ID is missing." };
  try {
    const response = await fetch("/api/telegram/sendMessage", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        chatId,
        message,
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
          `Telegram proxy responded with status ${response.status}`,
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
