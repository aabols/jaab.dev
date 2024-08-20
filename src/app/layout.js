import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "jaab.dev",
  description: "jaab.dev",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className='h-full m-0'>
      <body className={`${inter.className} h-full m-0`}>{children}</body>
    </html>
  );
}
