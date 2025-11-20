import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "./ui/dropdown-menu";
import { Link } from "react-router";
import { Menu } from "lucide-react";
import { ModeToggle } from "./mode-toggle";
export default function MobileNavMenu({
  navbarItems,
}: {
  readonly navbarItems: {
    id: number;
    name: string;
    href: string;
  }[];
}) {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger className="border rounded-sm p-2 cursor-pointer">
        <Menu />
      </DropdownMenuTrigger>
      <DropdownMenuContent className=" mt-4 " align="end">
        {navbarItems.map((navbarItem) => {
          return (
            <DropdownMenuItem asChild key={navbarItem.id}>
              <Link to={navbarItem.href}>{navbarItem.name}</Link>
            </DropdownMenuItem>
          );
        })}
        <DropdownMenuItem asChild>
          <ModeToggle />
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
