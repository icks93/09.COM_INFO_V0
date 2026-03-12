import { Button } from "@/components/ui/button"

export function AboutSection() {
  return (
    <section id="about" className="py-24 lg:py-32 bg-background">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16 items-center">
          {/* Left Content */}
          <div>
            <p className="text-sm font-medium uppercase tracking-[0.2em] text-accent">
              About MODO
            </p>
            <h2 className="mt-4 font-serif text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl text-pretty">
              혁신과 지속가능성을 추구하는 패션 브랜드
            </h2>
            <p className="mt-6 text-lg leading-relaxed text-muted-foreground">
              2015년 서울에서 시작된 MODO는 현대적인 감각과 지속가능한 패션을 결합한 
              프리미엄 라이프스타일 브랜드입니다.
            </p>
            <p className="mt-4 text-lg leading-relaxed text-muted-foreground">
              우리는 단순한 옷을 만드는 것이 아닌, 당신의 일상에 스타일과 자신감을 
              더하는 경험을 선사합니다. 트렌드를 넘어 지속되는 가치를 추구합니다.
            </p>
            <Button className="mt-8" variant="outline">
              브랜드 히스토리 보기
            </Button>
          </div>

          {/* Right Image Grid */}
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-4">
              <div className="aspect-[3/4] overflow-hidden rounded-lg bg-muted">
                <img
                  src="/images/about-1.jpg"
                  alt="패션 컬렉션 이미지"
                  className="h-full w-full object-cover transition-transform duration-500 hover:scale-105"
                />
              </div>
              <div className="aspect-square overflow-hidden rounded-lg bg-muted">
                <img
                  src="/images/about-2.jpg"
                  alt="매장 인테리어"
                  className="h-full w-full object-cover transition-transform duration-500 hover:scale-105"
                />
              </div>
            </div>
            <div className="pt-8 space-y-4">
              <div className="aspect-square overflow-hidden rounded-lg bg-muted">
                <img
                  src="/images/about-3.jpg"
                  alt="제작 과정"
                  className="h-full w-full object-cover transition-transform duration-500 hover:scale-105"
                />
              </div>
              <div className="aspect-[3/4] overflow-hidden rounded-lg bg-muted">
                <img
                  src="/images/about-4.jpg"
                  alt="패션 모델"
                  className="h-full w-full object-cover transition-transform duration-500 hover:scale-105"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
