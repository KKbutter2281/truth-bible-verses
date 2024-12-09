import type { Metadata, Viewport } from "next";
import "./globals.css";
import { DM_Sans, DM_Mono } from "next/font/google";

const sans = DM_Sans({
  variable: "--font-dm-sans",
});
const mono = DM_Mono({
  variable: "--font-dm-mono",
  weight: "400",
});

export const metadata: Metadata = {
  title: "Sahara Compute",
  description:
    "Sahara Compute offers a range of fully managed IT solutions, hosting, and cloud services for businesses of all sizes.",
};

export const viewport: Viewport = {
  themeColor: "#f59e0b",
  colorScheme: "only light",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon-16x16.png"
        />
        <link rel="manifest" href="/site.webmanifest" />
      </head>
      <body
        className={`${sans.variable} ${mono.variable} antialiased font-sans text-lg`}
      >
        {children}
      </body>
    </html>
  );
}
