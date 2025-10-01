"use client"

import { Target, Zap, Shield, Compass } from "lucide-react"

export function TeamSection() {
  const beliefs = [
    {
      icon: Target,
      title: "Clarity > Hype",
      description: "We don't sell dreams. We build systems. If we can't measure it, we don't claim it.",
    },
    {
      icon: Zap,
      title: "Speed > Fluff",
      description: "Working systems in days, not months. Your time is worth $500+/hour. We act like it.",
    },
    {
      icon: Shield,
      title: "Truth > Theory",
      description: "We've built these systems for ourselves first. We only partner on what we've proven works.",
    },
    {
      icon: Compass,
      title: "Freedom > Revenue",
      description: "We optimize for your mental bandwidth, not our billable hours. Your freedom is the metric.",
    },
  ]

  return (
    <section id="team" className="relative py-24 px-6 bg-card">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-balance">
            What We <span className="text-accent">Believe</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto text-pretty leading-relaxed">
            We're not here to scale an agency. We're here to liberate 3 founders per quarter who are ready for
            operational freedom.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6 mb-16">
          {beliefs.map((belief, index) => {
            const Icon = belief.icon
            return (
              <div
                key={index}
                className="group p-8 bg-background border border-border rounded-lg hover:border-accent/50 transition-all duration-300"
              >
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-accent/10 rounded-lg group-hover:bg-accent/20 transition-colors">
                    <Icon className="h-6 w-6 text-accent" />
                  </div>
                  <div className="space-y-2">
                    <h3 className="text-xl font-bold">{belief.title}</h3>
                    <p className="text-muted-foreground leading-relaxed">{belief.description}</p>
                  </div>
                </div>
              </div>
            )
          })}
        </div>

        <div className="max-w-3xl mx-auto">
          <div className="p-8 bg-accent/5 border-l-4 border-accent rounded-lg">
            <h3 className="text-2xl font-bold mb-4">Who We Partner With</h3>
            <div className="space-y-4 text-lg text-muted-foreground leading-relaxed">
              <p>
                <span className="text-foreground font-semibold">Solo operators or 2-3 person teams</span> making
                $10K-$50K+/month who are drowning in operational chaos.
              </p>
              <p>
                You're a{" "}
                <span className="text-foreground font-semibold">coach, fractional executive, or consultant</span> who
                knows your genius work — but it's buried under admin, tool sprawl, and weak systems.
              </p>
              <p>
                You value{" "}
                <span className="text-accent font-semibold">
                  clarity over hype, speed over fluff, and truth over theory
                </span>
                . You're ready to invest in freedom, not just another tool.
              </p>
              <p className="pt-4 text-foreground font-medium">If this is you, we should talk.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
