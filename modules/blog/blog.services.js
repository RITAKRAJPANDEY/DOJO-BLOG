import { BlogRepository } from "./blog.repository";

export class BlogService{
    static async getAllBlogs(){
        const blogs = await BlogRepository.findAllBlogs();
        return blogs;
    }
    static async deleteBlog(id){
    const blog = await BlogRepository.deleteBlog(id);
    return blog;
    }
    static async getBlogById(id){
        const blog = await BlogRepository.getBlogById(id);
        if(!blog){
            throw new Error('no such blog found');
        }
        return blog;
    }
    static async postBlog(blog){
        if(!blog.author){
            throw new Error("Author Field canno't be empty");
        }
         if(!blog.title){
            throw new Error("title Field canno't be empty");
        }
         if(!blog.description){
            throw new Error("description Field canno't be empty");
        }
        const data = await BlogRepository.postBlog(blog.author,blog.title,blog.description);
        return data;
    }
}