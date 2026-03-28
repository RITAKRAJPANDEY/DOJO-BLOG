import Link  from "next/link";
export default function Navbar() {
    return <div className=" bold text-black flex items-centre shadow-md p-2"><h1 className="text-4xl bold text-black  px-40">
        <span className="text-[#1d3557]">Dojo</span> 
        <span className="text-[#457b9d]
       ">Blog</span></h1>
       <div className="flex gap-2">
   <Link className="p-2 rounded hover:bg-[#a8dadc] hover:shadow-md transition active:scale-95 active:brightness-120 bg-blue-100 border border-black" href={'/'}>Home</Link>
   <Link className="p-2 hover:bg-[#a8dadc]  rounded hover:shadow-md transition active:scale-95 active:brightness-120 bg-blue-100" href={'/create'}>New Blog</Link>
        </div>
    </div>
}