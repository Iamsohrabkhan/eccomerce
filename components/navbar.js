import React from 'react'
import Link from 'next/link'

const Navbar = () => {
  return (
    <>
    <header className="text-gray-600 body-font">
        <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
          <Link href={"/"} className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} className="w-10 h-10 text-white p-2 bg-pink-500 rounded-full" viewBox="0 0 24 24">
              <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
            </svg>
            <span className="ml-3 text-pink-500 text-xl">Mr.Pink</span>
          </Link>
          <nav className="md:mr-auto md:ml-4 md:py-1 md:pl-4 md:border-l md:border-gray-400	flex flex-wrap items-center text-base justify-center">
          <Link className="mr-5 hover:text-gray-900 cursor-pointer" href="/">
            Home
            </Link>
            <a className="mr-5 hover:text-gray-900 cursor-pointer">About</a>
            <Link href={"products"} className="mr-5 hover:text-gray-900 cursor-pointer">Products</Link>
            <Link className="mr-5 hover:text-gray-900 cursor-pointer" href="contact">
            Contact
            </Link>
          </nav>
          <button className="inline-flex items-center bg-pink-500 border-0 py-1 px-3 focus:outline-none hover:bg-pink-400 text-white rounded text-base mt-4 md:mt-0">Button
            <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} className="w-4 h-4 ml-1" viewBox="0 0 24 24">
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </button>
        </div>
      </header>
    </>
  )
}

export default Navbar