'use client'

import { LoginLink } from "@kinde-oss/kinde-auth-nextjs/components";
import { Loader2, LogIn, Menu } from 'lucide-react';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import { Button } from '../ui/button';
import { useKindeBrowserClient } from "@kinde-oss/kinde-auth-nextjs";
import { navlinks } from "@/consts";
import { Sheet, SheetContent, SheetTrigger } from "../ui/sheet";
import Image from "next/image";

const Navbar = () => {
  const { getPermissions, isLoading } = useKindeBrowserClient()
  const { permissions } = getPermissions()

  const isAdmin = permissions?.includes("view:dashboard")
  const [isScrolled, setIsScrolled] = useState(false);

  // Function to check scroll position and update the header background
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <header
      className={` fixed top-0 left-0 right-0 z-50 transition-colors duration-300 ${
        isScrolled ? 'bg-zinc-900/60 backdrop-blur' : 'bg-transparent'
      }`}
    >
      <div className="container mx-auto px-4 sm:px-8">
        <div className="flex items-center justify-between h-16 sm:h-20">
          <div className="flex-shrink-0 flex-1">
            <Link href="/" className="text-zinc-950 font-bold text-2xl">
              <Image src='/agency-logo.jpg' alt='logo image' width={5} height={5} className="w-10 h-10" />
            </Link>
          </div>

          {/* Navigation Links */}
          <nav className="hidden lg:flex items-center justify-center flex-1">
            <ul className="flex space-x-8">
              {navlinks.map((item) => (
                <li key={item}>
                  <a
                    href={item == 'Blog' ? '/blogs' : `#${item}`}
                    className="text-zinc-950 hover:text-zinc-700 text-lg transition-colors"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          {/* Sign Up Button and Avatar */}
          <div className="hidden md:flex items-center gap-3 flex-1 justify-end">
            <Link href="/dashboard">
              <Button variant="secondary" className="bg-[#002244] hover:bg-[#0a2351] text-zinc-200">
                { !isAdmin ? "Contact Us" : isLoading ? <Loader2/> : "Dashboard" }
              </Button>
            </Link>
            
            {/* <Separator orientation="vertical" className='h-8 bg-gray-800' /> */}
            <LoginLink>
              <Button variant="ghost" size="icon" className=" text-zinc-900 hover:bg-zinc-900/20">
              <LogIn />
              </Button>
              </LoginLink>
          </div>

            {/* Mobile Menu Button */}
            <div className="lg:hidden flex items-center">
            <Sheet>
              <SheetTrigger asChild>
                <Button
                  variant="ghost"
                  size="icon"
                  className="text-zinc-900 hover:bg-zinc-900/20 p-0"
                  aria-label="Toggle menu"
                >
                  <Menu className="h-6 w-6" />
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-[300px] sm:w-[400px] bg-zinc-100">
                <nav className="flex flex-col gap-4">
                  {navlinks.map((item) => (
                    <Link
                      key={item}
                      href="/"
                      className="text-zinc-900 hover:text-zinc-700 text-lg transition-colors"
                    >
                      {item}
                    </Link>
                  ))}
                  <Link href="/dashboard">
                    <Button variant="secondary" className="w-full bg-zinc-900 hover:bg-zinc-800 text-zinc-200">
                      { !isAdmin ? "Contact Us" : isLoading ? <Loader2 className="animate-spin" /> : "Dashboard" }
                    </Button>
                  </Link>
                  <LoginLink>
                    <Button variant="outline" className="w-full">
                      <LogIn className="mr-2 h-4 w-4" />
                      Sign In
                    </Button>
                  </LoginLink>
                </nav>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;