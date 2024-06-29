import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./global-style.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "INDIE GAME STORE",
  description: "A Game Store",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
