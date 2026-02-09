import type { Metadata } from "next";
import { Space_Grotesk } from "next/font/google";
import NavBar from "@/components/NavBar";
import ScrollYProgress from "@/components/ui/ScrollYProgress";
import { AntdRegistry } from "@ant-design/nextjs-registry";
import ConfigProviderWrapper from "@/components/ConfigProvider";
import "./globals.css";

const spaceGortesk = Space_Grotesk({
  variable: "--space-gortesk",
  display: "swap",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Priyanshu Soni",
  description: "Priyanshu Soni's Portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${spaceGortesk.variable} antialiased `}>
        <ScrollYProgress />
        <NavBar />
        <AntdRegistry>
          <ConfigProviderWrapper>{children}</ConfigProviderWrapper>
        </AntdRegistry>
      </body>
    </html>
  );
}
