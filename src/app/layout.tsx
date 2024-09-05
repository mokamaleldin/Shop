import type { Metadata } from "next";
import { dmSans } from '@/app/ui/fonts';
import "./ui/globals.css";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import StoreProvider from "./StoreProvider";

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
        <StoreProvider>
        <Header />
        {children}
        <Footer />
        </StoreProvider>


      </body>
    </html>
  );
}
