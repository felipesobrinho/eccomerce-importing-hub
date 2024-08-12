import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import clsx from "clsx";
import { ClerkProvider } from "@clerk/nextjs";
import { ptBR } from '@clerk/localizations'
import Layout from "./components/Layout";
import { ThemeProvider } from "@/providers/theme-provider";
const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Importing Center",
  description: "A importing center for help you import",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider localization={ptBR}>
        <html lang="en">
          <body className={clsx(inter.className)}>
            <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
              <Layout> {children} </Layout>
            </ThemeProvider>
          </body>
        </html>
    </ClerkProvider>
  );
}
