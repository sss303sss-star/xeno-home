import type { Metadata } from "next";
import { Tomorrow, Monda } from "next/font/google";
import "./styles/globals.css";

const tomorrow = Tomorrow({
  variable: "--font-tomorrow",
  subsets: ["latin"],
  weight: ["400"],
});

const monda = Monda({
  variable: "--font-monda",
  subsets: ["latin"],
  weight: ["400", "500", "700"],
});

export const metadata: Metadata = {
  title: "Xenoimpact — Beyond Limits, Trusted AI in Your Private Network",
  description:
    "Xenoimpact delivers Enterprise AI — DX/AX Consulting, On-premise AI Application Deployment, Enterprise System Integration.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko" className={`${tomorrow.variable} ${monda.variable}`}>
      <body>{children}</body>
    </html>
  );
}
