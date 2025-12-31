import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Send, CheckCircle } from "lucide-react";

const ContactForm = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    fleetSize: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate form submission
    setIsSubmitted(true);
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({ name: "", email: "", company: "", fleetSize: "", message: "" });
    }, 3000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  if (isSubmitted) {
    return (
      <div className="flex flex-col items-center justify-center py-12 text-center animate-fade-in">
        <div className="w-16 h-16 rounded-full bg-accent/20 flex items-center justify-center mb-4">
          <CheckCircle className="w-8 h-8 text-accent" />
        </div>
        <h3 className="text-xl font-semibold text-foreground mb-2">Thank You!</h3>
        <p className="text-muted-foreground">We'll get back to you within 24 hours.</p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <Input
            name="name"
            placeholder="Your Name"
            value={formData.name}
            onChange={handleChange}
            required
            className="bg-secondary/50 border-border focus:border-primary"
          />
        </div>
        <div>
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
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <Input
            name="company"
            placeholder="Company Name"
            value={formData.company}
            onChange={handleChange}
            required
            className="bg-secondary/50 border-border focus:border-primary"
          />
        </div>
        <div>
          <Input
            name="fleetSize"
            placeholder="Fleet Size (e.g., 50 vehicles)"
            value={formData.fleetSize}
            onChange={handleChange}
            className="bg-secondary/50 border-border focus:border-primary"
          />
        </div>
      </div>
      <div>
        <Textarea
          name="message"
          placeholder="Tell us about your fleet management needs..."
          value={formData.message}
          onChange={handleChange}
          rows={4}
          className="bg-secondary/50 border-border focus:border-primary resize-none"
        />
      </div>
      <Button type="submit" variant="hero" className="w-full">
        Get Started
        <Send className="w-4 h-4 ml-2" />
      </Button>
      <p className="text-xs text-muted-foreground text-center">
        By submitting, you agree to our{" "}
        <a href="#" className="text-primary hover:underline">Privacy Policy</a>
      </p>
    </form>
  );
};

export default ContactForm;
