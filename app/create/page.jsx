'use client';

import Create from "../../components/create";
import Navbar from '../../components/navbar';
export default function CreateBlog() {
    return <div>  
        <Navbar/>
        <div className="create">
            <Create />
        </div>
    </div>
}