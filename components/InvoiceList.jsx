
import React from 'react'
import RemoveBtn from './RemoveBtn'
import Link from 'next/link'


const getInvoices = async ()=>{
    try {
      const res =  await fetch('http://localhost:3000/api/invoices',
    {cache: 'no-store'})

    // cache: "no-store" because we want to recieve new updated topic list every time we fetch/get

    if(!res.ok){
        throw new Error("Failed to fetch topics")
    }

    return res.json()

    } catch (error) {
        console.log("Error loading invoices", error)
    }
}



const InvoiceList =async () => {

        const {invoices} = await getInvoices()

  return (
    <>
        {
            invoices.map((t,index)=> (
                    
        <div className='p-4 border border-slate-300 my-3 mx-32
        flex justify-between gap-5 items-start' key={index}>
            <div>
                <h2 className='font-bold text-2xl'>{t.client}</h2>
                <div>{t.project}</div>
                <div>{t.description}</div>
                <div>{t.price}</div>
                <div>{t.category}</div>
            </div>

            <div className='flex gap-2'>
            
            {/* We are passing t._id to RemoveBtn as a props becaus delete button's api works on searching an id and deleting 
            them..hence when t._id is accessible to RemoveBtn it becomes accessible for RemoveBtn to delete a selected
            topic block */}

                <RemoveBtn id={t._id}/>
            
                {/* editTopic has dynamic id so enclosing in back ticks.the dynamic id is fetched from Mongo DB id
                which is in variable "_id" ; t._id because calling from object t which is being mapped*/}
                <Link href={`/editTopic/${t._id}`}> 
                    Edit Topic here
                </Link>
            </div>
        </div>

            ))
        }


    </>
  )
}

export default InvoiceList
