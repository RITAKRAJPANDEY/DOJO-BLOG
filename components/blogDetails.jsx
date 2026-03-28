import { useEffect ,useState} from 'react';
import {getBlogById} from '@/services/blog.api';
import { useParams } from 'next/navigation';

export default function BlogDetails(){
    const [details,setDetails]=useState([null]);
    const  {id} = useParams();
    useEffect(()=>{
        const fetchData=async()=>{
        try{
            const res  = await getBlogById(id);
            setDetails(res.data);           
        }catch(err){
            console.error(err);
        }
    }

    fetchData();
    },[id]);
    console.log(details);
    return <div className="blog-details">
        
        <h2 className="text-2xl px-50 ">
            <span className="text-[#1d3557] bold">Blog </span>
            <span className="bold text-[#457b9d]
       ">Details</span>
        </h2>       
            {details ? (
                <pre className='text-1xl flex bg-[#90e0ef]'>{details}</pre>
            ) : (
                <p>Loading...</p>
            )}
    </div>
}