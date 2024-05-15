import { PropWithChild } from "@/types"
import React from "react"

// this is meant to be a container
export default function Container({ children }: PropWithChild) {
  return <div className='bg-white p-4 rounded-md mb-4'>{children}</div>
}
