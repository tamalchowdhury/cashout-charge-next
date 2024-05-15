"use client"

import React from "react"

export default function Calculator({ service = "bkash" }) {
  const [value, setValue] = React.useState("")

  const calculateBkashFee = (amount: number, type: string = "regular") => {
    // calculate 1.85% of the amount round to 2 decimal places
    const regularFee = 0.0185
    const priyoAgentFee = 0.0149

    let rate = regularFee

    if (type === "regular") {
      rate = regularFee
    } else if (type === "priyo") {
      rate = priyoAgentFee
    }

    const fee = amount * rate
    return fee.toFixed(2)
  }

  const handleFormSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const form = e.currentTarget
    const formData = new FormData(form)
    const amount = formData.get("amount") as string
    const fee = calculateBkashFee(parseFloat(amount))
    alert(fee)
  }

  return (
    <div className='my-4'>
      <form onSubmit={handleFormSubmit} className='flex gap-2'>
        <section className='relative'>
          <input
            className=' border w-full text-3xl p-2'
            type='number'
            name='amount'
            onChange={(e) => setValue(e.target.value)}
            value={value}
            autoFocus
            tabIndex={1}
          />
          <button
            className='absolute right-[10px] top-[8px] bg-[#efefef] hover:bg-[#ddd] transition rounded-full flex items-center justify-center h-[40px] w-[40px] text-[32px] 
            leading-none
            '
            type='button'
            tabIndex={3}
          >
            &times;
          </button>
        </section>
        <section>
          <button
            className='block bg-accent rounded-md px-4 py-2 font-bold'
            type='submit'
            tabIndex={2}
          >
            Calculate
          </button>
        </section>
      </form>
    </div>
  )
}
