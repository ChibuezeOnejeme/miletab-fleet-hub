import { 
  Navigation, 
  Truck, 
  UserCheck, 
  Fuel, 
  Wrench, 
  Video, 
  Code, 
  Globe 
} from "lucide-react";

const features = [
  {
    icon: Navigation,
    title: "Live GPS Tracking & Playback",
    description: "Track vehicles in real-time with historical playback, route analysis, and movement history.",
    color: "primary",
  },
  {
    icon: Truck,
    title: "Fleet & Asset Management",
    description: "Manage cars, trucks, bikes, generators, containers, and any asset type from one platform.",
    color: "accent",
  },
  {
    icon: UserCheck,
    title: "Driver Behavior & Safety Scoring",
    description: "AI-powered analysis of speeding, harsh braking, acceleration, and overall driver performance.",
    color: "primary",
  },
  {
    icon: Fuel,
    title: "Fuel & Mileage Intelligence",
    description: "Monitor fuel consumption, detect anomalies, and optimize for maximum fuel efficiency.",
    color: "accent",
  },
  {
    icon: Wrench,
    title: "Preventive Maintenance Alerts",
    description: "Automated service reminders based on mileage, time, or engine diagnostics to prevent breakdowns.",
    color: "primary",
  },
  {
    icon: Video,
    title: "Dashcams & Video Telematics",
    description: "Integrate video footage with telematics data for complete incident documentation and review.",
    color: "accent",
  },
  {
    icon: Code,
    title: "API & Integrations",
    description: "Connect MileTab with your existing tools via REST APIs, webhooks, and pre-built integrations.",
    color: "primary",
  },
  {
    icon: Globe,
    title: "Multi-Region Support",
    description: "Global coverage with local compliance support and multi-language dashboards.",
    color: "accent",
  },
];

const Features = () => {
  return (
    <section id="features" className="py-24 bg-secondary/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <span className="text-primary text-sm font-semibold uppercase tracking-wider mb-4 block">
            Features
          </span>
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            Everything You Need to{" "}
            <span className="gradient-text">Master Your Fleet</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Powerful features designed for enterprise-scale fleet operations, from live tracking to AI-powered insights.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {features.map((feature, index) => (
            <div
              key={feature.title}
              className="group relative p-6 rounded-2xl card-gradient border border-border hover:border-primary/30 transition-all duration-300 overflow-hidden"
            >
              {/* Glow Effect */}
              <div className={`absolute -top-20 -right-20 w-40 h-40 rounded-full blur-3xl opacity-0 group-hover:opacity-20 transition-opacity duration-500 ${
                feature.color === "primary" ? "bg-primary" : "bg-accent"
              }`} />
              
              <div className={`relative z-10`}>
                <div className={`w-10 h-10 rounded-lg flex items-center justify-center mb-4 ${
                  feature.color === "primary" ? "bg-primary/10" : "bg-accent/10"
                }`}>
                  <feature.icon className={`w-5 h-5 ${
                    feature.color === "primary" ? "text-primary" : "text-accent"
                  }`} />
                </div>
                <h3 className="text-lg font-semibold mb-2 text-foreground">{feature.title}</h3>
                <p className="text-sm text-muted-foreground">{feature.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
