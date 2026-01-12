import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Dog Training Services",
  description: "Professional dog training and care",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return children;
}
