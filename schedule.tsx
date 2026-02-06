import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Clock, MapPin } from "lucide-react";

const events = [
  {
    time: "08:00 AM",
    title: "Registration & Breakfast",
    location: "Clubhouse Terrace",
    description: "Check in, grab your swag bag, and fuel up with a continental breakfast."
  },
  {
    time: "09:30 AM",
    title: "Warm-up Range Opens",
    location: "Driving Range",
    description: "Unlimited range balls available. Try to fix your slice in 30 minutes."
  },
  {
    time: "10:45 AM",
    title: "Opening Announcements",
    location: "Putting Green",
    description: "Rules briefing and team assignments."
  },
  {
    time: "11:00 AM",
    title: "Shotgun Start",
    location: "All Tees",
    description: "The tournament begins. Good luck!"
  },
  {
    time: "04:00 PM",
    title: "The 19th Hole Cocktail Hour",
    location: "Patio",
    description: "Drinks and hors d'oeuvres while scores are tallied."
  },
  {
    time: "05:30 PM",
    title: "Awards Dinner",
    location: "Grand Ballroom",
    description: "Presentation of the Green Jacket and other prizes."
  }
];

export default function Schedule() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Navbar />
      <div className="pt-32 pb-20 container mx-auto px-4 flex-grow">
        <div className="text-center mb-16">
          <span className="text-accent uppercase tracking-widest text-sm font-bold">Itinerary</span>
          <h1 className="font-serif text-4xl md:text-5xl font-bold mt-2 text-primary">Day of Events</h1>
        </div>

        <div className="max-w-3xl mx-auto relative">
          {/* Timeline Line */}
          <div className="absolute left-[19px] top-0 bottom-0 w-[2px] bg-border md:left-1/2 md:-ml-[1px]" />

          {events.map((event, index) => (
            <div key={index} className="relative mb-12 last:mb-0">
              <div className={`flex flex-col md:flex-row items-start ${index % 2 === 0 ? 'md:flex-row-reverse' : ''}`}>
                
                {/* Timeline Dot */}
                <div className="absolute left-0 md:left-1/2 w-10 h-10 -ml-[19px] md:-ml-5 flex items-center justify-center z-10">
                  <div className="w-4 h-4 rounded-full bg-accent ring-4 ring-background" />
                </div>

                {/* Content */}
                <div className="ml-12 md:ml-0 md:w-1/2 px-4 md:px-8">
                  <Card className={`border-none shadow-md hover:shadow-lg transition-shadow duration-300 ${index % 2 === 0 ? 'md:text-left' : 'md:text-right'}`}>
                    <CardContent className="p-6">
                      <div className={`flex items-center gap-2 mb-2 text-primary font-bold ${index % 2 === 0 ? 'justify-start' : 'md:justify-end justify-start'}`}>
                        <Clock className="h-4 w-4" />
                        <span>{event.time}</span>
                      </div>
                      <h3 className="font-serif text-2xl font-bold mb-2">{event.title}</h3>
                      <div className={`flex items-center gap-2 text-sm text-muted-foreground mb-4 ${index % 2 === 0 ? 'justify-start' : 'md:justify-end justify-start'}`}>
                        <MapPin className="h-4 w-4" />
                        <span>{event.location}</span>
                      </div>
                      <p className="text-muted-foreground leading-relaxed">
                        {event.description}
                      </p>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
}
