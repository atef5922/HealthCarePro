"use client";

import * as React from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/components/ui/toast-provider";
import { submitQuery } from "@/lib/api-client";

const schema = z.object({
  name: z.string().min(2, "Please enter your name"),
  phone: z.string().min(8, "Please enter a valid phone number"),
  email: z.string().email("Please enter a valid email"),
  message: z.string().min(8, "Please write your query")
});

type Values = z.infer<typeof schema>;

export function QueryForm() {
  const [isSubmitting, setIsSubmitting] = React.useState(false);
  const { toast } = useToast();
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors }
  } = useForm<Values>({ resolver: zodResolver(schema) });

  async function onSubmit() {
    setIsSubmitting(true);
    const result = await submitQuery();
    setIsSubmitting(false);
    toast({ title: "Query submitted", description: result.message, variant: "success" });
    reset();
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="grid gap-4">
      <div>
        <Input placeholder="Full name" {...register("name")} />
        {errors.name ? <p className="mt-1 text-xs font-semibold text-red-600">{errors.name.message}</p> : null}
      </div>
      <div className="grid gap-4 sm:grid-cols-2">
        <div>
          <Input placeholder="Phone number" {...register("phone")} />
          {errors.phone ? <p className="mt-1 text-xs font-semibold text-red-600">{errors.phone.message}</p> : null}
        </div>
        <div>
          <Input placeholder="Email address" {...register("email")} />
          {errors.email ? <p className="mt-1 text-xs font-semibold text-red-600">{errors.email.message}</p> : null}
        </div>
      </div>
      <div>
        <Textarea placeholder="How can we help?" {...register("message")} />
        {errors.message ? <p className="mt-1 text-xs font-semibold text-red-600">{errors.message.message}</p> : null}
      </div>
      <Button type="submit" variant="accent" disabled={isSubmitting}>
        <Send className="h-4 w-4" />
        {isSubmitting ? "Sending..." : "Send Query"}
      </Button>
    </form>
  );
}
