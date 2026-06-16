"use client"

import { useState } from "react"
import { toast } from "sonner"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { enquiryOptions } from "@/lib/products"

const FORMSPREE_ENDPOINT = "https://formspree.io/f/meewdeqv"

export function EnquiryForm() {
  const [code, setCode] = useState("")
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [phone, setPhone] = useState("")
  const [message, setMessage] = useState("")
  const [submitting, setSubmitting] = useState(false)

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault()

    if (!code) {
      toast.error("Please select a material to enquire about.")
      return
    }
    if (!name.trim()) {
      toast.error("Please enter your name.")
      return
    }
    if (!email.trim()) {
      toast.error("Please enter your email.")
      return
    }
    if (phone.trim().length < 7) {
      toast.error("Please enter a valid contact number.")
      return
    }

    setSubmitting(true)

    try {
      const materialName =
        enquiryOptions.find((m) => m.code === code)?.name || code

      const formData = new FormData()
      formData.append("name", name)
      formData.append("email", email)
      formData.append("phone", phone)
      formData.append("material", `${code} - ${materialName}`)
      formData.append("message", message || "No additional details")

      const response = await fetch(FORMSPREE_ENDPOINT, {
        method: "POST",
        body: formData,
      })

      if (response.ok) {
        toast.success("Enquiry received. Our team will reach out shortly.")
        setCode("")
        setName("")
        setEmail("")
        setPhone("")
        setMessage("")
      } else {
        toast.error("Failed to send enquiry. Please try again.")
      }
    } catch (error) {
      console.error("Form submission error:", error)
      toast.error("Failed to send enquiry. Please try again.")
    } finally {
      setSubmitting(false)
    }
  }

  return (
    <section id="enquire" className="mx-auto max-w-7xl px-6 py-24 lg:px-10">
      <div className="grid items-center gap-12 overflow-hidden rounded-xl border border-border bg-card lg:grid-cols-2">
        {/* Visual side */}
        <div className="relative hidden h-full min-h-[480px] lg:block">
          <img
            src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Gemini_Generated_Image_pkjkrbpkjkrbpkjk.png-Tcfa0ADorK0ssROGCj57gtamX8PKth.jpeg"
            alt="Back-lit Cristallo White quartzite bar setting"
            className="h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-transparent to-card" />
        </div>

        {/* Form side */}
        <div className="px-7 py-12 sm:px-12">
          <p className="mb-4 flex items-center gap-3 text-xs uppercase tracking-[0.35em] text-primary">
            <span className="h-px w-10 bg-primary/60" />
            Enquiry
          </p>
          <h2 className="text-balance font-heading text-4xl font-medium text-foreground">
            Bring Serenity to Your Next Project
          </h2>
          <p className="mt-4 max-w-md text-pretty leading-relaxed text-muted-foreground">
            Select a material and share your details. Our specialists will
            prepare a tailored quote and arrange a sample.
          </p>

          <form onSubmit={handleSubmit} className="mt-9 flex flex-col gap-6">
            <div className="flex flex-col gap-2">
              <Label htmlFor="name">Your name</Label>
              <Input
                id="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Full name"
                autoComplete="name"
              />
            </div>

            <div className="flex flex-col gap-2">
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="your@email.com"
                autoComplete="email"
              />
            </div>

            <div className="flex flex-col gap-2">
              <Label htmlFor="material">Select your material</Label>
              <Select value={code} onValueChange={setCode}>
                <SelectTrigger id="material" className="w-full">
                  <SelectValue placeholder="Choose a product code" />
                </SelectTrigger>
                <SelectContent>
                  {enquiryOptions.map((option) => (
                    <SelectItem key={option.code} value={option.code}>
                      <span className="font-mono text-xs text-primary">
                        {option.code}
                      </span>
                      {"  "}
                      {option.name}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            <div className="flex flex-col gap-2">
              <Label htmlFor="phone">Contact number</Label>
              <Input
                id="phone"
                type="tel"
                inputMode="tel"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                placeholder="+91 XXXXX XXXXX"
                autoComplete="tel"
              />
            </div>

            <div className="flex flex-col gap-2">
              <Label htmlFor="message">Additional details (optional)</Label>
              <Input
                id="message"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder="Tell us about your project…"
              />
            </div>

            <Button
              type="submit"
              size="lg"
              disabled={submitting}
              className="mt-2 bg-primary text-primary-foreground hover:bg-primary/90"
            >
              {submitting ? "Sending…" : "Request Premium Quote"}
            </Button>
          </form>
        </div>
      </div>
    </section>
  )
}
// Form is ready for deployment
