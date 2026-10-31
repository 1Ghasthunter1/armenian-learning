import type { Metadata } from "next";
import { Andika } from "next/font/google";
import "./globals.css";

const andika = Andika({
  weight: ["400", "700"],
  subsets: ["latin"],
  variable: "--font-andika",
});

export const metadata: Metadata = {
  title: "Armenian Learning",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className={andika.variable}>
      <body>{children}</body>
    </html>
  );
}
