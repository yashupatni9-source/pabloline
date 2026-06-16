import { highlights } from "@/lib/products"

export function ProductShowcase() {
  return (
    <section id="materials" className="mx-auto max-w-7xl px-6 py-24 lg:px-10">
      <div className="mb-14 flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
        <div>
          <p className="mb-4 flex items-center gap-3 text-xs uppercase tracking-[0.35em] text-primary">
            <span className="h-px w-10 bg-primary/60" />
            Top Highlights
          </p>
          <h2 className="max-w-xl text-balance font-heading text-4xl font-medium text-foreground sm:text-5xl">
            Four Materials of Quiet Distinction
          </h2>
        </div>
        <p className="max-w-sm text-pretty leading-relaxed text-muted-foreground">
          Each slab is hand-selected from a single block, back-lit and finished
          to reveal the depth nature spent millennia composing.
        </p>
      </div>

      <div className="grid gap-6 sm:grid-cols-2">
        {highlights.map((product, index) => (
          <article
            key={product.code}
            className="group relative overflow-hidden rounded-lg border border-border bg-card"
          >
            <div className="relative aspect-[4/3] overflow-hidden">
              <img
                src={product.image || "/placeholder.svg"}
                alt={`${product.name} natural stone slab`}
                className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-card via-card/10 to-transparent" />
              <span className="absolute left-5 top-5 rounded-full border border-primary/40 bg-background/70 px-3 py-1 text-xs uppercase tracking-widest text-primary backdrop-blur-sm">
                {String(index + 1).padStart(2, "0")} · {product.tone}
              </span>
            </div>

            <div className="p-7">
              <div className="flex items-start justify-between gap-4">
                <h3 className="font-heading text-2xl text-foreground">
                  {product.name}
                </h3>
              </div>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                {product.description}
              </p>

              <dl className="mt-6 flex flex-wrap gap-x-8 gap-y-2 border-t border-border pt-5 text-sm">
                <div>
                  <dt className="text-xs uppercase tracking-wider text-muted-foreground">
                    Origin
                  </dt>
                  <dd className="text-foreground">{product.origin}</dd>
                </div>
                <div>
                  <dt className="text-xs uppercase tracking-wider text-muted-foreground">
                    Finish
                  </dt>
                  <dd className="text-foreground">{product.finish}</dd>
                </div>
              </dl>

              <p className="mt-5 font-mono text-xs tracking-wider text-primary">
                {product.code}
              </p>
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}
