import { ShoppingCart } from "lucide-react"

interface CartHeaderProps {
  totalItems: number
}

export function CartHeader({ totalItems }: CartHeaderProps) {
  return (
    <div className="relative">
      <button className="flex items-center gap-2 rounded-lg bg-primary px-4 py-2 text-primary-foreground transition-colors hover:bg-primary/90">
        <ShoppingCart className="h-5 w-5" />
        <span className="hidden md:inline font-medium">Pedido</span>
      </button>

      {totalItems > 0 && (
        <div className="absolute -top-2 -right-2 flex h-6 w-6 items-center justify-center rounded-full bg-accent text-accent-foreground text-xs font-bold">
          {totalItems}
        </div>
      )}
    </div>
  )
}
