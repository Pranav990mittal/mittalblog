"use client";
import Link from "next/link";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { Button } from "./ui/button";
import { ModeToggle } from "./theme-btn";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Menu } from "lucide-react";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const router = useRouter();

  // 🧠 Automatically close mobile sheet on resize to desktop
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setOpen(false);
      }
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const handleRoute = (path) => {
    router.push(path);
    setOpen(false);
  };

  const navItemClass =
    "text-gray-700 hover:text-blue-600 font-semibold transition-colors duration-200";

  return (
    <nav className="sticky top-0 z-50 backdrop-blur bg-white/80 shadow-sm transition-all dark:bg-black dark:text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center">
            <Link href="/">
              <span className="text-2xl font-bold text-blue-600 cursor-pointer">
                MittalBlog
              </span>
            </Link>
          </div>
          {/* Desktop Menu */}
          {/* <div className="hidden md:flex items-center space-x-8">
            <Link href="/">
              <span
                className={`${navItemClass} relative after:content-[''] after:block after:h-[2px] after:bg-current after:scale-x-0 after:transition-transform after:duration-200 after:origin-left hover:after:scale-x-100`}
              >
                Home
              </span>
            </Link>
            <Link href="/about">
              <span
                className={`${navItemClass} relative after:content-[''] after:block after:h-[2px] after:bg-current after:scale-x-0 after:transition-transform after:duration-200 after:origin-left hover:after:scale-x-100`}
              >
                About
              </span>
            </Link>
            <Link href="/blog">
              <span
                className={`${navItemClass} relative after:content-[''] after:block after:h-[2px] after:bg-current after:scale-x-0 after:transition-transform after:duration-200 after:origin-left hover:after:scale-x-100`}
              >
                Blog
              </span>
            </Link>
            <Link href="/contact">
              <span
                className={`${navItemClass} relative after:content-[''] after:block after:h-[2px] after:bg-current after:scale-x-0 after:transition-transform after:duration-200 after:origin-left hover:after:scale-x-100`}
              >
                Contact
              </span>
            </Link> */}
          <div className="hidden md:flex items-center space-x-8 z-10 ">
            <Link href="/">
              <span
                className={`${navItemClass} text-gray-800 dark:text-white hover:text-blue-600 dark:hover:text-blue-400 font-semibold transition-colors duration-200  hover:font-bold hover:shadow-[0_0_8px_2px_rgba(255,255,255,0.7)]`}
              >
                Home
              </span>
            </Link>
            <Link href="/about">
              <span
                className={`${navItemClass} text-gray-800 dark:text-white hover:text-blue-600 dark:hover:text-blue-400 font-semibold transition-colors duration-200 hover:font-bold hover:shadow-[0_0_8px_2px_rgba(255,255,255,0.7)]`}
              >
                About
              </span>
            </Link>
            <Link href="/blog">
              <span
                className={`${navItemClass} text-gray-800 dark:text-white hover:text-blue-600 dark:hover:text-blue-400 font-semibold transition-colors duration-200 hover:font-bold hover:shadow-[0_0_8px_2px_rgba(255,255,255,0.7)]`}
              >
                Blog
              </span>
            </Link>
            <Link href="/contact">
              <span
                className={`${navItemClass} text-gray-800 dark:text-white hover:text-blue-600 dark:hover:text-blue-400 font-semibold transition-colors duration-200 hover:font-bold hover:shadow-[0_0_8px_2px_rgba(255,255,255,0.7)]`}
              >
                Contact
              </span>
            </Link>

            <div className="flex items-center">
              {/* <Button className="mx-2 px-4" variant="outline">
                Login
              </Button>
              <Button className="mx-2 px-4" variant="outline">
                Sign Up
              </Button> */}
              <ModeToggle />
            </div>
          </div>
          {/* Mobile Menu */}
          <div className="md:hidden">
            <Sheet open={open} onOpenChange={setOpen}>
              <SheetTrigger asChild>
                <Button variant="outline" size="icon">
                  <Menu className="h-5 w-5" />
                </Button>
              </SheetTrigger>
              <SheetContent side="left">
                <SheetHeader>
                  <br></br>
                  <div className="flex items-center gap-x-40">
                    <SheetTitle className="text-xl">MittalBlog</SheetTitle>
                    <ModeToggle />
                  </div>

                  <SheetDescription className="space-y-4 mt-4">
                    <div className="flex flex-col space-y-4">
                      <button
                        onClick={() => handleRoute("/")}
                        className={navItemClass + " text-left"}
                      >
                        Home
                      </button>
                      <button
                        onClick={() => handleRoute("/about")}
                        className={navItemClass + " text-left"}
                      >
                        About
                      </button>
                      <button
                        onClick={() => handleRoute("/blog")}
                        className={navItemClass + " text-left"}
                      >
                        Blog
                      </button>
                      <button
                        onClick={() => handleRoute("/contact")}
                        className={navItemClass + " text-left"}
                      >
                        Contact
                      </button>
                      <div className="pt-4 flex flex-col gap-2">
                        <Button variant="outline">Login</Button>
                        <Button variant="outline">Sign Up</Button>
                      </div>
                    </div>
                  </SheetDescription>
                </SheetHeader>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </nav>
  );
}
