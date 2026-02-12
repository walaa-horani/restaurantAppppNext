"use client"

import { useCart } from "@/context/CartContext"
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetDescription } from "@/components/ui/sheet"
import { Button } from "@/components/ui/button"
import Image from "next/image"
import { urlFor } from "@/lib/sanity"
import { Trash2 } from "lucide-react"
import { toast } from "sonner"

export function CartSheet() {
    const { items, removeItem, isOpen, setIsOpen, total } = useCart()

    const handleCheckout = () => {
        toast.info("Checkout system is offline in this demo version.")
    }

    return (
        <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetContent className="w-full sm:max-w-md bg-background border-l border-white/10 text-foreground flex flex-col h-full">
                <SheetHeader className="space-y-4 pb-6 border-b border-white/10">
                    <SheetTitle className="text-2xl font-black text-white tracking-tighter">
                        YOUR <span className="text-primary">ORDER</span>
                    </SheetTitle>
                    <SheetDescription className="text-gray-400">
                        Review your cyber-rations before checkout.
                    </SheetDescription>
                </SheetHeader>

                <div className="flex-1 overflow-y-auto py-6 space-y-6">
                    {items.length === 0 ? (
                        <div className="flex flex-col items-center justify-center h-full text-muted-foreground space-y-4">
                            <p className="font-mono text-sm">[ CART EMPTY ]</p>
                            <Button variant="outline" onClick={() => setIsOpen(false)}>
                                Return to Menu
                            </Button>
                        </div>
                    ) : (
                        items.map((item) => (
                            <div key={item.id} className="flex items-center space-x-4 bg-white/5 p-4 rounded-lg border border-white/5">
                                <div className="relative h-16 w-16 rounded-md overflow-hidden bg-black/50 border border-white/10 shrink-0">
                                    {item.image ? (
                                        <Image
                                            // eslint-disable-next-line @typescript-eslint/no-explicit-any
                                            src={urlFor(item.image as any).url()}
                                            alt={item.name}
                                            fill
                                            className="object-cover"
                                        />
                                    ) : (
                                        <div className="w-full h-full bg-gray-800 flex items-center justify-center text-xs text-gray-500">IMG</div>
                                    )}
                                </div>
                                <div className="flex-1 min-w-0">
                                    <h4 className="text-sm font-bold text-white truncate">{item.name}</h4>
                                    <p className="text-xs text-primary font-mono">${item.price}</p>
                                    <p className="text-xs text-gray-400">Qty: {item.quantity}</p>
                                </div>
                                <Button
                                    variant="ghost"
                                    size="icon"
                                    className="text-gray-400 hover:text-red-500 hover:bg-red-500/10"
                                    onClick={() => removeItem(item.id)}
                                >
                                    <Trash2 className="h-4 w-4" />
                                </Button>
                            </div>
                        ))
                    )}
                </div>

                <div className="border-t border-white/10 pt-6 space-y-4">
                    <div className="flex items-center justify-between text-lg font-bold">
                        <span className="text-white">Total</span>
                        <span className="text-primary font-mono">${total.toFixed(2)}</span>
                    </div>
                    <Button
                        className="w-full h-12 bg-primary text-black font-black text-lg hover:bg-white hover:shadow-neon transition-all uppercase tracking-widest disabled:opacity-50 disabled:cursor-not-allowed"
                        disabled={items.length === 0}
                        onClick={handleCheckout}
                    >
                        Checkout
                    </Button>
                </div>
            </SheetContent>
        </Sheet>
    )
}
