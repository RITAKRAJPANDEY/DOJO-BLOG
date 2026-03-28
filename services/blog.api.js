export const getBlogs = async ()=>{
    const res = await fetch("/api/blogs");

    if(!res.ok){
        throw new Error("Failed to fetch blogs");
    }
    return res.json();
};
export const deleteBlog = async (id)=>{
    const res = await fetch(`/api/blogs/${id}`,{
        method:"DELETE"
    });
    if(!res.ok){
        throw new Error("Failed to delete blog")
    }
    return res.json();
}
export const getBlogById = async (id)=>{
    const res = await fetch(`/api/blogs/details/${id}`);
    if(!res.ok){
        throw new Error("Failed to get the blog");
    }
    const data = res.json();
    return data;
}
export const postBlog= async(blog)=>{
    const res = await fetch(`/api/blogs/create`,{
        method:'POST',
        headers:{
            'content-Type':'application/json',
        },
        body:JSON.stringify(blog)
    });
    if(!res.ok){
        throw new Error("Failed to post the blog");
    };
    const data = await res.json();
    return data;
    
}