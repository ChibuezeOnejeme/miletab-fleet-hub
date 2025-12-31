import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Check, Zap, Building, Crown, ArrowRight, Users, Truck, Send, CheckCircle } from "lucide-react";

const tiers = [
  {
    name: "Starter",
    description: "Perfect for small fleets just getting started with telematics",
    icon: Zap,
    fleetSize: "5-25 vehicles",
    features: [
      "Real-time GPS tracking",
      "Basic driver behavior",
      "Standard reports",
      "Email support",
      "Mobile app access",
    ],
    color: "primary",
  },
  {
    name: "Growth",
    description: "For expanding operations that need advanced insights",
    icon: Building,
    fleetSize: "25-500 vehicles",
    features: [
      "Everything in Starter",
      "AI safety scoring",
      "Fuel analytics",
      "API access",
      "Priority support",
      "Custom alerts",
    ],
    color: "accent",
    recommended: true,
  },
  {
    name: "Enterprise",
    description: "Full-scale solution for large fleet operations",
    icon: Crown,
    fleetSize: "500+ vehicles",
    features: [
      "Everything in Growth",
      "Dashcam integration",
      "Custom integrations",
      "Dedicated account manager",
      "SLA guarantee",
      "White-label option",
    ],
    color: "primary",
  },
];

const Pricing = () => {
  const [selectedTier, setSelectedTier] = useState<string | null>(null);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    fleetSize: "",
    message: "",
  });

  const handleTierSelect = (tierName: string) => {
    setSelectedTier(tierName);
    setFormData(prev => ({
      ...prev,
      message: `I'm interested in the ${tierName} plan.`,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
    setTimeout(() => {
      setIsSubmitted(false);
      setSelectedTier(null);
      setFormData({ name: "", email: "", company: "", fleetSize: "", message: "" });
    }, 4000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  return (
    <section id="pricing" className="py-24 relative">
      <div className="absolute inset-0 bg-glow opacity-20" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <span className="text-primary text-sm font-semibold uppercase tracking-wider mb-4 block">
            Pricing
          </span>
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            Custom Solutions for{" "}
            <span className="gradient-text">Every Fleet</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Every fleet is unique. Select a tier that matches your needs and our team will craft a personalized quote within 24 hours.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-6 max-w-6xl mx-auto mb-16">
          {tiers.map((tier) => (
            <button
              key={tier.name}
              onClick={() => handleTierSelect(tier.name)}
              className={`relative p-6 rounded-2xl bg-card border text-left transition-all duration-300 group ${
                selectedTier === tier.name
                  ? "border-accent shadow-lg shadow-accent/20 scale-[1.02]"
                  : tier.recommended
                  ? "border-primary/50 hover:border-accent"
                  : "border-border hover:border-primary/50"
              }`}
            >
              {tier.recommended && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-3 py-1 rounded-full bg-gradient-to-r from-primary to-accent text-primary-foreground text-xs font-semibold">
                  Recommended
                </div>
              )}

              <div className="flex items-start justify-between mb-4">
                <div className={`w-12 h-12 rounded-xl bg-${tier.color}/10 flex items-center justify-center`}>
                  <tier.icon className={`w-6 h-6 text-${tier.color}`} />
                </div>
                <div className={`w-5 h-5 rounded-full border-2 flex items-center justify-center transition-colors ${
                  selectedTier === tier.name ? "border-accent bg-accent" : "border-muted-foreground/30"
                }`}>
                  {selectedTier === tier.name && <Check className="w-3 h-3 text-background" />}
                </div>
              </div>

              <h3 className="text-xl font-bold text-foreground mb-1">{tier.name}</h3>
              <p className="text-muted-foreground text-sm mb-4">{tier.description}</p>

              <div className="flex items-center gap-2 mb-4 text-sm">
                <Truck className="w-4 h-4 text-primary" />
                <span className="text-foreground font-medium">{tier.fleetSize}</span>
              </div>

              <ul className="space-y-2">
                {tier.features.map((feature) => (
                  <li key={feature} className="flex items-center gap-2 text-sm">
                    <Check className="w-4 h-4 text-accent flex-shrink-0" />
                    <span className="text-muted-foreground">{feature}</span>
                  </li>
                ))}
              </ul>

              <div className="mt-6 pt-4 border-t border-border">
                <div className="flex items-center justify-between text-sm">
                  <span className="text-muted-foreground">Get custom quote</span>
                  <ArrowRight className={`w-4 h-4 transition-transform ${selectedTier === tier.name ? "translate-x-1 text-accent" : "text-muted-foreground group-hover:translate-x-1"}`} />
                </div>
              </div>
            </button>
          ))}
        </div>

        {/* Contact Form Section */}
        <div className="max-w-2xl mx-auto">
          <div className="bg-card/80 backdrop-blur-sm border border-border rounded-2xl p-8">
            {isSubmitted ? (
              <div className="flex flex-col items-center justify-center py-8 text-center animate-fade-in">
                <div className="w-20 h-20 rounded-full bg-accent/20 flex items-center justify-center mb-6">
                  <CheckCircle className="w-10 h-10 text-accent" />
                </div>
                <h3 className="text-2xl font-bold text-foreground mb-2">Request Received!</h3>
                <p className="text-muted-foreground max-w-md">
                  Our fleet solutions team will review your requirements and get back to you with a personalized quote within 24 hours.
                </p>
              </div>
            ) : (
              <>
                <div className="text-center mb-8">
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-accent/10 border border-accent/20 mb-4">
                    <Users className="w-4 h-4 text-accent" />
                    <span className="text-sm text-accent">Talk to Our Fleet Experts</span>
                  </div>
                  <h3 className="text-2xl font-bold text-foreground mb-2">
                    {selectedTier ? `Get a ${selectedTier} Quote` : "Request Your Custom Quote"}
                  </h3>
                  <p className="text-muted-foreground text-sm">
                    {selectedTier
                      ? "Complete the form below and we'll tailor a solution for your fleet."
                      : "Select a tier above or tell us about your fleet needs."}
                  </p>
                </div>

                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <Input
                      name="name"
                      placeholder="Your Name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="bg-secondary/50 border-border focus:border-primary"
                    />
                    <Input
                      name="email"
                      type="email"
                      placeholder="Work Email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="bg-secondary/50 border-border focus:border-primary"
                    />
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <Input
                      name="company"
                      placeholder="Company Name"
                      value={formData.company}
                      onChange={handleChange}
                      required
                      className="bg-secondary/50 border-border focus:border-primary"
                    />
                    <Input
                      name="fleetSize"
                      placeholder="Fleet Size (e.g., 50 vehicles)"
                      value={formData.fleetSize}
                      onChange={handleChange}
                      className="bg-secondary/50 border-border focus:border-primary"
                    />
                  </div>
                  <Textarea
                    name="message"
                    placeholder="Tell us about your specific requirements..."
                    value={formData.message}
                    onChange={handleChange}
                    rows={3}
                    className="bg-secondary/50 border-border focus:border-primary resize-none"
                  />
                  <Button type="submit" variant="hero" size="lg" className="w-full">
                    Request Custom Quote
                    <Send className="w-4 h-4 ml-2" />
                  </Button>
                </form>
              </>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
