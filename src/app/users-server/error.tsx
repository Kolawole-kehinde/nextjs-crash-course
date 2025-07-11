"use client"

import { useEffect } from "react"


const Error = ({error}: {error: Error}) => {
   useEffect(() => {
     console.log(error)
   },[error])
  return (
    <div className="flex items-center justify-center h-screen">
        <p className="text-2xl text-red-500">Error fetching users data</p>
    </div>
  )
}

export default Error