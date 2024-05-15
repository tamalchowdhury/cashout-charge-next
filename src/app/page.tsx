import Image from "next/image"
import Link from "next/link"

const items = [
  {
    title: "Bkash",
    pathname: "/bkash",
  },
  {
    title: "Nagad",
    pathname: "/nagad",
  },
  {
    title: "Rocket",
    pathname: "/rocket",
  },
  {
    title: "Upay",
    pathname: "/upay",
  },
]

export default function Home() {
  return (
    <main className='h-full flex flex-col gap-4 '>
      <section className='flex-1 bg-white p-4 min-h-[200px] rounded-md'>
        <h1 className='mb-4'>Select a Service</h1>
        <div className='flex flex-wrap gap-4'>
          {items.map((item) => (
            <Link
              className='flex items-center justify-center rounded-md basis-[48%] h-[100px] p-4 border'
              href={item.pathname}
              key={item.title}
            >
              <div className=' text-2xl font-bold cursor-pointer  '>
                <h2>{item.title}</h2>
              </div>
            </Link>
          ))}
        </div>
      </section>
      <section className='flex-1 bg-white p-2'>featured calculator</section>
      <section className='flex-1 bg-white p-2'>news/updates etc</section>
    </main>
  )
}
