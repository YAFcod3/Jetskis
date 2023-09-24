import "./globals.css";
import { Inter, Lora, Source_Sans_3 } from "next/font/google";
import Footer from "./shared/common/Footer";
import Script from "next/script";
import Head from "next/head";

const lora = Lora({ subsets: ["latin"], weight: "400" });

export const metadata = {
  title: "Paradise Yacht Rentals",
  description: "Paradise Yacht Rentals",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
     
      <body className={lora.className}>
        {children}
        <Footer />
       
      </body>
    </html>
  );
}
