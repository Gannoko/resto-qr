"use client"

import { useEffect, useState } from "react"
import { cn } from "@/lib/utils"
import { Menu, X, Home } from "lucide-react"
import { Button } from "@/components/ui/button"

interface MenuNavigationProps {
  activeSection: string
}

const categories = [
  { id: "promos", label: "Menú Promos" },
  { id: "aperitivos", label: "Aperitivos" },
  { id: "carnes", label: "Carnes" },
  { id: "arroz", label: "Arroz" },
  { id: "entradas", label: "Entradas" },
  { id: "fondos", label: "Fondos" },
  { id: "postres", label: "Postres" },
  { id: "tragos", label: "Tragos" },
]

export function MenuNavigation({ activeSection }: MenuNavigationProps) {
  const [isSticky, setIsSticky] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsSticky(window.scrollY > 100)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id)
    if (element) {
      const offset = 100
      const elementPosition = element.getBoundingClientRect().top + window.scrollY
      window.scrollTo({
        top: elementPosition - offset,
        behavior: "smooth",
      })
      setIsMobileMenuOpen(false)
    }
  }

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    })
  }

  return (
    <nav
      className={cn(
        "sticky top-0 z-40 border-b border-border bg-background/95 backdrop-blur transition-shadow supports-[backdrop-filter]:bg-background/80",
        isSticky && "shadow-md",
      )}
    >
      <div className="container mx-auto px-4">
        <div className="hidden md:flex gap-1 overflow-x-auto py-4 scrollbar-hide md:gap-2 md:justify-center">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => scrollToSection(category.id)}
              className={cn(
                "whitespace-nowrap rounded-lg px-4 py-2 text-sm font-medium transition-colors md:px-6 md:text-base",
                activeSection === category.id
                  ? "bg-primary text-primary-foreground"
                  : "bg-secondary text-secondary-foreground hover:bg-secondary/80",
              )}
            >
              {category.label}
            </button>
          ))}
        </div>

        <div className="md:hidden py-3 flex items-center justify-center gap-3">
          <Button
            variant="outline"
            size="icon"
            onClick={scrollToTop}
            className="shrink-0 bg-transparent"
            aria-label="Volver arriba"
          >
            <Home className="h-4 w-4" />
          </Button>

          <Button
            variant="outline"
            size="sm"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="flex items-center gap-2"
          >
            {isMobileMenuOpen ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
            <span className="font-medium">MENÚ</span>
          </Button>
        </div>

        {isMobileMenuOpen && (
          <div className="md:hidden pb-3 grid grid-cols-2 gap-2">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => scrollToSection(category.id)}
                className={cn(
                  "rounded-lg px-4 py-2.5 text-sm font-medium transition-colors text-center",
                  activeSection === category.id
                    ? "bg-primary text-primary-foreground"
                    : "bg-secondary text-secondary-foreground hover:bg-secondary/80",
                )}
              >
                {category.label}
              </button>
            ))}
          </div>
        )}
      </div>
    </nav>
  )
}
