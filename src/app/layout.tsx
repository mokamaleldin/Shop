import type { Metadata } from "next";
import { dmSans } from '@/app/ui/fonts';
import "./ui/globals.css";
import Header from "./components/main/Header";
import Footer from "./components/main/Footer";
import { Provider } from "react-redux";
import store from "./lib/store";
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
