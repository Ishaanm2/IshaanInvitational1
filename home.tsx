import { Navbar } from "@/components/layout/Navbar";
import { Hero } from "@/components/home/Hero";
import { FeatureGrid } from "@/components/home/FeatureGrid";
import { Footer } from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <Hero />
      <FeatureGrid />
      
      {/* Quote Section */}
      <section className="py-24 bg-muted/30">
        <div className="container mx-auto px-4 text-center max-w-3xl">
          <motion.blockquote 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="font-serif text-3xl md:text-4xl italic leading-relaxed text-primary mb-8"
          >
            "Golf is the closest game to the game we call life. You get bad breaks from good shots; you get good breaks from bad shots – but you have to play the ball where it lies."
          </motion.blockquote>
          <cite className="text-sm uppercase tracking-widest font-bold text-muted-foreground not-italic">
            — Bobby Jones
          </cite>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-primary text-primary-foreground relative overflow-hidden">
        {/* Abstract pattern overlay could go here */}
        <div className="container mx-auto px-4 text-center relative z-10">
          <h2 className="font-serif text-4xl md:text-5xl font-bold mb-6 text-white">Ready to Tee Off?</h2>
          <p className="text-white/80 max-w-xl mx-auto mb-10 text-lg">
            Registration is open for the 2025 season. Secure your spot before the tee sheet fills up.
          </p>
          <Button size="lg" className="bg-accent text-white hover:bg-accent/90 h-14 px-8 text-lg font-serif">
            Register for Tournament
          </Button>
        </div>
      </section>

      <Footer />
    </div>
  );
}
