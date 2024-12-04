'use server'

import { db } from "@/db"
import { blogs } from "@/db/schema"
import { insertBlogSchema } from "@/lib/zod-schemas"
import { parseWithZod } from "@conform-to/zod"
import { eq } from "drizzle-orm"
import { revalidatePath } from "next/cache"

export async function createBlog(prevState: unknown, formData: FormData) {

    const submission = parseWithZod(formData, {
        schema: insertBlogSchema
    })

    if (submission.status !== 'success') {
        return submission.reply()
    }

    try {
    
        await db.insert(blogs).values({
            title: submission.value.title,
            content: submission.value.content,
            image: submission.value.image,
        });

        // revalidatePath("/")

        return submission.reply()

    } catch (error) {
        console.error("Error saving consultation:", error)
        // return {
        //     status: 'error',
        //     message: 'An unexpected error occurred while saving the free consultation. Please try again later.',
        // }
    }
}


export default async function deleteBlog(id: number) {

    try {
        await db.delete(blogs).where(eq(blogs.id, id));
        revalidatePath("/dashboard/blogs")
    } catch (error) {
      console.error(error);
    }
}
