import { Button } from "@/components/ui/button"

export function SiteHeader() {
  return (
    <header className="absolute inset-x-0 top-0 z-50">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-6 lg:px-10">
        <a href="#top" className="flex items-center gap-3">
          <span className="flex h-9 w-9 items-center justify-center rounded-sm border border-primary/40 font-heading text-lg text-primary">
            L
          </span>
          <span className="font-heading text-xl tracking-wide text-foreground">
            Lithos<span className="text-primary"> &amp; Co.</span>
          </span>
        </a>

        <nav className="hidden items-center gap-9 text-sm text-muted-foreground md:flex">
          <a href="#materials" className="transition-colors hover:text-foreground">
            Materials
          </a>
          <a href="#collection" className="transition-colors hover:text-foreground">
            Collection
          </a>
          <a href="#philosophy" className="transition-colors hover:text-foreground">
            Philosophy
          </a>
        </nav>

        <Button
          asChild
          variant="outline"
          className="border-primary/40 bg-transparent text-foreground hover:bg-primary hover:text-primary-foreground"
        >
          <a href="#enquire">Request a Quote</a>
        </Button>
      </div>
    </header>
  )
}
