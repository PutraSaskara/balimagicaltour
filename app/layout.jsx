import { Poppins } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
});

export const metadata = {
  title: "Balimagicaltours - Explore The World of Bali",
  description: "Let us handle the details while you create timeless memories. Discover authentic Balinese culture and breathtaking landscapes with our expert-guided tours.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      {/* Cukup terapkan font family di CSS, Next.js akan menanganinya */}
      <body className={poppins.className}>
        <Header />
        <main>{children}</main>
        <Footer />
        <WhatsAppButton />
      </body>
    </html>
  );
}