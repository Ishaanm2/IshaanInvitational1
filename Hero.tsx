import { Button } from "@/components/ui/button";
import { ArrowDown } from "lucide-react";
import { motion } from "framer-motion";

export function Hero() {
  const scrollToContent = () => {
    window.scrollTo({ top: window.innerHeight, behavior: 'smooth' });
  };

  return (
    <div className="relative h-screen w-full overflow-hidden flex items-center justify-center">
      {/* Background Image with Overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat z-0"
        style={{ backgroundImage: 'url("/hero-golf.png")' }}
      >
        <div className="absolute inset-0 bg-black/40" /> {/* Dark overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-transparent to-black/60" /> {/* Vignette */}
      </div>

      {/* Content */}
      <div className="relative z-10 text-center text-white px-4 max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <span className="inline-block py-1 px-3 border border-white/30 rounded-full bg-white/10 backdrop-blur-sm text-xs md:text-sm tracking-[0.2em] uppercase mb-6 font-sans">
            Est. 2023
          </span>
          <h1 className="font-serif text-5xl md:text-7xl lg:text-8xl font-bold leading-tight mb-6 drop-shadow-lg">
            The Ishaan<br />Invitational
          </h1>
          <p className="text-lg md:text-xl text-white/90 max-w-2xl mx-auto font-light leading-relaxed mb-10">
            A tradition unlike any other (that we host). Join us for 18 holes of competition, camaraderie, and questionable swings.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button size="lg" className="bg-accent hover:bg-accent/90 text-white min-w-[160px] font-serif tracking-wide text-lg h-14">
              View Leaderboard
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10 hover:text-white min-w-[160px] font-serif tracking-wide text-lg h-14">
              Tournament Rules
            </Button>
          </div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div 
        className="absolute bottom-10 left-1/2 -translate-x-1/2 z-10 cursor-pointer"
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 2 }}
        onClick={scrollToContent}
      >
        <ArrowDown className="text-white/70 h-8 w-8 hover:text-white transition-colors" />
      </motion.div>
    </div>
  );
}
