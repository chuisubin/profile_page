import "./globals.scss";
import type { Metadata } from "next";
import { dir } from "i18next";
import { NextResponse } from "next/server";

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html>
      <head>
        <link rel="icon" type="image/x-icon" href="/favicon.ico" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Courier+Prime:wght@700&family=Montserrat:wght@400;800&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
