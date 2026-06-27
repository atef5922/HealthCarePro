"use client";

import * as React from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { HelpCircle, LogIn, RotateCcw } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useToast } from "@/components/ui/toast-provider";
import { portalLogin } from "@/lib/api-client";

const schema = z.object({
  uhid: z.string().min(3, "UHID or registration number is required"),
  credential: z.string().min(4, "Registered mobile or password is required")
});

type Values = z.infer<typeof schema>;

export function PortalLoginForm() {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = React.useState(false);
  const { register, handleSubmit, reset, formState: { errors } } = useForm<Values>({ resolver: zodResolver(schema) });

  async function onSubmit() {
    setIsSubmitting(true);
    const result = await portalLogin();
    setIsSubmitting(false);
    toast({ title: "Patient portal demo", description: result.message, variant: "success" });
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
      <div>
        <Input placeholder="UHID / Registration Number" {...register("uhid")} />
        {errors.uhid ? <p className="mt-1 text-xs font-semibold text-red-600">{errors.uhid.message}</p> : null}
      </div>
      <div>
        <Input placeholder="Registered Mobile Number / Password" type="password" {...register("credential")} />
        {errors.credential ? <p className="mt-1 text-xs font-semibold text-red-600">{errors.credential.message}</p> : null}
      </div>
      <div className="flex flex-wrap gap-3">
        <Button type="submit" variant="accent" disabled={isSubmitting}>
          <LogIn className="h-4 w-4" />
          {isSubmitting ? "Signing in..." : "Sign In"}
        </Button>
        <Button type="button" variant="outline" onClick={() => reset()}>
          <RotateCcw className="h-4 w-4" />
          Reset
        </Button>
      </div>
      <button type="button" className="text-sm font-bold text-cyan-700 hover:text-navy-900">
        Forgot Password?
      </button>
      <div className="rounded-xl bg-surface-blue p-4">
        <p className="flex items-center gap-2 text-sm font-bold text-navy-900">
          <HelpCircle className="h-4 w-4 text-cyan-600" />
          How to use patient portal
        </p>
        <p className="mt-2 text-sm leading-6 text-slate-600">
          Enter your UHID and registered mobile number. This demo validates locally and shows where secure authentication will connect.
        </p>
      </div>
    </form>
  );
}
