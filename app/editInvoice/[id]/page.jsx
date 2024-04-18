//client side logi to edit a topic ; so we import EditTopicForm component and create the logic and send props to the comp

import EditInvoiceForm from "@/components/EditInvoiceForm";


const getInvoiceById = async (id) => {
    try {
      const res = await fetch(`http://localhost:3000/api/invoices/${id}`, {
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
  
  export default async function EditInvoice({ params }) {
    const { id } = params;
    const { invoice } = await getInvoiceById(id);
    const { client,project,
    description,price,
    category } = invoice;
  
    return <EditInvoiceForm id={id} client={client} description={description}
    project ={project} price={price}  category ={category}/>;
  }