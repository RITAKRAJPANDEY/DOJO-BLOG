import BlogList from './bloglist';
import {getBlogs,deleteBlog} from '@/services/blog.api';
import {useFetch} from '@/hooks/usefetch'

export default function Home() {
    const { data: blogs, isPending, error, setData } = useFetch(getBlogs);   
    const handelDelete = async  (id) => {
        await deleteBlog(id);
        const newState = blogs.filter(e => e.id !== id);
        setData(newState);
    }
    return <div className="home">
        <h2 className="text-2xl fle px-45">
            <span className="text-[#1d3557] bold">Home </span><span className="bold text-[#457b9d]
       ">Page</span></h2>
       {isPending&&<div>Loading...</div>}
       {error&&<div>{error}</div>}  
        <BlogList blogs={blogs} title="All Blogs" handelDelete={handelDelete} />
    </div>
}
