import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "./ui/navigation-menu";
import { ModeToggle } from "./mode-toggle";
import { Link } from "react-router";
import { navbarItems } from "../data/navbarItems";
import { Input } from "./ui/input";
import MobileNavMenu from "./MobileNavMenu";
export default function Navbar() {
  return (
    <div className="mt-2 flex justify-between items-center w-[90%] mx-auto fixed top-0 left-0 right-0 z-999 backdrop-blur-2xl h-16 border border-primary/20  rounded-2xl px-2">
      <Link to="/" className="font-bold w-64">
        Crypto FX Tracker
      </Link>
      <div className="lg:flex gap-2 w-full hidden">
        <div className="w-full flex justify-center items-center px-4 ">
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
              <NavigationMenuItem className="ml-2">
                <ModeToggle />
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>
        </div>
        <Input type="text" placeholder="Search" className="w-64" />
      </div>
      <div className="lg:hidden">
        <MobileNavMenu navbarItems={navbarItems} />
      </div>
    </div>
  );
}
