'use client'

import Image from "next/image"

import { LuTrash2 } from "react-icons/lu"

import { remove } from "../_redux/Cartslice"
import { useDispatch, useSelector } from "react-redux"

export default function Cart() {
  const dispatch = useDispatch()
  const cartItems = useSelector((state) => state.cart)

  const handleRemoveToCart = (id) => {
    dispatch(remove(id))
  }

  return (
    <div className="absolute top-[4.7rem] right-[4.5rem] min-w-[12rem] max-h-[20rem] py-2 px-6 border-2 bg-white overflow-y-auto rounded-sm z-30">
      <h2 className="text-center">Your Cart <span className="text-violet-500">({cartItems.length})</span></h2>
      <hr className="mb-4" />
      <div>
        {cartItems.map((item) => (
          <div className="gap-2 flex items-center justify-between" key={item.id}>
            <Image src={item.banner} className="rounded-sm mb-2" width={70} height={40} alt={item.name} />
            <div className="gap-2 w-full flex items-center justify-between">
              <h2 className="font-medium">{item.name}</h2>
              <p className="text-violet-700">{item.price}$</p>
            </div>
            <button onClick={() => handleRemoveToCart(item.id)} className="text-neutral-500 hover:text-neutral-950 transition-all"><LuTrash2 size={18} /></button>
          </div>
        ))}
      </div>
      <button onClick={() => alert('Coming Soon!')} className="w-full mt-2 py-2 font-medium text-white bg-violet-500 hover:bg-violet-600 rounded-sm transition-all">Complete the Order!</button>
    </div>
  )
}