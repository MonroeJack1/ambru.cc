import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

export const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-full text-sm font-semibold tracking-[-0.01em] transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-300 focus-visible:ring-offset-2 focus-visible:ring-offset-[#050816] disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",
  {
    variants: {
      variant: {
        primary:
          "bg-sky-300 text-slate-950 shadow-[0_0_35px_rgba(56,189,248,0.35)] hover:-translate-y-0.5 hover:bg-sky-200 hover:shadow-[0_0_48px_rgba(56,189,248,0.5)]",
        secondary:
          "border border-white/10 bg-white/[0.04] text-slate-100 backdrop-blur-xl hover:-translate-y-0.5 hover:border-sky-300/50 hover:bg-white/[0.08] hover:text-white",
        ghost:
          "text-slate-300 hover:bg-white/[0.06] hover:text-white",
        violet:
          "bg-violet-500 text-white shadow-[0_0_35px_rgba(139,92,246,0.35)] hover:-translate-y-0.5 hover:bg-violet-400",
      },
      size: {
        default: "h-11 px-5",
        sm: "h-9 px-4 text-xs",
        lg: "h-12 px-7 text-base",
        icon: "size-11",
      },
    },
    defaultVariants: {
      variant: "primary",
      size: "default",
    },
  },
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, ...props }, ref) => {
    return (
      <button
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    );
  },
);
Button.displayName = "Button";

export { Button };
