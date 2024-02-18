'use client'

import Image from "next/image"

import { useUser } from "@clerk/nextjs"
import { useRouter } from "next/navigation"
import { useDispatch } from 'react-redux'
import { add } from '../../../_redux/Cartslice'

import { RiShoppingBagLine } from "react-icons/ri"

export default function ProjectDetail({ product }) {
  const { user } = useUser()
  const router = useRouter()
  const dispatch = useDispatch()

  const handleAddToCart = (product) => {
    if(!user) {
      router.push('/sign-in')
      return
    } else {
      dispatch(add(product))
    }
  }

  return (
    <div className="gap-[12rem] flex flex-col my-12">
      <div className="gap-4 flex">
        <Image src={product.banner} alt={product.name} width={400} height={340} className="overflow-hidden rounded-md" />
        <div className="relative flex flex-col justify-between md:justify-normal">
          <h2 className="text-xl md:text-2xl font-medium">{product.name}</h2>
          <span className="text-xs md:text-sm font-light mb-4">{product.category}</span>
          <p className="text-xs md:text-sm text-neutral-700 max-w-[50ch] mb-4">{product.description}</p>
          {product.instantDelivery ? <span className="text-xs mb-4">+ Eligible for Instant Delivery</span> : <span className="text-xs mb-4">- Not Suitable for Instant Delivery</span>}
          <span className="text-xl font-medium text-violet-600">{product.price}$</span>
          <button onClick={() => handleAddToCart(product)} className="relative md:absolute md:bottom-0 gap-2 flex items-center justify-center font-medium text-white bg-violet-500 border-0 mr-1 py-1 px-3 md:py-3 md:px-5 focus:outline-none hover:bg-violet-600 rounded text-base transition-all">
          <RiShoppingBagLine size={20} /> Add to cart!
          </button>
        </div>
      </div>
    </div>
  )
}