import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-foreground">
      {/* Background Image Overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-60"
        style={{
          backgroundImage: `url('/images/hero-fashion.jpg')`,
        }}
      />
      
      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-foreground/40 via-foreground/60 to-foreground/80" />

      <div className="relative z-10 mx-auto max-w-5xl px-6 text-center">
        <p className="mb-6 text-sm font-medium uppercase tracking-[0.3em] text-background/70">
          Premium Fashion Brand
        </p>
        <h1 className="font-serif text-4xl font-bold tracking-tight text-background sm:text-5xl md:text-6xl lg:text-7xl">
          <span className="block text-balance">당신의 스타일을</span>
          <span className="block text-balance mt-2">완성하다</span>
        </h1>
        <p className="mx-auto mt-8 max-w-2xl text-lg leading-relaxed text-background/80">
          MODO는 트렌디하고 세련된 패션을 제안합니다.
          <br className="hidden sm:block" />
          당신만의 개성을 표현할 수 있는 프리미엄 컬렉션을 만나보세요.
        </p>
        <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <Button size="lg" className="group bg-background text-foreground hover:bg-background/90">
            컬렉션 보기
            <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
          </Button>
          <Button size="lg" variant="outline" className="border-background/30 text-background hover:bg-background/10">
            브랜드 스토리
          </Button>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2">
        <div className="flex flex-col items-center gap-2">
          <span className="text-xs uppercase tracking-widest text-background/60">Scroll</span>
          <div className="h-12 w-px bg-background/30" />
        </div>
      </div>
    </section>
  )
}
