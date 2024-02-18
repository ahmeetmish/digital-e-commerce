'use client'

import Link from "next/link"

import { useState } from "react"
import { useSelector } from "react-redux"
import { useUser, UserButton } from "@clerk/nextjs"

import Cart from "../_modal/Cart"

import { RiShoppingBagLine } from "react-icons/ri"

export default function Navbar() {
  const { user } = useUser()
  const item = useSelector((state) => state.cart)

  const [isOpen, setIsOpen] = useState(false)

  const handleCartToggle = () => {
    setIsOpen((value) => !value)
  }

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
        {!user ? (
          <div className="gap-2 flex mt-4 md:mt-0">
          <button className="inline-flex items-center text-white bg-violet-500 border-0 py-[6px] px-4 focus:outline-none hover:bg-violet-600 rounded text-base transition-all">
            <Link href='/sign-in'>Login</Link>
          </button>
          <button className="inline-flex items-center text-violet-500 bg-gray-100 border-0 py-1 px-3 focus:outline-none hover:bg-gray-200 rounded text-base transition-all">
            <Link href='/sign-up'>Register</Link>
          </button>
        </div>
        ) : (
        <div className="gap-3 flex items-center mt-4 md:mt-0">
          <div onClick={handleCartToggle} className="relative p-[0.25rem] border-2 hover:border-violet-500 rounded-full cursor-pointer transition-all">
            <RiShoppingBagLine size={24} className="text-violet-700" />
            <span className="absolute top-[12px] right-[12px] text-xs font-medium text-black">{item.length}</span>
          </div>
          {isOpen && (
              <Cart />
            )}
          <UserButton />
        </div>
        )}
      </div>
    </header>
  )
}