"use client";

import { useState } from "react";
import { CashCard } from "./CashCard";
import { BitcoinCard } from "./BitcoinCard";
import { RewardsCard } from "./RewardsCard";

export default function CashCardDemo() {
  const [state, setState] =
    useState<"default" | "loading" | "hidden" | "error">("default");

  return (
    <div className="space-y-6 max-w-md mx-auto">
    
      <div className="bg-card border border-border rounded-xl p-4 shadow-card">
        <h3 className="text-sm font-medium mb-3 text-foreground">
          Component Controls
        </h3>

<div className="grid grid-cols-4 gap-2">

  <button
    onClick={() => setState("default")}
    className={`
      py-1 rounded-md border transition
      ${
        state === "default"
          ? "border-[var(--secondary)] bg-[var(--muted)] text-[var(--primary-foreground)] font-semibold"
          : "border-border hover:bg-muted"
      }
    `}
  >
    Default
  </button>

  <button
    onClick={() => setState("loading")}
    className={`
      py-1 rounded-md border transition
      ${
        state === "loading"
          ? "border-[var(--secondary)] bg-[var(--muted)] text-[var(--primary-foreground)] font-semibold"
          : "border-border hover:bg-muted"
      }
    `}
  >
    Loading
  </button>

  <button
    onClick={() => setState("hidden")}
    className={`
      py-1 rounded-md border transition
      ${
        state === "hidden"
          ? "border-[var(--secondary)] bg-[var(--muted)] text-[var(--primary-foreground)] font-semibold"
          : "border-border hover:bg-muted"
      }
    `}
  >
    Hidden
  </button>

  <button
    onClick={() => setState("error")}
    className={`
      py-1 rounded-md border transition
      ${
        state === "error"
          ? "border-[var(--secondary)] bg-[var(--muted)] text-[var(--destructive)] font-semibold"
          : "border-border text-destructive hover:bg-muted"
      }
    `}
  >
    Error
  </button>
</div>

      </div>
       <CashCard balance={4210.33} state={state} />
      <BitcoinCard sats={200_212_312} usd={203_001.54} state={state} />
      <RewardsCard sats={120_000} usd={95.32} state={state} />

    </div>
  );
}
