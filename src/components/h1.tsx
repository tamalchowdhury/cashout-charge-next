import { PropWithChild } from "@/types"
import React from "react"

export default function H1({ children }: PropWithChild) {
  return <h1 className='font-bold text-2xl mb-2'>{children}</h1>
}
