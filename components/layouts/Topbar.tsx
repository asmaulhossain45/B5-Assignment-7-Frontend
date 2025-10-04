import { authOptions } from "@/helpers/authOptions";
import { LogOutIcon } from "lucide-react";
import { getServerSession } from "next-auth";
import Logout from "../common/Logout";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "../ui/dropdown-menu";
import { SidebarTrigger } from "../ui/sidebar";

const Topbar = async () => {
  const session = await getServerSession(authOptions);
  return (
    <header className="bg-sidebar border-b flex items-center justify-between gap-4 py-3 px-4">
      <SidebarTrigger />

      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Avatar className="border-2 border-primary">
            <AvatarImage
              src={session?.user?.image || "https://github.com/shadcn.png"}
            />
            <AvatarFallback>{session?.user?.name?.[0] || "A"}</AvatarFallback>
          </Avatar>
        </DropdownMenuTrigger>
        <DropdownMenuContent className="mt-3">
          <DropdownMenuItem>
            <LogOutIcon />
            <Logout />
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </header>
  );
};

export default Topbar;
