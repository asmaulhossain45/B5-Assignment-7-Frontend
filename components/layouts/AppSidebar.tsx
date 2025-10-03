import { authOptions } from "@/helpers/authOptions";
import MyLogo from "@/public/Asmaul_Hossain_Logo.png";
import {
  FilePlus2Icon,
  FileTextIcon,
  House,
  Layers,
  LayoutGridIcon,
  Newspaper,
} from "lucide-react";
import { getServerSession } from "next-auth";
import Image from "next/image";
import Link from "next/link";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "../ui/sidebar";

const AppSidebar = async () => {
  const session = await getServerSession(authOptions);

  const dashLinks = [
    { label: "Dashboard", href: "/dashboard", icon: LayoutGridIcon },
    {
      label: "Create Project",
      href: "/dashboard/projects/new",
      icon: FilePlus2Icon,
    },
    {
      label: "Create Blog",
      href: "/dashboard/blogs/new",
      icon: FileTextIcon,
    },
    { label: "Manage Projects", href: "/dashboard/projects", icon: Layers },
    { label: "Manage Blogs", href: "/dashboard/blogs", icon: Newspaper },
    { label: "Public Home", href: "/", icon: House },
  ];

  return (
    <Sidebar>
      <SidebarHeader>
        <Image src={MyLogo} alt="Asmaul Hossain Logo" className="h-10 w-fit" />
      </SidebarHeader>

      <SidebarContent className="border-y">
        <SidebarGroup>
          <SidebarGroupContent>
            <SidebarMenu>
              {dashLinks.map((item, index) => (
                <SidebarMenuItem key={index}>
                  <Link href={item.href}>
                    <SidebarMenuButton isActive={index === 0} className="py-2">
                      <item.icon size={16} />
                      {item.label}
                    </SidebarMenuButton>
                  </Link>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>

      <SidebarFooter>
        <SidebarGroup>
          <SidebarGroupContent className="flex items-center gap-2">
            <Avatar className="border-2 border-primary">
              <AvatarImage
                src={session?.user?.image || "https://github.com/shadcn.png"}
              />
              <AvatarFallback>CN</AvatarFallback>
            </Avatar>
            <div>
              <h5>{session?.user?.name}</h5>
              <h6 className="text-xs text-muted-foreground">
                {session?.user?.email}
              </h6>
            </div>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarFooter>
    </Sidebar>
  );
};

export default AppSidebar;
