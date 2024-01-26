import type { Metadata } from "next";
import { Poppins } from "next/font/google"; // Import Poppins font

import "./globals.css";
import Navbar from "@/components/navbar";

// Specify the font weights using 'weight'
const poppins = Poppins({ weight: ["400", "700"], subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Ujaotech",
  description: "Generated gTahidi",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div> 
      <Navbar />
      <body className={poppins.className}>{children}</body>
    </div>
  );
}
