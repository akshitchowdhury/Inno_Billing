import React from "react";
import RemoveBtn from "./RemoveBtn";
import Link from "next/link";

const getInvoices = async () => {
  try {
    const res = await fetch("http://localhost:3000/api", { cache: "no-store" });

    // cache: "no-store" because we want to recieve new updated topic list every time we fetch/get

    if (!res.ok) {
      throw new Error("Failed to fetch topics");
    }

    return res.json();
  } catch (error) {
    console.log("Error loading invoices", error);
  }
};

const InvoiceList = async () => {
  const { invoices } = await getInvoices();

  return (
    <>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 p-6">
        {invoices.map((invoice, index) => (
          <div
            key={index}
            className="bg-white shadow-md border hover:bg-amber-400 hover:transform 
            hover:scale-105
            transition duration-500 ease-in-out  border-gray-300 rounded-lg p-4"
          >
            <div className="flex justify-between items-start">
              <div>
                <h2 className="font-bold text-xl">Client: {invoice.client}</h2>
                <div>Project Name: {invoice.project}</div>
                <div>Description: {invoice.description}</div>
                <div>Price: ₹{invoice.price}</div>
                <div>Category: {invoice.category}</div>
              </div>
              
              </div>
              <div className="flex gap-2 my-4">
                <RemoveBtn id={invoice._id} />
                <Link href={`/editInvoice/${invoice._id}`}>
                  <button className="bg-indigo-700 text-white hover:bg-green-400 hover:text-red-700 transition-colors duration-300 py-2 px-4 rounded-lg">
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
