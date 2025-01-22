import type { Metadata } from "next";
import { ThemeModeScript } from "flowbite-react";
import "./globals.css";
import Footer from "@/components/Footer/Footer";

export const metadata: Metadata = {
  title:
    "Mobile SMS Marketing Serivces | Transactional, Promotional, OTP SMS | Whistle",
  description:
    "Try Whistle's SMS marketing services Trusted by 1000+ customers. Now, get Transactional, Promotional and OTP SMS text campaigns at Low cost.",
  robots: {
    index: false,
    follow: false,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <ThemeModeScript />
      </head>
      <body>
        {children}
        {/* <Footer/> */}
      </body>
    </html>
  );
}
