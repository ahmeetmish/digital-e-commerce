import Link from "next/link"

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="absolute bottom-0 left-0 right-0 border-t-[1px]">
      <div className="w-full mx-auto max-w-screen-xl p-4 flex items-center justify-between text-sm flex-col sm:flex-row">
        <span className="text-gray-600 text-center">© {currentYear} <Link href='/' className='hover:underline'>Digitalmish™ All Rights Reserved.</Link></span>
        <div className="gap-3 flex flex-wrap items-center font-medium text-gray-500">
          <Link href='/'>About</Link>
          <Link href='/'>Contact</Link>
          <Link href='/'>Privacy Policy</Link>
        </div>
      </div>
    </footer>
  )
}