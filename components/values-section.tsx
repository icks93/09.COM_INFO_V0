import { Sparkles, Leaf, Heart, Lightbulb } from "lucide-react"

const values = [
  {
    icon: Sparkles,
    number: "01",
    title: "프리미엄 품질",
    description: "최고급 소재와 장인정신으로 완성되는 제품. 하나하나 섬세한 손길로 만들어지는 MODO의 품질을 경험하세요.",
  },
  {
    icon: Leaf,
    number: "02",
    title: "지속가능성",
    description: "환경을 생각하는 친환경 소재와 윤리적인 생산 과정. 패션의 아름다움과 지구의 미래를 함께 고려합니다.",
  },
  {
    icon: Heart,
    number: "03",
    title: "고객 중심",
    description: "고객의 만족이 곧 우리의 성공입니다. 개인화된 서비스와 세심한 케어로 최고의 쇼핑 경험을 제공합니다.",
  },
  {
    icon: Lightbulb,
    number: "04",
    title: "혁신적 디자인",
    description: "트렌드를 선도하는 창의적인 디자인. 클래식한 우아함과 현대적 감각의 완벽한 조화를 추구합니다.",
  },
]

export function ValuesSection() {
  return (
    <section id="values" className="py-24 lg:py-32 bg-secondary">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="text-center">
          <p className="text-sm font-medium uppercase tracking-[0.2em] text-accent">
            Our Core Values
          </p>
          <h2 className="mt-4 font-serif text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl">
            MODO의 핵심 가치
          </h2>
          <p className="mx-auto mt-6 max-w-2xl text-lg text-muted-foreground">
            우리가 추구하는 네 가지 핵심 가치가 MODO의 모든 제품과 서비스에 담겨있습니다.
          </p>
        </div>

        <div className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {values.map((value) => (
            <div
              key={value.number}
              className="group relative rounded-xl bg-card p-8 transition-all duration-300 hover:shadow-lg border border-border"
            >
              <div className="flex items-center justify-between">
                <span className="font-serif text-4xl font-bold text-border">{value.number}</span>
                <value.icon className="h-6 w-6 text-accent" />
              </div>
              <h3 className="mt-6 text-xl font-semibold">{value.title}</h3>
              <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
                {value.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
