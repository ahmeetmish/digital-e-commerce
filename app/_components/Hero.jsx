export default function Hero() {
  return (
    <section className="text-gray-600">
      <div className="container mx-auto flex px-5 py-24 items-center justify-center flex-col">
          <div className="text-center lg:w-2/3 w-full">
            <h1 className="sm:text-5xl text-4xl mb-4 font-semibold text-gray-900">Digital Marketplace, <br /> Access <span className="text-violet-700">Source Code</span></h1>
            <p className="mb-8 leading-relaxed text-sm sm:text-base">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Repellendus provident enim possimus quia. Deserunt nobis et aliquam culpa sed iusto perspiciatis accusantium iure, magnam suscipit obcaecati, eos autem explicabo iste?</p>
            <div className="flex justify-center">
              <button className="inline-flex text-white bg-violet-500 border-0 py-2 px-6 focus:outline-none hover:bg-violet-600 rounded text-lg transition-all">Explore</button>
              <button className="ml-4 inline-flex text-violet-500 bg-gray-100 border-0 py-2 px-6 focus:outline-none hover:bg-gray-200 rounded text-lg transition-all">Learn More</button>
            </div>
          </div>
      </div>
    </section>
  )
}