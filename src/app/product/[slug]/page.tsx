import { client, urlFor } from "@/lib/sanity";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import Image from "next/image";
import { notFound } from "next/navigation";
import { Badge } from "@/components/ui/badge";
import { ProductActions } from "@/components/ProductActions";
import { PairWith } from "@/components/PairWith";

async function getProduct(slug: string) {
    try {
        return await client.fetch(
            `*[_type == "menuItem" && slug.current == $slug][0]`,
            { slug },
            { next: { revalidate: 10 } }
        );
    } catch {
        return null;
    }
}

async function getRecommendations(currentId: string) {
    try {
        return await client.fetch(
            `*[_type == "menuItem" && _id != $currentId][0..2]`,
            { currentId },
            { next: { revalidate: 10 } }
        );
    } catch {
        return [];
    }
}

export default async function ProductPage(props: { params: Promise<{ slug: string }> }) {
    const params = await props.params;
    const product = await getProduct(params.slug);

    if (!product) {
        notFound();
    }

    const recommendations = await getRecommendations(product._id);

    return (
        <main className="min-h-screen bg-background text-foreground flex flex-col selection:bg-primary selection:text-primary-foreground">
            {/* Global Grid Pattern */}
            <div className="fixed inset-0 z-0 bg-[linear-gradient(to_right,#1f1f1f_1px,transparent_1px),linear-gradient(to_bottom,#1f1f1f_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] opacity-20 pointer-events-none" />

            <div className="relative z-10">
                <Navbar />
                <section className="container px-4 py-24 mx-auto min-h-[80vh] flex flex-col justify-center">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start w-full">
                        {/* Image Side */}
                        <div className="relative group sticky top-24">
                            <div className="absolute -inset-1 bg-gradient-to-r from-primary to-blue-600 rounded-2xl opacity-30 blur-xl group-hover:opacity-60 transition duration-1000" />
                            <div className="relative h-[400px] lg:h-[600px] w-full rounded-2xl overflow-hidden border border-white/10 bg-black/40 shadow-2xl">
                                {product.image ? (
                                    <Image
                                        src={urlFor(product.image).url()}
                                        alt={product.name}
                                        fill
                                        className="object-cover transition-transform duration-1000 group-hover:scale-105"
                                    />
                                ) : (
                                    <div className="w-full h-full bg-secondary flex items-center justify-center text-muted-foreground font-mono">NO IMAGE DATA</div>
                                )}
                                <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent" />
                            </div>
                        </div>

                        {/* Content Side */}
                        <div className="space-y-8 animate-in slide-in-from-right-10 duration-700">
                            <div>
                                <div className="flex items-center space-x-4 mb-4">
                                    <Badge variant="outline" className="border-primary text-primary px-3 py-1 text-sm font-mono tracking-widest shadow-neon-box">
                                        SIGNATURE DISH
                                    </Badge>
                                    {product.isFavorite && (
                                        <Badge variant="secondary" className="bg-white/10 text-white px-3 py-1 text-sm font-mono tracking-widest">
                                            POPULAR
                                        </Badge>
                                    )}
                                </div>
                                <h1 className="text-5xl md:text-7xl font-black text-white tracking-tighter mb-4 drop-shadow-lg leading-none uppercase">
                                    {product.name}
                                </h1>
                                <p className="text-4xl font-light text-primary/90 shadow-neon font-mono">${product.price}</p>
                            </div>

                            <div className="prose prose-invert max-w-none">
                                <p className="text-xl text-gray-300 leading-relaxed border-l-4 border-primary pl-6 py-2">
                                    {product.description}
                                </p>
                            </div>

                            <div className="p-6 bg-white/5 rounded-xl border border-white/10 backdrop-blur-sm">
                                <h3 className="text-xs font-bold mb-4 text-primary uppercase tracking-[0.2em] flex items-center">
                                    <span className="w-2 h-2 bg-primary rounded-full mr-2 shadow-neon"></span>
                                    Nutritional Protocol
                                </h3>
                                <div className="grid grid-cols-2 gap-y-4 gap-x-8 text-sm font-mono text-gray-400">
                                    <div className="flex justify-between border-b border-white/10 pb-2"><span>Energy</span> <span className="text-white">450 kCal</span></div>
                                    <div className="flex justify-between border-b border-white/10 pb-2"><span>Protein</span> <span className="text-white">28g</span></div>
                                    <div className="flex justify-between border-b border-white/10 pb-2"><span>Fats</span> <span className="text-white">12g</span></div>
                                    <div className="flex justify-between border-b border-white/10 pb-2"><span>Carbs</span> <span className="text-white">32g</span></div>
                                </div>
                            </div>

                            <ProductActions product={product} />

                            <PairWith items={recommendations} />
                        </div>
                    </div>
                </section>
                <Footer />
            </div>
        </main>
    );
}
