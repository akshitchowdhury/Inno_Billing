
"use client"

import React, { useEffect, useState } from "react";
import RemoveBtn from "./RemoveBtn";
import Link from "next/link";
import { useRouter } from "next/navigation";

const getInvoices = async () => {
  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}api`, { cache: "no-store" });

    if (!res.ok) {
      throw new Error("Failed to fetch topics");
    }

    const invoiceFlow = await res.json();

    console.log(invoiceFlow.invoices)

    return invoiceFlow.invoices
  } catch (error) {
    console.log("Error loading invoices", error);
  }
};

const InvoiceList = () => {
  const [datas, setDatas] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const router =useRouter()

  
  useEffect(() => {
    const fetchData = async () => {
      try {
        const fetchedInvoices = await getInvoices();
        setDatas(fetchedInvoices);
        setLoading(false);
      } catch (error) {
        setError(error);
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  // const handleRouting = (Id) =>{

    
  // }
  return (
    <>
    
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 p-8 ">
        {datas.map((invoice, index) => (
          <div
            key={index}
            className="bg-white shadow-md border hover:bg-amber-400 hover:transform 
            hover:scale-105 
            transition duration-500 ease-in-out  border-gray-300 rounded-lg p-6"
          >
            <Link
              href={`/getOneInvoice/${invoice._id}`}
            >
              <div
               
                className="flex justify-between items-start bg-blue-300
           hover:bg-zinc-700 hover:text-white transition duration-500 ease-in-out
            rounded-lg shadow-md p-6 py-2"
              >
                <div>
                  <h2 className="font-bold text-xl mb-4">
                    Client: {invoice.client}
                  </h2>
                  <div className="mb-2">
                    <span className="font-bold">Project Name:</span>{" "}
                    {invoice.project}
                  </div>
                  <div className="mb-2">
                    <span className="font-bold">Services:</span>{" "}
                    {invoice.services}
                  </div>
                  <div className="mb-2">
                    <span className="font-bold">Address:</span>{" "}
                    {invoice.address}
                  </div>
                  <div className="mb-2">
                    <span className="font-bold">City:</span> {invoice.city}
                  </div>
                  <div className="mb-2">
                    <span className="font-bold">State:</span> {invoice.state}
                  </div>
                  <div className="mb-2">
                    <span className="font-bold">PIN:</span> {invoice.pin}
                  </div>
                  <div className="mb-2">
                    <span className="font-bold">invoice downloaded:</span> {invoice.invCount} times
                  </div>
                  <div className="mb-2">
                    <span className="font-bold">pf downloaded:</span> {invoice.pfCount} times
                  </div>
                  
                </div>
              </div>
            </Link>

            <div className="flex gap-2 my-4">
              <RemoveBtn id={invoice._id} />
              <Link href={`/editInvoice/${invoice._id}`}>
                <button
                  className="bg-indigo-700 text-white hover:bg-green-400 hover:text-red-700 transition-colors
                   duration-300 py-2 px-4 rounded-lg"
                >
                  Edit Invoice
                </button>
              </Link> 
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default InvoiceList;


// "use client"
// import React, { useEffect, useState } from 'react';

// const getTitles = async () => {
//   const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}api`, { cache: "no-store" });

//   if (!res.ok) {
//     console.log("Failed to fetch the titles");
//     return []; // Return an empty array if fetching fails
//   }

//   const dataFlow = await res.json();
//   console.log(dataFlow.invoices);
//   return dataFlow.invoices;
// };

// const InvoiceList = () => {
//   const [titles, setTitles] = useState([]);

//   useEffect(() => {
//     const fetchData = async () => {
//       const fetchedTitles = await getTitles();
//       setTitles(fetchedTitles);
//     };

//     fetchData(); // Call the async function inside useEffect
//   }, []); // Empty dependency array to run the effect only once on mount

//   return (
//     <div>
//       <h1>Hello</h1>
//       {titles.map((item, index) => (
//         <div key={index}>
//           <h1>{item.client} : {item.project}</h1>
          
//         </div>
//       ))}
//     </div>
//   );
// };

// export default InvoiceList;




// import React from "react";
// import RemoveBtn from "./RemoveBtn";
// import Link from "next/link";
// const getInvoices = async () => {
//   try {
//     const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}api`, { cache: "no-store" });

//     if (!res.ok) {
//       throw new Error("Failed to fetch topics");
//     }

//     return res.json();
//   } catch (error) {
//     console.log("Error loading invoices", error);
//   }
// };

// const InvoiceList = async () => {
//   const { invoices } = await getInvoices();
//   console.log(invoices)

//   return (
//     <>
    
//       <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 p-8 ">
//         {invoices.map((invoice, index) => (
//           <div
//             key={index}
//             className="bg-white shadow-md border hover:bg-amber-400 hover:transform 
//             hover:scale-105 
//             transition duration-500 ease-in-out  border-gray-300 rounded-lg p-6"
//           >
//             <Link
//               href={`/getOneInvoice/${invoice._id}`}
//             >
//               <div
//                 className="flex justify-between items-start bg-blue-300
//            hover:bg-zinc-700 hover:text-white transition duration-500 ease-in-out
//             rounded-lg shadow-md p-6 py-2"
//               >
//                 <div>
//                   <h2 className="font-bold text-xl mb-4">
//                     Client: {invoice.client}
//                   </h2>
//                   <div className="mb-2">
//                     <span className="font-bold">Project Name:</span>{" "}
//                     {invoice.project}
//                   </div>
//                   <div className="mb-2">
//                     <span className="font-bold">Services:</span>{" "}
//                     {invoice.services}
//                   </div>
//                   <div className="mb-2">
//                     <span className="font-bold">Address:</span>{" "}
//                     {invoice.address}
//                   </div>
//                   <div className="mb-2">
//                     <span className="font-bold">City:</span> {invoice.city}
//                   </div>
//                   <div className="mb-2">
//                     <span className="font-bold">State:</span> {invoice.state}
//                   </div>
//                   <div className="mb-2">
//                     <span className="font-bold">PIN:</span> {invoice.pin}
//                   </div>
//                   <div className="mb-2">
//                     <span className="font-bold">invoice downloaded:</span> {invoice.invCount} times
//                   </div>
//                   <div className="mb-2">
//                     <span className="font-bold">pf downloaded:</span> {invoice.pfCount} times
//                   </div>
//                   {/* <div className="mb-2">
//                     <span className="font-bold">GST:</span> {invoice.gst}
//                   </div>
//                   <div className="mb-2">
//                     <span className="font-bold">CGST:</span> {invoice.cgst}
//                   </div>
//                   <div className="mb-2">
//                     <span className="font-bold">SGST:</span> {invoice.sgst}
//                   </div>
//                   <div className="mb-2">
//                     <span className="font-bold">Balance:</span> {invoice.balance}
//                   </div>
//                   <div className="mb-2">
//                     <span className="font-bold">Quantity:</span> {invoice.qty}
//                   </div>
//                   <div className="mb-2">
//                     <span className="font-bold">PF No:</span> {invoice.pfNo}
//                   </div>
//                   <div className="mb-2">
//                     <span className="font-bold">Invoice No:</span> {invoice.invNo}
//                   </div>
//                   <div className="mb-2">
//                     <span className="font-bold">Date:</span> {invoice.date}
//                   </div>
//                   <div>
//                     <span className="font-bold">Price:</span> ₹{invoice.price}
//                   </div> */}
//                 </div>
//               </div>
//             </Link>

//             <div className="flex gap-2 my-4">
//               <RemoveBtn id={invoice._id} />
//               <Link href={`/editInvoice/${invoice._id}`}>
//                 <button
//                   className="bg-indigo-700 text-white hover:bg-green-400 hover:text-red-700 transition-colors
//                    duration-300 py-2 px-4 rounded-lg"
//                 >
//                   Edit Invoice
//                 </button>
//               </Link>
//             </div>
//           </div>
//         ))}
//       </div>
//     </>
//   );
// };

// export default InvoiceList;
