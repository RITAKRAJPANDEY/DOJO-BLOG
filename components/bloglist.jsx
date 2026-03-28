import Link from "next/link";

export default function BlogList ({blogs,title,handelDelete}){
    return <div className="">
        <h1 className="text-2xl">{title}</h1>
         <ul>
            <li className="">{blogs.map((blog) => (
                    <div className=" hover:shadow-md" key={blog.id}>
                    <h3 className="text-2xl flex text-[#e63946] rounded-lg inline-block px-10">{blog.title}</h3>
                    <div className="flex gap-2">
                        <button className="rounded-lg bg-orange-300 p-1 active:brightness-120 active:scale-95 cursor-pointer hover:shadow-mg hover:bg-orange-400" onClick={()=>handelDelete(blog.id)}>Delete</button>
                    <Link className="rounded-lg bg-green-300 p-1 active:brightness-120 active:scale-95 cursor-pointer hover:shadow-mg hover:bg-green-400" href={`/blogdetails/${blog.id}`}>details</Link>
                    </div>
                    <pre className="rounded text-1xl px-15 text-blac felx">
                    {blog.description}
                    </pre>
                </div>
            ))}</li>
        </ul>
    </div>
}