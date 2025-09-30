"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { AlertCircle, CheckCircle2 } from "lucide-react"

export function ApplicationSection() {
  const [formState, setFormState] = useState<"idle" | "submitting" | "success" | "error">("idle")

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setFormState("submitting")

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1500))
    setFormState("success")
  }

  return (
    <section id="apply" className="relative py-24 px-6">
      <div className="container mx-auto max-w-4xl">
        <div className="text-center mb-16">
          <div className="inline-block mb-6">
            <div className="px-4 py-2 bg-accent/10 border border-accent/20 rounded-full text-sm text-accent font-medium">
              <span className="inline-block w-2 h-2 bg-accent rounded-full mr-2 animate-pulse-glow" />3 partnership
              spots open this quarter
            </div>
          </div>

          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-balance">
            Apply for <span className="text-accent">Partnership</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto text-pretty leading-relaxed">
            We only work with 3 elite founders per quarter. If you're ready to reclaim your mental bandwidth, tell us
            about your business.
          </p>
        </div>

        {formState === "success" ? (
          <div className="p-12 bg-accent/5 border border-accent/20 rounded-lg text-center">
            <CheckCircle2 className="h-16 w-16 text-accent mx-auto mb-6" />
            <h3 className="text-2xl font-bold mb-4">Application Received</h3>
            <p className="text-lg text-muted-foreground mb-6">
              We'll review your application and reach out within 48 hours if there's a fit.
            </p>
            <p className="text-sm text-muted-foreground">Check your email for confirmation and next steps.</p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <Label htmlFor="name" className="text-sm font-medium">
                  Full Name *
                </Label>
                <Input
                  id="name"
                  name="name"
                  required
                  placeholder="John Smith"
                  className="bg-background border-border focus:border-accent"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="email" className="text-sm font-medium">
                  Email *
                </Label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  required
                  placeholder="john@example.com"
                  className="bg-background border-border focus:border-accent"
                />
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="business" className="text-sm font-medium">
                Business Type *
              </Label>
              <Input
                id="business"
                name="business"
                required
                placeholder="e.g., Fractional CFO, Executive Coach, SaaS Consultant"
                className="bg-background border-border focus:border-accent"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="revenue" className="text-sm font-medium">
                Monthly Revenue *
              </Label>
              <Input
                id="revenue"
                name="revenue"
                required
                placeholder="e.g., $25K/month"
                className="bg-background border-border focus:border-accent"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="challenge" className="text-sm font-medium">
                Biggest Operational Challenge *
              </Label>
              <Textarea
                id="challenge"
                name="challenge"
                required
                rows={4}
                placeholder="Describe the operational chaos that's holding you back. Be specific."
                className="bg-background border-border focus:border-accent resize-none"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="goal" className="text-sm font-medium">
                What Would Freedom Look Like? *
              </Label>
              <Textarea
                id="goal"
                name="goal"
                required
                rows={4}
                placeholder="If we could give you back 15+ hours/week, what would you do with that time?"
                className="bg-background border-border focus:border-accent resize-none"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="timeline" className="text-sm font-medium">
                Timeline *
              </Label>
              <Input
                id="timeline"
                name="timeline"
                required
                placeholder="When do you need this solved?"
                className="bg-background border-border focus:border-accent"
              />
            </div>

            <div className="pt-6">
              <Button
                type="submit"
                size="lg"
                disabled={formState === "submitting"}
                className="w-full bg-accent hover:bg-accent/90 text-accent-foreground font-medium text-lg py-6"
              >
                {formState === "submitting" ? "Submitting Application..." : "Submit Application"}
              </Button>
            </div>

            <div className="flex items-start gap-3 p-4 bg-accent/5 border border-accent/20 rounded-lg">
              <AlertCircle className="h-5 w-5 text-accent flex-shrink-0 mt-0.5" />
              <p className="text-sm text-muted-foreground leading-relaxed">
                <span className="font-semibold text-foreground">Qualification criteria:</span> We only partner with
                founders making $10K+/month who are committed to operational freedom. If there's not a fit, we'll tell
                you honestly and point you in the right direction.
              </p>
            </div>
          </form>
        )}

        <div className="mt-16 grid md:grid-cols-3 gap-6">
          <div className="p-6 bg-card border border-border rounded-lg text-center">
            <div className="text-3xl font-bold text-accent mb-2">48 Hours</div>
            <div className="text-sm text-muted-foreground">Response time</div>
          </div>
          <div className="p-6 bg-card border border-border rounded-lg text-center">
            <div className="text-3xl font-bold text-accent mb-2">30 Min</div>
            <div className="text-sm text-muted-foreground">Discovery call</div>
          </div>
          <div className="p-6 bg-card border border-border rounded-lg text-center">
            <div className="text-3xl font-bold text-accent mb-2">{"<"}7 Days</div>
            <div className="text-sm text-muted-foreground">To working systems</div>
          </div>
        </div>
      </div>
    </section>
  )
}
