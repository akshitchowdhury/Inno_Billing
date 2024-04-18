"use client"

import React from 'react'

import { useRouter } from "next/navigation"

const RemoveBtn = ({id}) => {
  
  const router = useRouter()
  const removeTopic = async ()=>{
    // confirm() is like an alert dialog box good for UI can be used before submitting/deleting something
    const confirmed = confirm("Are you sure? ")

    if(confirmed){
      const res = await fetch(`http://localhost:3000/api?id=${id}`, {
        method: "DELETE"
      })
      if(res.ok){
          
      router.refresh()
      }
    }
  }
  return (
    <button onClick={removeTopic} className="bg-zinc-700 text-white hover:bg-red-400
     hover:text-red-700 transition-colors duration-300 py-2 px-4 rounded-lg">
  Click to delete
</button>

  )
}

export default RemoveBtn
