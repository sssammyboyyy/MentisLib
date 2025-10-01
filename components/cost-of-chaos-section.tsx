"use client"

import { AlertCircle, Clock, DollarSign, Brain } from "lucide-react"

export function CostOfChaosSection() {
  const costs = [
    {
      icon: DollarSign,
      title: "Missed Revenue",
      description:
        "Every hour spent on admin is an hour not closing deals. At $500/hour, that's $4K/day in opportunity cost.",
      metric: "$80K+/month",
    },
    {
      icon: Clock,
      title: "Tool Sprawl",
      description: "12+ disconnected tools. 47 browser tabs. Constant context switching destroying your flow state.",
      metric: "15+ hours/week",
    },
    {
      icon: Brain,
      title: "Mental Bandwidth",
      description:
        "Your genius is buried under reminders, follow-ups, and manual data entry. This is not why you started.",
      metric: "70% capacity",
    },
    {
      icon: AlertCircle,
      title: "Weak Systems",
      description:
        "Your website doesn't book calls. Your CRM is a mess. Clients slip through cracks. Growth is capped.",
      metric: "40% conversion loss",
    },
  ]

  return (
    <section id="cost-of-chaos" className="relative py-24 px-6 bg-card">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-balance">
            The Cost of <span className="text-accent">Operational Chaos</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto text-pretty leading-relaxed">
            You didn't build a $10K-$50K/month business to drown in admin work. But here's what chaos is actually
            costing you.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {costs.map((cost, index) => {
            const Icon = cost.icon
            return (
              <div
                key={index}
                className="group p-8 bg-background border border-border rounded-lg hover:border-accent/50 transition-all duration-300"
              >
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-accent/10 rounded-lg group-hover:bg-accent/20 transition-colors">
                    <Icon className="h-6 w-6 text-accent" />
                  </div>
                  <div className="flex-1 space-y-3">
                    <div className="flex items-start justify-between">
                      <h3 className="text-xl font-semibold">{cost.title}</h3>
                      <span className="text-sm font-mono text-accent bg-accent/10 px-3 py-1 rounded-full">
                        {cost.metric}
                      </span>
                    </div>
                    <p className="text-muted-foreground leading-relaxed">{cost.description}</p>
                  </div>
                </div>
              </div>
            )
          })}
        </div>

        <div className="mt-16 p-8 bg-accent/5 border border-accent/20 rounded-lg text-center">
          <p className="text-lg text-foreground font-medium">
            <span className="text-accent font-bold">Reality check:</span> If you're making $30K/month but spending 20
            hours/week on operations, you're leaving $200K+ on the table annually. This is fixable.
          </p>
        </div>
      </div>
    </section>
  )
}
