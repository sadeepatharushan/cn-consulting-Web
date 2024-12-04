"use client"

import { ColumnDef } from "@tanstack/react-table"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuTrigger } from "../../ui/dropdown-menu"
import { ArrowUpDown, MoreHorizontal } from "lucide-react"
import { Button } from "../../ui/button"
import { Checkbox } from "../../ui/checkbox"
import { insertBlogSchemaType } from "@/lib/zod-schemas"
import deleteBlog from "@/actions/blog-actions"
import { toast } from "sonner"

export const columns: ColumnDef<insertBlogSchemaType>[] = [
  {
    id: "select",
    header: ({ table }) => (
      <Checkbox
      checked={
        table.getIsAllPageRowsSelected()
          ? true
          : table.getIsSomePageRowsSelected()
          ? "indeterminate"
          : false
      }
      onCheckedChange={(value) => table.toggleAllPageRowsSelected(!!value)}
      aria-label="Select all"
    />
    ),
    cell: ({ row }) => (
      <Checkbox
        checked={row.getIsSelected()}
        onCheckedChange={(value) => row.toggleSelected(!!value)}
        aria-label="Select row"
      />
    ),
    enableSorting: false,
    enableHiding: false,
  },
  {
    accessorKey: "title",
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          Title
          <ArrowUpDown />
        </Button>
      )
    },
    cell: ({ row }) => <div className="lowercase">{row.getValue("title")}</div>,
  },
  {
    accessorKey: "content",
    header: "Content",
  },
  {
    accessorKey: "status",
    header: "Status",
    cell: ({ row }) => (
      <div className="capitalize">{row.getValue("status")}</div>
    ),
  },
  {
    accessorKey: "image",
    header: "Image",
  },
  {
    id: "actions",
    header: "Actions",
    enableHiding: false,
    cell: ({row}) => {
      const id = row.original.id;
      const handleDelete = async () => {
        try {
          await deleteBlog(id as number);
          toast.success("Blog deleted successfully");
        } catch (error) {
          console.error(error);
          toast.error("Cannot delete blog right now");
        }
      }
      return (
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" className="h-8 w-8 p-0">
              <span className="sr-only">Open menu</span>
              <MoreHorizontal />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            <DropdownMenuLabel>Actions</DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuItem onClick={handleDelete}>delete</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      )
    },
  },
]
