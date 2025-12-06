"use client";

import { useState } from "react";
import { Check, Copy } from "lucide-react";

interface ColorToken {
  name: string;
  var: string;
}

const colorTokens: ColorToken[] = [
  { name: "background", var: "--background" },
  { name: "foreground", var: "--foreground" },
  { name: "card", var: "--card" },
  { name: "card-foreground", var: "--card-foreground" },
  { name: "primary", var: "--primary" },
  { name: "primary-foreground", var: "--primary-foreground" },
  { name: "secondary", var: "--secondary" },
  { name: "secondary-foreground", var: "--secondary-foreground" },
  { name: "muted", var: "--muted" },
  { name: "muted-foreground", var: "--muted-foreground" },
  { name: "border", var: "--border" },
  { name: "ring", var: "--ring" },
  { name: "destructive", var: "--destructive" },
  { name: "destructive-foreground", var: "--destructive-foreground" },
];

export function ColorTokens() {
  const [copied, setCopied] = useState<string | null>(null);

  const handleCopy = async (value: string) => {
    try {
      await navigator.clipboard.writeText(value);
      setCopied(value);
      setTimeout(() => setCopied(null), 1200);
    } catch (err) {
      console.error("Clipboard error:", err);
    }
  };

  return (
    <div className="w-full space-y-4">
      <h2 className="text-[0.78rem] uppercase tracking-wide font-semibold">
        🎨 Color Tokens
      </h2>

      <p className="text-muted-foreground text-sm -mt-2">
        Click any token to copy its CSS variable.
      </p>

      <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
        {colorTokens.map((token) => (
          <button
            key={token.var}
            onClick={() => handleCopy(token.var)}
            className="group relative flex items-center gap-3 p-3 rounded-xl border border-border bg-card hover:bg-muted transition text-left"
          >
            <div
              className="h-8 w-8 rounded-lg border border-border"
              style={{ backgroundColor: `var(${token.var})` }}
            />

            <div className="flex flex-col">
              <span className="text-sm font-medium">{token.name}</span>
              <span className="text-xs text-muted-foreground">{token.var}</span>
            </div>

            <Copy
              size={16}
              className="absolute right-3 opacity-40 group-hover:opacity-80 transition"
            />

            {copied === token.var && (
              <div className="absolute inset-0 rounded-xl bg-card/90 backdrop-blur-sm flex items-center justify-center transition-opacity">
                <span className="flex items-center gap-1 text-sm font-medium">
                  <Check size={14} /> Copied!
                </span>
              </div>
            )}
          </button>
        ))}
      </div>
    </div>
  );
}
