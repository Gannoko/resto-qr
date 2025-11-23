"use client"

import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Image from "next/image"

interface MenuItem {
  id: number
  name: string
  description: string
  price: string
  image: string
  tag?: string
}

interface MenuSectionProps {
  id: string
  title: string
  items: MenuItem[]
  onAddToCart: (itemId: number) => void
}

export function MenuSection({ id, title, items, onAddToCart }: MenuSectionProps) {
  return (
    <section id={id} className="mb-16 scroll-mt-24">
      <h2 className="mb-8 font-serif text-3xl text-balance md:text-4xl">{title}</h2>

      <div className="grid grid-cols-2 gap-3 md:gap-6 md:grid-cols-2 lg:grid-cols-3">
        {items.map((item) => (
          <Card key={item.id} className="group overflow-hidden transition-all hover:shadow-lg flex flex-col">
            <div className="relative aspect-[4/3] overflow-hidden bg-muted">
              <Image
                src={item.image || "/placeholder.svg"}
                alt={item.name}
                fill
                className="object-cover transition-transform duration-300 group-hover:scale-105"
              />
              {item.tag && (
                <div className="absolute top-2 right-2 bg-accent text-accent-foreground text-xs font-semibold px-2 py-1 rounded-full shadow-md">
                  {item.tag}
                </div>
              )}
            </div>

            <div className="p-3 md:p-6 flex-1 flex flex-col">
              <div className="mb-2 md:mb-3 flex items-start justify-between gap-2">
                <h3 className="font-serif text-sm md:text-xl text-balance leading-tight">{item.name}</h3>
                <span className="shrink-0 font-medium text-sm md:text-lg text-primary">{item.price}</span>
              </div>

              <p className="text-xs md:text-sm leading-relaxed text-muted-foreground text-pretty mb-3 md:mb-4 flex-1">
                {item.description}
              </p>

              <Button onClick={() => onAddToCart(item.id)} size="sm" className="w-full text-xs md:text-sm">
                Añadir
              </Button>
            </div>
          </Card>
        ))}
      </div>
    </section>
  )
}
