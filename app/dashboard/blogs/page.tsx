
import { columns } from "@/components/dashboard/blogs/blog-columns"
import { DataTable } from "@/components/dashboard/blogs/data-table"
import { db } from "@/db"
import { blogs } from "@/db/schema"

const Page = async () => {
  const data = await db.select().from(blogs)
  
  return (
    <div className="container mx-auto p-5 overflow-hidden">
      <div className="bg-zinc-50 rounded-md">
      <DataTable columns={columns} data={data} />
      </div>
      
    </div>
  )
}

export default Page