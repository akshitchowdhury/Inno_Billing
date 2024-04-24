// "use client";

// import { useState } from "react";
// import { useRouter } from "next/navigation";

// // using clien to make this a client based component. By default all comp in next js is server based comp

// // client,
// //                 project,
// //                 address,
// //                 services,
// //                 state,
// //                 city,
// //                 pin ,
// //                 gst ,
// //                 price

// export default function AddInvoice() {
//   const [client, setClient] = useState("");
//   // const[description, setDescritpion]= useState("")
//   const [project, setProject] = useState("");
//   const [services, setServices] = useState("");
//   const [address, setAdress] = useState("");
//   const [state, setState] = useState("");
//   const [city, setCity] = useState("");
//   const [pin, setPin] = useState("");
//   const [gst, setGst] = useState("");
//   const [price, setPrice] = useState("");
//   // const[category, setcategory]= useState("")

//   const router = useRouter();

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     console.log("Form submitted");

//     if (
//       !client ||
//       !project ||
//       !address ||
//       !services ||
//       !state ||
//       !city ||
//       !pin ||
//       !gst ||
//       !price
//     ) {
//       console.log("Client:", client);

//       console.log("Project:", project);
//       console.log("services:", services);
//       console.log("Adress:", address);
//       console.log("State:", state);
//       console.log("City:", city);
//       console.log("Pin:", pin);
//       console.log("GST:", gst);
//       console.log("Price:", price);
//       alert("Title ,description, category, etc details are required.");
//       return;
//     }

//     // fetching data from api endpoints

//     try {
//       const res = await fetch("http://localhost:3000/api", {
//         //since this is a post request i.e adding data to db we add the following paramtr as necessity
//         method: "POST", //type of method

//         headers: { "Content-type": "application/json" }, //header of the info\

//         body: JSON.stringify({
//           client,
//           project,
//           address,
//           services,
//           state,
//           city,
//           pin,
//           gst,
//           price,
//         }), //main data of the info
//       });

//       if (res.ok) {

//         router.push("/");
//         router.refresh()
//         //we do this to redirect user to homepage once a new topic has been created
//       } else {
//         throw new Error("falied to create a new topic");
//       }
//     } catch (error) {
//       console.log(error);
//     }
//   };

// //   client, project, address, services, state, city, pin, gst, price;
//   return (
//     <>
//      <form onSubmit={handleSubmit} className="grid grid-cols-1 sm:grid-cols-3 md:grid-cols-3 gap-6 p-6">
  
//   <div className="col-span-1 sm:col-span-1">
//     <label htmlFor="clientTitle" className="block text-lg font-bold mb-1">Client Name</label>
//     <input
//     onChange={(e) => setClient(e.target.value)}
//     value={client}
//     className="border border-gray-300 px-4 py-2 rounded-md focus:outline-none focus:border-green-500"
//     type="text"
//     placeholder="Client Title"
//   />
//   </div>
//   <div className="col-span-1 sm:col-span-1">
//     <label htmlFor="clientTitle" className="block text-lg font-bold mb-1">Project Name</label>
//     <input
//     onChange={(e) => setProject(e.target.value)}
//     value={project}
//     className="border border-gray-300 px-4 py-2 rounded-md focus:outline-none focus:border-green-500"
//     type="text"
//     placeholder="Project Name"
//   />
//   </div>

//   <div className="col-span-1 sm:col-span-1">
//     <label htmlFor="clientTitle" className="block text-lg font-bold mb-1">Service Type</label>
//     <input
//     onChange={(e) => setServices(e.target.value)}
//     value={services}
//     className="border border-gray-300 px-4 py-2 rounded-md focus:outline-none focus:border-green-500"
//     type="text"
//     placeholder="Services/Category"
//   />
//   </div>

//   <div className="col-span-1 sm:col-span-1">
//     <label htmlFor="clientTitle" className="block text-lg font-bold mb-1">Address</label>
//     <input
//     onChange={(e) => setAdress(e.target.value)}
//     value={address}
//     className="border border-gray-300 px-4 py-2 rounded-md focus:outline-none focus:border-green-500"
//     type="text"
//     placeholder="Address"
//   />
//   </div>

//   <div className="col-span-1 sm:col-span-1">
//     <label htmlFor="clientTitle" className="block text-lg font-bold mb-1">State</label>
//     <input
//     onChange={(e) => setState(e.target.value)}
//     value={state}
//     className="border border-gray-300 px-4 py-2 rounded-md focus:outline-none focus:border-green-500"
//     type="text"
//     placeholder="State"
//   />
  
//   </div>
  
//   <div className="col-span-1 sm:col-span-1">
//     <label htmlFor="clientTitle" className="block text-lg font-bold mb-1">City</label>
//     <input
//     onChange={(e) => setCity(e.target.value)}
//     value={city}
//     className="border border-gray-300 px-4 py-2 rounded-md focus:outline-none focus:border-green-500"
//     type="text"
//     placeholder="City"
//   />
//   </div>
  
//   <div className="col-span-1 sm:col-span-1">
//     <label htmlFor="clientTitle" className="block text-lg font-bold mb-1">PIN</label>
//     <input
//     onChange={(e) => setPin(e.target.value)}
//     value={pin}
//     className="border border-gray-300 px-4 py-2 rounded-md focus:outline-none focus:border-green-500"
//     type="number"
//     placeholder="PIN"
//   />
//   </div>
  
//   <div className="col-span-1 sm:col-span-1">
//     <label htmlFor="clientTitle" className="block text-lg font-bold mb-1">GST No:</label>
//     <input
//     onChange={(e) => setGst(e.target.value)}
//     value={gst}
//     className="border border-gray-300 px-4 py-2 rounded-md focus:outline-none focus:border-green-500"
//     type="number"
//     placeholder="GST no"
//   />
//   </div>

//   <div className="col-span-1 sm:col-span-1">
//     <label htmlFor="clientTitle" className="block text-lg font-bold mb-1">Price/Cost</label>
//     <input
//     onChange={(e) => setPrice(e.target.value)}
//     value={price}
//     className="border border-gray-300 px-4 py-2 rounded-md focus:outline-none focus:border-green-500"
//     type="number"
//     placeholder="Price of Project"
//   />
// </div>

//   <button
//     type="submit"
//     className="bg-green-600 hover:bg-green-700 text-white font-bold py-3 px-6 rounded-full w-fit transition duration-300 ease-in-out"
//   >
//     Add your Invoice
//   </button>
// </form>

//     </>
//   );
// }

"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function AddInvoice() {
  const [client, setClient] = useState("");
  const [project, setProject] = useState("");
  const [services, setServices] = useState("");
  const [address, setAddress] = useState("");
  const [state, setState] = useState("");
  const [city, setCity] = useState("");
  const [pin, setPin] = useState("");
  const [gst, setGst] = useState("");
  const [cgst, setCgst] = useState("");
  const [sgst, setSgst] = useState("");
  const [invNo, setInvNo] = useState("");
  const [pfNo, setPfNo] = useState("");
  const [balance, setBalance] = useState("");
  const [date, setDate] = useState("");
  const [price, setPrice] = useState("");

  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Check if all required fields are filled
    if (!client || !project || !services || !address || !state || !city || !pin || !gst || !cgst || !sgst || !invNo || !pfNo || !balance || !date || !price) {
      alert("All fields are required.");
      return;
    }

    // Prepare the data to be sent
    const data = {
      client,
      project,
      services,
      address,
      state,
      city,
      pin,
      gst,
      cgst,
      sgst,
      invNo,
      pfNo,
      balance,
      date,
      price,
      invCount : 0,
      pfCount : 0
    };

    try {
      // Send a POST request to add the invoice
      const res = await fetch("http://localhost:3000/api", {
        method: "POST",
        headers: { "Content-type": "application/json" },
        body: JSON.stringify(data),
      });

      if (res.ok) {
        // If successful, redirect to homepage
        router.push("/");
      } else {
        throw new Error("Failed to add invoice.");
      }
    } catch (error) {
      console.error("Error adding invoice:", error);
    }
  };

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
            placeholder="Client Name"
          />
        </div>
        <div className="col-span-1 sm:col-span-1">
          <label htmlFor="projectName" className="block text-lg font-bold mb-1">Project Name</label>
          <input
            onChange={(e) => setProject(e.target.value)}
            value={project}
            className="border border-gray-300 px-4 py-2 rounded-md focus:outline-none focus:border-green-500"
            type="text"
            placeholder="Project Name"
          />
        </div>
        <div className="col-span-1 sm:col-span-1">
          <label htmlFor="serviceType" className="block text-lg font-bold mb-1">Service Type</label>
          <input
            onChange={(e) => setServices(e.target.value)}
            value={services}
            className="border border-gray-300 px-4 py-2 rounded-md focus:outline-none focus:border-green-500"
            type="text"
            placeholder="Service Type"
          />
        </div>
        <div className="col-span-1 sm:col-span-1">
          <label htmlFor="address" className="block text-lg font-bold mb-1">Address</label>
          <input
            onChange={(e) => setAddress(e.target.value)}
            value={address}
            className="border border-gray-300 px-4 py-2 rounded-md focus:outline-none focus:border-green-500"
            type="text"
            placeholder="Address"
          />
        </div>
        <div className="col-span-1 sm:col-span-1">
          <label htmlFor="state" className="block text-lg font-bold mb-1">State</label>
          <input
            onChange={(e) => setState(e.target.value)}
            value={state}
            className="border border-gray-300 px-4 py-2 rounded-md focus:outline-none focus:border-green-500"
            type="text"
            placeholder="State"
          />
        </div>
        <div className="col-span-1 sm:col-span-1">
          <label htmlFor="city" className="block text-lg font-bold mb-1">City</label>
          <input
            onChange={(e) => setCity(e.target.value)}
            value={city}
            className="border border-gray-300 px-4 py-2 rounded-md focus:outline-none focus:border-green-500"
            type="text"
            placeholder="City"
          />
        </div>
        <div className="col-span-1 sm:col-span-1">
          <label htmlFor="pin" className="block text-lg font-bold mb-1">PIN</label>
          <input
            onChange={(e) => setPin(e.target.value)}
            value={pin}
            className="border border-gray-300 px-4 py-2 rounded-md focus:outline-none focus:border-green-500"
            type="number"
            placeholder="PIN"
          />
        </div>
        <div className="col-span-1 sm:col-span-1">
          <label htmlFor="gst" className="block text-lg font-bold mb-1">GST No:</label>
          <input
            onChange={(e) => setGst(e.target.value)}
            value={gst}
            className="border border-gray-300 px-4 py-2 rounded-md focus:outline-none focus:border-green-500"
            type="number"
            placeholder="GST No"
          />
        </div>
        <div className="col-span-1 sm:col-span-1">
          <label htmlFor="cgst" className="block text-lg font-bold mb-1">CGST</label>
          <input
            onChange={(e) => setCgst(e.target.value)}
            value={cgst}
            className="border border-gray-300 px-4 py-2 rounded-md focus:outline-none focus:border-green-500"
            type="number"
            placeholder="CGST"
          />
        </div>
        <div className="col-span-1 sm:col-span-1">
          <label htmlFor="sgst" className="block text-lg font-bold mb-1">SGST</label>
          <input
            onChange={(e) => setSgst(e.target.value)}
            value={sgst}
            className="border border-gray-300 px-4 py-2 rounded-md focus:outline-none focus:border-green-500"
            type="number"
            placeholder="SGST"
          />
        </div>
        <div className="col-span-1 sm:col-span-1">
          <label htmlFor="invNo" className="block text-lg font-bold mb-1">Invoice Number</label>
          <input
            onChange={(e) => setInvNo(e.target.value)}
            value={invNo}
            className="border border-gray-300 px-4 py-2 rounded-md focus:outline-none focus:border-green-500"
            type="text"
            placeholder="Invoice Number"
          />
        </div>
        <div className="col-span-1 sm:col-span-1">
          <label htmlFor="pfNo" className="block text-lg font-bold mb-1">PF Number</label>
          <input
            onChange={(e) => setPfNo(e.target.value)}
            value={pfNo}
            className="border border-gray-300 px-4 py-2 rounded-md focus:outline-none focus:border-green-500"
            type="text"
            placeholder="PF Number"
          />
        </div>
        <div className="col-span-1 sm:col-span-1">
          <label htmlFor="balance" className="block text-lg font-bold mb-1">Balance</label>
          <input
            onChange={(e) => setBalance(e.target.value)}
            value={balance}
            className="border border-gray-300 px-4 py-2 rounded-md focus:outline-none focus:border-green-500"
            type="number"
            placeholder="Balance"
          />
        </div>
        <div className="col-span-1 sm:col-span-1">
  <label htmlFor="date" className="block text-lg font-bold mb-1">Date</label>
  <input
    onChange={(e) => setDate(e.target.value.split('T')[0])}
    value={date}
    className="border border-gray-300 px-4 py-2 rounded-md focus:outline-none focus:border-green-500"
    type="text"
    placeholder="Date"
  />
</div>

        <div className="col-span-1 sm:col-span-1">
          <label htmlFor="price" className="block text-lg font-bold mb-1">Price/Cost</label>
          <input
            onChange={(e) => setPrice(e.target.value)}
            value={price}
            className="border border-gray-300 px-4 py-2 rounded-md focus:outline-none focus:border-green-500"
            type="number"
            placeholder="Price/Cost"
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
