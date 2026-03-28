'use client';

import BlogDetails from "../../../components/blogDetails";
import Navbar from '../../../components/navbar';



export default function BlogDetailsPage(){
    return <div className="details">
        <Navbar/>
        <BlogDetails/>
    </div>
}