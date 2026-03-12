const team = [
  {
    name: "김서연",
    role: "CEO & 공동창업자",
    image: "/images/team-1.jpg",
  },
  {
    name: "이준혁",
    role: "크리에이티브 디렉터",
    image: "/images/team-2.jpg",
  },
  {
    name: "박지민",
    role: "운영 총괄",
    image: "/images/team-3.jpg",
  },
  {
    name: "최유진",
    role: "마케팅 디렉터",
    image: "/images/team-4.jpg",
  },
]

export function TeamSection() {
  return (
    <section id="team" className="py-24 lg:py-32 bg-secondary">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="text-center">
          <p className="text-sm font-medium uppercase tracking-[0.2em] text-accent">
            Our Team
          </p>
          <h2 className="mt-4 font-serif text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl">
            MODO를 이끄는 사람들
          </h2>
          <p className="mx-auto mt-6 max-w-2xl text-lg text-muted-foreground">
            열정과 전문성을 갖춘 팀이 최고의 패션 경험을 만들어갑니다.
          </p>
        </div>

        <div className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {team.map((member) => (
            <div key={member.name} className="group text-center">
              <div className="aspect-[3/4] overflow-hidden rounded-xl bg-muted">
                <img
                  src={member.image}
                  alt={member.name}
                  className="h-full w-full object-cover grayscale transition-all duration-500 group-hover:grayscale-0 group-hover:scale-105"
                />
              </div>
              <h3 className="mt-6 text-lg font-semibold">{member.name}</h3>
              <p className="mt-1 text-sm text-muted-foreground">{member.role}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
