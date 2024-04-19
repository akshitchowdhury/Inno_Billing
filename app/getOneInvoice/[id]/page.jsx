//client side logi to edit a topic ; so we import EditTopicForm component and create the logic and send props to the comp

import DisplayCardInfo from "@/components/DisplayCardInfo";


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
  
  export default async function GetOneInvoice({ params }) {
    const { id } = params;
    const { invoice } = await getInvoiceById(id);
    const { 
        client, project, address, services, state, city, pin, gst, price} = invoice;
  
    return <DisplayCardInfo id={id} client={client} 
    project ={project}
    address={address}
    services={services}
    state = {state}
    city = {city}
    pin = {pin}
    gst = {gst}
    price={price}  />;
  }