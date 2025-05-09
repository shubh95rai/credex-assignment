"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem,
} from "@/components/ui/select";
import { z } from "zod";
import { Controller, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { toast } from "sonner";
import AnimatedComponent from "../AnimatedComponent";

const ContactSchema = z.object({
  name: z
    .string()
    .trim()
    .min(1, { message: "Name is required" })
    .min(3, { message: "Name must be at least 3 characters" })
    .max(30, { message: "Name must be at most 20 characters" }),
  email: z
    .string()
    .min(1, { message: "Email is required" })
    .email({ message: "Please enter a valid email" }),
  company: z
    .string()
    .trim()
    .min(1, { message: "Company is required" })
    .min(3, { message: "Company must be at least 3 characters" })
    .max(30, { message: "Company must be at most 20 characters" }),
  licenseType: z.string().min(1, { message: "License Type is required" }),
  message: z
    .string()
    .trim()
    .min(1, { message: "Message is required" })
    .min(5, { message: "Message must be at least 5 characters" }),
});

export default function ContactForm() {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
    control,
  } = useForm({
    resolver: zodResolver(ContactSchema),
    defaultValues: {
      name: "",
      email: "",
      company: "",
      licenseType: "",
      message: "",
    },
  });

  function onSubmit(data) {
    console.log("object");
    try {
      reset();
      toast.success("Message Sent!");
    } catch (error) {
      console.error(error);
      toast.error("Something went wrong. Please try again.");
    }
  }

  return (
    <section className="py-16 bg-card px-4 text-center">
      <AnimatedComponent>
        <h2 className="text-3xl font-semibold mb-10">Get In Touch</h2>

        <form
          className="max-w-2xl mx-auto grid gap-4 text-left"
          onSubmit={handleSubmit(onSubmit)}
        >
          <div>
            <Input placeholder="Name" {...register("name")} />
            {errors.name && (
              <p className="text-sm text-blue-600 mt-2">
                {errors.name.message}
              </p>
            )}
          </div>

          <div>
            <Input type="email" placeholder="Email" {...register("email")} />
            {errors.email && (
              <p className="text-sm text-blue-600 mt-2">
                {errors.email.message}
              </p>
            )}
          </div>

          <div>
            <Input placeholder="Company" {...register("company")} />
            {errors.company && (
              <p className="text-sm text-blue-600 mt-2">
                {errors.company.message}
              </p>
            )}
          </div>

          <div>
            <Controller
              control={control}
              name="licenseType"
              render={({ field }) => (
                <Select value={field.value} onValueChange={field.onChange}>
                  <SelectTrigger>
                    <SelectValue placeholder="Select License Type" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="office">Microsoft Office</SelectItem>
                    <SelectItem value="adobe">Adobe Creative Suite</SelectItem>
                    <SelectItem value="other">Other</SelectItem>
                  </SelectContent>
                </Select>
              )}
            />
            {errors.licenseType && (
              <p className="text-sm text-blue-600 mt-2">
                {errors.licenseType.message}
              </p>
            )}
          </div>

          <div>
            <Textarea placeholder="Your message..." {...register("message")} />
            {errors.message && (
              <p className="text-sm text-blue-600 mt-2">
                {errors.message.message}
              </p>
            )}
          </div>
          <Button type="submit" disabled={isSubmitting}>
            {isSubmitting ? "Submitting..." : "Submit"}
          </Button>
        </form>
      </AnimatedComponent>
    </section>
  );
}
