"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"

// using clien to make this a client based component. By default all comp in next js is server based comp

export default function AddInvoice(){

    const[client, setClient]= useState("")
    const[description, setDescritpion]= useState("")
    const[project, setProject]= useState("")
    const[price, setPrice]= useState("")
    const[category, setcategory]= useState("")

    const router = useRouter();
    
    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log("Form submitted");
    
        if (!client || !description || !price || !category || !project) {
            console.log("Client:", client);
            console.log("Description:", description);
            console.log("Price:", price);
            console.log("Category:", category);
            console.log("Project:", project);
            alert("Title ,description, category, etc details are required.");
            return;
        }

        // fetching data from api endpoints

        try {

           const res =  await fetch("http://localhost:3000/api", 
        {
            //since this is a post request i.e adding data to db we add the following paramtr as necessity
            method: "POST", //type of method
            
            headers: {"Content-type" : "application/json"}, //header of the info\

            body: JSON.stringify({client,project,
                description,price,
                category}) //main data of the info
        })

        if(res.ok){
            router.push('/')
            //we do this to redirect user to homepage once a new topic has been created
        }
        else{
            throw new Error("falied to create a new topic")
        }


        } catch (error) {
            console.log(error)
        }
    }
      
    return(
        <>
            <form onSubmit={handleSubmit} className="flex flex-col gap-3 px-32">
            <input
            onChange={(e)=>setClient(e.target.value)}
            value={client}
            // after setting the title we need to update the value of input field to the updated state hence value = title
                className=" border border-slate-500 px-16 py-2"
        type="text"
        placeholder="Client Title"
            />
            <input
            onChange={(e)=> setDescritpion(e.target.value) }
            value={description}
                className=" border border-slate-500 px-16 py-2"
        type="text"
        placeholder="Prject Description"
            />
            <input
            onChange={(e)=> setProject(e.target.value) }
            value={project}
                className=" border border-slate-500 px-16 py-2"
        type="text"
        placeholder="Project Name"
            />
            <input
            onChange={(e)=> setcategory(e.target.value) }
            value={category}
                className=" border border-slate-500 px-16 py-2"
        type="text"
        placeholder="Prject Category"
            />
            <input
            onChange={(e)=> setPrice(e.target.value) }
            value={price}
                className=" border border-slate-500 px-16 py-2"
        type="number"
        placeholder="Price of Project"
            />

            <button type="submit"
        className="bg-green-600 font-bold text-white py-3 px-6 w-fit">Add your Invoice</button>

            </form>
        </>
    )
}