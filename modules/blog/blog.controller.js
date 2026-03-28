import { BlogService } from "./blog.services";

export class BlogController {
    static async getAllBlogs() {
        try {
            const blogs = await BlogService.getAllBlogs();
            return Response.json({
                success: true,
                data: blogs,
            });
        } catch (error) {
            {
                return Response.json({
                    success: false,
                    message: error.message,
                },
            {status:500});
            }
        }
    }
     
     static async deleteBlog(id){
        try{
          
            const blog = await BlogService.deleteBlog(id);
            return Response.json({
                success:true,
                data:blog,
            })
        }catch(err){
            {
                return Response.json({
                    success:false,
                    message:err.message,
                    status:500
                })
            }
        }
     }
     static async getBlogById(id){
        try{
            const blog = await BlogService.getBlogById(id);
            return Response.json({
                success:true,
                data:blog.description
            })
        }catch(err){
            return Response.json({
                success:false,
                message:err.message,
                status:500
            })
        }
     }
     static async postBlog(blog){
        try{
            const data = await BlogService.postBlog(blog);
            return Response.json({
                success:true,
                data:data
            })
        }catch(err){
            return Response.json({
                success:false,
                message:err.message,
                status:500
            })
            throw new Error("Unable to add Blog");
        }
     }
}