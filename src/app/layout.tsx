import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import SidebarWrapper from "@/components/sidebar/sidebar-wrapper";

const font = Inter({
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Task Management App",
  description: "A task management app built with Next.js and Tailwind CSS",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${font.className} antialiased`}>
        <SidebarWrapper>{children}</SidebarWrapper>
      </body>
    </html>
  );
}
