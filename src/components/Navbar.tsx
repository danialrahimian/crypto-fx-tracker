import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "./ui/navigation-menu";
import { ModeToggle } from "./mode-toggle";
import { Link } from "react-router";
import { navbarItems } from "../data/navbarItems";
export default function Navbar() {
  return (
    <div className="w-full h-14 flex justify-center items-center backdrop-blur-2xl">
      <NavigationMenu>
        <NavigationMenuList>
          {navbarItems.map((navbarItem) => {
            return (
              <NavigationMenuItem key={navbarItem.id}>
                <NavigationMenuLink asChild>
                  <Link to={navbarItem.href}>{navbarItem.name}</Link>
                </NavigationMenuLink>
              </NavigationMenuItem>
            );
          })}
          <NavigationMenuItem>
            <ModeToggle />
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu>
    </div>
  );
}
