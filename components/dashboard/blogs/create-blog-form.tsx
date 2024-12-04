"use client"

import { createBlog } from "@/actions/blog-actions"
import { SubmitButton } from "@/components/submit-button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { UploadDropzone } from "@/lib/uploadthing"
import { insertBlogSchema } from "@/lib/zod-schemas"
import { useForm } from "@conform-to/react"
import { parseWithZod } from "@conform-to/zod"
import { useActionState, useEffect, useState } from "react"
import { toast } from "sonner"

export function AddBlogForm() {
  const [image, setImage] = useState("")
  
  const [lastResult, action] = useActionState(createBlog, undefined)

  const [form, fields] = useForm({
      lastResult,
      onValidate({ formData }) {
        if (image) {
          formData.set('image', image)
        }
        return parseWithZod(formData, { schema: insertBlogSchema })
      },
      shouldValidate: 'onBlur',
      shouldRevalidate: 'onInput',
  })

  useEffect(() => {
    if (image) {
      form.validate()
    }
  }, [image])

  const handleSubmit = async (formData: FormData) => {
    if (image) {
      formData.set('image', image)
    }
    try {
      const result = await action(formData)
      console.log(result)
      toast.success("Blog successfully created")
    } catch(error) {
      console.log(error)
      toast.error("Something went wrong")
    } finally {
      setImage('')
    }
  }

  return (
    <form id={form.id} onSubmit={form.onSubmit} action={handleSubmit} className="space-y-8">
      <div className="space-y-2">
        <Label htmlFor="title">Title</Label>
        <Input
          className="bg-zinc-50"
          id="title"
          placeholder="Enter blog title"
          key={fields.title.key}
          name={fields.title.name}
          defaultValue={fields.title.initialValue} 
        />
        <p className="text-red-600">{fields.title.errors}</p>
      </div>
      <div className="space-y-2">
        <Label htmlFor="content">Content</Label>
        <Textarea
          id="content"
          placeholder="Write your blog content here"
          className="min-h-[300px] bg-zinc-50"
          key={fields.content.key}
          name={fields.content.name}
          defaultValue={fields.content.initialValue} 
        />
        <p className="text-red-600">{fields.content.errors}</p>
      </div>
      <div className="space-y-2">
        <Label htmlFor="content">Image</Label>
        <UploadDropzone
        key={fields.image.key}
        className="w-full bg-zinc-50 cursor-pointer"
        endpoint="imageUploader"
        onClientUploadComplete={(res) => {
          console.log(res[0].url);
          setImage(res[0].url)
          toast.success("Upload Completed");
        }}
        onUploadError={(error: Error) => {
          console.log(`${error.message}`);
          toast.error("Error uploading image. please try again")
        }}
      />
        <p className="text-red-600">{fields.image.errors}</p>
      </div>
      <SubmitButton />
    </form>
  )
}

