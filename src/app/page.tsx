import Container from "@/components/container"
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
    <main className='h-full flex flex-col'>
      <Container>
        <p>Featured Services:</p>
        <div className='flex flex-wrap gap-4'>
          {items.map((item) => (
            <Link
              className='flex items-center justify-center rounded-md basis-[47%] h-[100px] p-4 border'
              href={item.pathname}
              key={item.title}
            >
              <div className=' text-2xl font-bold cursor-pointer  '>
                <h2>{item.title}</h2>
              </div>
            </Link>
          ))}
        </div>
      </Container>
      <Container>featured calculator</Container>
      <Container>news section.</Container>
    </main>
  )
}
