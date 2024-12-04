import { AppSidebar } from "@/components/dashboard/app-sidebar";
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
export default async function DashboardLayout({
    children,
  }: Readonly<{
    children: React.ReactNode;
  }>) {
    // const cookieStore = await cookies()
    // const defaultOpen = cookieStore.get("sidebar:state")?.value === "true"
    return (

          <SidebarProvider >
            <AppSidebar />
            <main className="w-screen min-h-screen bg-blue-50 dark:bg-blue-950">
                <SidebarTrigger />
                {children}
            </main>
          </SidebarProvider>

    );
  }

  