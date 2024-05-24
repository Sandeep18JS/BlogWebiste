import { ScrollArea } from "@/components/scroll-area"
import { SidebarNav } from "./sidebarNav"
import { SideNavLayoutProps } from "@/types/sidenav"

export default function SideNavLayout({ children }: SideNavLayoutProps) {
    return (
        <div className="border-b mt-[74px]">
            <div className=" flex-1  md:grid md:grid-cols-[220px_minmax(0,1fr)] md:gap-6 lg:grid-cols-[300px_minmax(0,1fr)] lg:gap-20">
                <aside className="fixed top-16 z-30 hidden h-[calc(100vh-3.5rem)] w-full shrink-0 md:sticky md:block">
                    <ScrollArea className="h-full ml-6 mt-16">
                        <SidebarNav />
                    </ScrollArea>
                </aside>
                {children}
            </div>
        </div>
    )
}
