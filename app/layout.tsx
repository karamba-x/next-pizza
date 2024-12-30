import "./globals.css";
import React from "react";
import localFont from 'next/font/local'
import { Providers } from "@/shared/components/shared/providers";

// Font files can be colocated inside of `pages`
const myFont = localFont({ src: './fonts/Nunito-VariableFont_wght.ttf' })

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link data-rh="true" rel="icon" href="/logo.png" />
      </head>
      <body
        className={myFont.className}
      >
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
