"use client";

import * as React from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Select } from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/components/ui/toast-provider";
import { submitFeedback } from "@/lib/api-client";

const schema = z.object({
  name: z.string().min(2, "Name is required"),
  phone: z.string().min(8, "Phone is required"),
  rating: z.string().min(1, "Please select a rating"),
  message: z.string().min(8, "Please share a little detail")
});

type Values = z.infer<typeof schema>;

export function FeedbackForm() {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = React.useState(false);
  const { register, handleSubmit, reset, formState: { errors } } = useForm<Values>({ resolver: zodResolver(schema) });

  async function onSubmit() {
    setIsSubmitting(true);
    const result = await submitFeedback();
    setIsSubmitting(false);
    toast({ title: "Feedback received", description: result.message, variant: "success" });
    reset();
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="grid gap-4">
      <Input placeholder="Your name" {...register("name")} />
      {errors.name ? <p className="text-xs font-semibold text-red-600">{errors.name.message}</p> : null}
      <Input placeholder="Phone number" {...register("phone")} />
      {errors.phone ? <p className="text-xs font-semibold text-red-600">{errors.phone.message}</p> : null}
      <Select {...register("rating")}>
        <option value="">How was your experience?</option>
        <option value="excellent">Excellent</option>
        <option value="good">Good</option>
        <option value="average">Average</option>
        <option value="needs-improvement">Needs improvement</option>
      </Select>
      {errors.rating ? <p className="text-xs font-semibold text-red-600">{errors.rating.message}</p> : null}
      <Textarea placeholder="Share your feedback" {...register("message")} />
      {errors.message ? <p className="text-xs font-semibold text-red-600">{errors.message.message}</p> : null}
      <Button type="submit" variant="accent" disabled={isSubmitting}>
        {isSubmitting ? "Submitting..." : "Submit Feedback"}
      </Button>
    </form>
  );
}
