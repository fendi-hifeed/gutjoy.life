import type { Metadata } from "next";
import { Fredoka, Work_Sans } from "next/font/google";
import "./globals.css";
import Providers from "./providers";

const fredoka = Fredoka({
  variable: "--font-fredoka",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const workSans = Work_Sans({
  variable: "--font-work-sans",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
});

export const metadata: Metadata = {
  title: "GutJoy - Happy Gut, Happy Day",
  description:
    "Nikmati yogurt segar kaya probiotik setiap hari. Rasakan tekstur lembut dan manfaat kesehatan yang mengubah harimu menjadi lebih cerah.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id">
      <head>
        <link
          href="https://fonts.googleapis.com/icon?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=swap"
          rel="stylesheet"
        />
      </head>
      <body
        className={`${fredoka.variable} ${workSans.variable} bg-surface text-on-surface font-body-md antialiased overflow-x-hidden`}
      >
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
