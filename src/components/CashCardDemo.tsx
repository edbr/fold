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
      <CashCard balance={4210.33} state={state} />
      <BitcoinCard sats={200_212_312} usd={203_001.54} state={state} />
      <RewardsCard sats={120_000} usd={95.32} state={state} />

      <div className="bg-card border border-border rounded-xl p-4 shadow-card">
        <h3 className="text-sm font-medium mb-3 text-foreground">
          Component Controls
        </h3>

        <div className="grid grid-cols-4 gap-2">
          <button onClick={() => setState("default")} className="border border-border rounded-md py-1">
            Default
          </button>

          <button onClick={() => setState("loading")} className="border border-border rounded-md py-1">
            Loading
          </button>

          <button onClick={() => setState("hidden")} className="border border-border rounded-md py-1">
            Hidden
          </button>

          <button onClick={() => setState("error")} className="border border-destructive text-destructive rounded-md py-1">
            Error
          </button>
        </div>
      </div>
    </div>
  );
}
