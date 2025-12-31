import { useEffect, useRef, useState } from "react";
import { Truck, MapPin } from "lucide-react";

interface Vehicle {
  id: number;
  name: string;
  lat: number;
  lng: number;
  status: "moving" | "idle" | "stopped";
  speed: number;
  heading: number;
}

const FleetMap = () => {
  const mapRef = useRef<HTMLDivElement>(null);
  const [vehicles, setVehicles] = useState<Vehicle[]>([
    { id: 1, name: "Truck 001", lat: 40.7128, lng: -74.006, status: "moving", speed: 45, heading: 45 },
    { id: 2, name: "Van 012", lat: 40.7589, lng: -73.9851, status: "idle", speed: 0, heading: 180 },
    { id: 3, name: "Fleet 007", lat: 40.7484, lng: -73.9857, status: "moving", speed: 32, heading: 270 },
    { id: 4, name: "Truck 023", lat: 40.7061, lng: -74.0088, status: "stopped", speed: 0, heading: 90 },
    { id: 5, name: "Van 045", lat: 40.7282, lng: -73.7949, status: "moving", speed: 55, heading: 135 },
  ]);

  // Simulate vehicle movement
  useEffect(() => {
    const interval = setInterval(() => {
      setVehicles((prev) =>
        prev.map((v) => {
          if (v.status === "moving") {
            const movement = 0.001;
            const radians = (v.heading * Math.PI) / 180;
            return {
              ...v,
              lat: v.lat + Math.cos(radians) * movement,
              lng: v.lng + Math.sin(radians) * movement,
              speed: v.speed + (Math.random() - 0.5) * 5,
            };
          }
          return v;
        })
      );
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  const getStatusColor = (status: Vehicle["status"]) => {
    switch (status) {
      case "moving":
        return "bg-accent";
      case "idle":
        return "bg-yellow-500";
      case "stopped":
        return "bg-red-500";
    }
  };

  const getStatusGlow = (status: Vehicle["status"]) => {
    switch (status) {
      case "moving":
        return "shadow-[0_0_20px_rgba(34,211,238,0.6)]";
      case "idle":
        return "shadow-[0_0_20px_rgba(234,179,8,0.6)]";
      case "stopped":
        return "shadow-[0_0_20px_rgba(239,68,68,0.6)]";
    }
  };

  return (
    <div className="relative w-full h-full min-h-[400px] rounded-2xl overflow-hidden bg-secondary/50 border border-border">
      {/* Simulated Map Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-secondary via-background to-secondary">
        {/* Grid Pattern */}
        <div
          className="absolute inset-0 opacity-20"
          style={{
            backgroundImage: `
              linear-gradient(to right, hsl(var(--border)) 1px, transparent 1px),
              linear-gradient(to bottom, hsl(var(--border)) 1px, transparent 1px)
            `,
            backgroundSize: "40px 40px",
          }}
        />

        {/* Animated Routes */}
        <svg className="absolute inset-0 w-full h-full" viewBox="0 0 400 300">
          <defs>
            <linearGradient id="routeGradient" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="hsl(var(--primary))" stopOpacity="0.3" />
              <stop offset="50%" stopColor="hsl(var(--accent))" stopOpacity="0.8" />
              <stop offset="100%" stopColor="hsl(var(--primary))" stopOpacity="0.3" />
            </linearGradient>
          </defs>
          
          {/* Route paths */}
          <path
            d="M 50 150 Q 150 50, 250 150 T 350 150"
            fill="none"
            stroke="url(#routeGradient)"
            strokeWidth="2"
            strokeDasharray="10,5"
            className="animate-pulse"
          />
          <path
            d="M 100 250 Q 200 150, 300 200"
            fill="none"
            stroke="url(#routeGradient)"
            strokeWidth="2"
            strokeDasharray="10,5"
            className="animate-pulse"
            style={{ animationDelay: "0.5s" }}
          />
          <path
            d="M 50 80 L 180 120 L 280 60"
            fill="none"
            stroke="url(#routeGradient)"
            strokeWidth="2"
            strokeDasharray="10,5"
            className="animate-pulse"
            style={{ animationDelay: "1s" }}
          />
        </svg>

        {/* Vehicle Markers */}
        {vehicles.map((vehicle, index) => {
          const x = 50 + (index * 70) + Math.sin(index) * 30;
          const y = 80 + (index * 40) + Math.cos(index) * 20;
          
          return (
            <div
              key={vehicle.id}
              className={`absolute transition-all duration-1000 ease-in-out`}
              style={{
                left: `${x}px`,
                top: `${y}px`,
                transform: `translate(-50%, -50%) rotate(${vehicle.heading}deg)`,
              }}
            >
              <div
                className={`relative w-8 h-8 rounded-full ${getStatusColor(vehicle.status)} ${getStatusGlow(vehicle.status)} flex items-center justify-center transition-all duration-300`}
              >
                <Truck className="w-4 h-4 text-background" style={{ transform: `rotate(-${vehicle.heading}deg)` }} />
                
                {/* Pulse ring for moving vehicles */}
                {vehicle.status === "moving" && (
                  <div className="absolute inset-0 rounded-full bg-accent animate-ping opacity-40" />
                )}
              </div>
              
              {/* Vehicle label */}
              <div
                className="absolute top-full left-1/2 -translate-x-1/2 mt-1 px-2 py-0.5 bg-background/90 border border-border rounded text-[10px] text-foreground whitespace-nowrap"
                style={{ transform: `translateX(-50%) rotate(-${vehicle.heading}deg)` }}
              >
                {vehicle.name}
              </div>
            </div>
          );
        })}

        {/* Location pins */}
        <div className="absolute top-[20%] left-[15%]">
          <MapPin className="w-6 h-6 text-primary animate-bounce" style={{ animationDuration: "2s" }} />
        </div>
        <div className="absolute top-[60%] right-[20%]">
          <MapPin className="w-6 h-6 text-accent animate-bounce" style={{ animationDuration: "2.5s" }} />
        </div>
        <div className="absolute bottom-[25%] left-[35%]">
          <MapPin className="w-6 h-6 text-primary animate-bounce" style={{ animationDuration: "3s" }} />
        </div>
      </div>

      {/* Map Overlay - Stats */}
      <div className="absolute top-4 left-4 flex flex-col gap-2">
        <div className="px-3 py-2 bg-background/90 backdrop-blur-sm border border-border rounded-lg">
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 rounded-full bg-accent animate-pulse" />
            <span className="text-xs text-muted-foreground">Live Tracking</span>
          </div>
        </div>
      </div>

      {/* Legend */}
      <div className="absolute bottom-4 left-4 px-3 py-2 bg-background/90 backdrop-blur-sm border border-border rounded-lg">
        <div className="flex items-center gap-4 text-xs">
          <div className="flex items-center gap-1.5">
            <div className="w-2 h-2 rounded-full bg-accent" />
            <span className="text-muted-foreground">Moving</span>
          </div>
          <div className="flex items-center gap-1.5">
            <div className="w-2 h-2 rounded-full bg-yellow-500" />
            <span className="text-muted-foreground">Idle</span>
          </div>
          <div className="flex items-center gap-1.5">
            <div className="w-2 h-2 rounded-full bg-red-500" />
            <span className="text-muted-foreground">Stopped</span>
          </div>
        </div>
      </div>

      {/* Vehicle Count */}
      <div className="absolute top-4 right-4 px-3 py-2 bg-background/90 backdrop-blur-sm border border-border rounded-lg">
        <div className="text-center">
          <div className="text-lg font-bold text-foreground">{vehicles.length}</div>
          <div className="text-[10px] text-muted-foreground">Active Vehicles</div>
        </div>
      </div>
    </div>
  );
};

export default FleetMap;
