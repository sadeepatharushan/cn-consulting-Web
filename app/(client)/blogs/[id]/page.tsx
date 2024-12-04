'use client'

import { selectBlogSchemaType } from "@/lib/zod-schemas"
import Image from "next/image"
import { useSearchParams, notFound } from "next/navigation"

export default function BlogPost() {
    const searchParams = useSearchParams()
    const postDataString = searchParams.get('postData')
    const post: selectBlogSchemaType = postDataString ? JSON.parse(postDataString) : null
  
    if (!post) {
      return notFound()
    }

  return (
    <article className="container mx-auto mt-16 px-4 py-12 max-w-3xl">
      <h1 className="text-4xl font-bold mb-4">{post.title}</h1>
      <div className="relative aspect-video mb-8 rounded-lg overflow-hidden">
        <Image
          src={post.image}
          alt={post.title}
          fill
          className="object-cover"
        />
      </div>
      <div className="prose max-w-none">
        {post.content.split('\n').map((paragraph, index) => (
          <p key={index} className="mb-4 text-lg">
            {paragraph}
          </p>
        ))}
      </div>
    </article>
  )
}

