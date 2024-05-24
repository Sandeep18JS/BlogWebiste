import type { Metadata } from "next";
import { Nunito } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider"
import SideNavLayout from "@/components/sideNavlayout";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";

const nunito = Nunito({ subsets: ["latin"] });

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
