import { AddBlogForm } from "@/components/dashboard/blogs/create-blog-form";

export default function AddBlogPage() {
  return (
    <div className="container mx-auto p-10">
      <h1 className="text-3xl font-bold mb-5">Add New Blog Post</h1>
      <AddBlogForm />
    </div>
  )
}

