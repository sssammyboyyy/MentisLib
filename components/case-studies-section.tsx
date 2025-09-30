import { ArrowUpRight } from "lucide-react"

export function CaseStudiesSection() {
  const caseStudies = [
    {
      client: "Fractional CFO",
      industry: "Financial Consulting",
      challenge: "Spending 12 hours/week on client onboarding, proposal follow-ups, and invoice reminders",
      solution:
        "AI-powered client journey: automated onboarding sequences, smart proposal tracking, Stripe payment reminder bot",
      results: [
        { metric: "12 hours", label: "Saved per week" },
        { metric: "94%", label: "Faster payment collection" },
        { metric: "$8K", label: "Additional MRR from freed capacity" },
      ],
      quote:
        "I went from drowning in admin to closing 3 new clients in one month. This is not incremental — it's transformational.",
    },
    {
      client: "Executive Coach",
      industry: "Leadership Development",
      challenge: "Website wasn't converting. Manual calendar management. No systematic follow-up with leads",
      solution:
        "Mobile-first conversion site, intelligent booking system with timezone handling, AI follow-up sequences",
      results: [
        { metric: "340%", label: "Increase in booked calls" },
        { metric: "0 hours", label: "Spent on calendar management" },
        { metric: "$24K", label: "New revenue in 60 days" },
      ],
      quote: "My website went from a digital brochure to a revenue machine. Every lead is nurtured automatically.",
    },
    {
      client: "SaaS Consultant",
      industry: "B2B Technology",
      challenge: "Client data scattered across 8 tools. No visibility into project status. Constant firefighting",
      solution: "Unified dashboard with real-time client metrics, automated status updates, predictive workflow alerts",
      results: [
        { metric: "8→1", label: "Tools consolidated" },
        { metric: "100%", label: "Project visibility" },
        { metric: "18 hours", label: "Saved per week" },
      ],
      quote:
        "I finally have a single source of truth. I can see everything at a glance and focus on strategy, not logistics.",
    },
  ]

  return (
    <section id="case-studies" className="relative py-24 px-6">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-balance">
            Real Results, <span className="text-accent">Real Freedom</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto text-pretty leading-relaxed">
            These aren't testimonials. These are metrics from founders who reclaimed their lives.
          </p>
        </div>

        <div className="space-y-12">
          {caseStudies.map((study, index) => (
            <div
              key={index}
              className="group p-8 bg-card border border-border rounded-lg hover:border-accent/50 transition-all duration-300"
            >
              <div className="flex items-start justify-between mb-6">
                <div>
                  <h3 className="text-2xl font-bold mb-2">{study.client}</h3>
                  <p className="text-sm text-accent font-medium">{study.industry}</p>
                </div>
                <ArrowUpRight className="h-6 w-6 text-accent opacity-0 group-hover:opacity-100 transition-opacity" />
              </div>

              <div className="grid md:grid-cols-2 gap-8 mb-8">
                <div>
                  <h4 className="text-sm font-semibold text-muted-foreground mb-3">Challenge</h4>
                  <p className="text-foreground leading-relaxed">{study.challenge}</p>
                </div>
                <div>
                  <h4 className="text-sm font-semibold text-muted-foreground mb-3">Solution</h4>
                  <p className="text-foreground leading-relaxed">{study.solution}</p>
                </div>
              </div>

              <div className="grid grid-cols-3 gap-6 mb-8 p-6 bg-background rounded-lg">
                {study.results.map((result, idx) => (
                  <div key={idx} className="text-center">
                    <div className="text-3xl font-bold text-accent mb-1">{result.metric}</div>
                    <div className="text-sm text-muted-foreground">{result.label}</div>
                  </div>
                ))}
              </div>

              <blockquote className="border-l-4 border-accent pl-6 italic text-lg text-muted-foreground">
                "{study.quote}"
              </blockquote>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
