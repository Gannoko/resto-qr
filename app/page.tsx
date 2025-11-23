"use client"

import { useState, useEffect } from "react"
import { MenuNavigation } from "@/components/menu-navigation"
import { MenuSection } from "@/components/menu-section"
import { CartHeader } from "@/components/cart-header"
import { Clock, ChevronDown } from "lucide-react"

export interface MenuItem {
  id: number
  name: string
  description: string
  price: string
  image: string
  tag?: string
}

export default function MenuPage() {
  const [activeSection, setActiveSection] = useState("promos")
  const [cart, setCart] = useState<Record<number, number>>({})
  const [showSchedule, setShowSchedule] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      const sections = ["promos", "aperitivos", "carnes", "arroz", "entradas", "fondos", "postres", "tragos"]
      const scrollPosition = window.scrollY + 120

      for (const section of sections) {
        const element = document.getElementById(section)
        if (element) {
          const { offsetTop, offsetHeight } = element
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section)
            break
          }
        }
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const addToCart = (itemId: number) => {
    setCart((prev) => ({
      ...prev,
      [itemId]: (prev[itemId] || 0) + 1,
    }))
  }

  const totalItems = Object.values(cart).reduce((sum, count) => sum + count, 0)

  const menuData = {
    promos: {
      title: "Menú Promos",
      items: [
        {
          id: 100,
          name: "Combo Familiar 1",
          description: "Chaufán especial, pollo agridulce, wontones fritos y bebida 2L",
          price: "$45.00",
          image: "/images/Arroz Chaufán Especial.webp",
          tag: "Familiares",
        },
        {
          id: 101,
          name: "Combo Familiar 2",
          description: "Arroz chaufán, carne mongoliana, rollitos primavera y bebida 2L",
          price: "$48.00",
          image: "/images/Carne Mongoliana.webp",
          tag: "Familiares",
        },
        {
          id: 102,
          name: "Combo Familiar 3",
          description: "Chow mein, cerdo asado, wontones al vapor y bebida 2L",
          price: "$50.00",
          image: "/images/Cerdo Asado.webp",
          tag: "Familiares",
        },
      ],
    },
    aperitivos: {
      title: "Aperitivos",
      items: [
        {
          id: 1,
          name: "Arrollado Queso Jamón",
          description: "Crujientes rollitos fritos rellenos de queso derretido y jamón ahumado",
          price: "$8.50",
          image: "/images/Arrollado Queso Jamón.webp",
        },
        {
          id: 2,
          name: "Rollitos Primavera",
          description: "Rollitos vegetarianos con zanahoria, col china y brotes de soja",
          price: "$7.00",
          image: "/placeholder.svg?height=300&width=400",
        },
        {
          id: 3,
          name: "Wonton Fritos",
          description: "Wontons crujientes rellenos de cerdo y camarones con salsa agridulce",
          price: "$9.00",
          image: "/placeholder.svg?height=300&width=400",
        },
      ],
    },
    carnes: {
      title: "Carnes",
      items: [
        {
          id: 4,
          name: "Carne Mongoliana",
          description: "Carne de res salteada con cebolla, pimientos verdes y amarillos en salsa especial",
          price: "$18.50",
          image: "/images/Carne Mongoliana.webp",
        },
        {
          id: 5,
          name: "Carne Especial China",
          description: "Carne de res con bambú, champiñones y vegetales mixtos en salsa de ostras",
          price: "$19.00",
          image: "/images/Carne Especial China.webp",
        },
        {
          id: 6,
          name: "Carne Champiñón",
          description: "Carne tierna salteada con champiñones frescos, cebolla y pimientos",
          price: "$17.50",
          image: "/images/Carne Champiñon.webp",
        },
        {
          id: 7,
          name: "Cerdo Asado",
          description: "Cerdo asado con vegetales salteados, bambú y pimientos en salsa aromática",
          price: "$16.50",
          image: "/images/Cerdo Asado.webp",
        },
      ],
    },
    arroz: {
      title: "Arroz",
      items: [
        {
          id: 8,
          name: "Arroz Blanco",
          description: "Arroz blanco al vapor, perfecto acompañamiento para cualquier plato",
          price: "$4.50",
          image: "/images/Arroz blanco.webp",
        },
        {
          id: 9,
          name: "Arroz Chaufán",
          description: "Arroz frito con vegetales, huevo y cebollín al estilo tradicional",
          price: "$12.00",
          image: "/images/Arroz Chaufán.webp",
        },
        {
          id: 10,
          name: "Arroz Chaufán Especial",
          description: "Arroz frito con camarones, pollo, cerdo, vegetales y huevo",
          price: "$15.50",
          image: "/images/Arroz Chaufán Especial.webp",
        },
      ],
    },
    entradas: {
      title: "Entradas",
      items: [
        {
          id: 11,
          name: "Sopa Wantán",
          description: "Sopa caliente con wontons rellenos, vegetales y caldo aromático",
          price: "$9.50",
          image: "/placeholder.svg?height=300&width=400",
        },
        {
          id: 12,
          name: "Dumplings al Vapor",
          description: "Empanadillas al vapor rellenas de cerdo y camarones con jengibre",
          price: "$10.00",
          image: "/placeholder.svg?height=300&width=400",
        },
        {
          id: 13,
          name: "Ensalada China",
          description: "Lechuga fresca, zanahoria, pepino con aderezo de sésamo",
          price: "$8.00",
          image: "/placeholder.svg?height=300&width=400",
        },
      ],
    },
    fondos: {
      title: "Fondos",
      items: [
        {
          id: 14,
          name: "Pollo Kung Pao",
          description: "Pollo salteado con cacahuates, pimientos rojos y chile seco",
          price: "$16.50",
          image: "/placeholder.svg?height=300&width=400",
        },
        {
          id: 15,
          name: "Chow Mein de Camarones",
          description: "Fideos salteados con camarones grandes y vegetales crujientes",
          price: "$17.50",
          image: "/placeholder.svg?height=300&width=400",
        },
        {
          id: 16,
          name: "Pollo Agridulce",
          description: "Pollo empanizado con piña, pimientos en salsa agridulce",
          price: "$15.00",
          image: "/placeholder.svg?height=300&width=400",
        },
      ],
    },
    postres: {
      title: "Postres",
      items: [
        {
          id: 17,
          name: "Brownie con Helado",
          description: "Brownie de chocolate caliente con helado de vainilla y salsa de chocolate",
          price: "$8.50",
          image: "/images/Brownie con Helado.webp",
        },
        {
          id: 18,
          name: "Plátano Frito",
          description: "Plátano envuelto en masa crujiente con miel y sésamo",
          price: "$6.50",
          image: "/placeholder.svg?height=300&width=400",
        },
        {
          id: 19,
          name: "Galletas de la Fortuna",
          description: "Galletas crujientes tradicionales con mensajes de la fortuna",
          price: "$4.00",
          image: "/placeholder.svg?height=300&width=400",
        },
      ],
    },
    tragos: {
      title: "Tragos",
      items: [
        {
          id: 20,
          name: "Coca Cola",
          description: "Refrescos Coca Cola en todas sus variedades: Clásica, Zero, Light, Fanta, Sprite",
          price: "$3.50",
          image: "/images/Bebidas.webp",
        },
        {
          id: 21,
          name: "Té Verde Jazmín",
          description: "Té verde aromático con flores de jazmín servido en tetera",
          price: "$4.00",
          image: "/placeholder.svg?height=300&width=400",
        },
        {
          id: 22,
          name: "Licuado de Lichi",
          description: "Bebida refrescante de lichi natural con hielo",
          price: "$5.50",
          image: "/placeholder.svg?height=300&width=400",
        },
      ],
    },
  }

  const scheduleData = [
    { day: "Lunes", hours: "11:00 AM - 10:00 PM" },
    { day: "Martes", hours: "11:00 AM - 10:00 PM" },
    { day: "Miércoles", hours: "11:00 AM - 10:00 PM" },
    { day: "Jueves", hours: "11:00 AM - 10:00 PM" },
    { day: "Viernes", hours: "11:00 AM - 11:00 PM" },
    { day: "Sábado", hours: "11:00 AM - 11:00 PM" },
    { day: "Domingo", hours: "12:00 PM - 10:00 PM" },
  ]

  return (
    <div className="min-h-screen bg-background">
      <header
        className="border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/80 relative"
        style={{
          backgroundImage: "url('/images/CASACHINAFONDO.png')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 bg-black/60"></div>
        <div className="container mx-auto px-4 py-6 relative z-10">
          <div className="flex items-start justify-between gap-4">
            <div>
              <img src="/images/CASACHINA.png" alt="CASA CHINA" className="h-16 md:h-20 w-auto" />
              <p className="mt-2 text-white text-pretty">Auténtica cocina china tradicional</p>
              <div className="mt-3">
                <button
                  onClick={() => setShowSchedule(!showSchedule)}
                  className="flex items-center gap-2 text-sm text-white hover:text-white/80 transition-colors"
                >
                  <Clock className="h-4 w-4" />
                  <span>Horario de atención</span>
                  <ChevronDown className={`h-4 w-4 transition-transform ${showSchedule ? "rotate-180" : ""}`} />
                </button>
                {showSchedule && (
                  <div className="mt-2 bg-white/95 backdrop-blur rounded-lg p-3 text-sm shadow-lg">
                    {scheduleData.map((item) => (
                      <div key={item.day} className="flex justify-between py-1 border-b border-border last:border-0">
                        <span className="font-medium text-foreground">{item.day}:</span>
                        <span className="text-muted-foreground">{item.hours}</span>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </div>
            <CartHeader totalItems={totalItems} />
          </div>
        </div>
      </header>

      <MenuNavigation activeSection={activeSection} />

      <main className="container mx-auto px-4 py-8">
        {Object.entries(menuData).map(([key, section]) => (
          <MenuSection key={key} id={key} title={section.title} items={section.items} onAddToCart={addToCart} />
        ))}
      </main>

      <footer className="border-t border-border bg-muted/30 py-12 mt-16">
        <div className="container mx-auto px-4">
          <div className="grid gap-8 md:grid-cols-3 text-center md:text-left">
            <div>
              <h3 className="font-semibold text-lg mb-3">Ubicación</h3>
              <p className="text-muted-foreground text-sm">
                Centro Comercial Plaza Mayor
                <br />
                Local 145, Segundo Piso
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-lg mb-3">Dirección</h3>
              <p className="text-muted-foreground text-sm">
                Av. Principal #456
                <br />
                Distrito Central, Ciudad
                <br />
                CP 12345
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-lg mb-3">Contacto</h3>
              <p className="text-muted-foreground text-sm">
                Tel: (01) 234-5678
                <br />
                Móvil: +51 987-654-321
                <br />
                Email: info@casachina.com
              </p>
            </div>
          </div>
          <div className="text-center mt-8 pt-8 border-t border-border">
            <p className="text-muted-foreground text-sm">© 2025 CASA CHINA. Todos los derechos reservados.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
