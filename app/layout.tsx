import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import '../public/style.css';

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "MB-Tech",
  description: "MB-TECH",
  creator: 'MB Tech | Tunisia',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      
      <head>
				<title>MB Tech</title>
        <link rel="icon" href="/images/android-chrome-512x512" type="image/png" sizes="512x512" /> 
			</head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
