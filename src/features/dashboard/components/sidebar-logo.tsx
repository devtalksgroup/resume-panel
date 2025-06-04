import Link from "next/link";
import Image from "next/image";
import {
  DropdownMenu,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { SidebarMenu, SidebarMenuItem } from "@/components/ui/sidebar";

export function SidebarLogo() {
  return (
    <SidebarMenu>
      <SidebarMenuItem>
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Link href="/" className="inline-flex items-center gap-x-2">
              <Image
                src="/images/logo/favicon.png"
                alt="favicon"
                width={1000}
                height={1000}
                className="w-14"
              />
              <div className="grid text-sm leading-tight">
                <span className="truncate font-medium text-left">
                  Devtalks Group
                </span>
                <span className="truncate text-xs">جامعه توسعه دهندگان</span>
              </div>
            </Link>
          </DropdownMenuTrigger>
        </DropdownMenu>
      </SidebarMenuItem>
    </SidebarMenu>
  );
}
