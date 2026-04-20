import type { Metadata } from "next";
import "./globals.css";
import { CartProvider } from "./context/CartContext";
import CartButton from "./components/cart-button";

export const metadata: Metadata = {
  title: "Aprozar Sentimental",
  description: "Handmade items by local artists",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full antialiased">
      <body className="min-h-full flex flex-col">
        <CartProvider>
          <CartButton />
          {children}
        </CartProvider>
      </body>
    </html>
  );
}
