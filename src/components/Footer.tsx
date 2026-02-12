export function Footer() {
    return (
        <footer id="locations" className="bg-secondary/20 border-t border-border mt-auto">
            <div className="container px-4 py-16 mx-auto grid grid-cols-1 md:grid-cols-2 gap-12">
                <div>
                    <h3 className="text-2xl font-bold text-primary mb-6">The Download Spot</h3>
                    <p className="text-sm text-gray-400 max-w-sm leading-relaxed">
                        We aren&apos;t just a restaurant; we are a destination for the night crawlers, the code breakers, and the flavor seekers. Located in the heart of the digital district.
                    </p>
                    <div className="space-y-2 mt-6">
                        <h4 className="text-lg font-semibold text-foreground">Night Owl Hours</h4>
                        <p className="text-primary font-mono">5PM - 3AM Daily</p>
                    </div>
                </div>

                <div className="space-y-6">
                    <h3 className="text-xl font-bold text-foreground">Find Us</h3>
                    <ul className="space-y-4 text-muted-foreground">
                        <li className="flex items-start">
                            <span className="text-primary mr-3">Wait, Icon?</span> {/* Use Lucide icons properly later */}
                            1010 Binary Blvd, Sector 7, Neo-Tokyo
                        </li>
                        <li className="flex items-center">
                            <span className="text-primary mr-3">Phone</span>
                            +1 (555) 010-1010
                        </li>
                        <li className="flex items-center">
                            <span className="text-primary mr-3">Email</span>
                            hello@neonbites.com
                        </li>
                    </ul>
                    <div className="pt-6 flex space-x-4">
                        {/* Social Links */}
                        <a href="#" className="text-muted-foreground hover:text-primary transition-colors">Instagram</a>
                        <a href="#" className="text-muted-foreground hover:text-primary transition-colors">Twitter</a>
                        <a href="#" className="text-muted-foreground hover:text-primary transition-colors">TikTok</a>
                    </div>
                </div>
            </div>
            <div className="border-t border-border/50 py-6 text-center text-sm text-muted-foreground">
                © 2026 Neon Bites Restaurant Group. All rights reserved.
            </div>
        </footer>
    );
}
