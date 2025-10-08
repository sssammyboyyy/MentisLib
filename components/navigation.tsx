"use client"

import { Button } from "@/components/ui/button"
import Image from "next/image"

export function Navigation() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <Image src="/logo.png" alt="Mentis Liberum" width={32} height={32} className="w-8 h-8" />
            <span className="text-lg font-semibold tracking-tight">Mentis Liberum</span>
          </div>

          <Button
            onClick={() => scrollToSection("apply")}
            className="bg-accent hover:bg-accent/90 text-accent-foreground font-medium"
          >
            Apply for Partnership
          </Button>
        </div>
      </div>
    </nav>
  )
}
