import { Button } from "@/components/ui/button"

export function JobsSection() {
  return (
    <section id="jobs" className="py-24 lg:py-32 bg-background">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="text-center">
          <p className="text-sm font-medium uppercase tracking-[0.2em] text-accent">
            Careers at MODO
          </p>
          <h2 className="mt-4 font-serif text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl">
            MODO와 함께 일하기
          </h2>
          <p className="mx-auto mt-6 max-w-2xl text-lg text-muted-foreground">
            MODO는 창의적이고 열정적인 인재를 찾고 있습니다. 함께 패션 산업을 혁신해보세요.
          </p>
        </div>

        <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          <div className="bg-secondary p-6 rounded-xl">
            <h3 className="text-xl font-semibold">MD 자격 요건</h3>
            <ul className="mt-4 space-y-2">
              <li className="flex items-center">
                <span className="text-lg">•</span>
                <span className="ml-2">패션 산업 경험 3년 이상</span>
              </li>
              <li className="flex items-center">
                <span className="text-lg">•</span>
                <span className="ml-2">트렌드 분석 능력</span>
              </li>
              <li className="flex items-center">
                <span className="text-lg">•</span>
                <span className="ml-2">고객 중심의 사고</span>
              </li>
              <li className="flex items-center">
                <span className="text-lg">•</span>
                <span className="ml-2">팀워크와 커뮤니케이션 능력</span>
              </li>
              <li className="flex items-center">
                <span className="text-lg">•</span>
                <span className="ml-2">창의적이고 혁신적인 아이디어</span>
              </li>
            </ul>
            <Button className="mt-8 w-full">지원하기</Button>
          </div>

          <div className="bg-secondary p-6 rounded-xl">
            <h3 className="text-xl font-semibold">MD의 역할</h3>
            <ul className="mt-4 space-y-2">
              <li className="flex items-center">
                <span className="text-lg">•</span>
                <span className="ml-2">제품 라인 개발 및 관리</span>
              </li>
              <li className="flex items-center">
                <span className="text-lg">•</span>
                <span className="ml-2">판매 전략 수립 및 실행</span>
              </li>
              <li className="flex items-center">
                <span className="text-lg">•</span>
                <span className="ml-2">고객 피드백 분석 및 반영</span>
              </li>
              <li className="flex items-center">
                <span className="text-lg">•</span>
                <span className="ml-2">팀 리딩 및 협업</span>
              </li>
              <li className="flex items-center">
                <span className="text-lg">•</span>
                <span className="ml-2">시장 조사 및 트렌드 분석</span>
              </li>
            </ul>
          </div>

          <div className="bg-secondary p-6 rounded-xl">
            <h3 className="text-xl font-semibold">우리가 제공하는 것</h3>
            <ul className="mt-4 space-y-2">
              <li className="flex items-center">
                <span className="text-lg">•</span>
                <span className="ml-2">경쟁력 있는 급여 및 복리후생</span>
              </li>
              <li className="flex items-center">
                <span className="text-lg">•</span>
                <span className="ml-2">성장 가능성 있는 경력 개발</span>
              </li>
              <li className="flex items-center">
                <span className="text-lg">•</span>
                <span className="ml-2">창의적인 작업 환경</span>
              </li>
              <li className="flex items-center">
                <span className="text-lg">•</span>
                <span className="ml-2">팀워크와 협업의 문화</span>
              </li>
              <li className="flex items-center">
                <span className="text-lg">•</span>
                <span className="ml-2">정기적인 교육 및 트레이닝</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}