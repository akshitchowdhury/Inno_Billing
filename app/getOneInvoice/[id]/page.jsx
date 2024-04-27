//client side logi to edit a topic ; so we import EditTopicForm component and create the logic and send props to the comp

import DisplayCardInfo from "@/app/components/DisplayCardInfo";

export const dynamic = 'force-dynamic'
const getInvoiceById = async (id) => {
    try {
      const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}api/invoices/${id}`, {
        cache: "no-store",
      });
  
      if (!res.ok) {
        throw new Error("Failed to fetch invoice");
      }
        
      return res.json();
    } catch (error) {
      console.log(error);
    }
  };
  
  export default async function GetOneInvoice({ params }) {
    const { id } = params;
    const { invoice } = await getInvoiceById(id);
    const { 
      client,
      project,
      address,
      services,
      state,
      city,
      pin , 
      gst ,
      cgst,
      sgst,
      balance,
      qty,
      pfNo,
      invNo,
      date,
      price,
    invCount,
  pfCount} = invoice;
  
    return <DisplayCardInfo id={id}  client={client} 
    project ={project}
    address={address}
    services={services}
    state = {state}
    city = {city}
    pin = {pin}
    gst = {gst}
    price={price}  
    cgst={cgst}  
    sgst={sgst}  
    balance={balance}  
    pfNo={pfNo}  
    invNo={invNo}  
    date={date}  
    qty={qty} 
    invCount = {invCount} 
    pfCount = {pfCount} />;
  }



// "use client"

// import React, { useState, useEffect } from 'react';
// import DisplayCardInfo from '@/components/DisplayCardInfo';

// const GetOneInvoice = ({ params }) => {
//   const [invoice, setInvoice] = useState(null);
//   const [error, setError] = useState(null);
  
//   useEffect(() => {
//     const getInvoiceById = async (id) => {
//       try {
//         const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}api/invoices/${id}`, {
//           cache: 'no-store',
//         });

//         if (!res.ok) {
//           throw new Error('Failed to fetch invoice');
//         }
        
//         const data = await res.json();
//         setInvoice(data.invoice);
//       } catch (error) {
//         setError(error);
//       }
//     };

//     const { id } = params;
//     getInvoiceById(id);

//     // Cleanup function
//     return () => {
//       // Cleanup logic if needed
//     };
//   }, [params]);

//   if (error) {
//     return <div>Error: {error.message}</div>;
//   }

//   if (!invoice) {
//     return <div>Loading...</div>;
//   }

//   const { 
//     client,
//     project,
//     address,
//     services,
//     state,
//     city,
//     pin,
//     gst,
//     cgst,
//     sgst,
//     balance,
//     qty,
//     pfNo,
//     invNo,
//     date,
//     price,
//     invCount,
//     pfCount,
//   } = invoice;

//   return (
//     <DisplayCardInfo
//       id={params.id}
//       client={client} 
//       project={project}
//       address={address}
//       services={services}
//       state={state}
//       city={city}
//       pin={pin}
//       gst={gst}
//       price={price}  
//       cgst={cgst}  
//       sgst={sgst}  
//       balance={balance}  
//       pfNo={pfNo}  
//       invNo={invNo}  
//       date={date}  
//       qty={qty} 
//       invCount={invCount} 
//       pfCount={pfCount} 
//     />
//   );
// };

// export default GetOneInvoice;
