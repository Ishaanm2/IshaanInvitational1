import { Card, CardContent } from "@/components/ui/card";
import { Crown, Trees, Beer } from "lucide-react";
import { motion } from "framer-motion";

const features = [
  {
    icon: Crown,
    title: "The Green Jacket",
    description: "Compete for the ultimate prize: eternal glory and a thrifted green blazer that definitely doesn't fit."
  },
  {
    icon: Trees,
    title: "The Venue",
    description: "Played on pristine fairways where the rough is deep and the water hazards are plentiful."
  },
  {
    icon: Beer,
    title: "The 19th Hole",
    description: "Where legends are made and scores are conveniently forgotten. Open bar and awards ceremony to follow."
  }
];

export function FeatureGrid() {
  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2, duration: 0.5 }}
              viewport={{ once: true }}
            >
              <Card className="border-none shadow-none bg-transparent text-center group">
                <CardContent className="pt-6">
                  <div className="mb-6 flex justify-center">
                    <div className="h-16 w-16 rounded-full bg-primary/5 flex items-center justify-center group-hover:bg-primary/10 transition-colors duration-300">
                      <feature.icon className="h-8 w-8 text-primary" />
                    </div>
                  </div>
                  <h3 className="font-serif text-2xl font-bold mb-3 text-primary">{feature.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {feature.description}
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
