import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

import SideNavLayout from "@/components/sideNavlayout";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "A Blog Website",
  description: "For tutorials of different animations",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar />
        <SideNavLayout>
          {children}
        </SideNavLayout>
        <Footer />
      </body>
    </html>
  );
}
