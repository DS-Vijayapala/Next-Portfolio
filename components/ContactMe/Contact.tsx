"use client";

import React from "react";
import { motion } from "motion/react";
import {
  Send,
  Mail,
  MessageSquare,
  User,
  Sparkles,
  Phone,
  MapPin,
} from "lucide-react";
import { Controller, useForm } from "react-hook-form";
import { toast } from "sonner";
import { Slider } from "@/components/ui/slider";
import "./Contact.css";

type ContactFormValues = {
  name: string;
  email: string;
  message: string;
  budget: number;
};

function Contact() {
  const {
    register,
    control,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<ContactFormValues>({
    defaultValues: {
      name: "",
      email: "",
      message: "",
      budget: 200,
    },
  });

  const onSubmit = async (values: ContactFormValues) => {
    try {
      const formData = new FormData();
      formData.append("name", values.name);
      formData.append("email", values.email);
      formData.append("message", values.message);
      formData.append("budget", String(values.budget));
      formData.append("access_key", process.env.NEXT_PUBLIC_WEB3FORMS_KEY || "");

      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      });

      const data = await response.json();

      if (data.success) {
        toast.success("Message sent successfully.");
        reset();
      } else {
        toast.error(data.message || "Unable to submit the form right now.");
      }
    } catch {
      toast.error("Something went wrong. Please try again.");
    }
  };

  return (
    <section
      id="contact"
      className="relative w-full overflow-hidden bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 px-4 py-20 sm:px-10 lg:px-[12%]"
    >
      <div className="contact-orb contact-orb-1" />
      <div className="contact-orb contact-orb-2" />
      <div className="contact-grid-pattern" />

      <div className="relative z-10 mx-auto max-w-6xl">
        <div className="mb-10 text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="mb-4 inline-flex items-center gap-2 rounded-full border border-violet-500/20 bg-violet-500/10 px-4 py-2"
          >
            <Sparkles className="h-4 w-4 text-violet-400" />
            <span className="text-sm font-medium text-violet-300">Contact</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
            className="text-xl font-semibold text-slate-100"
          >
            Let&apos;s Build Something Great
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            className="mx-auto mt-2 max-w-2xl text-sm text-slate-400"
          >
            Share your idea, project goal, or collaboration plan. I will get back to you as soon as possible.
          </motion.p>
        </div>

        <div className="grid gap-6 lg:grid-cols-5">
          <motion.aside
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="contact-panel lg:col-span-2"
          >
            <h3 className="text-xl font-semibold text-slate-100">Contact Info</h3>
            <p className="mt-2 text-sm leading-7 text-slate-400">
              I help teams and founders design and build reliable web applications with modern frontend and backend stacks.
            </p>

            <div className="mt-6 space-y-3">
              <div className="contact-info-item">
                <Mail className="h-4 w-4 text-violet-300" />
                <a href="mailto:dinethsachintha52@gmail.com" className="text-sm text-slate-200">
                  dinethsachintha52@gmail.com
                </a>
              </div>
              <div className="contact-info-item">
                <Phone className="h-4 w-4 text-violet-300" />
                <span className="text-sm text-slate-200">Available for freelance and full-time work</span>
              </div>
              <div className="contact-info-item">
                <MapPin className="h-4 w-4 text-violet-300" />
                <span className="text-sm text-slate-200">Sri Lanka (Remote-friendly)</span>
              </div>
            </div>
          </motion.aside>

          <motion.form
            onSubmit={handleSubmit(onSubmit)}
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.05 }}
            viewport={{ once: true }}
            className="contact-form-card lg:col-span-3"
            noValidate
          >
            <div className="grid gap-4 sm:grid-cols-2">
              <div className="contact-field">
                <User className="contact-field-icon" />
                <input
                  type="text"
                  placeholder="Your Name"
                  className="contact-input"
                  {...register("name", {
                    required: "Name is required.",
                    minLength: {
                      value: 2,
                      message: "Name must be at least 2 characters.",
                    },
                  })}
                  aria-invalid={!!errors.name}
                />
                {errors.name && (
                  <p className="mt-1 text-xs text-rose-300">{errors.name.message}</p>
                )}
              </div>

              <div className="contact-field">
                <Mail className="contact-field-icon" />
                <input
                  type="email"
                  placeholder="Your Email"
                  className="contact-input"
                  {...register("email", {
                    required: "Email is required.",
                    pattern: {
                      value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                      message: "Enter a valid email address.",
                    },
                  })}
                  aria-invalid={!!errors.email}
                />
                {errors.email && (
                  <p className="mt-1 text-xs text-rose-300">{errors.email.message}</p>
                )}
              </div>
            </div>

            <div className="contact-field mt-4">
              <MessageSquare className="contact-field-icon contact-field-icon-top" />
              <textarea
                rows={6}
                placeholder="Tell me about your project..."
                className="contact-textarea"
                {...register("message", {
                  required: "Message is required.",
                  minLength: {
                    value: 10,
                    message: "Message must be at least 10 characters.",
                  },
                })}
                aria-invalid={!!errors.message}
              />
              {errors.message && (
                <p className="mt-1 text-xs text-rose-300">{errors.message.message}</p>
              )}
            </div>

            <Controller
              name="budget"
              control={control}
              render={({ field }) => (
                <div className="mt-4 rounded-xl border border-violet-500/20 bg-slate-900/45 p-4">
                  <div className="flex items-center justify-between gap-4">
                    <p className="text-sm font-medium text-slate-200">Project Budget</p>
                    <span className="text-sm font-semibold text-violet-300">
                      ${field.value.toLocaleString()}
                    </span>
                  </div>

                  <Slider
                    value={[field.value]}
                    min={100}
                    max={20000}
                    step={500}
                    onValueChange={(value) => field.onChange(value[0] ?? 200)}
                    className="mt-3 [&_[data-slot=slider-range]]:bg-violet-500 [&_[data-slot=slider-thumb]]:border-violet-300 [&_[data-slot=slider-thumb]]:bg-white [&_[data-slot=slider-track]]:bg-slate-700"
                  />

                  <p className="mt-2 text-xs text-slate-500">
                    Drag to estimate your approximate budget range.
                  </p>
                </div>
              )}
            />

            <div className="mt-5 flex flex-col items-stretch gap-3 sm:flex-row sm:items-center sm:justify-between sm:gap-4">
              <p className="text-xs text-slate-500 sm:max-w-[65%]">
                Your message is sent securely via Web3Forms.
              </p>

              <button
                type="submit"
                disabled={isSubmitting}
                className={`contact-submit-btn w-full sm:w-auto ${isSubmitting ? "opacity-70 cursor-not-allowed" : ""}`}
              >
                {isSubmitting ? (
                  <>
                    <span className="h-4 w-4 rounded-full border-2 border-white border-t-transparent animate-spin" />
                    Sending...
                  </>
                ) : (
                  <>
                    Send Message
                    <Send className="h-4 w-4" />
                  </>
                )}
              </button>
            </div>
          </motion.form>
        </div>
      </div>
    </section>
  );
}

export default Contact;
