const stats = [
  { value: "10+", label: "설립 연도", suffix: "년" },
  { value: "500K+", label: "고객 수", suffix: "" },
  { value: "50+", label: "글로벌 매장", suffix: "개" },
  { value: "98%", label: "고객 만족도", suffix: "" },
]

export function StatsSection() {
  return (
    <section className="py-16 lg:py-20 bg-foreground">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid grid-cols-2 gap-8 lg:grid-cols-4">
          {stats.map((stat) => (
            <div key={stat.label} className="text-center">
              <div className="font-serif text-4xl font-bold text-background lg:text-5xl">
                {stat.value}
              </div>
              <p className="mt-2 text-sm text-background/70">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
