"use client";
import { useState, useCallback } from "react";
import { SiDiscord } from "react-icons/si";

const DISCORD_USERNAME = "@Antheagao";

export default function CopyDiscordButton() {
  const [copied, setCopied] = useState(false);

  const copy = useCallback(async () => {
    try {
      await navigator.clipboard.writeText(DISCORD_USERNAME);
    } catch {
      const ta = document.createElement("textarea");
      ta.value = DISCORD_USERNAME;
      document.body.appendChild(ta);
      ta.select();
      document.execCommand("copy");
      ta.remove();
    }
    setCopied(true);
    setTimeout(() => setCopied(false), 1500);
  }, []);

  return (
    <button
      onClick={copy}
      className="px-6 py-3 border border-[#5865F2] text-white/90 hover:bg-[#5865F2]/20 rounded-lg transition-colors inline-flex items-center gap-2"
      aria-label="Copy my Discord username"
    >
      <SiDiscord className="w-5 h-5" aria-hidden />
      {copied ? "Copied!" : "Copy my Discord"}
    </button>
  );
}
