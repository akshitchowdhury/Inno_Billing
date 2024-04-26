import Link from 'next/link';
import React from 'react'


const getInvoices = async () => {
  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}api`, { cache: "no-store" });

    if (!res.ok) {
      throw new Error("Failed to fetch invoices");
    }

    return res.json();
  } catch (error) {
    console.log("Error loading invoices", error);
  }
};


const ShowDownloadedInv = async() => {
  
  const {invoices} = await getInvoices()
  

  const stock = function(){
    let res = 0; 
    for (let index = 0; index < invoices.length; index++) {
      const element = invoices[index].invCount;

      
      const newRes = res+ element;
      
      res = newRes
      
    } 
     return res;
  }
  
  const Pfstock = function(){
    let res = 0; 
    for (let index = 0; index < invoices.length; index++) {
      const element = invoices[index].pfCount;

      
      const newRes = res+ element;
      
      res = newRes
      
    } 
     return res;
  }
  


const totalInvCount = stock()
const totalPfCountt = Pfstock()




  return (
    <>
     <div class="flex justify-between p-4 my-28">
  <div class="flex flex-col">
    <div class="font-bold text-lg">Total Invoices Generated: {totalInvCount}</div>
    
  </div>
  <div class="flex flex-col">
    <div class="font-bold text-lg">Total PFs Generated: {totalPfCountt} </div>
    
  </div>
</div>


<div className="flex flex-col md:flex-row gap-28 my-16">
    <div className="w-full md:w-1/2">
        <div>
            <h1 className="text-xl font-bold mb-4">List of clients having Invoices generated</h1>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                {invoices.map((invoice) => (
                    invoice.invCount && invoice.invCount > 0 ? (
                      <Link
              href={`/getOneInvoice/${invoice._id}`}
            >
                        <div key={invoice.id} className="bg-white p-4 rounded-lg shadow-md
                        hover:bg-red-400 trasnsition duration-300
                        ease-in-out">
                            <h1 className="text-lg font-semibold">{invoice.client}</h1>
                        </div>
                        </Link>
                    ) : (
                        <div key={invoice.id}></div>
                    )
                ))}
            </div>
        </div>
    </div>
    <div className="w-full md:w-1/2">
        <div>
            <h1 className="text-xl font-bold mb-4">List of clients having PF's generated</h1>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                {invoices.map((invoice, index) => (
                    invoice.pfCount && invoice.pfCount > 0 ? (
                      <Link 
              href={`/getOneInvoice/${invoice._id}`}> 
                        <div key={index} className="bg-white p-4 rounded-lg shadow-md
                        hover:bg-sky-400 trasnsition duration-300
                        ease-in-out">
                            <h1 className="text-lg font-semibold">{invoice.client}</h1>
                        </div>
                        </Link>
                    ) : (
                        <div key={index}></div>
                    )
                ))}
            </div>
        </div>
    </div>
</div>
       
        
                <h1 className='font-bold text-lg mx-10'>Invoice/PF status of clients</h1>
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 p-8 ">
        {invoices.map((invoice, index) => (
          <div
            key={index}
            className="bg-white shadow-md border hover:bg-zinc-800 hover:transform 
            hover:scale-105 
            transition duration-500 ease-in-out  border-gray-300 rounded-lg p-6"
          >
            
              <div
                className="flex justify-between items-start bg-violet-500
           hover:bg-red-600 hover:text-white transition duration-500 ease-in-out
            rounded-lg shadow-md p-6 py-2"
              >
                <div>
                  <h2 className="font-bold text-xl mb-4">
                    Client: {invoice.client}
                  </h2>
                  
                  
                  <div>
                  <span className="font-bold">Is invoice downloaded:</span> {
                    
                    invoice.invCount && invoice.invCount> 0 ?(
                       <div>Yes</div>
                    )
                    :
                    (
                    <div>
                    No
                     </div>)
                  
                  } 
                  </div>

                    <div>
                  <span className="font-bold">Is Pf downloaded:</span> {
                    
                    invoice.pfCount && invoice.pfCount> 0 ?(
                       <div>Yes</div>
                    )
                    :
                    (
                    <div>
                    No
                     </div>)
                  
                  } 
                  </div>
                  
                  <div className="mb-2">
                    <span className="font-bold">invoice downloaded:</span> {invoice.invCount} times
                  </div>
                  <div className="mb-2">
                    <span className="font-bold">pf downloaded:</span> {invoice.pfCount} times
                  </div>

                </div>
              </div>
            
          </div>
        ))}
      </div>
      
      </>
  )
}

export default ShowDownloadedInv
