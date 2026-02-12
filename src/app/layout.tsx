import type { Metadata } from "next";
import { Space_Grotesk } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
import { CartProvider } from "@/context/CartContext";
import { CartSheet } from "@/components/CartSheet";

const spaceGrotesk = Space_Grotesk({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Neon Bites",
  description: "Taste the Future",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body className={cn(spaceGrotesk.className, "bg-background text-foreground antialiased min-h-screen")}>
        <CartProvider>
          {children}
          <CartSheet />
        </CartProvider>
      </body>
    </html>
  );
}
