"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger, SheetTitle } from "@/components/ui/sheet";
import { Menu, Download } from "lucide-react";
import { VisuallyHidden } from "@radix-ui/react-visually-hidden";

export function Navbar() {
  const [open, setOpen] = useState(false);

  const navLinks = [
    { href: "#news", label: "News" },
    { href: "#media", label: "Reels & Media" },
    { href: "#headshots", label: "Headshots" },
    { href: "#resume", label: "Resume" },
    { href: "#bio", label: "Bio" },
    { href: "#contact", label: "Contact" },
  ];

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between mx-auto px-4 md:px-8">
        <div className="font-bold text-xl tracking-tight uppercase">Alex Baylard</div>
        
        {/* Desktop Navigation */}
        <nav className="hidden md:flex gap-6 text-sm font-medium">
          {navLinks.map((link) => (
            <a 
              key={link.href}
              href={link.href} 
              className="transition-colors hover:text-foreground/80 text-foreground/60"
            >
              {link.label}
            </a>
          ))}
        </nav>
        
        <div className="hidden md:flex">
          <Button variant="default" className="rounded-full">
            <Download className="w-4 h-4 mr-2" /> Resume PDF
          </Button>
        </div>

        {/* Mobile / Tablet Navigation */}
        <div className="md:hidden flex items-center">
          <Sheet open={open} onOpenChange={setOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="md:hidden">
                <Menu className="h-6 w-6" />
                <span className="sr-only">Toggle Menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[300px] sm:w-[400px]">
              <VisuallyHidden>
                <SheetTitle>Navigation Menu</SheetTitle>
              </VisuallyHidden>
              <nav className="flex flex-col gap-6 mt-8 text-lg font-medium">
                {navLinks.map((link) => (
                  <a 
                    key={link.href}
                    href={link.href} 
                    onClick={() => setOpen(false)}
                    className="transition-colors hover:text-foreground/80 text-foreground/60"
                  >
                    {link.label}
                  </a>
                ))}
                <div className="pt-6 border-t mt-4">
                  <Button variant="default" className="w-full rounded-full justify-center">
                    <Download className="w-4 h-4 mr-2" /> Resume PDF
                  </Button>
                </div>
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}