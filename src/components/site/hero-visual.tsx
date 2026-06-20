import { BarChart3, Bot, BrainCircuit, LineChart, Network, Target, Workflow } from "lucide-react";

import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { cn } from "@/lib/utils";

const floatingCards = [
  { label: "Market Research", value: "Signals", icon: BarChart3, className: "left-4 top-8" },
  { label: "AI Automation", value: "Workflows", icon: Bot, className: "right-5 top-16" },
  { label: "Sales Strategy", value: "Pipeline", icon: Target, className: "left-8 bottom-16" },
  { label: "Marketing Systems", value: "Campaigns", icon: Workflow, className: "right-8 bottom-20" },
  { label: "Business Growth", value: "+ Clarity", icon: LineChart, className: "left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2" },
];

export function HeroVisual() {
  return (
    <div className="relative mx-auto aspect-[0.95] w-full max-w-[34rem] lg:mx-0" aria-label="Abstract AI intelligence dashboard visual">
      <div className="absolute inset-0 rounded-[2.5rem] bg-[radial-gradient(circle_at_50%_50%,rgba(56,189,248,0.18),transparent_38%),radial-gradient(circle_at_70%_25%,rgba(139,92,246,0.22),transparent_34%)] blur-2xl" />
      <Card className="relative h-full overflow-hidden rounded-[2.5rem] border-white/15 bg-[#0b1020]/72 p-5 shadow-[0_0_80px_rgba(56,189,248,0.15)]">
        <div className="absolute inset-0 bg-[linear-gradient(120deg,rgba(56,189,248,0.12),transparent_30%,rgba(139,92,246,0.13)_65%,transparent)]" />
        <div className="absolute inset-0 opacity-50 [background-image:radial-gradient(rgba(255,255,255,0.18)_1px,transparent_1px)] [background-size:24px_24px]" />

        <div className="relative z-10 flex items-center justify-between">
          <Badge>Intelligence OS</Badge>
          <span className="font-mono text-xs text-slate-500">AMBRU.CC / LIVE MODEL</span>
        </div>

        <div className="relative z-10 mt-8 grid grid-cols-[1fr_auto_1fr] items-center gap-4">
          <MiniDashboard />
          <div className="relative grid size-36 place-items-center rounded-full border border-white/10 bg-white/[0.035] shadow-[inset_0_0_40px_rgba(56,189,248,0.08)] sm:size-44">
            <div className="absolute size-32 rounded-full border border-dashed border-sky-300/25 sm:size-40" />
            <div className="absolute size-20 rounded-full border border-violet-300/20 bg-violet-400/5 blur-[1px] sm:size-24" />
            <span className="orbit-dot absolute size-2 rounded-full bg-sky-300 shadow-[0_0_20px_rgba(56,189,248,1)]" />
            <Network className="relative z-10 size-14 text-sky-200" aria-hidden="true" />
          </div>
          <SignalStack />
        </div>

        <div className="relative z-10 mt-9 grid grid-cols-3 gap-3">
          {[
            ["Data", "92%"],
            ["Fit", "4.8x"],
            ["Ops", "24/7"],
          ].map(([label, value]) => (
            <div key={label} className="rounded-2xl border border-white/10 bg-white/[0.045] p-4 text-center">
              <div className="font-mono text-lg font-semibold text-white">{value}</div>
              <div className="mt-1 text-xs text-slate-500">{label}</div>
            </div>
          ))}
        </div>

        {floatingCards.map((item, index) => {
          const Icon = item.icon;
          return (
            <div
              key={item.label}
              className={cn(
                "float-slow absolute z-20 hidden min-w-40 rounded-2xl border border-white/10 bg-[#111827]/80 p-3 shadow-2xl shadow-black/30 backdrop-blur-xl md:block",
                item.className,
              )}
              style={{ animationDelay: `${index * 0.55}s` }}
            >
              <div className="flex items-center gap-3">
                <span className="grid size-9 place-items-center rounded-xl bg-sky-300/10 text-sky-200">
                  <Icon className="size-4" aria-hidden="true" />
                </span>
                <span>
                  <span className="block text-sm font-semibold text-white">{item.label}</span>
                  <span className="block text-xs text-slate-500">{item.value}</span>
                </span>
              </div>
            </div>
          );
        })}
      </Card>
    </div>
  );
}

function MiniDashboard() {
  return (
    <div className="hidden rounded-[1.5rem] border border-white/10 bg-white/[0.04] p-4 sm:block">
      <div className="mb-4 flex items-center gap-2 text-xs font-medium text-slate-400">
        <BrainCircuit className="size-4 text-violet-200" aria-hidden="true" />
        Market model
      </div>
      <div className="space-y-3">
        {[78, 54, 86, 63].map((width, index) => (
          <div key={width} className="h-2 overflow-hidden rounded-full bg-white/10">
            <div
              className="pulse-line h-full rounded-full bg-gradient-to-r from-sky-300 to-violet-400"
              style={{ width: `${width}%`, animationDelay: `${index * 0.4}s` }}
            />
          </div>
        ))}
      </div>
    </div>
  );
}

function SignalStack() {
  return (
    <div className="hidden space-y-3 sm:block">
      {["Intent", "Demand", "Position"].map((label, index) => (
        <div key={label} className="rounded-2xl border border-white/10 bg-white/[0.04] px-4 py-3">
          <div className="flex items-center gap-2 text-xs text-slate-400">
            <span
              className={cn(
                "size-2 rounded-full shadow-[0_0_12px_currentColor]",
                index === 0 && "bg-emerald-400 text-emerald-400",
                index === 1 && "bg-sky-300 text-sky-300",
                index === 2 && "bg-violet-300 text-violet-300",
              )}
            />
            {label}
          </div>
        </div>
      ))}
    </div>
  );
}
