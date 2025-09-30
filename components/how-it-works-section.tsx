import { Search, Wrench, TrendingUp } from "lucide-react"

export function HowItWorksSection() {
  const steps = [
    {
      number: "01",
      icon: Search,
      title: "Audit",
      duration: "1-2 days",
      description:
        "We map your entire operational workflow. Every tool, every manual task, every bottleneck. We find where your time is bleeding.",
      deliverables: [
        "Complete operational audit",
        "Time-waste analysis",
        "AI opportunity map",
        "Custom engineering plan",
      ],
    },
    {
      number: "02",
      icon: Wrench,
      title: "Build",
      duration: "3-5 days",
      description:
        'We engineer working AI systems. Not prototypes. Not "MVPs." Production-grade automation that handles your operations while you sleep.',
      deliverables: [
        "Mobile-first booking system",
        "AI-powered client workflows",
        "Automated follow-up sequences",
        "Real-time dashboards",
      ],
    },
    {
      number: "03",
      icon: TrendingUp,
      title: "Optimize",
      duration: "Ongoing",
      description:
        "We monitor, refine, and expand. Your business evolves, your systems evolve. We ensure your freedom compounds over time.",
      deliverables: [
        "Weekly performance reports",
        "Continuous optimization",
        "New workflow automation",
        "Strategic system expansion",
      ],
    },
  ]

  return (
    <section id="how-it-works" className="relative py-24 px-6 bg-card">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-balance">
            How It <span className="text-accent">Works</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto text-pretty leading-relaxed">
            Three phases. One outcome: operational freedom.
          </p>
        </div>

        <div className="space-y-8">
          {steps.map((step, index) => {
            const Icon = step.icon
            return (
              <div
                key={index}
                className="group relative p-8 bg-background border border-border rounded-lg hover:border-accent/50 transition-all duration-300"
              >
                <div className="flex flex-col md:flex-row gap-8">
                  <div className="flex-shrink-0">
                    <div className="relative">
                      <div className="text-6xl font-bold text-accent/10 group-hover:text-accent/20 transition-colors">
                        {step.number}
                      </div>
                      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                        <div className="p-4 bg-accent/10 rounded-lg group-hover:bg-accent/20 transition-colors">
                          <Icon className="h-8 w-8 text-accent" />
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="flex-1 space-y-4">
                    <div className="flex items-center justify-between flex-wrap gap-4">
                      <h3 className="text-3xl font-bold">{step.title}</h3>
                      <span className="text-sm font-mono text-accent bg-accent/10 px-4 py-2 rounded-full">
                        {step.duration}
                      </span>
                    </div>

                    <p className="text-lg text-muted-foreground leading-relaxed">{step.description}</p>

                    <div className="pt-4">
                      <div className="text-sm font-semibold text-foreground mb-3">Deliverables:</div>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                        {step.deliverables.map((deliverable, idx) => (
                          <div key={idx} className="flex items-center gap-2">
                            <div className="w-1.5 h-1.5 bg-accent rounded-full" />
                            <span className="text-sm text-muted-foreground">{deliverable}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )
          })}
        </div>

        <div className="mt-16 p-8 bg-accent/5 border border-accent/20 rounded-lg">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div>
              <h3 className="text-2xl font-bold mb-2">Trojan Offer</h3>
              <p className="text-muted-foreground">Mobile-first site + booking system + 1 AI workflow in {"<"}7 days</p>
            </div>
            <div className="text-right">
              <div className="text-3xl font-bold text-accent">$1.5K-$3K</div>
              <div className="text-sm text-muted-foreground">One-time investment</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
