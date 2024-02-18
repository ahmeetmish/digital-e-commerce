import ProductItem from "./ProductItem"

export default async function ProductList({ products }) {
  return (
    <div className="gap-4 flex flex-wrap items-center justify-center mx-auto">
      {products?.map((product) => (
        <div key={product.id}>
          <ProductItem product={product} />
        </div>
      ))}
    </div>
  )
}