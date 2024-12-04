import BlogCard from "@/components/client/blog-card"
import { db } from "@/db"
import { blogs } from "@/db/schema"
import Link from "next/link"

export default async function BlogPage() {
  const posts = await db.select({
    id: blogs.id,
    title: blogs.title,
    content: blogs.content,
    image: blogs.image
  }).from(blogs)

  return (
    <div className="px-12 py-20 bg-zinc-100 min-h-screen w-full">
      <div className="text-center max-w-2xl mx-auto my-16">
        <h1 className="text-4xl font-bold mb-4 text-zinc-800">Explore Our Latest Blogs</h1>
        <p className="text-muted-foreground mb-10">
          Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the standard dummy text ever.
        </p>
      </div>

      {/* Blog Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {posts.map((post, index) => (
          <Link href={{
            pathname: `/blogs/${post.id}`,
            query: { postData: JSON.stringify(post) }}} key={index} className="group cursor-pointer">
            <BlogCard post={post} />
          </Link>
        ))}
        
      </div>
    </div>
  )
}

