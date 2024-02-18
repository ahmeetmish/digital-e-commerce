'use client'

import Link from "next/link"

export default function Navbar() {
  return (
    <header className="text-gray-600 shadow-sm">
      <div className="container mx-auto flex flex-wrap py-5 flex-col md:flex-row items-center">
        <Link href='/' className="text-xl font-medium text-gray-900 mb-4 md:mb-0">Digitalmish</Link>
        <nav className="md:ml-auto md:mr-auto flex flex-wrap items-center text-base justify-center">
          <Link href='/' className="mr-5 hover:text-gray-900 cursor-pointer">Explore</Link>
          <Link href='/' className="mr-5 hover:text-gray-900 cursor-pointer">Projects</Link>
          <Link href='/' className="mr-5 hover:text-gray-900 cursor-pointer">About</Link>
          <Link href='/' className="mr-5 hover:text-gray-900 cursor-pointer">Contact</Link>
        </nav>
        <div className="gap-2 flex">
          <button className="inline-flex items-center text-white bg-violet-500 border-0 py-[6px] px-4 focus:outline-none hover:bg-violet-600 rounded text-base mt-4 md:mt-0 transition-all">
            Login
          </button>
          <button className="inline-flex items-center text-violet-500 bg-gray-100 border-0 py-1 px-3 focus:outline-none hover:bg-gray-200 rounded text-base mt-4 md:mt-0 transition-all">
            Register
          </button>
        </div>
      </div>
    </header>
  )
}