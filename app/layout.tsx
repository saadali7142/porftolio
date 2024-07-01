import { ThemeProvider } from "@/components/context/ThemeProvider";
import Footer from "@/components/ui/shared/Footer";
import Header from "@/components/ui/shared/Header";
import type { Metadata } from "next";
import { Outfit } from "next/font/google";
import { headers } from "next/headers";
import { usePathname, useRouter } from "next/navigation";
import "./globals.css";

const outfit = Outfit({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Saad's Porftolio",
  description: "My Portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={outfit.className}>
        <ThemeProvider attribute="class" defaultTheme="light">
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
