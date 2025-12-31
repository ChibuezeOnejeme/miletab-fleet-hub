import { Shield, Clock, Lock, Award } from "lucide-react";

const trustItems = [
  {
    icon: Shield,
    title: "Enterprise Security",
    description: "SOC 2 compliant with end-to-end encryption and regular security audits.",
  },
  {
    icon: Clock,
    title: "99.99% Uptime",
    description: "Reliable infrastructure with global redundancy and real-time failover.",
  },
  {
    icon: Lock,
    title: "GDPR Compliant",
    description: "Full data privacy compliance with granular access controls.",
  },
  {
    icon: Award,
    title: "Industry Certified",
    description: "ISO 27001 certified with industry-leading best practices.",
  },
];

const Trust = () => {
  return (
    <section id="about" className="py-24 bg-secondary/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <span className="text-primary text-sm font-semibold uppercase tracking-wider mb-4 block">
            Trust & Security
          </span>
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            Built on{" "}
            <span className="gradient-text">Enterprise-Grade Security</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Your fleet data is protected by industry-leading security measures and compliance standards.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {trustItems.map((item) => (
            <div
              key={item.title}
              className="text-center p-6 rounded-2xl bg-card border border-border"
            >
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mx-auto mb-4">
                <item.icon className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-lg font-semibold mb-2 text-foreground">{item.title}</h3>
              <p className="text-sm text-muted-foreground">{item.description}</p>
            </div>
          ))}
        </div>

        {/* Testimonial */}
        <div className="max-w-4xl mx-auto">
          <div className="p-8 md:p-12 rounded-2xl card-gradient border border-border relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-glow opacity-30" />
            
            <div className="relative z-10">
              <div className="flex items-center gap-1 mb-6">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} className="w-5 h-5 text-warning fill-current" viewBox="0 0 20 20">
                    <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                  </svg>
                ))}
              </div>
              
              <blockquote className="text-xl md:text-2xl text-foreground mb-6 leading-relaxed">
                "MileTab transformed how we manage our 500-vehicle fleet. The real-time visibility and AI insights have helped us reduce fuel costs by 18% and improve driver safety scores across the board."
              </blockquote>
              
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center text-primary-foreground font-bold">
                  JR
                </div>
                <div>
                  <p className="font-semibold text-foreground">James Rodriguez</p>
                  <p className="text-sm text-muted-foreground">Fleet Director, TransitPro Logistics</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Trust;
