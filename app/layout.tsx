import type { Metadata } from "next";
import { Geist, Geist_Mono, Playfair_Display, Caveat, Montserrat, Baloo_2, Quicksand  } from "next/font/google";
import "./globals.css";



const baloo = Baloo_2({
  subsets: ['latin'], 
  variable: '--font-display',
  weight: ['600','700','800'
]})

const quicksand = Quicksand({
  subsets: ['latin'], 
  variable: '--font-body',
  weight: ['400','500','600'
]})

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const fontSerif = Playfair_Display({ 
  subsets: ['latin'],
  variable: '--font-playfair',
  display: 'swap',
});

const fontScript = Caveat({ 
  subsets: ['latin'],
  variable: '--font-caveat',
  display: 'swap',
});

const fontSans = Montserrat({ 
  subsets: ['latin'],
  variable: '--font-montserrat',
  display: 'swap',
});

export const metadata: Metadata = {
  title: "Dilo con Amor",
  description: "Create by love for Walas",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} ${fontSerif.variable} ${fontScript.variable} ${fontSans.variable} h-full antialiased scroll-smooth`}
    >
      <body className={`min-h-full flex flex-col ${baloo.variable} ${quicksand.variable}`}>{children}</body>
    </html>
  );
}
