import "./globals.css";
import { Inter, Lora, Source_Sans_3 } from "next/font/google";
import Footer from "./shared/common/Footer";
import Script from "next/script";
import Head from "next/head";

const lora = Lora({ subsets: ["latin"], weight: "400" });

export const metadata = {
  title: "Jet Ski Rentals",
  description: "Jet Ski Reservation",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <Head>
        <link
          href="https://cdnjs.cloudflare.com/ajax/libs/flowbite/1.8.1/flowbite.min.css"
          rel="stylesheet"
        />
      </Head>
      <body className={lora.className}>
        {children}
        <Footer />
        <Script src="https://cdnjs.cloudflare.com/ajax/libs/flowbite/1.8.1/flowbite.min.js"></Script>
        {/* <script src="https://cdnjs.cloudflare.com/ajax/libs/flowbite/1.8.1/flowbite.min.js" async /> */}
      </body>
    </html>
  );
}
