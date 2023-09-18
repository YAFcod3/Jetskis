import "./globals.css";
import { Inter, Lora, Source_Sans_3 } from "next/font/google";
import Footer from "./shared/common/Footer";

const lora = Lora({ subsets: ["latin"], weight: "400" });

export const metadata = {
  title: "Yaths/Jet Ski",
  description: "Yaths/Jet Ski Reservation",
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
