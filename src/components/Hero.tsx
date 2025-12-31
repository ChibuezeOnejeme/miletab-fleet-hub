import { MapPin, Activity, Shield } from "lucide-react";
import FleetMap from "@/components/FleetMap";
import ContactForm from "@/components/ContactForm";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center pt-20 pb-16 overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 hero-gradient" />
      <div className="absolute top-1/2 left-1/4 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-glow opacity-40" />
      
      {/* Floating Elements */}
      <div className="absolute top-32 left-[5%] w-14 h-14 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center animate-float hidden lg:flex">
        <MapPin className="w-7 h-7 text-primary" />
      </div>
      <div className="absolute top-48 right-[5%] w-12 h-12 rounded-xl bg-accent/10 border border-accent/20 flex items-center justify-center animate-float hidden lg:flex" style={{ animationDelay: "1s" }}>
        <Activity className="w-6 h-6 text-accent" />
      </div>
      <div className="absolute bottom-32 left-[8%] w-10 h-10 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center animate-float hidden lg:flex" style={{ animationDelay: "2s" }}>
        <Shield className="w-5 h-5 text-primary" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Column - Content & Form */}
          <div className="text-center lg:text-left">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-secondary border border-border mb-6 animate-fade-in">
              <span className="w-2 h-2 rounded-full bg-accent animate-pulse" />
              <span className="text-sm text-muted-foreground">Enterprise-Grade Fleet Intelligence</span>
            </div>

            {/* Headline */}
            <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold mb-4 animate-slide-up">
              One Platform.{" "}
              <span className="gradient-text">Total Fleet Intelligence.</span>
            </h1>

            {/* Subheadline */}
            <p className="text-base md:text-lg text-muted-foreground max-w-xl mx-auto lg:mx-0 mb-8 animate-slide-up" style={{ animationDelay: "0.1s" }}>
              Real-time GPS tracking, AI-powered driver safety, fuel analytics, and compliance—all unified in one powerful platform trusted by fleets of 5 to 50,000 vehicles.
            </p>

            {/* Contact Form Card */}
            <div className="bg-card/50 backdrop-blur-sm border border-border rounded-2xl p-6 animate-slide-up" style={{ animationDelay: "0.2s" }}>
              <h3 className="text-lg font-semibold text-foreground mb-4">Get Started Today</h3>
              <ContactForm />
            </div>
          </div>

          {/* Right Column - Map */}
          <div className="animate-fade-in h-[400px] lg:h-[550px]" style={{ animationDelay: "0.3s" }}>
            <FleetMap />
          </div>
        </div>

        {/* Trust Indicators */}
        <div className="mt-16 pt-8 border-t border-border/50 animate-fade-in" style={{ animationDelay: "0.5s" }}>
          <p className="text-sm text-muted-foreground text-center mb-6">Trusted by leading fleet operators worldwide</p>
          <div className="flex flex-wrap items-center justify-center gap-8 opacity-50">
            {["FleetCorp", "LogiTrans", "MoveNow", "DriveHub", "TransitPro"].map((company) => (
              <span key={company} className="text-lg font-semibold text-muted-foreground">
                {company}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom Gradient */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent" />
    </section>
  );
};

export default Hero;
