import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Link } from "wouter";
import { 
  Power, 
  TrendingDown, 
  Zap, 
  Battery, 
  BatteryLow, 
  Volume2, 
  Activity, 
  FlashlightOff, 
  BarChart,
  Shield,
  Settings,
  Database,
  CheckCircle
} from "lucide-react";

export default function Home() {
  const powerProblems = [
    {
      title: "Power Failure",
      description: "Total utility power loss",
      cause: "Caused by lightning strikes, downed power lines, grid overdemands, accidents and natural disasters.",
      solution: "Standby UPS Solution",
      icon: Power,
      color: "text-red-500",
      bgColor: "bg-red-50"
    },
    {
      title: "Power Sag",
      description: "Short-term low voltage",
      cause: "Triggered by startup of large loads, utility switching, equipment failure, and inadequate power service.",
      solution: "Line Interactive UPS",
      icon: TrendingDown,
      color: "text-yellow-500",
      bgColor: "bg-yellow-50"
    },
    {
      title: "Power Surge",
      description: "High voltage spikes",
      cause: "Lightning strikes can send voltages exceeding 6,000V, almost always resulting in data loss or hardware damage.",
      solution: "True Online UPS",
      icon: Zap,
      color: "text-orange-500",
      bgColor: "bg-orange-50"
    },
    {
      title: "Undervoltage",
      description: "Extended brownouts",
      cause: "Intentional utility voltage reduction during peak demand or heavy loads exceeding supply capacity.",
      solution: "Voltage Regulation",
      icon: BatteryLow,
      color: "text-orange-400",
      bgColor: "bg-orange-50"
    },
    {
      title: "Overvoltage",
      description: "Extended high voltage",
      cause: "Rapid reduction in power loads, heavy equipment shutdown, or utility switching operations.",
      solution: "Power Conditioning",
      icon: Battery,
      color: "text-red-400",
      bgColor: "bg-red-50"
    },
    {
      title: "Line Noise",
      description: "EMI/RFI interference",
      cause: "High frequency interference from transmitters, welding devices, printers, and lightning.",
      solution: "EMI/RFI Filtering",
      icon: Volume2,
      color: "text-blue-500",
      bgColor: "bg-blue-50"
    },
    {
      title: "Frequency Variation",
      description: "Frequency instability",
      cause: "Generator or co-generation sites being loaded and unloaded causing erratic operation.",
      solution: "Frequency Stabilization",
      icon: Activity,
      color: "text-purple-500",
      bgColor: "bg-purple-50"
    },
    {
      title: "Switching Transient",
      description: "Instantaneous voltage notch",
      cause: "Normal duration shorter than spikes, generally in nanosecond range from switching operations.",
      solution: "Transient Protection",
      icon: FlashlightOff,
      color: "text-yellow-600",
      bgColor: "bg-yellow-50"
    },
    {
      title: "Harmonic Distortion",
      description: "Waveform distortion",
      cause: "Caused by nonlinear loads like switch mode power supplies, variable speed motors, and office equipment.",
      solution: "Power Conditioning",
      icon: BarChart,
      color: "text-red-600",
      bgColor: "bg-red-50"
    }
  ];

  const products = [
    {
      title: "Single Phase",
      range: "700 VA - 6 kVA",
      applications: "Workstations, Small Offices",
      features: "TVSS, PDUs, Modular",
      image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=200",
      bgColor: "bg-gradient-to-br from-blue-500 to-blue-600"
    },
    {
      title: "Three Phase",
      range: "10 kVA - 3 MW",
      applications: "Data Centers, Hospitals",
      features: "N+1 Redundancy, Parallel",
      image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=200",
      bgColor: "bg-gradient-to-br from-green-500 to-green-600"
    },
    {
      title: "Rotary/Static",
      range: "400 kVA - 2.7 MVA",
      applications: "Industrial, High Voltage",
      features: "Flywheel, Diesel Options",
      image: "https://images.unsplash.com/photo-1621905251189-08b45d6a269e?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=200",
      bgColor: "bg-gradient-to-br from-purple-500 to-purple-600"
    },
    {
      title: "Lighting Inverters",
      range: "UL 924, UL 1778",
      applications: "Medical Power, Traffic",
      features: "Power Conditioners",
      image: "https://images.unsplash.com/photo-1497515114629-f71d768fd07c?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=200",
      bgColor: "bg-gradient-to-br from-orange-500 to-orange-600"
    }
  ];

  const batteryTypes = [
    {
      title: "VRLA Batteries",
      description: "Valve Regulated Lead Acid solutions with IEEE standard compliance",
      icon: Battery,
      features: ["IEEE Standard Compliance", "Maintenance-Free Operation", "Extended Service Life"]
    },
    {
      title: "Monitoring Systems",
      description: "Real-time monitoring and data center reporting capabilities",
      icon: BarChart,
      features: ["Real-Time Data Collection", "Predictive Analytics", "Remote Monitoring"]
    },
    {
      title: "Conditioning",
      description: "Battery conditioning systems for optimal performance",
      icon: Settings,
      features: ["Performance Optimization", "Life Extension", "Automated Maintenance"]
    },
    {
      title: "Cabinet Solutions",
      description: "Rack and cabinet configurations for any installation",
      icon: Database,
      features: ["Flexible Configurations", "Space Optimization", "Easy Installation"]
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-blue-700 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Reliable Power<br />
              <span className="emerald-green">Solutions</span><br />
              for Critical Operations
            </h1>
            <p className="text-xl md:text-2xl mb-8 max-w-4xl mx-auto leading-relaxed">
              From 700VA single-phase to 3MW multi-module systems, we deliver uninterruptible power solutions that protect your critical infrastructure while advancing environmental sustainability.
            </p>
            <Link href="/quote">
              <Button className="bg-emerald-green hover:bg-emerald-success text-white px-8 py-4 text-lg font-semibold">
                Get Your Power Solution
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Key Statistics */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div className="p-6">
              <div className="text-4xl font-bold emerald-green mb-2">98%</div>
              <div className="text-lg font-semibold text-gray-800">Battery Recycling Rate</div>
              <div className="text-sm text-gray-600 mt-2">Environmental commitment you can trust</div>
            </div>
            <div className="p-6">
              <div className="text-4xl font-bold emerald-blue mb-2">3MW</div>
              <div className="text-lg font-semibold text-gray-800">Power Solutions</div>
              <div className="text-sm text-gray-600 mt-2">From small office to enterprise scale</div>
            </div>
            <div className="p-6">
              <div className="text-4xl font-bold text-orange-500 mb-2">25+</div>
              <div className="text-lg font-semibold text-gray-800">Years Experience</div>
              <div className="text-sm text-gray-600 mt-2">Industry expertise you can rely on</div>
            </div>
          </div>
        </div>
      </section>

      {/* 9 Critical Power Problems */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">9 Critical Power Problems</h2>
            <p className="text-lg text-gray-600">Our UPS solutions address every power quality issue that threatens your critical operations</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {powerProblems.map((problem, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <div className="flex items-center mb-4">
                    <div className={`p-2 rounded-lg ${problem.bgColor} mr-3`}>
                      <problem.icon className={`h-6 w-6 ${problem.color}`} />
                    </div>
                    <h3 className="text-lg font-semibold text-gray-900">{problem.title}</h3>
                  </div>
                  <p className="text-sm text-gray-600 mb-3 font-medium">{problem.description}</p>
                  <p className="text-xs text-gray-500 mb-4">{problem.cause}</p>
                  <div className="bg-emerald-green text-white px-3 py-1 rounded text-xs font-medium inline-block">
                    {problem.solution}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Technical Specifications */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Technical Specifications Comparison</h2>
            <p className="text-lg text-gray-600">Complete power solutions for every application</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {products.map((product, index) => (
              <Card key={index} className={`${product.bgColor} text-white overflow-hidden hover:shadow-lg transition-shadow`}>
                <div className="relative">
                  <img 
                    src={product.image} 
                    alt={`${product.title} Systems`} 
                    className="w-full h-32 object-cover"
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-30"></div>
                </div>
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold mb-2">{product.title}</h3>
                  <div className="text-yellow-200 font-semibold mb-2">{product.range}</div>
                  <p className="text-sm mb-3 text-gray-100">{product.applications}</p>
                  <div className="text-xs text-gray-200">{product.features}</div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Battery Conditioning Systems */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Battery Conditioning Systems</h2>
            <p className="text-lg text-gray-600">Comprehensive monitoring and conditioning capabilities for all battery types</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {batteryTypes.map((battery, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardContent className="p-8">
                  <div className="flex items-center mb-4">
                    <div className="p-3 bg-emerald-green rounded-lg mr-4">
                      <battery.icon className="h-6 w-6 text-white" />
                    </div>
                    <h3 className="text-xl font-bold text-gray-900">{battery.title}</h3>
                  </div>
                  <p className="text-gray-600 mb-4">{battery.description}</p>
                  <ul className="space-y-2">
                    {battery.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-sm text-gray-500">
                        <CheckCircle className="h-4 w-4 text-emerald-green mr-2" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
