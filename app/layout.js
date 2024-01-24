import { Inter } from "next/font/google";
import "./globals.css";
import Image from 'next/image';
import under_construction from "../assets/under_construction.png";
import NavBar from "@/components/navbar/navbar";
import Footer from "@/components/footer/footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "BioTree | Home",
  description: "Home page",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="description" content={metadata.description} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>{metadata.title}</title>
        <link rel="icon" href="/favicon.ico"/>
        <style>{inter.styles}</style>
      </head>

      <body className={inter.className+" bg-red-500"}>
        <header>
          <NavBar />
        </header>
        
        <main>
          {children}
          
          <Image
            src={under_construction}
            alt="under_construction"
          />
        
        </main>

        <footer>
          <Footer />
        </footer>
      </body>
    </html>
  );
}
