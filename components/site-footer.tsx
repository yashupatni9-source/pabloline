export function SiteFooter() {
  return (
    <footer className="border-t border-border">
      <div className="mx-auto flex max-w-7xl flex-col gap-8 px-6 py-12 lg:flex-row lg:items-center lg:justify-between lg:px-10">
        <div className="flex items-center gap-3">
          <span className="flex h-9 w-9 items-center justify-center rounded-sm border border-primary/40 font-heading text-lg text-primary">
            L
          </span>
          <span className="font-heading text-xl tracking-wide text-foreground">
            Lithos<span className="text-primary"> &amp; Co.</span>
          </span>
        </div>

        <p className="max-w-sm text-sm leading-relaxed text-muted-foreground">
          Premium natural stone supply for architects, designers, and builders
          of serene spaces.
        </p>

        <div className="text-sm text-muted-foreground">
          <p>hello@lithosandco.com</p>
          <p className="mt-1">+91 00000 00000</p>
        </div>
      </div>
      <div className="border-t border-border py-5">
        <p className="text-center text-xs text-muted-foreground">
          &copy; {new Date().getFullYear()} Lithos &amp; Co. All rights
          reserved.
        </p>
      </div>
    </footer>
  )
}
