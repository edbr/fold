"use client";

export function ExplanationModule() {
  return (
    <div className="bg-card border border-border rounded-2xl p-6 shadow-card space-y-4">

      {/* Title */}
      <h2 className="text-[0.78rem] uppercase tracking-wide font-semibold">
        📘 Implementation Notes
      </h2>

      {/* Intro */}
      <p className="text-muted-foreground text-sm leading-relaxed">
        This section explains the technical stack, styling rules, and important constraints used when building this demo. 
        It’s meant to help designers + engineers understand how these modules were created and how to extend them.
      </p>

      {/* STACK */}
      <div className="space-y-2">
        <h3 className="text-sm font-semibold">Tech Stack</h3>

        <ul className="text-sm text-muted-foreground space-y-1 list-disc pl-5">
          <li><strong>Next.js 15 / App Router</strong> — SSR-first foundation</li>
          <li><strong>React Server + Client Components</strong> — interactivity only where it is needed</li>
          <li><strong>Tailwind CSS with CSS Variables</strong> — theme tokens exposed in <code>globals.css</code></li>
          <li><strong>Lucide Icons</strong> — consistent, modern iconography</li>
        </ul>
      </div>

      {/* TAILWIND */}
      <div className="space-y-2">
        <h3 className="text-sm font-semibold">Important Tailwind Notes</h3>

        <ul className="text-sm text-muted-foreground space-y-1 list-disc pl-5">
          <li>
            <strong>All colors come from CSS variables</strong> defined in <code>:root</code> and <code>.dark</code>.
          </li>
          <li>
            <strong>Semantic tokens</strong> (e.g. <code>bg-card</code>, <code>text-muted-foreground</code>) map directly 
            to CSS variables — enabling instant theme swapping.
          </li>
          <li>
            Components use <strong>rounded-xl</strong>, <strong>border-border</strong>, and <strong>shadow-card</strong> for a unified system feel.
          </li>
          <li>
            <strong>Utility-first styling</strong> ensures tokens + spacing stay consistent across modules.
          </li>
        </ul>
      </div>

      {/* ARCHITECTURE */}
      <div className="space-y-2">
        <h3 className="text-sm font-semibold">Component Architecture</h3>

        <ul className="text-sm text-muted-foreground space-y-1 list-disc pl-5">
          <li>
            Components like <code>CashCard</code>, <code>Checklist</code>, and <code>ColorTokens</code> are <strong>client components</strong> because they use state.
          </li>
          <li>
            Everything else (layout, metadata, wrappers) remains <strong>server-rendered</strong>.
          </li>
          <li>
            <strong>Code reveal sections</strong> intentionally sit <em>outside</em> the component card structure to maintain visual clarity.
          </li>
          <li>
            The layout uses a <strong>two-column responsive grid</strong> with center alignment for a dashboard-like feel.
          </li>
        </ul>
      </div>
    </div>
  );
}
