import { GeometricBackground } from "@/components/geometric-background"
import { Navigation } from "@/components/navigation"
import { HeroSection } from "@/components/hero-section"
import { CostOfChaosSection } from "@/components/cost-of-chaos-section"
import { DifferenceSection } from "@/components/difference-section"
import { HowItWorksSection } from "@/components/how-it-works-section"
import { CaseStudiesSection } from "@/components/case-studies-section"
import { TeamSection } from "@/components/team-section"
import { ApplicationSection } from "@/components/application-section"
import { Footer } from "@/components/footer"

export default function Page() {
  return (
    <main className="relative min-h-screen">
      <GeometricBackground />
      <div className="relative z-10">
        <Navigation />
        <HeroSection />
        <CostOfChaosSection />
        <DifferenceSection />
        <HowItWorksSection />
        <CaseStudiesSection />
        <TeamSection />
        <ApplicationSection />
        <Footer />
      </div>
    </main>
  )
}
