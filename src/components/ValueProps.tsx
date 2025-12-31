import { MapPin, Shield, BarChart3, FileCheck, Truck, Zap } from "lucide-react";

const values = [
  {
    icon: MapPin,
    title: "Unified Fleet Visibility",
    description: "See every vehicle, asset, and driver on a single dashboard with real-time updates.",
  },
  {
    icon: Shield,
    title: "AI-Powered Safety",
    description: "Monitor driver behavior, detect risks, and improve safety scores with intelligent alerts.",
  },
  {
    icon: BarChart3,
    title: "Fuel & Mileage Analytics",
    description: "Track fuel consumption, optimize routes, and reduce operational costs by up to 20%.",
  },
  {
    icon: FileCheck,
    title: "Compliance & Reports",
    description: "Automated compliance reports, audit trails, and regulatory documentation.",
  },
  {
    icon: Truck,
    title: "Asset Intelligence",
    description: "Track any asset—vehicles, equipment, containers—with hardware-agnostic flexibility.",
  },
  {
    icon: Zap,
    title: "Real-Time Alerts",
    description: "Instant notifications for speeding, geofence breaches, maintenance, and more.",
  },
];

const ValueProps = () => {
  return (
    <section id="solutions" className="py-24 relative">
      <div className="absolute inset-0 bg-glow opacity-30" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <span className="text-primary text-sm font-semibold uppercase tracking-wider mb-4 block">
            Why MileTab
          </span>
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            Complete Fleet Intelligence,{" "}
            <span className="gradient-text">One Platform</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Everything you need to manage, monitor, and optimize your fleet operations—unified in a single, powerful solution.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {values.map((value, index) => (
            <div
              key={value.title}
              className="group p-6 rounded-2xl bg-card border border-border hover:border-primary/50 transition-all duration-300 hover:shadow-lg hover:shadow-primary/5"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                <value.icon className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-2 text-foreground">{value.title}</h3>
              <p className="text-muted-foreground">{value.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ValueProps;
