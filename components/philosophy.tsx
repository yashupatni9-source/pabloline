export function Philosophy() {
  return (
    <section
      id="philosophy"
      className="relative overflow-hidden border-y border-border"
    >
      <div className="absolute inset-0">
        <img
          src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Gemini_Generated_Image_lihz32lihz32lihz.png-romBwiRt5rdRlUayrHIkityaGopnjF.jpeg"
          alt=""
          aria-hidden="true"
          className="h-full w-full object-cover opacity-20"
        />
        <div className="absolute inset-0 bg-background/80" />
      </div>

      <div className="relative mx-auto max-w-4xl px-6 py-28 text-center lg:px-10">
        <p className="mb-6 text-xs uppercase tracking-[0.35em] text-primary">
          Our Philosophy
        </p>
        <blockquote className="text-balance font-heading text-3xl font-medium leading-snug text-foreground sm:text-4xl">
          &ldquo;Supplying the materials for human happiness, peace, and the
          building of a great society.&rdquo;
        </blockquote>
        <p className="mx-auto mt-8 max-w-2xl text-pretty leading-relaxed text-muted-foreground">
          Every block we source carries the patience of the earth. We pair that
          permanence with the calm of considered design — so the spaces you
          build become places people return to.
        </p>
      </div>
    </section>
  )
}
