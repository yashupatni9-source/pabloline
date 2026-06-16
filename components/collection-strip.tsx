import { collection } from "@/lib/products"

export function CollectionStrip() {
  return (
    <section
      id="collection"
      className="border-y border-border bg-card/40 py-24"
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="mb-12 max-w-xl">
          <p className="mb-4 flex items-center gap-3 text-xs uppercase tracking-[0.35em] text-primary">
            <span className="h-px w-10 bg-primary/60" />
            The Wider Collection
          </p>
          <h2 className="text-balance font-heading text-4xl font-medium text-foreground sm:text-5xl">
            A Library of Rare Earth
          </h2>
        </div>

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {collection.map((product) => (
            <article
              key={product.code}
              className="group overflow-hidden rounded-lg border border-border bg-card"
            >
              <div className="relative aspect-[5/4] overflow-hidden">
                <img
                  src={product.image || "/placeholder.svg"}
                  alt={`${product.name} natural stone slab`}
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>
              <div className="p-5">
                <h3 className="font-heading text-xl text-foreground">
                  {product.name}
                </h3>
                <p className="mt-1 text-sm text-muted-foreground">
                  {product.origin} · {product.finish}
                </p>
                <p className="mt-3 font-mono text-xs tracking-wider text-primary">
                  {product.code}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
