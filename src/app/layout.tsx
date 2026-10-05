import type { Metadata } from "next";
import { Outfit } from "next/font/google";
import "./globals.css";

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Eslam Mohamed",
  description: "High-end scrollytelling experience",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${outfit.variable} bg-[#050505] text-white antialiased font-sans`}
        suppressHydrationWarning
      >
        <div className="pointer-events-none fixed inset-0 z-50 h-full w-full bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-[0.035] mix-blend-overlay"></div>
        {children}
      </body>
    </html>
  );
}
