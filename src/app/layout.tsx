import type { Metadata } from "next";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider"
import SideNavLayout from "@/components/sideNavlayout";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import { Nunito_Sans } from "next/font/google";

const nunito = Nunito_Sans({ subsets: ["latin"], display: 'swap' });

export const metadata: Metadata = {
  title: "Sandeep's Blog",
  description: "Welcome to my blog, Where I share everything I'm learning about on React, Shaders, React Three Fiber, Framer Motion,GSAP and more.",
  icons: {
    icon: "/icon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning={true}>
      <body className={nunito.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          <Navbar />
          <SideNavLayout>
            {children}
          </SideNavLayout>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
