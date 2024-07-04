import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "포켓몬 도감",
  description: "나만의 포켓몬 도감, 마지막 과제",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <header className="w-full h-[60px] bg-[#3477ff] text-center pt-[1rem]">
          <h2 className="font-bold text-3xl">포켓몬 도감</h2>
        </header>
        {children}
      </body>
    </html>
  );
}
