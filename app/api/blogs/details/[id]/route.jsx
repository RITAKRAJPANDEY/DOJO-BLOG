// import {BlogController} from '@/modules/blog/blog.controller'
import {BlogController} from '../../../../../modules/blog/blog.controller';
export async function GET(req,{params}){
    const {id} = await params;
    return BlogController.getBlogById(id);
}