import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Mail, MapPin, Phone } from "lucide-react";

export default function ContactPage() {
    return (
        <main className="min-h-screen bg-background text-foreground flex flex-col selection:bg-primary selection:text-primary-foreground">
            {/* Global Grid Pattern */}
            <div className="fixed inset-0 z-0 bg-[linear-gradient(to_right,#1f1f1f_1px,transparent_1px),linear-gradient(to_bottom,#1f1f1f_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] opacity-20 pointer-events-none" />

            <div className="relative z-10">
                <Navbar />

                <section className="container px-4 py-24 mx-auto min-h-[80vh] flex flex-col justify-center">
                    <div className="max-w-4xl mx-auto w-full">
                        <div className="text-center mb-16 space-y-4">
                            <Badge variant="outline" className="border-primary text-primary px-3 py-1 shadow-neon-box">SYSTEM STATUS: LISTENING</Badge>
                            <h1 className="text-5xl md:text-7xl font-black text-white tracking-tighter drop-shadow-lg">
                                GET IN <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-green-300">TOUCH</span>
                            </h1>
                            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
                                Transmit your feedback, inquiries, or catering coordinates. Our system handles all protocols.
                            </p>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 bg-white/5 border border-white/10 p-8 rounded-2xl backdrop-blur-md">
                            {/* Contact Info */}
                            <div className="space-y-8">
                                <h3 className="text-2xl font-bold text-white tracking-tight">Transmission Centers</h3>

                                <div className="flex items-start space-x-4">
                                    <div className="p-3 bg-primary/10 rounded-lg text-primary">
                                        <MapPin className="w-6 h-6" />
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-white">Neon HQ</h4>
                                        <p className="text-gray-400">101 Cyber Avenue<br />Digital District, Sector 7</p>
                                    </div>
                                </div>

                                <div className="flex items-start space-x-4">
                                    <div className="p-3 bg-primary/10 rounded-lg text-primary">
                                        <Phone className="w-6 h-6" />
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-white">Voice Link</h4>
                                        <p className="text-gray-400">+1 (800) CYBER-EAT<br />+1 (800) 292-3732</p>
                                    </div>
                                </div>

                                <div className="flex items-start space-x-4">
                                    <div className="p-3 bg-primary/10 rounded-lg text-primary">
                                        <Mail className="w-6 h-6" />
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-white">Data Stream</h4>
                                        <p className="text-gray-400">hello@neonbites.io<br />press@neonbites.io</p>
                                    </div>
                                </div>
                            </div>

                            {/* Form */}
                            <form className="space-y-6">
                                <div className="space-y-2">
                                    <label className="text-sm font-medium text-gray-300">Identity</label>
                                    <input type="text" className="w-full bg-black/50 border border-white/10 rounded-md p-3 text-white focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary transition-all" placeholder="Enter your name" />
                                </div>
                                <div className="space-y-2">
                                    <label className="text-sm font-medium text-gray-300">Frequency (Email)</label>
                                    <input type="email" className="w-full bg-black/50 border border-white/10 rounded-md p-3 text-white focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary transition-all" placeholder="Enter your email" />
                                </div>
                                <div className="space-y-2">
                                    <label className="text-sm font-medium text-gray-300">Message Payload</label>
                                    <textarea className="w-full bg-black/50 border border-white/10 rounded-md p-3 text-white focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary transition-all h-32 resize-none" placeholder="Type your message..." />
                                </div>
                                <Button className="w-full bg-primary text-black font-bold uppercase tracking-widest hover:bg-white hover:shadow-neon h-12 shadow-neon-box">
                                    Send Transmission
                                </Button>
                            </form>
                        </div>
                    </div>
                </section>

                <Footer />
            </div>
        </main>
    );
}
