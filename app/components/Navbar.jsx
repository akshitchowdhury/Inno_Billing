
import Link from 'next/link'
import React from 'react'
import InvoiceCustomers from './InvoiceCustomers'

const Navbar = () => {
  return (<nav className='flex justify-between items-center bg-indigo-600 px-8 py-3 w-full md:w-full'>
    <Link className='text-white font-bold' href={"/"}>INNOMATRICS Billing Software</Link> 
    <InvoiceCustomers/>
    <Link className='bg-sky-300 text-white hover:transform hover:bg-red-400
     transition-300 duration-300 ease-in-out p-4 rounded-md' href={"/addInvoice"}>Add your Invoices</Link> 

</nav>

  )
}

export default Navbar
