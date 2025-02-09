import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Sanjeeb Sircar - Sitar Player & Versatile Musician",
  description: "Indian Classical Sitar Music Concert performer, teacher, and innovator with over 40 years of experience.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
} 