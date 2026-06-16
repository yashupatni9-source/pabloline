export type Product = {
  name: string
  code: string
  origin: string
  finish: string
  description: string
  image: string
  tone: string
}

// The four hero highlight materials.
export const highlights: Product[] = [
  {
    name: "Botanical Shish Black",
    code: "BSB-200-Q-1-J-UK",
    origin: "Selective Quarry, India",
    finish: "Polished, Leathered",
    description:
      "A captivating fusion of nature's artistry. Intricate golden and green veining embedded in a deep black matrix, evoking mysterious luxury and organic sophistication.",
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Gemini_Generated_Image_xme1yuxme1yuxme1.png-S9szQsC2eTRLEcWBaBKBkAlEyXIodr.jpeg",
    tone: "Obsidian & Gold",
  },
  {
    name: "La Cabana Green",
    code: "LCG-150-Q-1-J-AGTR",
    origin: "Selective Quarry, Colombia",
    finish: "Polished, Leathered",
    description:
      "A vibrant, organic masterpiece. Deep emerald and forest-green veining forms intricate branching patterns across a rich green matrix — an atmosphere of lush, refined nature.",
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Gemini_Generated_Image_lihz32lihz32lihz.png-romBwiRt5rdRlUayrHIkityaGopnjF.jpeg",
    tone: "Emerald & Forest",
  },
  {
    name: "Cristallo White",
    code: "CW-6K-Q-1-GRM",
    origin: "Selective Quarry, Brazil",
    finish: "Polished, Leathered",
    description:
      "A natural quartzite of remarkable translucence, showcasing a bold, fractured crystalline architecture highlighted by delicate golden trace elements. Perfect for sculptural, back-lit statement pieces.",
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Gemini_Generated_Image_pkjkrbpkjkrbpkjk.png-Tcfa0ADorK0ssROGCj57gtamX8PKth.jpeg",
    tone: "Translucent & Pearl",
  },
  {
    name: "Green Ocean Grower",
    code: "OG-600-Q-1-J-KRL",
    origin: "Selective Quarry, USA",
    finish: "Matte, Semi-Polished",
    description:
      "A truly unique natural marvel capturing the complex, intricate geometry of nature. Tightly-packed green mineral structures intertwine with subtle golden and charcoal veining over a deep green matrix.",
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Gemini_Generated_Image_97vk5697vk5697vk.png-UjSIo9Nk2HoXc9QPTrrIfy4Fn1O4Ee.jpeg",
    tone: "Deep Green & Charcoal",
  },
]

// The wider collection shown lower on the page.
export const collection: Product[] = [
  {
    name: "Silver Wave Marble",
    code: "SWM-100-IT-P",
    origin: "Italy",
    finish: "Polished",
    description:
      "Deeply veined dark grey marble with swirling, wave-like patterns of lighter silver and charcoal. Ideal for large-format flooring and dramatic water features.",
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Silver%20Wave.png-fVUrP4q9V93IXR1ScvkWLUYnoxSmCI.jpeg",
    tone: "Silver & Charcoal",
  },
  {
    name: "Volcanic Crimson Marble",
    code: "VCM-300-ES-P",
    origin: "Spain",
    finish: "Polished",
    description:
      "A powerful, dynamic red marble from ancient formations. Intense crimson fields fragmented by black and charcoal veining — perfect for kitchen island waterfalls or accent fireplaces.",
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Volcanic.png-PYinx0Ac7lWDQCIKQJYiG8L22e6mJ2.jpeg",
    tone: "Crimson & Black",
  },
  {
    name: "Ruby Vein Marble",
    code: "RVM-220-PT-H",
    origin: "Portugal",
    finish: "Honed",
    description:
      "A subtle yet warm marble of dusty rose and beige fields crossed by delicate ruby-colored veins. Ideal for wall cladding in minimalist master suites or decorative inlaid furniture.",
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Ruby%20Vien.png-6n2c6N2mh0ijkz4YzFpfBk7l5e835s.jpeg",
    tone: "Dusty Rose & Beige",
  },
  {
    name: "Shadow Mist Marble",
    code: "SMM-110-GR-L",
    origin: "Greece",
    finish: "Leathered",
    description:
      "A subtle, refined grey marble of fragmented patterns in soft white and charcoal specks, evoking a misty and tranquil atmosphere for sophisticated minimalist spaces.",
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/0b31d0dd-b6e6-4608-801a-28faafd4dbd5-bRgK1E9RRApQ4TB9OXTUxuRwj4kJ8N.jpeg",
    tone: "Soft White & Grey",
  },
  {
    name: "Bronze Ripple Brown",
    code: "BRB-210-ES-P",
    origin: "Spain",
    finish: "Polished",
    description:
      "A refined brown marble with delicate bronze and tan lines in complex ripple patterns across a rich, earthy cocoa background — ideal for luxurious, textured accent walls.",
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/2dcc8a28-e789-49aa-95aa-935cb96bc9da-WXZ2gnZL4hUHUtLPPMY6Wauyl5JKkZ.jpeg",
    tone: "Bronze & Cocoa",
  },
  {
    name: "Earthbound Mosaic Brown",
    code: "EMB-180-TR-L",
    origin: "Turkey",
    finish: "Leathered",
    description:
      "A complex, natural mosaic of fragmented earthy tones. An intricate pattern of angular segments offers an organic, robust texture — perfect for a sophisticated, rustic feel.",
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Earthbound.png-e9mYjRIr3n6aW36ZRu2gFFZcInXmUT.jpeg",
    tone: "Earth & Amber",
  },
]

// Used to populate the enquiry form dropdown.
export const enquiryOptions = highlights.map((p) => ({
  code: p.code,
  name: p.name,
}))
