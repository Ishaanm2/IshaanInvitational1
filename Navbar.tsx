import { Link, useLocation } from "wouter";
import { cn } from "@/lib/utils";
import { Menu, X, Trophy } from "lucide-react";
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [location] = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { href: "/", label: "Home" },
    { href: "/leaderboard", label: "Leaderboard" },
    { href: "/schedule", label: "Schedule" },
    { href: "/rules", label: "Rules" },
  ];

  return (
    <nav
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300 border-b border-transparent",
        isScrolled
          ? "bg-background/95 backdrop-blur-md shadow-sm border-border py-2"
          : "bg-transparent py-6"
      )}
    >
      <div className="container mx-auto px-4 flex items-center justify-between">
        <Link href="/">
          <div className="flex items-center gap-2 cursor-pointer group">
            <Trophy className={cn("h-6 w-6 transition-colors", isScrolled ? "text-primary" : "text-white group-hover:text-accent")} />
            <span className={cn(
              "font-serif font-bold text-xl tracking-tight transition-colors",
              isScrolled ? "text-primary" : "text-white"
            )}>
              The Ishaan Invitational
            </span>
          </div>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link key={link.href} href={link.href}>
              <span className={cn(
                "text-sm font-medium transition-colors hover:text-accent cursor-pointer uppercase tracking-wider",
                location === link.href ? "text-accent" : (isScrolled ? "text-foreground" : "text-white/90")
              )}>
                {link.label}
              </span>
            </Link>
          ))}
          <Button 
            variant={isScrolled ? "default" : "secondary"} 
            size="sm"
            className="font-serif"
          >
            Register Now
          </Button>
        </div>

        {/* Mobile Nav */}
        <div className="md:hidden">
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className={isScrolled ? "text-foreground" : "text-white"}>
                <Menu className="h-6 w-6" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[300px] sm:w-[400px]">
              <div className="flex flex-col gap-8 mt-10">
                {navLinks.map((link) => (
                  <Link key={link.href} href={link.href}>
                    <span 
                      className={cn(
                        "text-2xl font-serif cursor-pointer hover:text-primary transition-colors",
                        location === link.href ? "text-primary font-bold" : "text-foreground"
                      )}
                    >
                      {link.label}
                    </span>
                  </Link>
                ))}
                <Button className="w-full mt-4 font-serif">Register Now</Button>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </nav>
  );
}
