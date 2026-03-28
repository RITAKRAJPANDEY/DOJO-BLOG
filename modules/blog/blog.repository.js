import {pool} from '@/lib/db'

export class BlogRepository{
    static async findAllBlogs (){
       const result = await pool.query(`SELECT * FROM blogs`);
        return result.rows;
    }
    static async deleteBlog(id){
        const result = await pool.query(`DELETE FROM blogs WHERE id=$1 RETURNING id`,[id]);
        return result.rows;
    }
    static async getBlogById(id){
        const result = await pool.query(`SELECT description FROM blogs WHERE id=$1 `,[id]);
        return result.rows[0];
    }
    static async postBlog(author,title,description){
        const result = await pool.query(`INSERT INTO blogs (author,title,description) VALUES ($1,$2,$3) RETURNING id,author`,[author,title,description]);
        return result.rows[0];
    }
}