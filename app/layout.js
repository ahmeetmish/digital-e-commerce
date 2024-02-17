import "./globals.css"
import { Poppins } from "next/font/google"

import Navbar from "./_components/Navbar"
import Footer from "./_components/Footer"

const poppins = Poppins({ subsets: ["latin"], weight: ['200', '300', '400', '500', '600', '700'] })

export const metadata = {
  title: "Digital E-Commerce App"
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={poppins.className}>
        <Navbar />
        {children}
        <Footer />
        </body>
    </html>
  )
}