import {BlogController} from '@/modules/blog/blog.controller'
export async function POST(req){
    const blog = await req.json();
    return await BlogController.postBlog(blog);
};