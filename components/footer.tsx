import Link from "next/link"

const footerLinks = {
  company: [
    { name: "회사소개", href: "#about" },
    { name: "채용", href: "#jobs" },
    { name: "뉴스룸", href: "#" },
    { name: "파트너십", href: "#" },
  ],
  shop: [
    { name: "여성", href: "#" },
    { name: "남성", href: "#" },
    { name: "액세서리", href: "#" },
    { name: "신상품", href: "#" },
  ],
  support: [
    { name: "고객센터", href: "#" },
    { name: "배송정보", href: "#" },
    { name: "반품/교환", href: "#" },
    { name: "FAQ", href: "#" },
  ],
  legal: [
    { name: "이용약관", href: "#" },
    { name: "개인정보처리방침", href: "#" },
    { name: "쿠키정책", href: "#" },
  ],
}

const socialLinks = [
  { name: "Instagram", href: "#" },
  { name: "Facebook", href: "#" },
  { name: "YouTube", href: "#" },
  { name: "Pinterest", href: "#" },
]

export function Footer() {
  return (
    <footer className="bg-foreground py-16 lg:py-20">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-6">
          {/* Brand */}
          <div className="lg:col-span-2">
            <Link href="/" className="inline-block">
              <span className="font-serif text-2xl font-bold text-background">MODO</span>
            </Link>
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-background/70">
              트렌디하고 세련된 패션을 제안하는 프리미엄 온라인 쇼핑몰. 
              당신의 스타일을 완성합니다.
            </p>
            <div className="mt-6 flex gap-4">
              {socialLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="text-sm text-background/50 transition-colors hover:text-background"
                >
                  {link.name}
                </a>
              ))}
            </div>
          </div>

          {/* Links */}
          <div>
            <h3 className="text-sm font-semibold text-background">회사</h3>
            <ul className="mt-4 space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-sm text-background/60 transition-colors hover:text-background"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-background">쇼핑</h3>
            <ul className="mt-4 space-y-3">
              {footerLinks.shop.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-sm text-background/60 transition-colors hover:text-background"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-background">고객지원</h3>
            <ul className="mt-4 space-y-3">
              {footerLinks.support.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-sm text-background/60 transition-colors hover:text-background"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-background">정책</h3>
            <ul className="mt-4 space-y-3">
              {footerLinks.legal.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-sm text-background/60 transition-colors hover:text-background"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-16 border-t border-background/10 pt-8">
          <p className="text-center text-sm text-background/50">
            © 2024 MODO. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
