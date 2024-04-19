"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

// using clien to make this a client based component. By default all comp in next js is server based comp

// client,
//                 project,
//                 address,
//                 services,
//                 state,
//                 city,
//                 pin ,
//                 gst ,
//                 price

export default function AddInvoice() {
  const [client, setClient] = useState("");
  // const[description, setDescritpion]= useState("")
  const [project, setProject] = useState("");
  const [services, setServices] = useState("");
  const [address, setAdress] = useState("");
  const [state, setState] = useState("");
  const [city, setCity] = useState("");
  const [pin, setPin] = useState("");
  const [gst, setGst] = useState("");
  const [price, setPrice] = useState("");
  // const[category, setcategory]= useState("")

  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("Form submitted");

    if (
      !client ||
      !project ||
      !address ||
      !services ||
      !state ||
      !city ||
      !pin ||
      !gst ||
      !price
    ) {
      console.log("Client:", client);

      console.log("Project:", project);
      console.log("services:", services);
      console.log("Adress:", address);
      console.log("State:", state);
      console.log("City:", city);
      console.log("Pin:", pin);
      console.log("GST:", gst);
      console.log("Price:", price);
      alert("Title ,description, category, etc details are required.");
      return;
    }

    // fetching data from api endpoints

    try {
      const res = await fetch("http://localhost:3000/api", {
        //since this is a post request i.e adding data to db we add the following paramtr as necessity
        method: "POST", //type of method

        headers: { "Content-type": "application/json" }, //header of the info\

        body: JSON.stringify({
          client,
          project,
          address,
          services,
          state,
          city,
          pin,
          gst,
          price,
        }), //main data of the info
      });

      if (res.ok) {

        router.push("/");
        router.refresh()
        //we do this to redirect user to homepage once a new topic has been created
      } else {
        throw new Error("falied to create a new topic");
      }
    } catch (error) {
      console.log(error);
    }
  };

//   client, project, address, services, state, city, pin, gst, price;
  return (
    <>
     <form onSubmit={handleSubmit} className="grid grid-cols-1 sm:grid-cols-3 md:grid-cols-3 gap-6 p-6">
  
  <div className="col-span-1 sm:col-span-1">
    <label htmlFor="clientTitle" className="block text-lg font-bold mb-1">Client Name</label>
    <input
    onChange={(e) => setClient(e.target.value)}
    value={client}
    className="border border-gray-300 px-4 py-2 rounded-md focus:outline-none focus:border-green-500"
    type="text"
    placeholder="Client Title"
  />
  </div>
  <div className="col-span-1 sm:col-span-1">
    <label htmlFor="clientTitle" className="block text-lg font-bold mb-1">Project Name</label>
    <input
    onChange={(e) => setProject(e.target.value)}
    value={project}
    className="border border-gray-300 px-4 py-2 rounded-md focus:outline-none focus:border-green-500"
    type="text"
    placeholder="Project Name"
  />
  </div>

  <div className="col-span-1 sm:col-span-1">
    <label htmlFor="clientTitle" className="block text-lg font-bold mb-1">Service Type</label>
    <input
    onChange={(e) => setServices(e.target.value)}
    value={services}
    className="border border-gray-300 px-4 py-2 rounded-md focus:outline-none focus:border-green-500"
    type="text"
    placeholder="Services/Category"
  />
  </div>

  <div className="col-span-1 sm:col-span-1">
    <label htmlFor="clientTitle" className="block text-lg font-bold mb-1">Address</label>
    <input
    onChange={(e) => setAdress(e.target.value)}
    value={address}
    className="border border-gray-300 px-4 py-2 rounded-md focus:outline-none focus:border-green-500"
    type="text"
    placeholder="Address"
  />
  </div>

  <div className="col-span-1 sm:col-span-1">
    <label htmlFor="clientTitle" className="block text-lg font-bold mb-1">State</label>
    <input
    onChange={(e) => setState(e.target.value)}
    value={state}
    className="border border-gray-300 px-4 py-2 rounded-md focus:outline-none focus:border-green-500"
    type="text"
    placeholder="State"
  />
  
  </div>
  
  <div className="col-span-1 sm:col-span-1">
    <label htmlFor="clientTitle" className="block text-lg font-bold mb-1">City</label>
    <input
    onChange={(e) => setCity(e.target.value)}
    value={city}
    className="border border-gray-300 px-4 py-2 rounded-md focus:outline-none focus:border-green-500"
    type="text"
    placeholder="City"
  />
  </div>
  
  <div className="col-span-1 sm:col-span-1">
    <label htmlFor="clientTitle" className="block text-lg font-bold mb-1">PIN</label>
    <input
    onChange={(e) => setPin(e.target.value)}
    value={pin}
    className="border border-gray-300 px-4 py-2 rounded-md focus:outline-none focus:border-green-500"
    type="number"
    placeholder="PIN"
  />
  </div>
  
  <div className="col-span-1 sm:col-span-1">
    <label htmlFor="clientTitle" className="block text-lg font-bold mb-1">GST No:</label>
    <input
    onChange={(e) => setGst(e.target.value)}
    value={gst}
    className="border border-gray-300 px-4 py-2 rounded-md focus:outline-none focus:border-green-500"
    type="number"
    placeholder="GST no"
  />
  </div>

  <div className="col-span-1 sm:col-span-1">
    <label htmlFor="clientTitle" className="block text-lg font-bold mb-1">Price/Cost</label>
    <input
    onChange={(e) => setPrice(e.target.value)}
    value={price}
    className="border border-gray-300 px-4 py-2 rounded-md focus:outline-none focus:border-green-500"
    type="number"
    placeholder="Price of Project"
  />
</div>

  <button
    type="submit"
    className="bg-green-600 hover:bg-green-700 text-white font-bold py-3 px-6 rounded-full w-fit transition duration-300 ease-in-out"
  >
    Add your Invoice
  </button>
</form>

    </>
  );
}
