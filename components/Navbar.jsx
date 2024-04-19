
import Link from 'next/link'
import React from 'react'

const Navbar = () => {
  return (
    <nav className='flex justify-between items-center
    bg-slate-800 px-8 py-3'>
        <Link className='text-white font-bold' href={"/"}>Billing Software</Link> 
        <Link className='bg-sky-300 text-white hover:transform hover:bg-red-400 transition-300 duration-300
         ease-in-out  p-4 rounded-full ' href={"/addInvoice"}>Add your Invoices</Link> 
    </nav>
  )
}

export default Navbar
