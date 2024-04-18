"use client"

import React from 'react'

import { useRouter } from "next/navigation"

const RemoveBtn = ({id}) => {
  
  const router = useRouter()
  const removeTopic = async ()=>{
    // confirm() is like an alert dialog box good for UI can be used before submitting/deleting something
    const confirmed = confirm("Are you sure? ")

    if(confirmed){
      const res = await fetch(`http://localhost:3000/api/invoices?id=${id}`, {
        method: "DELETE"
      })
      if(res.ok){
          
      router.refresh()
      }
    }
  }
  return (
    <button onClick={removeTopic} className='text-red-400 bg-sky-500 text-zinc-700'>
        Click to delete
    </button>
  )
}

export default RemoveBtn
