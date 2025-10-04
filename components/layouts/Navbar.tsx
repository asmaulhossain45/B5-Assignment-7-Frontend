"use client";

import { cn } from "@/lib/utils";
import MyLogo from "@/public/Asmaul_Hossain_Logo.png";
import {
  House,
  Info,
  Layers,
  MessageCircleMore,
  Newspaper,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Button } from "../ui/button";

const navLinks = [
  { label: "Home", href: "/", icon: House },
  { label: "About", href: "/about", icon: Info },
  { label: "Projects", href: "/projects", icon: Layers },
  { label: "Blogs", href: "/blogs", icon: Newspaper },
  { label: "Contact", href: "/contact", icon: MessageCircleMore },
];

const Navbar = () => {
  const pathname = usePathname();
  return (
    <header className="">
      <nav
        className={cn(
          "hidden lg:flex items-center justify-between gap-4 p-3",
          "bg-card border rounded-lg"
        )}
      >
        <Link href={"/"} className="">
          <Image
            src={MyLogo}
            alt="Asmaul Hossain Logo"
            className="h-10 w-fit"
            width={100}
            height={100}
            priority={true}
            loading="eager"
          />
        </Link>

        <ul className="flex items-center gap-6">
          {navLinks.map((item, index) => (
            <li
              key={index}
              className={cn(index === navLinks.length - 1 && "hidden")}
            >
              <Link
                href={item.href}
                className="group flex items-center gap-[6px]"
              >
                <item.icon
                  size={16}
                  className={cn(
                    "group-hover:text-primary transition-colors duration-300"
                  )}
                />
                <span
                  className={cn(
                    "text-base group-hover:text-primary transition-colors duration-300"
                  )}
                >
                  {item.label}
                </span>
              </Link>
            </li>
          ))}
        </ul>

        <Link href={"/contact"}>
          <Button size={"lg"} className="text-white">
            Let't Talk
          </Button>
        </Link>
      </nav>

      {/* Mobile Navbar */}
      <nav className="lg:hidden grid grid-cols-5 bg-card py-3 border-t">
        {navLinks.map((item, index) => (
          <li key={index} className="flex items-center justify-center">
            <Link
              href={item.href}
              key={index}
              className="group flex flex-col items-center justify-center gap-[6px]"
            >
              <item.icon
                size={20}
                className={cn(
                  "group-hover:text-primary transition-colors duration-300",
                  pathname === item.href && "text-primary"
                )}
              />
              <span
                className={cn(
                  "text-[.65rem]",
                  "group-hover:text-primary transition-colors duration-300",
                  pathname === item.href && "text-primary"
                )}
              >
                {item.label}
              </span>
            </Link>
          </li>
        ))}
      </nav>
    </header>
  );
};

export default Navbar;
