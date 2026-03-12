import { ArrowUpRight } from "lucide-react"

const categories = [
  {
    name: "여성 컬렉션",
    description: "우아함과 세련됨의 조화",
    image: "/images/category-women.jpg",
    count: "120+ 상품",
  },
  {
    name: "남성 컬렉션",
    description: "모던하고 클래식한 스타일",
    image: "/images/category-men.jpg",
    count: "95+ 상품",
  },
  {
    name: "액세서리",
    description: "스타일을 완성하는 디테일",
    image: "/images/category-accessories.jpg",
    count: "200+ 상품",
  },
]

export function ProductsSection() {
  return (
    <section id="products" className="py-24 lg:py-32 bg-background">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
          <div>
            <p className="text-sm font-medium uppercase tracking-[0.2em] text-accent">
              Our Products
            </p>
            <h2 className="mt-4 font-serif text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl">
              카테고리 둘러보기
            </h2>
          </div>
          <a
            href="#"
            className="group inline-flex items-center gap-2 text-sm font-medium transition-colors hover:text-accent"
          >
            전체 제품 보기
            <ArrowUpRight className="h-4 w-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
          </a>
        </div>

        <div className="mt-12 grid gap-6 lg:grid-cols-3">
          {categories.map((category, index) => (
            <a
              key={category.name}
              href="#"
              className={`group relative overflow-hidden rounded-xl ${
                index === 0 ? "lg:row-span-2" : ""
              }`}
            >
              <div className={`${index === 0 ? "aspect-[3/4]" : "aspect-[4/3]"} overflow-hidden bg-muted`}>
                <img
                  src={category.image}
                  alt={category.name}
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
              </div>
              
              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-foreground/80 via-foreground/20 to-transparent" />
              
              {/* Content */}
              <div className="absolute bottom-0 left-0 right-0 p-6 lg:p-8">
                <span className="text-xs font-medium uppercase tracking-wider text-background/70">
                  {category.count}
                </span>
                <h3 className="mt-2 text-2xl font-bold text-background">{category.name}</h3>
                <p className="mt-1 text-sm text-background/80">{category.description}</p>
              </div>

              {/* Hover Arrow */}
              <div className="absolute right-6 top-6 flex h-10 w-10 items-center justify-center rounded-full bg-background/20 backdrop-blur-sm transition-all duration-300 group-hover:bg-background">
                <ArrowUpRight className="h-5 w-5 text-background transition-colors group-hover:text-foreground" />
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}
