import { Button } from "@/components/ui/button"

export function Hero() {
  return (
    <section
      id="top"
      className="relative overflow-hidden border-b border-border"
    >
      {/* Backdrop slab image */}
      <div className="absolute inset-0">
        <img
          src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Gemini_Generated_Image_xme1yuxme1yuxme1.png-S9szQsC2eTRLEcWBaBKBkAlEyXIodr.jpeg"
          alt=""
          aria-hidden="true"
          className="h-full w-full object-cover opacity-25"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/85 via-background/80 to-background" />
        <div className="absolute inset-0 bg-gradient-to-r from-background via-background/40 to-transparent" />
      </div>

      <div className="relative mx-auto flex min-h-[92vh] max-w-7xl flex-col justify-center px-6 pt-32 pb-20 lg:px-10">
        <p className="mb-6 flex items-center gap-3 text-xs uppercase tracking-[0.35em] text-primary">
          <span className="h-px w-10 bg-primary/60" />
          Premium Natural Stone Supply
        </p>

        <h1 className="max-w-3xl text-balance font-heading text-5xl font-medium leading-[1.05] text-foreground sm:text-6xl lg:text-7xl">
          Crafting Spaces of Absolute Peace
        </h1>

        <p className="mt-8 max-w-xl text-pretty leading-relaxed text-muted-foreground">
          We believe the foundations of a great society begin with the elements
          of nature. As premium material suppliers, we bring balance, calm, and
          lasting happiness into your architectural masterpieces.
        </p>

        <div className="mt-10 flex flex-wrap items-center gap-4">
          <Button
            asChild
            size="lg"
            className="bg-primary text-primary-foreground hover:bg-primary/90"
          >
            <a href="#materials">Explore Materials</a>
          </Button>
          <Button
            asChild
            size="lg"
            variant="ghost"
            className="text-foreground hover:bg-accent"
          >
            <a href="#enquire">Request Premium Quote</a>
          </Button>
        </div>

        <dl className="mt-16 flex flex-wrap gap-x-12 gap-y-6 border-t border-border pt-8">
          {[
            { value: "40+", label: "Quarries worldwide" },
            { value: "12", label: "Signature finishes" },
            { value: "1:1", label: "Bespoke material sourcing" },
          ].map((stat) => (
            <div key={stat.label}>
              <dt className="font-heading text-3xl text-primary">
                {stat.value}
              </dt>
              <dd className="mt-1 text-sm text-muted-foreground">
                {stat.label}
              </dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  )
}
