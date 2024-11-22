'use client'
import type { Metadata } from "next";
import "@/style/globals.css";
import "@/style/base.css";


export const metadata: Metadata = {
  title: "Kinsley's Portfolio",
  description: "My internship portfolio about my experience"
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
