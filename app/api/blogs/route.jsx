import {BlogController} from '@/modules/blog/blog.controller'
export async function GET() {
    return BlogController.getAllBlogs();
};