"use client";

import { cn } from "@/lib/utils";
import Image from "next/image";

interface CashCardProps {
  balance: number;
  state: "default" | "loading" | "hidden" | "error";
}

export function CashCard({ balance, state }: CashCardProps) {
  const isLoading = state === "loading";
  const isHidden = state === "hidden";
  const isError = state === "error";

  const displayValue = isHidden ? "•••••" : `$${balance.toFixed(2)}`;

  return (
    <div
      className={cn(
        "rounded-xl bg-card shadow-card p-cardPad border",
        isError ? "border-destructive" : "border-border"
      )}
    >
      {/* Header */}
      <div className="flex justify-between items-center mb-4">
        <span className="text-brand-brown text-lg font-semibold flex items-center gap-1">
          <Image src="/Bitcoinicon.png" width={20} height={20} alt="Cash Icon" />
          CASH
        </span>

        {!isLoading && !isError && (
          <button className="text-muted-foreground hover:text-foreground transition">
            {isHidden ? "Show" : "Hide"}
          </button>
        )}
      </div>

      {/* Balance */}
      <div className="text-4xl font-semibold text-foreground mb-4 min-h-[42px]">
        {isLoading ? (
          <div className="space-y-2">
            <div className="h-5 w-1/2 bg-border rounded animate-pulse" />
            <div className="h-3 w-1/3 bg-border rounded animate-pulse" />
          </div>
        ) : isError ? (
          <div className="text-destructive text-[1rem] font-medium flex items-center gap-2">
            <span>⚠️ Error loading balance</span>
          </div>
        ) : (
          displayValue
        )}
      </div>

      {/* Actions (only in default + hidden) */}
      {!isLoading && !isError && (
        <div className="grid grid-cols-2 gap-3">
          <button className="bg-brand-yellow text-brand-ink rounded-md py-2 hover:brightness-90">
            Deposit
          </button>
          <button className="border border-border rounded-md py-2 hover:bg-muted">
            Withdraw
          </button>
        </div>
      )}

      {/* FDIC  */}
      {!isLoading && !isError && (
        <p className="text-xs text-muted-foreground mt-4">FDIC Insured</p>
      )}
    </div>
  );
}
