import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { MapPin, Phone, Mail, Clock } from "lucide-react"

const contactInfo = [
  {
    icon: MapPin,
    label: "주소",
    value: "서울시 강남구 압구정로 123, MODO 빌딩",
  },
  {
    icon: Phone,
    label: "전화",
    value: "02-1234-5678",
  },
  {
    icon: Mail,
    label: "이메일",
    value: "contact@modo.co.kr",
  },
  {
    icon: Clock,
    label: "운영시간",
    value: "월-금 10:00 - 19:00",
  },
]

export function ContactSection() {
  return (
    <section id="contact" className="py-24 lg:py-32 bg-background">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid gap-16 lg:grid-cols-2">
          {/* Left Content */}
          <div>
            <p className="text-sm font-medium uppercase tracking-[0.2em] text-accent">
              Contact Us
            </p>
            <h2 className="mt-4 font-serif text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl">
              문의하기
            </h2>
            <p className="mt-6 text-lg text-muted-foreground">
              MODO에 대해 궁금한 점이 있으시면 언제든 연락해주세요.
              담당자가 빠르게 답변 드리겠습니다.
            </p>

            <div className="mt-10 space-y-6">
              {contactInfo.map((item) => (
                <div key={item.label} className="flex items-start gap-4">
                  <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-secondary">
                    <item.icon className="h-5 w-5 text-foreground" />
                  </div>
                  <div>
                    <p className="text-sm font-medium text-muted-foreground">{item.label}</p>
                    <p className="mt-1 font-medium">{item.value}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Form */}
          <div className="rounded-2xl bg-secondary p-8 lg:p-10">
            <h3 className="text-xl font-semibold">문의 메시지 보내기</h3>
            <form className="mt-8 space-y-6">
              <div className="grid gap-6 sm:grid-cols-2">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium">
                    이름
                  </label>
                  <Input
                    type="text"
                    id="name"
                    placeholder="홍길동"
                    className="mt-2"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium">
                    이메일
                  </label>
                  <Input
                    type="email"
                    id="email"
                    placeholder="hello@example.com"
                    className="mt-2"
                  />
                </div>
              </div>
              <div>
                <label htmlFor="subject" className="block text-sm font-medium">
                  제목
                </label>
                <Input
                  type="text"
                  id="subject"
                  placeholder="문의 제목을 입력해주세요"
                  className="mt-2"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium">
                  메시지
                </label>
                <textarea
                  id="message"
                  rows={4}
                  placeholder="문의 내용을 입력해주세요"
                  className="mt-2 w-full rounded-md border border-input bg-background px-3 py-2 text-sm placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring"
                />
              </div>
              <Button type="submit" className="w-full">
                메시지 보내기
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}
