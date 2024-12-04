import { selectBlogSchemaType } from "@/lib/zod-schemas"
import { ArrowRight } from 'lucide-react'
import Image from "next/image"

export default function BlogCard({ post }: { post: selectBlogSchemaType }) {
  const { title, content, image } = post
  return (

      <div className="bg-white border border-black hover:shadow-[-7px_7px_0px_#000000] overflow-hidden">
        {/* Image container */}
        <div className="relative h-48 w-full">
          <Image
            src={image}
            alt="Blog post image"
            fill
            className="object-cover"
          />
        </div>

        {/* Text content */}
        <div className="p-4 text-zinc-800">
          <h3 className="text-xl font-semibold mb-2 truncate">
            {title}
          </h3>
          <p className="text-muted-foreground text-sm mb-4 truncate">
            {content}
          </p>
          <div className="flex items-center text-sm font-semibold">
            <p className="flex items-center hover:shadow-[0px_2px_0px_#27272a]">
                Read more
                <ArrowRight className="ml-1 h-4 w-4" />
            </p>
          </div>
        </div>
      </div>

  )
}

