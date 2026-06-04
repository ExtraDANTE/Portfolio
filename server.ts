import express from "express";
import path from "path";
import dotenv from "dotenv";
import { createServer as createViteServer } from "vite";

// Load environment variables from .env
dotenv.config();

async function startServer() {
  const app = express();
  const PORT = 3000;

  app.use(express.json());

  app.use((req, res, next) => {
    next();
  });

  const botToken = process.env.ViteTeleGramBotToken;

  app.get("/api/telegram/getMe", async (req, res) => {
    try {
      const response = await fetch(
        `https://api.telegram.org/bot${botToken}/getMe`,
      );
      const data = await response.json();
      res.json(data);
    } catch (err: any) {
      res.status(500).json({
        ok: false,
        error: err.message || "Failed to contact Telegram API",
      });
    }
  });

  app.get("/api/telegram/getUpdates", async (req, res) => {
    try {
      const response = await fetch(
        `https://api.telegram.org/bot${botToken}/getUpdates`,
      );
      const data = await response.json();
      res.json(data);
    } catch (err: any) {
      res.status(500).json({
        ok: false,
        error: err.message || "Failed to contact Telegram API",
      });
    }
  });

  app.post("/api/telegram/sendMessage", async (req, res) => {
    try {
      const { chatId, message } = req.body;
      if (!chatId || !message) {
        return res
          .status(400)
          .json({ ok: false, error: "Missing payload parameters" });
      }

      const response = await fetch(
        `https://api.telegram.org/bot${botToken}/sendMessage`,
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            chat_id: chatId,
            text: message,
            parse_mode: "Markdown",
          }),
        },
      );

      const data = await response.json();
      res.json(data);
    } catch (err: any) {
      res.status(500).json({
        ok: false,
        error: err.message || "Failed to transmit message securely",
      });
    }
  });

  app.get("/api/github/repos", async (req, res) => {
    try {
      const response = await fetch(
        "https://api.github.com/users/ExtraDANTE/repos?per_page=100&sort=updated",
        {
          headers: {
            "User-Agent": "Express-Server-DANTE-Portfolio",
          },
        },
      );
      if (!response.ok) {
        throw new Error(`GitHub API returned status ${response.status}`);
      }
      const data = await response.json();
      res.json(data);
    } catch (err: any) {
      res.status(500).json({
        ok: false,
        error: err.message || "Failed to contact GitHub API",
      });
    }
  });

  if (process.env.NODE_ENV !== "production") {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: "spa",
    });
    app.use(vite.middlewares);
  } else {
    const distPath = path.join(process.cwd(), "dist");
    app.use(express.static(distPath));
    app.get("*", (req, res) => {
      res.sendFile(path.join(distPath, "index.html"));
    });
  }

  app.listen(PORT, "0.0.0.0", () => {
    console.log(
      `[DANTE SECURITY SYSTEM] Full-stack architecture live on port ${PORT}`,
    );
  });
}

startServer();
