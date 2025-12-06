"use client";

import Image from "next/image";
import { cn } from "@/lib/utils";

interface RewardsCardProps {
  sats: number;
  usd: number;
  state: "default" | "loading" | "hidden" | "error";
}

export function RewardsCard({ sats, usd, state }: RewardsCardProps) {
  const isLoading = state === "loading";
  const isHidden = state === "hidden";
  const isError = state === "error";

  // DISPLAY LOGIC
  const satsDisplay =
    isLoading ? "" :
    isHidden ? "•••••" :
    sats.toLocaleString();

  const usdDisplay =
    isLoading ? "" :
    isHidden ? "•••••" :
    usd.toLocaleString();

  return (
    <div
      className={cn(
        "bg-card rounded-2xl shadow-card border p-5 pb-4 space-y-4",
        isError ? "border-destructive" : "border-border"
      )}
    >
      {/* HEADER */}
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-1">
          <Image
            src="/RewardsIcon.png"
            width={20}
            height={20}
            alt="Rewards"
            className="opacity-90"
          />
          <span className="font-semibold uppercase text-rewards tracking-wider text-[0.75rem]">
            Rewards
          </span>
        </div>

        {/* Hide chevron during loading or error */}
        {!isLoading && !isError && (
          <span className="text-muted-foreground text-[1rem] opacity-60">›</span>
        )}
      </div>

      {/* BALANCES */}
      <div className="space-y-1 min-h-[40px]">

        {/* SATS */}
        {isLoading ? (
          <div className="animate-pulse bg-muted rounded-md h-6 w-24" />
        ) : isError ? (
          <div className="text-destructive font-medium text-[0.9rem]">
            Error loading rewards
          </div>
        ) : (
          <div className="text-[1.35rem] font-semibold text-foreground leading-snug">
            {satsDisplay} sats
          </div>
        )}

        {/* USD */}
        {!isLoading && !isError && (
          <div className="text-muted-foreground text-[0.95rem]">
            ${usdDisplay}
          </div>
        )}

        {isLoading && (
          <div className="animate-pulse bg-muted rounded-md h-4 w-20" />
        )}
      </div>

    </div>
  );
}
