import ProductList from "./ProductList"

async function getProducts() {
  const response = await fetch('https://api.npoint.io/cd7a1c3a4ef336ab9430', { cache: 'no-store' })

  if (!response.ok) {
    throw new Error('Failed to fetch!')
  }

  return response.json()
}

export default async function ProductSection() {
  const products = await getProducts()

  return (
    <section className="container mx-auto mb-4 xl:mb-0">
      {products ? <ProductList products={products} /> : <span>No data found!</span>}
    </section>
  )
}