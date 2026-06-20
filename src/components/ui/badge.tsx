import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const badgeVariants = cva(
  "inline-flex w-fit items-center gap-2 rounded-full border px-3 py-1 text-xs font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-sky-300 focus:ring-offset-2 focus:ring-offset-[#050816]",
  {
    variants: {
      variant: {
        default: "border-sky-300/20 bg-sky-300/10 text-sky-200",
        violet: "border-violet-300/20 bg-violet-400/10 text-violet-200",
        success: "border-emerald-300/20 bg-emerald-400/10 text-emerald-200",
        muted: "border-white/10 bg-white/[0.04] text-slate-300",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  },
);

export interface BadgeProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof badgeVariants> {}

function Badge({ className, variant, ...props }: BadgeProps) {
  return <div className={cn(badgeVariants({ variant }), className)} {...props} />;
}

export { Badge, badgeVariants };
