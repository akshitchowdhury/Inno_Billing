"use client"

import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react';
import InvoicePdf from './InvoicePdf';

const DisplayCardInfo = ({ id }) => {
  
  const [invoice, setInvoice] = useState(null);
  const [loading, setLoading] = useState(true);
  // const router = useRouter();

  useEffect(() => {
    const fetchInvoice = async () => {
      try {
        const res = await fetch(`http://localhost:3000/api/invoices/${id}`, {
          cache: "no-store",
        });

        if (!res.ok) {
          throw new Error("Failed to fetch invoice");
        }

        const data = await res.json();
        setInvoice(data.invoice);
        setLoading(false);
      } catch (error) {
        console.error(error);
      }
    };
    fetchInvoice(); // No need to pass id here, as it's already in the scope
  }, [id]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (!invoice) {
    return <div>Invoice not found</div>;
  }

  const { client, project, address, services, state, city, pin, gst, price } = invoice;

  return (
    <div>
     <div className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
  <h2 className="text-xl font-bold mb-4">Invoice Details</h2>
  <div className="grid grid-cols-2 gap-4">
    <p className="mb-2">
      <span className="font-bold">ID:</span> {id}
    </p>
    <p className="mb-2">
      <span className="font-bold">Client:</span> {client}
    </p>
    <p className="mb-2">
      <span className="font-bold">Project:</span> {project}
    </p>
    <p className="mb-2">
      <span className="font-bold">Address:</span> {address}
    </p>
    <p className="mb-2">
      <span className="font-bold">Services:</span> {services}
    </p>
    <p className="mb-2">
      <span className="font-bold">State:</span> {state}
    </p>
    <p className="mb-2">
      <span className="font-bold">City:</span> {city}
    </p>
    <p className="mb-2">
      <span className="font-bold">PIN:</span> {pin}
    </p>
    <p className="mb-2">
      <span className="font-bold">GST:</span> {gst}
    </p>
    <p className="mb-2">
      <span className="font-bold">Price:</span> {price}
    </p>
  </div>
</div>

<InvoicePdf invoice={invoice}/>
    </div>
  );
};

export default DisplayCardInfo;
