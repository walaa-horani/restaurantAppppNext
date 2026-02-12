"use client"

import { useCart } from "@/context/CartContext"
import { Button } from "@/components/ui/button"
import { toast } from "sonner"
import { ShoppingBag } from "lucide-react"

interface Product {
    _id: string
    name: string
    price: number
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    image: any
}

export function ProductActions({ product }: { product: Product }) {
    const { addItem } = useCart()

    const handleAdd = () => {
        addItem({ id: product._id, name: product.name, price: product.price, image: product.image })
        toast.success(`${product.name} added to cyber-ration.`)
    }

    return (
        <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4 pt-8 border-t border-white/10">
            <Button size="lg" className="flex-1 bg-primary text-black text-lg py-8 rounded-lg hover:bg-white hover:shadow-neon transition-all uppercase tracking-widest font-black" onClick={handleAdd}>
                <ShoppingBag className="mr-2 h-5 w-5" />
                Add to Order
            </Button>
            <Button size="lg" variant="outline" className="px-8 py-8 rounded-lg border-white/20 text-white hover:bg-white/10 text-lg transition-colors uppercase tracking-widest font-bold">
                Share
            </Button>
        </div>
    )
}
