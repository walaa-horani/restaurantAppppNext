"use client"

import { useCart } from "@/context/CartContext"
import { Button } from "@/components/ui/button"
import Image from "next/image"
import Link from "next/link"
import { urlFor } from "@/lib/sanity"
import { Plus } from "lucide-react"
import { toast } from "sonner"

interface Product {
    _id: string
    name: string
    price: number
    image: any
    slug: { current: string }
}

export function PairWith({ items }: { items: Product[] }) {
    const { addItem } = useCart()

    const handleAdd = (item: Product) => {
        addItem({ id: item._id, name: item.name, price: item.price, image: item.image })
        toast.success(`Pairing confirmed: ${item.name}`)
    }

    if (!items || items.length === 0) return null

    return (
        <div className="pt-16">
            <h3 className="text-xl font-black text-white uppercase tracking-tighter mb-8 border-b border-primary/30 pb-4 inline-block">
                Frequently Paired With
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {items.map((item) => (
                    <div key={item._id} className="group relative bg-black/40 border border-white/10 rounded-xl overflow-hidden hover:border-primary/50 transition-colors">
                        <div className="relative h-40 w-full overflow-hidden">
                            {item.image ? (
                                <Image
                                    src={urlFor(item.image).url()}
                                    alt={item.name}
                                    fill
                                    className="object-cover transition-transform duration-500 group-hover:scale-110 opacity-80 group-hover:opacity-100"
                                />
                            ) : (
                                <div className="w-full h-full bg-gray-800" />
                            )}
                            <Button
                                size="icon"
                                className="absolute bottom-2 right-2 h-8 w-8 rounded-full bg-primary text-black hover:bg-white shadow-neon opacity-0 group-hover:opacity-100 transition-all translate-y-2 group-hover:translate-y-0"
                                onClick={() => handleAdd(item)}
                            >
                                <Plus className="h-4 w-4" />
                            </Button>
                        </div>
                        <Link href={`/product/${item.slug.current}`} className="block p-4">
                            <h4 className="text-white font-bold text-sm mb-1 group-hover:text-primary transition-colors truncate">{item.name}</h4>
                            <p className="text-xs text-gray-400 font-mono">${item.price}</p>
                        </Link>
                    </div>
                ))}
            </div>
        </div>
    )
}
