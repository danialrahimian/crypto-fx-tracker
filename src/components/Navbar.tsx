import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "./ui/navigation-menu";
import { ModeToggle } from "./mode-toggle";
import { Link } from "react-router";
import { navbarItems } from "../data/navbarItems";
export default function Navbar() {
  return (
    <NavigationMenu className="w-full h-14 flex justify-center items-center backdrop-blur-2xl">
      <NavigationMenuList>
        {navbarItems.map((navbarItem) => {
          return (
            <NavigationMenuItem key={navbarItem.id}>
              <NavigationMenuTrigger>
                {navbarItem.navbarCategory}
              </NavigationMenuTrigger>
              <NavigationMenuContent>
                {navbarItem.links.map((link) => {
                  return (
                    <NavigationMenuLink asChild key={link.id}>
                      <Link to={link.href}>{link.name}</Link>
                    </NavigationMenuLink>
                  );
                })}
              </NavigationMenuContent>
            </NavigationMenuItem>
          );
        })}
        <NavigationMenuItem>
          <ModeToggle />
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  );
}
