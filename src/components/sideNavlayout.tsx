import { ScrollArea } from "@/components/scroll-area"
import { SidebarNav } from "./sidebarNav"
import { SideNavLayoutProps } from "@/types/sidenav"

export default function SideNavLayout({ children }: SideNavLayoutProps) {
    return (
        <div className="mt-[74px]">
            <div className=" flex-1 grid xl:grid-cols-[325px_minmax(0,1fr)] xl:gap-16">
                <aside className="fixed top-16 z-30 hidden h-[calc(100vh-3.5rem)] w-full shrink-0 xl:sticky xl:block overflow-hidden pb-16">
                    <ScrollArea className="h-full ml-6 mt-16">
                        <SidebarNav />
                    </ScrollArea>
                </aside>
                {children}
            </div>
        </div>
    )
}
