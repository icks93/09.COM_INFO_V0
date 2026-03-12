"use client"

import Link from "next/link"
import { useState } from "react"
import { Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"

const navLinks = [
  { href: "#about", label: "회사소개" },
  { href: "#values", label: "핵심가치" },
  { href: "#products", label: "제품" },
  { href: "#team", label: "팀" },
  { href: "#contact", label: "연락처" },
]

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-8">
        <Link href="/" className="flex items-center gap-2">
          <span className="font-serif text-2xl font-bold tracking-tight">MODO</span>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden lg:flex lg:gap-x-8">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
            >
              {link.label}
            </Link>
          ))}
        </div>

        <div className="hidden lg:flex lg:items-center lg:gap-4">
          <Button variant="outline" size="sm">
            로그인
          </Button>
          <Button size="sm">
            쇼핑하기
          </Button>
        </div>

        {/* Mobile Menu Button */}
        <button
          type="button"
          className="lg:hidden"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          <span className="sr-only">메뉴 열기</span>
          {mobileMenuOpen ? (
            <X className="h-6 w-6" aria-hidden="true" />
          ) : (
            <Menu className="h-6 w-6" aria-hidden="true" />
          )}
        </button>
      </nav>

      {/* Mobile Navigation */}
      {mobileMenuOpen && (
        <div className="lg:hidden">
          <div className="space-y-1 px-6 pb-6 pt-2">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="block py-2 text-base font-medium text-muted-foreground transition-colors hover:text-foreground"
                onClick={() => setMobileMenuOpen(false)}
              >
                {link.label}
              </Link>
            ))}
            <div className="flex flex-col gap-3 pt-4">
              <Button variant="outline" className="w-full">
                로그인
              </Button>
              <Button className="w-full">
                쇼핑하기
              </Button>
            </div>
          </div>
        </div>
      )}
    </header>
  )
}
