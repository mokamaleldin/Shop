import type { Metadata } from "next";
import { dmSans } from '@/app/ui/fonts';
import "./ui/globals.css";
import Header from "./components/main/Header";
import Footer from "./components/main/Footer";
import { CardContext } from "./Context/CardContex";

export const metadata: Metadata = {
  title: "Shop App",
  description: "A simple shop app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">

      <body className={dmSans.className}>
        {/* <CardContext.Provider value={{}}> */}
        <Header />
        {children}
        <Footer />
        {/* </CardContext.Provider> */}

      </body>
    </html>
  );
}
