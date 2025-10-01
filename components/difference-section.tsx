"use client"

import { Check, X } from "lucide-react"

export function DifferenceSection() {
  const comparisons = [
    {
      them: "Sell you on AI hype and buzzwords",
      us: "Build working systems that save you 15+ hours/week",
    },
    {
      them: "Monthly retainers with vague deliverables",
      us: "Fixed outcomes: booking system live in <7 days",
    },
    {
      them: "Junior developers learning on your dime",
      us: "Precision engineering from day one",
    },
    {
      them: "Generic templates and cookie-cutter solutions",
      us: "Custom AI workflows for your exact business",
    },
    {
      them: "Disappear after launch, leave you stranded",
      us: "Ongoing optimization until you have true freedom",
    },
  ]

  return (
    <section id="difference" className="relative py-24 px-6">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-balance">
            Why This Is Not <span className="text-accent">"Another AI Agency"</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto text-pretty leading-relaxed">
            We're not here to impress you with jargon. We're here to give you your life back.
          </p>
        </div>

        <div className="space-y-4 max-w-4xl mx-auto">
          {comparisons.map((comparison, index) => (
            <div
              key={index}
              className="grid md:grid-cols-2 gap-4 p-6 bg-card border border-border rounded-lg hover:border-accent/30 transition-colors"
            >
              <div className="flex items-start gap-3">
                <div className="mt-1 p-1 bg-destructive/10 rounded-full">
                  <X className="h-4 w-4 text-destructive" />
                </div>
                <div>
                  <div className="text-sm font-medium text-muted-foreground mb-1">Typical Agency</div>
                  <p className="text-foreground">{comparison.them}</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="mt-1 p-1 bg-accent/10 rounded-full">
                  <Check className="h-4 w-4 text-accent" />
                </div>
                <div>
                  <div className="text-sm font-medium text-accent mb-1">Mentis Liberum</div>
                  <p className="text-foreground font-medium">{comparison.us}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 max-w-3xl mx-auto">
          <div className="p-8 bg-accent/5 border-l-4 border-accent rounded-lg">
            <h3 className="text-2xl font-bold mb-4">Our Positioning</h3>
            <p className="text-lg text-muted-foreground leading-relaxed mb-4">
              We are a <span className="text-foreground font-semibold">precision engineering studio</span>, not a
              service provider. We partner with 3 elite founders per quarter who are ready to reclaim their mental
              bandwidth.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              If you want fast, cheap, and generic — we're not for you. If you want{" "}
              <span className="text-accent font-semibold">working systems that compound your freedom</span> — let's
              talk.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
