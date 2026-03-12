import { Header } from "@/components/header"
import { HeroSection } from "@/components/hero-section"
import { AboutSection } from "@/components/about-section"
import { ValuesSection } from "@/components/values-section"
import { ProductsSection } from "@/components/products-section"
import { StatsSection } from "@/components/stats-section"
import { TeamSection } from "@/components/team-section"
import { ContactSection } from "@/components/contact-section"
import { JobsSection } from "@/components/jobs-section"
import { Footer } from "@/components/footer"

export default function HomePage() {
  return (
    <main>
      <Header />
      <HeroSection />
      <AboutSection />
      <ValuesSection />
      <ProductsSection />
      <StatsSection />
      <TeamSection />
      <ContactSection />
      <JobsSection />
      <Footer />
    </main>
  )
}
