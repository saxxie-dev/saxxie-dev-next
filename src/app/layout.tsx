import type { Metadata } from "next";
import { Fira_Code } from "next/font/google";
import "./globals.css";

const firaCode = Fira_Code({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "saxxie.dev",
  description: "social + development homepage for saxxie.dev"
};

export const viewport = {
  viewport: "width=device-width, initial-scale=1.0"
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body className={firaCode.className}>{children}</body>
    </html>
  );
}
