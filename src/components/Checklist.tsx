"use client";

import { useState } from "react";
import { Check, ChevronDown, ChevronUp } from "lucide-react";

interface Item {
  id: string;
  label: string;
  completed: boolean;
}

export function Checklist() {
  const [items, setItems] = useState<Item[]>([
    { id: "order-card", label: "Order a Debit Card", completed: false },
    { id: "refer-friend", label: "Refer a Friend", completed: false },
    { id: "buy-gift", label: "Buy a Gift Card", completed: false },
    { id: "spin-wheel", label: "Spin the Wheel", completed: true },
  ]);

  const [showCode, setShowCode] = useState(false);

  const toggle = (id: string) => {
    setItems((prev) =>
      prev.map((i) =>
        i.id === id ? { ...i, completed: !i.completed } : i
      )
    );
  };

  const codeString = `
export function Checklist() {
  const [items, setItems] = useState([
    { id: "order-card", label: "Order a Debit Card", completed: false },
    { id: "refer-friend", label: "Refer a Friend", completed: false },
    { id: "buy-gift", label: "Buy a Gift Card", completed: false },
    { id: "spin-wheel", label: "Spin the Wheel", completed: true },
  ]);

  const toggle = (id) => {
    setItems(prev =>
      prev.map(i => i.id === id ? { ...i, completed: !i.completed } : i)
    );
  };
}
`.trim();

  return (
    <div className="space-y-4">

      {/* CHECKLIST MODULE */}
      <div className="bg-card border border-border rounded-2xl p-5 shadow-card">

        {/* Header */}
        <h2 className="text-[0.78rem] uppercase tracking-wide font-semibold text-foreground flex items-center gap-2">
          📋 Stacking Sats Checklist
        </h2>

        <p className="text-muted-foreground mt-3 mb-5 text-[0.9rem] leading-relaxed">
          Check off these steps to get the most out of your Fold experience.
        </p>

        {/* Items */}
        <div className="divide-y divide-border">
          {items.map((item) => (
            <ChecklistItem
              key={item.id}
              item={item}
              onToggle={() => toggle(item.id)}
            />
          ))}
        </div>
      </div>

      {/* --- CODE UI BELOW THE CARD, NOT INSIDE --- */}
      <div className="space-y-2">

        <button
          onClick={() => setShowCode(!showCode)}
          className="w-full flex items-center justify-between text-sm text-foreground border border-border rounded-lg px-3 py-2 hover:bg-muted transition"
        >
          <span>{showCode ? "Hide Code" : "Show Code"}</span>
          {showCode ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
        </button>

        {/* Code Block */}
        <div
          className={`overflow-hidden transition-all duration-300 border border-border rounded-lg bg-muted ${
            showCode ? "max-h-[600px] p-4" : "max-h-0 p-0"
          }`}
        >
          <pre className="text-xs overflow-x-auto leading-relaxed whitespace-pre">
{codeString}
          </pre>
        </div>

      </div>
    </div>
  );
}

/* Checklist item row */
function ChecklistItem({
  item,
  onToggle,
}: {
  item: Item;
  onToggle: () => void;
}) {
  return (
    <button
      onClick={onToggle}
      className="w-full flex items-center justify-between py-4 text-left"
    >
      <div className="flex items-center gap-3">
        <div
          className={`h-5 w-5 rounded-full flex items-center justify-center border transition ${
            item.completed
              ? "bg-emerald-600 border-emerald-600"
              : "bg-secondary border-border"
          }`}
        >
          {item.completed && <Check size={14} className="text-white" />}
        </div>

        <span
          className={`text-sm ${
            item.completed
              ? "line-through text-muted-foreground"
              : "text-foreground"
          }`}
        >
          {item.label}
        </span>
      </div>

      <span className="text-muted-foreground">{">"}</span>
    </button>
  );
}
