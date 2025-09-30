"use client"

import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"

export function HeroSection() {
  const scrollToApply = () => {
    const element = document.getElementById("apply")
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <section className="relative min-h-screen flex items-center justify-center px-6 pt-24 pb-16">
      <div className="container mx-auto max-w-5xl text-center">
        <div className="space-y-8">
          <div className="inline-block">
            <div className="px-4 py-2 bg-accent/10 border border-accent/20 rounded-full text-sm text-accent font-medium mb-8">
              3 partnership spots open this quarter
            </div>
          </div>

          <h1 className="text-6xl md:text-7xl lg:text-8xl font-bold tracking-tight text-balance">
            Your Mind, <span className="text-accent">Unburdened</span>
          </h1>

          <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto text-pretty leading-relaxed">
            Liberate yourself from operational chaos with working AI systems. Not an agency, not a freelancer — a
            precision engineering studio for mental bandwidth.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-8">
            <Button
              size="lg"
              onClick={scrollToApply}
              className="bg-accent hover:bg-accent/90 text-accent-foreground font-medium text-lg px-8 py-6 group"
            >
              Apply for Partnership
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Button>

            <Button
              size="lg"
              variant="outline"
              onClick={() => {
                const element = document.getElementById("how-it-works")
                if (element) element.scrollIntoView({ behavior: "smooth" })
              }}
              className="text-lg px-8 py-6 border-accent/30 hover:border-accent hover:bg-accent/5"
            >
              See How It Works
            </Button>
          </div>

          <div className="pt-16 grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="space-y-2">
              <div className="text-4xl font-bold text-accent">$50K-$100K</div>
              <div className="text-sm text-muted-foreground">Annual partnership value</div>
            </div>
            <div className="space-y-2">
              <div className="text-4xl font-bold text-accent">{"<"}7 Days</div>
              <div className="text-sm text-muted-foreground">To working AI systems</div>
            </div>
            <div className="space-y-2">
              <div className="text-4xl font-bold text-accent">100%</div>
              <div className="text-sm text-muted-foreground">Focus on your genius work</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
