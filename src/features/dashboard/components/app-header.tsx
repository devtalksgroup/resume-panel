import { ThemToggle } from "@/components/them-toggle";
import { SidebarTrigger } from "@/components/ui/sidebar";
import { Separator } from "@/components/ui/separator";

export default function AppHeader() {
  return (
    <header className="flex h-16 shrink-0 items-center gap-2 transition-[width,height] ease-linear group-has-data-[collapsible=icon]/sidebar-wrapper:h-12">
      <div className="flex items-center px-4">
        <SidebarTrigger />
        <Separator
          orientation="vertical"
          className="ml-4 mr-2 data-[orientation=vertical]:h-4"
        />
        <ThemToggle />
      </div>
    </header>
  );
}
