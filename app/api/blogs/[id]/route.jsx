import {BlogController} from '@/modules/blog/blog.controller'

export async function DELETE(req,{params}){
    const {id} = await params;
    return BlogController.deleteBlog(id);
}                                         
