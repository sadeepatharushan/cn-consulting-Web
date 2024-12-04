import { ChevronDown, ChevronUp, LogOut, } from "lucide-react"

import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuSeparator, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarMenuSub,
  SidebarMenuSubItem,
} from "@/components/ui/sidebar"
import { dashboardMenuItems } from "@/consts"
import { LogoutLink } from "@kinde-oss/kinde-auth-nextjs/components"
import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server"
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar"
import Link from "next/link"

export async function AppSidebar() {
  const { getUser } = getKindeServerSession()
  const user = await getUser()

  return (
    <Sidebar>
      <SidebarContent className="bg-zinc-50">
        <SidebarGroup>
          <SidebarGroupLabel>Application</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {dashboardMenuItems.map((item) => (
                <Collapsible key={item.title} defaultOpen={false} className="group/collapsible">
                  <SidebarMenuItem>
                    <CollapsibleTrigger asChild>
                    <Link href={item.url}>
                      <SidebarMenuButton>
                        <item.icon />
                        <span>{item.title}</span>
                        {item.subItems && (
                          <ChevronDown className="ml-auto transition-transform group-data-[state=open]/collapsible:rotate-180" />
                        )}
                      </SidebarMenuButton>
                      </Link>
                    </CollapsibleTrigger>
                    {item.subItems && (
                      <CollapsibleContent>
                        <SidebarMenuSub>
                          {item.subItems.map((subItem) => (
                            <SidebarMenuSubItem key={subItem.title}>
                              <SidebarMenuButton asChild>
                                <Link href={subItem.url}>{subItem.title}</Link>
                              </SidebarMenuButton>
                            </SidebarMenuSubItem>
                          ))}
                        </SidebarMenuSub>
                      </CollapsibleContent>
                    )}
                  </SidebarMenuItem>
                </Collapsible>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
      <SidebarFooter>
        <SidebarMenu>
          <SidebarMenuItem>
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <SidebarMenuButton className="py-5">
                <Avatar>
                    <AvatarImage src={user?.picture || "https://github.com/shadcn.png"} />
                    <AvatarFallback>CN</AvatarFallback>
                </Avatar>
                Username
                  <ChevronUp className="ml-auto" />
                </SidebarMenuButton>
              </DropdownMenuTrigger>
              <DropdownMenuContent
                side="top"
                className="w-[--radix-popper-anchor-width]"
              >
                <DropdownMenuItem>
                  <span>Account</span>
                </DropdownMenuItem>
                <DropdownMenuSeparator />
                <DropdownMenuItem>
                <LogoutLink className="flex flex-row w-full justify-between">
                  Log out
                  <LogOut className="w-5 h-5"/>
                </LogoutLink>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarFooter>
    </Sidebar>
  )
}


  