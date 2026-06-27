"use client";

import * as React from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Upload } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Select } from "@/components/ui/select";
import { useToast } from "@/components/ui/toast-provider";
import { careers } from "@/data/careers";
import { submitResume } from "@/lib/api-client";

const schema = z.object({
  name: z.string().min(2, "Name is required"),
  phone: z.string().min(8, "Phone is required"),
  email: z.string().email("Valid email is required"),
  job: z.string().min(1, "Please select a job")
});

type Values = z.infer<typeof schema>;

export function ResumeForm() {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = React.useState(false);
  const { register, handleSubmit, reset, formState: { errors } } = useForm<Values>({ resolver: zodResolver(schema) });

  async function onSubmit() {
    setIsSubmitting(true);
    const result = await submitResume();
    setIsSubmitting(false);
    toast({ title: "Application submitted", description: result.message, variant: "success" });
    reset();
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="grid gap-4">
      <Input placeholder="Full name" {...register("name")} />
      {errors.name ? <p className="text-xs font-semibold text-red-600">{errors.name.message}</p> : null}
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
      <Select {...register("job")}>
        <option value="">Select position</option>
        {careers.map((career) => (
          <option key={career.slug} value={career.slug}>
            {career.title}
          </option>
        ))}
      </Select>
      {errors.job ? <p className="text-xs font-semibold text-red-600">{errors.job.message}</p> : null}
      <Input type="file" accept=".pdf,.doc,.docx" />
      <Button type="submit" variant="accent" disabled={isSubmitting}>
        <Upload className="h-4 w-4" />
        {isSubmitting ? "Submitting..." : "Submit Resume"}
      </Button>
    </form>
  );
}
