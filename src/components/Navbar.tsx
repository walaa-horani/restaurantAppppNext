"use client"

import Link from 'next/link'
import { Button } from './ui/button'
import { useCart } from "@/context/CartContext"
import { ShoppingCart } from "lucide-react"

export function Navbar() {
    const { setIsOpen, items } = useCart()
    return (
        <nav className="border-b border-border/40 bg-background/80 backdrop-blur-md sticky top-0 z-50 w-full transition-all duration-300">
            <div className="container mx-auto flex h-16 items-center justify-between px-6">
                <Link href="/" className="mr-6 flex items-center space-x-2 group">
                    <span className="text-2xl font-black text-primary tracking-tighter group-hover:shadow-neon transition-all duration-300">NEON BITES</span>
                </Link>
                <div className="hidden md:flex items-center space-x-8 text-sm font-medium">
                    <Link href="#menu" className="text-foreground/80 hover:text-primary hover:shadow-neon transition-all duration-300">Menu</Link>
                    <Link href="#locations" className="text-foreground/80 hover:text-primary hover:shadow-neon transition-all duration-300">Locations</Link>
                    <Link href="#" className="text-foreground/80 hover:text-primary hover:shadow-neon transition-all duration-300">About Us</Link>
                    <Link href="#" className="text-foreground/80 hover:text-primary hover:shadow-neon transition-all duration-300">Merch Store</Link>
                </div>
                <div className="flex items-center space-x-4">
                    <Button variant="ghost" className="relative text-white hover:text-primary transition-colors" onClick={() => setIsOpen(true)}>
                        <ShoppingCart className="w-6 h-6" />
                        {items.length > 0 && (
                            <span className="absolute -top-1 -right-1 bg-primary text-black text-[10px] font-bold px-1.5 py-0.5 rounded-full shadow-neon">
                                {items.length}
                            </span>
                        )}
                    </Button>
                    <Button variant="outline" className="text-primary border-primary hover:bg-primary hover:text-primary-foreground hidden sm:flex shadow-neon-box transition-all duration-300 transform hover:scale-105">
                        Order Now
                    </Button>
                </div>
            </div>
        </nav>
    )
}
