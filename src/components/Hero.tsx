"use client"

import Image from "next/image";
import { Button } from "./ui/button";
import { Badge } from "./ui/badge";
import { ArrowRight, Star, Flame, ShoppingBag } from "lucide-react";
import { useCart } from "@/context/CartContext";
import { toast } from "sonner";
import Link from "next/link";

export function Hero() {
    const { addItem, setIsOpen } = useCart();

    const handleAddFeatured = () => {
        addItem({
            id: "cyber-double-hero",
            name: "The Cyber Double",
            price: 18.99,
            image: null, // Image is optional in CartItem
        });
        toast.success("The Cyber Double added to cart.");
        setIsOpen(true);
    }

    const scrollToMenu = () => {
        const menu = document.getElementById("menu");
        if (menu) menu.scrollIntoView({ behavior: "smooth" });
    }

    return (
        <section className="relative w-full overflow-hidden bg-[#0a0f0a]">
            {/* Background Gradients */}
            <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_top_left,#1a2e1a,transparent_50%)]" />
            <div className="absolute bottom-0 right-0 w-full h-full bg-[radial-gradient(circle_at_bottom_right,#111f11,transparent_50%)]" />

            {/* Glow effect center */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/5 blur-[120px] rounded-full pointer-events-none" />

            <div className="container relative z-10 mx-auto px-6 py-20 lg:py-32 grid lg:grid-cols-2 gap-16 items-center">

                {/* Left Content */}
                <div className="space-y-8">
                    <div className="inline-flex items-center space-x-2 bg-white/5 border border-white/10 rounded-full px-4 py-1.5 backdrop-blur-sm">
                        <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
                        <span className="text-primary text-xs font-mono font-bold tracking-widest uppercase">
                            Open Late • Until 3AM
                        </span>
                    </div>

                    <h1 className="text-6xl lg:text-8xl font-black text-white leading-[0.9] tracking-tighter">
                        TASTE THE <br />
                        <span className="text-primary drop-shadow-[0_0_15px_rgba(47,242,13,0.5)]">FUTURE</span>
                    </h1>

                    <p className="text-xl text-gray-400 max-w-lg leading-relaxed">
                        Cyber-gastronomy meets street food culture. Experience <span className="text-white">high-voltage flavors</span> designed for the digital age.
                    </p>

                    <div className="flex flex-wrap gap-4">
                        <Button
                            className="h-14 px-8 bg-primary text-black hover:bg-primary/90 hover:shadow-[0_0_20px_rgba(47,242,13,0.4)] text-lg font-bold transition-all rounded-md group"
                            onClick={scrollToMenu}
                        >
                            START ORDER
                            <ArrowRight className="ml-2 w-5 h-5 transition-transform group-hover:translate-x-1" />
                        </Button>
                        <Link href="#menu">
                            <Button variant="outline" className="h-14 px-8 border-white/20 text-white hover:bg-white/10 hover:text-white text-lg font-bold rounded-md">
                                VIEW MENU
                            </Button>
                        </Link>
                    </div>

                    {/* Social Proof */}
                    <div className="flex items-center space-x-4 pt-4">
                        <div className="flex -space-x-4">
                            {[
                                "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=100&h=100&fit=crop&auto=format",
                                "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop&auto=format",
                                "https://images.unsplash.com/photo-1599566150163-29194dcaad36?w=100&h=100&fit=crop&auto=format"
                            ].map((src, i) => (
                                <div key={i} className="w-10 h-10 rounded-full border-2 border-[#0a0f0a] overflow-hidden relative bg-gray-600">
                                    <Image
                                        src={src}
                                        alt="User"
                                        fill
                                        className="object-cover"
                                    />
                                </div>
                            ))}
                            <div className="w-10 h-10 rounded-full border-2 border-[#0a0f0a] bg-zinc-800 flex items-center justify-center text-xs text-white font-bold">
                                +2k
                            </div>
                        </div>
                        <div>
                            <div className="flex items-center text-primary mb-0.5">
                                <span className="font-bold mr-1">4.9/5</span>
                                <div className="flex space-x-0.5">
                                    {[...Array(5)].map((_, i) => (
                                        <Star key={i} className="w-3 h-3 fill-primary text-primary" />
                                    ))}
                                </div>
                            </div>
                            <p className="text-xs text-gray-400">from happy night owls</p>
                        </div>
                    </div>
                </div>

                {/* Right Content - Feature Card */}
                <div className="relative">
                    {/* Floating Badge */}
                    <div className="absolute -bottom-6 -left-6 z-20 bg-[#1a1f1a]/90 backdrop-blur-md border border-white/10 p-4 rounded-xl shadow-2xl flex items-center gap-3 animate-in slide-in-from-bottom-4 duration-1000 delay-500">
                        <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center text-primary">
                            <Flame className="w-6 h-6 fill-primary" />
                        </div>
                        <div>
                            <p className="text-[10px] text-gray-400 uppercase tracking-widest">Heat Level</p>
                            <p className="text-white font-bold">Nuclear</p>
                        </div>
                    </div>

                    <div className="relative group bg-[#121412] border border-white/5 rounded-3xl overflow-hidden shadow-2xl hover:shadow-[0_0_30px_rgba(47,242,13,0.1)] transition-all duration-500">
                        <div className="relative h-[300px] w-full overflow-hidden">
                            <Badge className="absolute top-4 right-4 z-10 bg-primary text-black font-bold hover:bg-primary rounded-md px-3 py-1">
                                $18.99
                            </Badge>
                            <Badge className="absolute bottom-4 left-4 z-10 bg-purple-600 text-white font-bold hover:bg-purple-600 border-none rounded-md px-3 py-1">
                                TOP RATED
                            </Badge>

                            <Image
                                src="https://images.unsplash.com/photo-1568901346375-23c9450c58cd?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
                                alt="The Cyber Double"
                                fill
                                className="object-cover transition-transform duration-700 group-hover:scale-105"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-[#121412] via-transparent to-transparent opacity-60" />
                        </div>

                        <div className="p-8">
                            <h3 className="text-2xl font-bold text-white mb-2">The Cyber Double</h3>
                            <p className="text-gray-400 text-sm mb-6 leading-relaxed">
                                Double smashed wagyu patties, neon relish, radioactive cheese sauce, charcoal bun.
                            </p>

                            <div className="flex items-center justify-between border-t border-white/5 pt-6">
                                <div className="flex gap-1">
                                    {[...Array(5)].map((_, i) => (
                                        <Star key={i} className="w-4 h-4 fill-yellow-500 text-yellow-500" />
                                    ))}
                                </div>
                                <button
                                    className="text-primary text-sm font-bold uppercase tracking-wider flex items-center gap-2 hover:text-white transition-colors"
                                    onClick={handleAddFeatured}
                                >
                                    Add to Cart <ShoppingBag className="w-4 h-4" />
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
