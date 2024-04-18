

"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function EditInvoiceForm({ id,client,project,
    description,price,
category }) {
  const [newClient, setNewClient] = useState(client);
  const [newProject, setNewProject] = useState(project);
  const [newPrice, setNewPrice] = useState(price);
  const [newCategory, setNewCategory] = useState(category);
  const [newDescription, setNewDescription] = useState(description);

  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await fetch(`http://localhost:3000/api/invoices/${id}`, {
        method: "PUT",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify({ newClient,
            newProject,
         newDescription,
        newPrice,
    newCategory }),
      });

      if (!res.ok) {
        throw new Error("Failed to update topic");
      }

      router.refresh();
      router.push("/");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-3">
      <input
        onChange={(e) => setNewClient(e.target.value)}
        value={newClient}
        className="border border-slate-500 px-8 py-2"
        type="text"
        placeholder="client Name"
      />
      <input
        onChange={(e) => setNewDescription(e.target.value)}
        value={newDescription}
        className="border border-slate-500 px-8 py-2"
        type="text"
        placeholder="Project Description"
      />
      <input
        onChange={(e) => setNewProject(e.target.value)}
        value={newProject}
        className="border border-slate-500 px-8 py-2"
        type="text"
        placeholder="Project Title"
      />
      <input
        onChange={(e) => setNewCategory(e.target.value)}
        value={newCategory}
        className="border border-slate-500 px-8 py-2"
        type="text"
        placeholder="Category of Project"
      />
      <input
        onChange={(e) => setNewPrice(e.target.value)}
        value={newPrice}
        className="border border-slate-500 px-8 py-2"
        type="number"
        placeholder="Price of Project"
      />

      

      <button className="bg-green-600 font-bold text-white py-3 px-6 w-fit">
        Update Topic
      </button>
    </form>
  );
}