import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex min-h-11 items-center justify-center gap-2 rounded-lg px-5 py-2.5 text-sm font-bold transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-500 disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        default: "bg-navy-900 text-white shadow-card hover:bg-navy-800",
        accent: "bg-cyan-500 text-navy-950 shadow-glow hover:bg-cyan-600",
        teal: "bg-teal-500 text-white hover:bg-teal-600",
        outline:
          "border border-cyan-500/50 bg-white text-navy-900 hover:border-cyan-500 hover:bg-surface-blue",
        ghost: "text-navy-900 hover:bg-surface-blue",
        white: "bg-white text-navy-900 hover:bg-surface-blue"
      },
      size: {
        default: "min-h-11 px-5",
        sm: "min-h-9 px-3 text-xs",
        lg: "min-h-12 px-7 text-base",
        icon: "h-11 w-11 px-0"
      }
    },
    defaultVariants: {
      variant: "default",
      size: "default"
    }
  }
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    return <Comp className={cn(buttonVariants({ variant, size, className }))} ref={ref} {...props} />;
  }
);
Button.displayName = "Button";

export { Button, buttonVariants };
