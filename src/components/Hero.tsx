import { Button } from "@/components/ui/button";
import { ArrowRight, Play, MapPin, Activity, Shield } from "lucide-react";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center pt-16 overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 hero-gradient" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-glow opacity-60" />
      
      {/* Floating Elements */}
      <div className="absolute top-32 left-[10%] w-16 h-16 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center animate-float">
        <MapPin className="w-8 h-8 text-primary" />
      </div>
      <div className="absolute top-48 right-[15%] w-14 h-14 rounded-xl bg-accent/10 border border-accent/20 flex items-center justify-center animate-float" style={{ animationDelay: "1s" }}>
        <Activity className="w-7 h-7 text-accent" />
      </div>
      <div className="absolute bottom-32 left-[20%] w-12 h-12 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center animate-float" style={{ animationDelay: "2s" }}>
        <Shield className="w-6 h-6 text-primary" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-secondary border border-border mb-8 animate-fade-in">
            <span className="w-2 h-2 rounded-full bg-accent animate-pulse" />
            <span className="text-sm text-muted-foreground">Enterprise-Grade Fleet Intelligence</span>
          </div>

          {/* Headline */}
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 animate-slide-up">
            One Platform.{" "}
            <span className="gradient-text">Total Fleet Intelligence.</span>
          </h1>

          {/* Subheadline */}
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-10 animate-slide-up" style={{ animationDelay: "0.1s" }}>
            Real-time GPS tracking, AI-powered driver safety, fuel analytics, and compliance—all unified in one powerful platform trusted by fleets of 5 to 50,000 vehicles.
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-slide-up" style={{ animationDelay: "0.2s" }}>
            <Button variant="hero" size="xl">
              Request a Demo
              <ArrowRight className="w-5 h-5" />
            </Button>
            <Button variant="heroOutline" size="xl">
              <Play className="w-5 h-5" />
              See How It Works
            </Button>
          </div>

          {/* Trust Indicators */}
          <div className="mt-16 pt-8 border-t border-border/50 animate-fade-in" style={{ animationDelay: "0.4s" }}>
            <p className="text-sm text-muted-foreground mb-6">Trusted by leading fleet operators worldwide</p>
            <div className="flex flex-wrap items-center justify-center gap-8 opacity-50">
              {["FleetCorp", "LogiTrans", "MoveNow", "DriveHub", "TransitPro"].map((company) => (
                <span key={company} className="text-lg font-semibold text-muted-foreground">
                  {company}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Gradient */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent" />
    </section>
  );
};

export default Hero;
