import { Cpu, Cloud, BarChart2 } from "lucide-react";

const steps = [
  {
    number: "01",
    icon: Cpu,
    title: "Install Devices",
    description: "Connect GPS trackers, OBD devices, or dashcams to your vehicles. We support 100+ hardware models.",
  },
  {
    number: "02",
    icon: Cloud,
    title: "Connect to MileTab Cloud",
    description: "Devices automatically sync with our secure cloud platform. Setup takes less than 5 minutes per vehicle.",
  },
  {
    number: "03",
    icon: BarChart2,
    title: "Monitor, Analyze, Optimize",
    description: "Access real-time dashboards, AI insights, and reports to make data-driven decisions.",
  },
];

const HowItWorks = () => {
  return (
    <section className="py-24 bg-secondary/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <span className="text-primary text-sm font-semibold uppercase tracking-wider mb-4 block">
            How It Works
          </span>
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            Get Started in{" "}
            <span className="gradient-text">Three Simple Steps</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            From installation to insights, MileTab makes fleet intelligence accessible in minutes, not months.
          </p>
        </div>

        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
            {/* Connection Line */}
            <div className="hidden md:block absolute top-16 left-1/6 right-1/6 h-0.5 bg-gradient-to-r from-primary via-accent to-primary opacity-30" />
            
            {steps.map((step, index) => (
              <div key={step.title} className="relative">
                <div className="text-center">
                  {/* Step Number */}
                  <div className="relative inline-flex mb-6">
                    <div className="w-32 h-32 rounded-2xl bg-card border border-border flex items-center justify-center relative overflow-hidden group hover:border-primary/50 transition-all duration-300">
                      <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-accent/10 opacity-0 group-hover:opacity-100 transition-opacity" />
                      <step.icon className="w-12 h-12 text-primary relative z-10" />
                    </div>
                    <span className="absolute -top-2 -right-2 w-8 h-8 rounded-full bg-primary flex items-center justify-center text-primary-foreground text-sm font-bold">
                      {step.number}
                    </span>
                  </div>
                  
                  <h3 className="text-xl font-semibold mb-3 text-foreground">{step.title}</h3>
                  <p className="text-muted-foreground">{step.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
