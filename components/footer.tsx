export function Footer() {
  return (
    <footer className="relative py-12 px-6 border-t border-border bg-card">
      <div className="container mx-auto max-w-6xl">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-accent rounded-sm flex items-center justify-center">
              <span className="text-accent-foreground font-bold text-sm">ML</span>
            </div>
            <div>
              <div className="font-semibold">Mentis Liberum</div>
              <div className="text-sm text-muted-foreground">Freedom of mind</div>
            </div>
          </div>

          <div className="text-center md:text-right">
            <p className="text-sm text-muted-foreground mb-2">Precision engineering for elite founders</p>
            <p className="text-xs text-muted-foreground">
              © {new Date().getFullYear()} Mentis Liberum. All rights reserved.
            </p>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-border text-center">
          <p className="text-sm text-muted-foreground italic">"Your mind, unburdened."</p>
        </div>
      </div>
    </footer>
  )
}
