import "./globals.css"
import { Poppins } from "next/font/google"

import Navbar from "./_components/Navbar"
import Footer from "./_components/Footer"

import { ClerkProvider } from '@clerk/nextjs'
import GlobalProvider from "./_redux/GlobalProvider"

const poppins = Poppins({ subsets: ["latin"], weight: ['200', '300', '400', '500', '600', '700'] })

export const metadata = {
  title: "Digital E-Commerce App"
};

export default function RootLayout({ children }) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body className={poppins.className}>
          <GlobalProvider>
            <Navbar />
            {children}
            <Footer />
          </GlobalProvider>
        </body>
      </html>
    </ClerkProvider>
  )
}