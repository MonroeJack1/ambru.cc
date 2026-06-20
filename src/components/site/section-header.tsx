import type { ReactNode } from "react";

import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";

type SectionHeaderProps = {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  badgeVariant?: "default" | "violet" | "success" | "muted";
  children?: ReactNode;
};

export function SectionHeader({
  eyebrow,
  title,
  description,
  align = "center",
  badgeVariant = "muted",
  children,
}: SectionHeaderProps) {
  return (
    <div
      className={cn(
        "mx-auto mb-10 max-w-3xl",
        align === "center" ? "text-center" : "mx-0 text-left",
      )}
    >
      {eyebrow ? <Badge variant={badgeVariant}>{eyebrow}</Badge> : null}
      <h2 className="mt-5 text-balance text-3xl font-semibold tracking-[-0.055em] text-white sm:text-4xl lg:text-5xl">
        {title}
      </h2>
      {description ? (
        <p className="mt-5 text-pretty text-base leading-8 text-slate-400 sm:text-lg">
          {description}
        </p>
      ) : null}
      {children}
    </div>
  );
}
