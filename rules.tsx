import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export default function Rules() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Navbar />
      <div className="pt-32 pb-20 container mx-auto px-4 flex-grow max-w-4xl">
        <div className="mb-12">
          <span className="text-accent uppercase tracking-widest text-sm font-bold">The Fine Print</span>
          <h1 className="font-serif text-4xl md:text-5xl font-bold mt-2 mb-6 text-primary">Rules & Regulations</h1>
          <p className="text-lg text-muted-foreground leading-relaxed">
            To ensure fair play and maximize enjoyment, please familiarize yourself with the official rules of The Ishaan Invitational. Ignorance of the law is no excuse (unless you buy the committee a drink).
          </p>
        </div>

        <div className="space-y-8">
          <section>
            <h2 className="font-serif text-2xl font-bold mb-4 text-primary border-b border-border pb-2">Format of Play</h2>
            <div className="prose prose-green max-w-none text-muted-foreground">
              <p className="mb-4">
                The tournament will be played in a <strong>4-Person Scramble</strong> format.
              </p>
              <ul className="list-disc pl-5 space-y-2 mb-6">
                <li>All players tee off on each hole.</li>
                <li>The team selects the best shot and all players hit their next shot from within one club length of that spot (no closer to the hole).</li>
                <li>This continues until the ball is holed.</li>
                <li>Minimum of 2 drives per player must be used throughout the round.</li>
              </ul>
            </div>
          </section>

          <section>
            <h2 className="font-serif text-2xl font-bold mb-4 text-primary border-b border-border pb-2">FAQ</h2>
            <Accordion type="single" collapsible className="w-full">
              <AccordionItem value="item-1">
                <AccordionTrigger className="font-serif text-lg">Are Mulligans allowed?</AccordionTrigger>
                <AccordionContent className="text-muted-foreground leading-relaxed">
                  One Mulligan package can be purchased at registration for $20. This includes 1 Mulligan, 1 Throw, and 1 piece of string (to extend a putt). Proceeds go to the beverage fund.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-2">
                <AccordionTrigger className="font-serif text-lg">What happens in the event of a tie?</AccordionTrigger>
                <AccordionContent className="text-muted-foreground leading-relaxed">
                  In the event of a tie for first place, a scorecard playoff will determine the winner, starting from the hardest handicap hole (Hole #1 handicap).
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-3">
                <AccordionTrigger className="font-serif text-lg">Is there a dress code?</AccordionTrigger>
                <AccordionContent className="text-muted-foreground leading-relaxed">
                  Collared shirts are required. Denim is strictly prohibited. Loud pants are highly encouraged and may result in bonus style points (redeemable for high-fives).
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-4">
                <AccordionTrigger className="font-serif text-lg">What about "Gimme" putts?</AccordionTrigger>
                <AccordionContent className="text-muted-foreground leading-relaxed">
                  "Gimmes" are allowed within the leather (approx. 2 feet). However, for Birdie or Eagle putts, the ball must hit the bottom of the cup. No exceptions.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </section>
        </div>
      </div>
      <Footer />
    </div>
  );
}
