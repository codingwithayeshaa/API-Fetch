import Link from "next/link";

export default async function Home(){
  const url = await fetch ('https://jsonplaceholder.typicode.com/posts')
  const response = await url.json()
  console.log(response)

  return(
    <div>
      {
        response.map((post:any) => (
          <div>
            <Link href={`${post.id}`}>
            <h2 className="text-2xl font-semibold text-center my-8 py-4">{post.title} &nbsp; &nbsp; {post.id}</h2>
            </Link>
          </div>
        ))
      }
    </div>
  )
}
    