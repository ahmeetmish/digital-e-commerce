import Breadcrumb from "@/app/_components/Breadcrumb"
import ProjectDetail from "./_components/ProjectDetail"

async function getProducts() {
  const response = await fetch('https://api.npoint.io/cd7a1c3a4ef336ab9430', { cache: 'no-store' })

  if (!response.ok) {
    throw new Error('Failed to fetch!')
  }

  return response.json()
}

export default async function ProductDetail({ params }) {
  const { productId } = params

  const products = await getProducts()
  const product = products.find(product => product.id == productId);

  return (
    <div className='container mx-auto'>
      <Breadcrumb product={product} />
      <ProjectDetail product={product} />
    </div>
  )
}