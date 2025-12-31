import { Package, Car, HardHat, Building2, Wheat } from "lucide-react";

const useCases = [
  {
    icon: Package,
    title: "Logistics & Delivery",
    description: "Optimize routes, track deliveries in real-time, and improve customer satisfaction with accurate ETAs.",
    stats: "30% faster deliveries",
  },
  {
    icon: Car,
    title: "Ride-Hailing & Mobility",
    description: "Monitor driver performance, ensure passenger safety, and streamline fleet operations at scale.",
    stats: "99.9% uptime",
  },
  {
    icon: HardHat,
    title: "Construction & Heavy Equipment",
    description: "Track excavators, cranes, and equipment across job sites with ruggedized tracking solutions.",
    stats: "25% less idle time",
  },
  {
    icon: Building2,
    title: "Government & Public Sector",
    description: "Transparent fleet management for municipal vehicles, emergency services, and public transport.",
    stats: "Full compliance",
  },
  {
    icon: Wheat,
    title: "Agriculture & Livestock",
    description: "Monitor agricultural equipment and livestock across vast rural areas with satellite connectivity.",
    stats: "24/7 coverage",
  },
];

const UseCases = () => {
  return (
    <section id="use-cases" className="py-24 relative">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <span className="text-primary text-sm font-semibold uppercase tracking-wider mb-4 block">
            Use Cases
          </span>
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            Built for{" "}
            <span className="gradient-text">Every Industry</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            From small delivery fleets to enterprise logistics operations, MileTab adapts to your industry's unique needs.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {useCases.map((useCase, index) => (
            <div
              key={useCase.title}
              className={`group relative p-8 rounded-2xl bg-card border border-border hover:border-primary/50 transition-all duration-300 ${
                index === 0 ? "lg:col-span-2" : ""
              }`}
            >
              <div className="flex items-start gap-4">
                <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center flex-shrink-0">
                  <useCase.icon className="w-7 h-7 text-primary" />
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-semibold mb-2 text-foreground">{useCase.title}</h3>
                  <p className="text-muted-foreground mb-4">{useCase.description}</p>
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-accent/10 border border-accent/20">
                    <span className="w-2 h-2 rounded-full bg-accent" />
                    <span className="text-sm text-accent font-medium">{useCase.stats}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default UseCases;
