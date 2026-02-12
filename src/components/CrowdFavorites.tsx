import { client, urlFor } from "@/lib/sanity";
import Image from "next/image";
import Link from "next/link";
// import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "./ui/card"; // Using custom structure for better control
import { Badge } from "./ui/badge";

interface MenuItem {
    _id: string;
    name: string;
    price: number;
    description: string;
    image: object;
    isFavorite: boolean;
    slug: { current: string };
}

async function getFavorites() {
    try {
        return await client.fetch<MenuItem[]>(`*[_type == "menuItem" && isFavorite == true]`);
    } catch (error) {
        console.error("Failed to fetch favorites", error);
        return [];
    }
}

export async function CrowdFavorites() {
    const favorites = await getFavorites();

    return (
        <section id="menu" className="py-24 bg-background relative overflow-hidden">
            {/* Neon Divider */}
            <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-primary to-transparent opacity-50 shadow-[0_0_10px_#2ff20d]" />

            <div className="container px-6 mx-auto relative z-10">
                <div className="text-center mb-20 space-y-4">
                    <h2 className="text-5xl md:text-6xl font-black text-white tracking-tighter drop-shadow-md">
                        CROWD <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-green-300 drop-shadow-[0_0_10px_rgba(47,242,13,0.5)]">FAVORITES</span>
                    </h2>
                    <p className="text-muted-foreground text-lg uppercase tracking-widest">High-Voltage Flavors</p>
                </div>

                {favorites.length === 0 ? (
                    <div className="text-center text-muted-foreground p-12 border border-dashed border-primary/30 rounded-lg bg-card/20 backdrop-blur">
                        <p className="text-2xl font-mono text-primary mb-4">[ SYSTEM OFFLINE ]</p>
                        <p className="text-lg">Connect to Sanity Grid to load data.</p>
                    </div>
                ) : (
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
                        {favorites.map((item) => (
                            <Link href={item.slug ? `/product/${item.slug.current}` : '#'} key={item._id} className="group relative block h-full">
                                {/* Hover Glow Effect */}
                                <div className="absolute -inset-0.5 bg-gradient-to-r from-primary to-green-600 rounded-2xl opacity-20 group-hover:opacity-70 blur transition duration-500" />

                                <div className="relative h-full bg-card/90 backdrop-blur-xl border border-white/10 rounded-xl overflow-hidden flex flex-col hover:translate-y-[-5px] transition-transform duration-300">
                                    <div className="relative h-72 w-full overflow-hidden bg-black/50">
                                        {item.image ? (
                                            <Image
                                                src={urlFor(item.image).width(800).height(600).url()}
                                                alt={item.name}
                                                fill
                                                className="object-cover transition-transform duration-700 group-hover:scale-110 opacity-90 group-hover:opacity-100"
                                            />
                                        ) : (
                                            <div className="flex items-center justify-center h-full text-white/20 font-mono">NO VISUAL INPUT</div>
                                        )}
                                        <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent opacity-80" />

                                        <Badge variant="outline" className="absolute top-4 right-4 border-primary bg-black/50 text-primary text-lg px-4 py-1 backdrop-blur font-bold shadow-neon-box">
                                            ${item.price}
                                        </Badge>
                                    </div>

                                    <div className="p-6 flex flex-col flex-grow space-y-4">
                                        <h3 className="text-2xl font-bold text-white group-hover:text-primary transition-colors tracking-tight">{item.name}</h3>
                                        <p className="text-gray-400 line-clamp-3 text-sm leading-relaxed flex-grow">{item.description}</p>

                                        <div className="pt-4 border-t border-white/10">
                                            <div className="flex items-center justify-between text-xs font-mono text-primary/80 uppercase tracking-widest">
                                                <span>Stats: Trending</span>
                                                <span className="group-hover:translate-x-1 transition-transform">Initialize &rarr;</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </Link>
                        ))}
                    </div>
                )}
            </div>
        </section>
    );
}
