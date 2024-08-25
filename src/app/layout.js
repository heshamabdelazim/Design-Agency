import { Inter } from "next/font/google";
import "./globals.css";
import Nav from "@/components/navbar/nav";
import Footer from "@/components/footer/footer";
import { user } from "../../lib/data";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Design Agency",
  description: "Desgin your website",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {/* <div className="container"> */}
        <Nav />
        {children}
        <Footer />
        {/* </div> */}
      </body>
    </html>
  );
}
