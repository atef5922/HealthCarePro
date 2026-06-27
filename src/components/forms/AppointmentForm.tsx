"use client";

import * as React from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Select } from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/components/ui/toast-provider";
import { doctors } from "@/data/doctors";
import { specialities } from "@/data/specialities";
import { submitAppointment } from "@/lib/api-client";

const schema = z.object({
  name: z.string().min(2, "Please enter patient name"),
  phone: z.string().min(8, "Please enter a valid phone number"),
  email: z.string().email("Please enter a valid email").optional().or(z.literal("")),
  department: z.string().min(1, "Please choose a department"),
  doctor: z.string().optional(),
  preferredDate: z.string().min(1, "Please choose a preferred date"),
  message: z.string().optional()
});

type AppointmentValues = z.infer<typeof schema>;

export function AppointmentForm({ compact = false }: { compact?: boolean }) {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = React.useState(false);
  const {
    register,
    handleSubmit,
    reset,
    setValue,
    formState: { errors }
  } = useForm<AppointmentValues>({
    resolver: zodResolver(schema),
    defaultValues: {
      name: "",
      phone: "",
      email: "",
      department: "",
      doctor: "",
      preferredDate: "",
      message: ""
    }
  });

  React.useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const doctorSlug = params.get("doctor");
    const selectedDoctor = doctors.find((doctor) => doctor.slug === doctorSlug);
    if (selectedDoctor) {
      setValue("doctor", selectedDoctor.slug);
      setValue("department", selectedDoctor.specialtySlug);
    }
  }, [setValue]);

  async function onSubmit() {
    setIsSubmitting(true);
    const result = await submitAppointment();
    setIsSubmitting(false);
    toast({ title: "Appointment request sent", description: result.message, variant: "success" });
    reset();
  }

  const errorClass = "mt-1 text-xs font-semibold text-red-600";

  return (
    <form onSubmit={handleSubmit(onSubmit)} className={compact ? "space-y-4" : "grid gap-5 md:grid-cols-2"}>
      <div>
        <Input placeholder="Patient name" {...register("name")} />
        {errors.name ? <p className={errorClass}>{errors.name.message}</p> : null}
      </div>
      <div>
        <Input placeholder="Phone number" {...register("phone")} />
        {errors.phone ? <p className={errorClass}>{errors.phone.message}</p> : null}
      </div>
      <div>
        <Input placeholder="Email (optional)" {...register("email")} />
        {errors.email ? <p className={errorClass}>{errors.email.message}</p> : null}
      </div>
      <div>
        <Select {...register("department")}>
          <option value="">Select department</option>
          {specialities.map((specialty) => (
            <option key={specialty.slug} value={specialty.slug}>
              {specialty.title}
            </option>
          ))}
        </Select>
        {errors.department ? <p className={errorClass}>{errors.department.message}</p> : null}
      </div>
      <div>
        <Select {...register("doctor")}>
          <option value="">Preferred doctor (optional)</option>
          {doctors.map((doctor) => (
            <option key={doctor.slug} value={doctor.slug}>
              {doctor.name}
            </option>
          ))}
        </Select>
      </div>
      <div>
        <Input type="date" {...register("preferredDate")} />
        {errors.preferredDate ? <p className={errorClass}>{errors.preferredDate.message}</p> : null}
      </div>
      <div className={compact ? "" : "md:col-span-2"}>
        <Textarea placeholder="Message or preferred time" {...register("message")} />
      </div>
      <div className={compact ? "" : "md:col-span-2"}>
        <Button type="submit" variant="accent" className="w-full" disabled={isSubmitting}>
          <Send className="h-4 w-4" />
          {isSubmitting ? "Submitting..." : "Submit Appointment"}
        </Button>
      </div>
    </form>
  );
}
