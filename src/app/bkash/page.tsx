import Calculator from "@/components/calculator"
import Container from "@/components/container"
import H1 from "@/components/h1"
import { Metadata } from "next"
import React from "react"

export const metadata: Metadata = {
  title: "Bkash Cashout Calculator",
  description: "Calculate bkash cashout charge",
}

export default function BkashPage() {
  return (
    <>
      <Container>
        <H1>Bkash Cashout Calculator</H1>
        <p>Calculate bkash cashout charge</p>
        <Calculator />
      </Container>
    </>
  )
}
