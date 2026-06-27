"use client";

import * as React from "react";
import { CheckCircle2, Info, X } from "lucide-react";
import { cn } from "@/lib/utils";

type Toast = {
  id: number;
  title: string;
  description?: string;
  variant?: "success" | "info" | "error";
};

type ToastContextValue = {
  toast: (toast: Omit<Toast, "id">) => void;
};

const ToastContext = React.createContext<ToastContextValue | null>(null);

export function useToast() {
  const context = React.useContext(ToastContext);
  if (!context) {
    throw new Error("useToast must be used within ToastProvider");
  }
  return context;
}

export function ToastProvider({ children }: { children: React.ReactNode }) {
  const [toasts, setToasts] = React.useState<Toast[]>([]);

  const toast = React.useCallback((nextToast: Omit<Toast, "id">) => {
    const id = Date.now();
    setToasts((current) => [...current, { id, ...nextToast }]);
    window.setTimeout(() => {
      setToasts((current) => current.filter((item) => item.id !== id));
    }, 4200);
  }, []);

  return (
    <ToastContext.Provider value={{ toast }}>
      {children}
      <div className="fixed right-4 top-4 z-[80] flex w-[calc(100vw-2rem)] max-w-sm flex-col gap-3">
        {toasts.map((item) => {
          const Icon = item.variant === "success" ? CheckCircle2 : Info;
          return (
            <div
              key={item.id}
              className={cn(
                "rounded-xl border bg-white p-4 shadow-card",
                item.variant === "error" ? "border-red-200" : "border-cyan-500/20"
              )}
            >
              <div className="flex gap-3">
                <Icon
                  className={cn(
                    "mt-0.5 h-5 w-5 shrink-0",
                    item.variant === "error" ? "text-red-500" : "text-teal-500"
                  )}
                />
                <div className="min-w-0 flex-1">
                  <p className="font-heading text-sm font-bold text-slate-950">{item.title}</p>
                  {item.description ? (
                    <p className="mt-1 text-sm leading-6 text-slate-700">{item.description}</p>
                  ) : null}
                </div>
                <button
                  className="rounded-md p-1 text-slate-500 transition hover:bg-slate-100"
                  onClick={() => setToasts((current) => current.filter((toast) => toast.id !== item.id))}
                  aria-label="Dismiss notification"
                >
                  <X className="h-4 w-4" />
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </ToastContext.Provider>
  );
}
