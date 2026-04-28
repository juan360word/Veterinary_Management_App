
//Imports
import React from "react"

type ChildrenProp = {
    children : React.ReactNode
}

export const Error = ({children} : ChildrenProp) => {
  return (
    
    <>
    <p className=" mx-auto mt-5 bg-red-600 text-center text-white font-bold p-2 rounded-2xl">{children}</p>
    </>
  )
}
