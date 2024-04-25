import Link from 'next/link'
import React from 'react'

const InvoiceCustomers = () => {
  return (
    <Link href="/downloadedClients">
    <div className="rounded-md w-full mx-16 md:w-72 border
     border-indigo-500
    bg-sky-300
     hover:bg-red-500 
   hover:text-white transition duration-300  
      ease-in-out p-4">
        <h1 className="text-white">Invoice/Pf client staus and List</h1>
    </div>
</Link>

  )
}

export default InvoiceCustomers
