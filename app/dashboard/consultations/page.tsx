import { columns } from "@/components/dashboard/consultations/consultation-columns"
import { DataTable } from "@/components/dashboard/consultations/data-table"
import { db } from "@/db"
import { consultations } from "@/db/schema"

const consultationsPage = async () => {
  const data = await db.select().from(consultations)

  return (
    <div className="container mx-auto p-5 overflow-hidden">
      <div className="bg-zinc-50 rounded-md">
        <DataTable columns={columns} data={data} />
      </div>
    </div>
  )
}

export default consultationsPage