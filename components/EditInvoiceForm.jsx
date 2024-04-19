

"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function EditInvoiceForm({id, client, project, address, services, state, city, pin, gst, price }) {
  const [newClient, setNewClient] = useState(client);
  const [newProject, setNewProject] = useState(project);
  const [newServices, setNewServices] = useState(services);
  const [newAdress, setNewAdress] = useState(address);
  const [newCity, setNewCity] = useState(city);
  const [newState, setNewState] = useState(state);
  const [newgst, setNewGst] = useState(gst);
  const [newPin, setNewpin] = useState(pin);
  const [newPrice, setNewPrice] = useState(price);

  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();
  
    try {
      const res = await fetch(`http://localhost:3000/api/invoices/${id}`, {
        method: "PUT",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify({
          newClient,
          newProject,
          newServices,
          newAdress,
          newState,
          newCity,
          newPin,
          newgst,
          newPrice
        }),
      });
  
      if (!res.ok) {
        throw new Error("Failed to update invoice");
      }
  
      router.push("/");
      
      router.refresh();
    } catch (error) {
      console.log(error);
    }
  };
  

  return (
    <form onSubmit={handleSubmit} className="grid grid-cols-1 sm:grid-cols-3 md:grid-cols-3 gap-6 p-6">
  {/* Client Title */}
  <div className="col-span-1 sm:col-span-1">
    <label htmlFor="clientTitle" className="block text-lg font-bold mb-1">Client Title</label>
    <input
      id="clientTitle"
      onChange={(e) => setNewClient(e.target.value)}
      value={newClient}
      className="border border-gray-300 px-4 py-2 w-full rounded-md focus:outline-none focus:border-green-500"
      type="text"
      placeholder="Client Title"
    />
  </div>

  {/* Project Name */}
  <div className="col-span-1 sm:col-span-1">
    <label htmlFor="projectName" className="block text-lg font-bold mb-1">Project Name</label>
    <input
      id="projectName"
      onChange={(e) => setNewProject(e.target.value)}
      value={newProject}
      className="border border-gray-300 px-4 py-2 w-full rounded-md focus:outline-none focus:border-green-500"
      type="text"
      placeholder="Project Name"
    />
  </div>

  {/* Service Type */}
  <div className="col-span-1 sm:col-span-1">
    <label htmlFor="serviceType" className="block text-lg font-bold mb-1">Service Type</label>
    <input
      id="serviceType"
      onChange={(e) => setNewServices(e.target.value)}
      value={newServices}
      className="border border-gray-300 px-4 py-2 w-full rounded-md focus:outline-none focus:border-green-500"
      type="text"
      placeholder="Services/Category"
    />
  </div>

  {/* Address */}
  <div className="col-span-1 sm:col-span-1">
    <label htmlFor="address" className="block text-lg font-bold mb-1">Address</label>
    <input
      id="address"
      onChange={(e) => setNewAdress(e.target.value)}
      value={newAdress}
      className="border border-gray-300 px-4 py-2 w-full rounded-md focus:outline-none focus:border-green-500"
      type="text"
      placeholder="Address"
    />
  </div>

  {/* State */}
  <div className="col-span-1 sm:col-span-1">
    <label htmlFor="state" className="block text-lg font-bold mb-1">State</label>
    <input
      id="state"
      onChange={(e) => setNewState(e.target.value)}
      value={newState}
      className="border border-gray-300 px-4 py-2 w-full rounded-md focus:outline-none focus:border-green-500"
      type="text"
      placeholder="State"
    />
  </div>

  {/* City */}
  <div className="col-span-1 sm:col-span-1">
    <label htmlFor="city" className="block text-lg font-bold mb-1">City</label>
    <input
      id="city"
      onChange={(e) => setNewCity(e.target.value)}
      value={newCity}
      className="border border-gray-300 px-4 py-2 w-full rounded-md focus:outline-none focus:border-green-500"
      type="text"
      placeholder="City"
    />
  </div>

  {/* Area PIN Code */}
  <div className="col-span-1 sm:col-span-1">
    <label htmlFor="pin" className="block text-lg font-bold mb-1">Area PIN Code</label>
    <input
      id="pin"
      onChange={(e) => setNewpin(e.target.value)}
      value={newPin}
      className="border border-gray-300 px-4 py-2 w-full rounded-md focus:outline-none focus:border-green-500"
      type="text"
      placeholder="PIN"
    />
  </div>

  {/* GST no */}
  <div className="col-span-1 sm:col-span-1">
    <label htmlFor="gst" className="block text-lg font-bold mb-1">GST no</label>
    <input
      id="gst"
      onChange={(e) => setNewGst(e.target.value)}
      value={newgst}
      className="border border-gray-300 px-4 py-2 w-full rounded-md focus:outline-none focus:border-green-500"
      type="number"
      placeholder="GST no"
    />
  </div>

  {/* Price of Project */}
  <div className="col-span-1 sm:col-span-1">
    <label htmlFor="price" className="block text-lg font-bold mb-1">Price of Project</label>
    <input
      id="price"
      onChange={(e) => setNewPrice(e.target.value)}
      value={newPrice}
      className="border border-gray-300 px-4 py-2 w-full rounded-md focus:outline-none focus:border-green-500"
      type="number"
      placeholder="Price of Project"
    />
  </div>

  {/* Submit Button */}
  <div className="col-span-3 sm:col-span-3">
    <button className="bg-green-600 hover:bg-green-700 text-white font-bold py-6 px-6 rounded-full w-1/6 transition duration-300 ease-in-out">
      Update Topic
    </button>
  </div>
</form>

  
  );
}