import { Hero } from "@/components/hero"
import { ChaoticGallery } from "@/components/chaotic-gallery"
import { Footer } from "@/components/footer"

export default function Page() {
  return (
    <main className="min-h-screen bg-background text-foreground selection:bg-primary selection:text-primary-foreground">
      <Hero />
      <ChaoticGallery />
      <Footer />
    </main>
  )
}
