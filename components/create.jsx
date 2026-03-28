import { useState } from "react"
import {postBlog} from '@/services/blog.api';
const initialState={
    author:'',
        title:'',
        description:''
}
export default function Create (){
    const [blog,setBlog]=useState(initialState);
const handleChange=(e)=>{
    const {name,value}=e.target;
    setBlog((prev) => ({
    ...prev,
    [name]: value
  }));}
const handelSubmit=(e)=>{
    e.preventDefault();
    // console.log(blog);
    const addData=async()=>{
        try{
            await postBlog(blog); 
            setBlog(initialState);
            
     }catch(err){

        console.error(err);
        throw new Error("unable to post blog");
     }
    }
    addData();
}

    return <div className="create">
        <h2 className="text-2xl px-50 text-[#7b2cbf] ">Add A New Blog</h2>
        <div className="flex flex-col gap-3 p-3 max-w-md" >
            <form onSubmit={handelSubmit}>
        <input  name="author" onChange={handleChange} value={blog.author} placeholder="enter your name "/>
        <input name="title" onChange={handleChange} value={blog.title} placeholder="enter title"/>
        <input name="description" onChange={handleChange} value={blog.description} placeholder="enter description"/>
        <div>
            <button type="submit"     className="active:scale-95 active:brightness-120 hover:shadow-md hover:bg-[#00b4d8] rounded p-1 bg-blue-300 flex mx-80">Add</button>
        </div>
        </form>
        </div>
    </div>
}