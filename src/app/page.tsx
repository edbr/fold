"use client";

import CashCardDemo from "@/components/CashCardDemo";
import { Checklist } from "@/components/Checklist";
import { ColorTokens } from "@/components/ColorTokens";
import { ExplanationModule } from "@/components/ExplanationModule";

export default function HomePage() {
  return (
    <main className="min-h-screen bg-background p-6 flex flex-col items-center">
      
      {/* MAIN GRID */}
      <div className="w-full max-w-5xl grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
        
        {/* LEFT — CASH CARDS */}
        <div className="space-y-6">
          <CashCardDemo />
        </div>

        {/* RIGHT — CHECKLIST */}
        <div className="space-y-6">
          <Checklist />
        </div>

        {/* FULL-WIDTH — COLOR TOKENS */}
        <div className="md:col-span-2">
          <ColorTokens />
        </div>
      </div>

      {/* IMPLEMENTATION NOTES — full width, clean, separate */}
      <div className="w-full max-w-3xl">
        <ExplanationModule />
      </div>

    </main>
  );
}
