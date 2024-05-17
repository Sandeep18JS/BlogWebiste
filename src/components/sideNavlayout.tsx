import { Config } from "@/config/tuts"
import { SidebarNav } from "@/components/sidebar-nav"
import { ScrollArea } from "@/components/scroll-area"

interface SideNavLayoutProps {
    children: React.ReactNode
}

export default function SideNavLayout({ children }: SideNavLayoutProps) {
    return (
        <div className="border-b mt-10">
            <div className=" flex-1  md:grid md:grid-cols-[220px_minmax(0,1fr)] md:gap-6 lg:grid-cols-[300px_minmax(0,1fr)] lg:gap-10">
                <aside className="fixed top-16 z-30 hidden h-[calc(100vh-3.5rem)] w-full shrink-0 md:sticky md:block">
                    <ScrollArea className="h-full py-6 pl-14 lg:py-8 ">
                        <SidebarNav items={Config.sidebarNav} />
                    </ScrollArea>
                </aside>
                {children}
            </div>
        </div>
    )
}
