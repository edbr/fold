"use client";

import CashCardDemo from "@/components/CashCardDemo";


export default function HomePage() {
  return (
    <main className="min-h-screen bg-background p-6 space-y-8 flex flex-col items-center">
      
      {/* CASH CARD DEMO */}
      <div className="w-full max-w-md">
        <CashCardDemo />
      </div>

     

    </main>
  );
}
