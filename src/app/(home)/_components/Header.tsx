import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { MenuIcon } from "lucide-react";
import Link from "next/link";
import React from "react";

const menuItems = [
  "Home",
  "What is GPT?",
  "Open AI",
  "Case Studies",
  "Library",
];

const MobileNavbar = () => {
  return (
    <div className="lg:hidden">
      <DropdownMenu>
        <DropdownMenuTrigger>
          <MenuIcon />
        </DropdownMenuTrigger>
        <DropdownMenuContent>
          <ul className="flex flex-col gap-y-3 my-3 p-3">
            {menuItems.map((item) => (
              <li key={item}>
                <Link href="#" className="font-semibold text-base">
                  {item}
                </Link>
              </li>
            ))}
            <li>
              <Button variant="outline" size="sm">
                Sign in
              </Button>
            </li>
            <li>
              <Button size="sm" className="bg-orangeTwo">
                Sign up
              </Button>
            </li>
          </ul>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
};

const Header: React.FC = () => {
  return (
    <header className="flex justify-between items-center py-10">
      <div className="flex items-center gap-16 w-3/4">
        <h1 className="text-xl font-extrabold">GPT-3</h1>
        <nav className="hidden lg:flex items-center gap-16">
          {menuItems.map((item) => (
            <Link key={item} href="#">
              {item}
            </Link>
          ))}
        </nav>
      </div>
      <div className="hidden lg:flex items-center gap-x-5">
        <Button variant="ghost" size="lg">
          Sign in
        </Button>
        <Button size="lg" className="bg-orangeTwo">
          Sign up
        </Button>
      </div>
      <MobileNavbar />
    </header>
  );
};

export default Header;
