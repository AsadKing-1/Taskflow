import type { Metadata } from "next";
import "@/styles/globals.css";

import MainHeader from "@/shared/MainHeader/MainHeader";

import { Plus_Jakarta_Sans } from "next/font/google";

const font = Plus_Jakarta_Sans({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Aurora Todo",
  description: "Aurora Todo application",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={font.className}>
        <MainHeader/>
        {children}
      </body>
    </html>
  );
}
