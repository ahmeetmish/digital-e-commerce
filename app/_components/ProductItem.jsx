import Link from "next/link"
import Image from "next/image"

export default function ProductItem({ product }) {
  return (
    <Link href={`/product/${product.id}`}>
    <div className="min-h-[281px] border-2 hover:border-violet-300 rounded-md cursor-pointer transition-all">
      <Image src={product.banner} alt={product.name} width={300} height={240} className="overflow-hidden" />
      <div className="p-2 flex items-center justify-between">
        <div>
          <h2 className="text-base text-neutral-600 mb-[-4px]">{product.name}</h2>
          <span className="text-sm text-neutral-500">{product.category}</span>
        </div>
        <span className="text-violet-600">{product.price}$</span>
      </div>
    </div>
    </Link>
  )
}