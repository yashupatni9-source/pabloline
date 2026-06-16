import { SiteHeader } from "@/components/site-header"
import { Hero } from "@/components/hero"
import { ProductShowcase } from "@/components/product-showcase"
import { Philosophy } from "@/components/philosophy"
import { CollectionStrip } from "@/components/collection-strip"
import { EnquiryForm } from "@/components/enquiry-form"
import { SiteFooter } from "@/components/site-footer"

export default function Page() {
  return (
    <main className="min-h-screen bg-background">
      <SiteHeader />
      <Hero />
      <ProductShowcase />
      <Philosophy />
      <CollectionStrip />
      <EnquiryForm />
      <SiteFooter />
    </main>
  )
}
