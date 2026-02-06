import { Trophy } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground py-12 border-t border-primary/20">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex items-center gap-2">
            <Trophy className="h-5 w-5 text-accent" />
            <span className="font-serif font-bold text-lg">The Ishaan Invitational</span>
          </div>
          
          <div className="text-sm text-primary-foreground/60">
            &copy; {new Date().getFullYear()} Ishaan Invitational. All rights reserved.
          </div>
          
          <div className="flex gap-6 text-sm font-medium">
            <a href="#" className="hover:text-accent transition-colors">Instagram</a>
            <a href="#" className="hover:text-accent transition-colors">Contact</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
