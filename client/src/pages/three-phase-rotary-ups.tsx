import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  CheckCircle,
  ExternalLink,
  Battery,
  Zap,
  Shield,
  TrendingUp,
} from "lucide-react";
import hitecLogo from "@assets/HitecPowerProtection_1749638498692.png";

import hitecgen from "@assets/hitecgen.jpg";

export default function ThreePhaseRotaryUPS() {
  const manufacturers = [
    {
      name: "Hitec Power Protection",
      logo: hitecLogo,
      url: "https://hitec-ups.com/",
      products: [
        "Rotary UPS with Motor Generator",
        "Diesel Rotary UPS",
        "FESS Integration",
      ],
    },
  ];

  const useCases = [
    {
      icon: "🏥",
      title: "Hospitals",
      description: "Critical power for life support systems",
    },
    {
      icon: "🏢",
      title: "Data Centers",
      description: "High-availability power for server farms",
    },
    {
      icon: "🏭",
      title: "Industrial Manufacturing",
      description: "Motor-driven production equipment",
    },
    {
      icon: "📡",
      title: "Telecom Facilities",
      description: "Network infrastructure protection",
    },
    {
      icon: "🏛️",
      title: "Government Buildings",
      description: "Mission-critical operations",
    },
    {
      icon: "⚡",
      title: "High Voltage Applications",
      description: "Large-scale power distribution",
    },
  ];

  const whyChoose = [
    {
      icon: Shield,
      title: "Superior Reliability",
      description: "Motor-generator design eliminates single points of failure",
    },
    {
      icon: TrendingUp,
      title: "High Power Capacity",
      description: "400 kVA to 2.7 MVA range for large installations",
    },
    {
      icon: Battery,
      title: "FESS Integration",
      description: "Flywheel Energy Storage for instant response",
    },
    {
      icon: Zap,
      title: "Diesel Backup",
      description: "Extended runtime with integrated diesel generators",
    },
  ];

  const products = [
    {
      name: "Rotary UPS with Motor Generator",
      powerRange: "400 kVA - 2.7 MVA",
      features: [
        "Motor-generator set",
        "Kinetic energy storage",
        "No transfer time",
        "High overload capacity",
      ],
      image:
        "https://hitec-ups.com/wp-content/uploads/2019/04/rotary-ups-system.jpg",
    },
    {
      name: "Diesel Rotary UPS",
      powerRange: "400 kVA - 2.7 MVA",
      features: [
        "Integrated diesel generator",
        "Extended runtime",
        "Automatic start/stop",
        "Remote monitoring",
      ],
      image:
        "https://hitec-ups.com/wp-content/uploads/2019/04/diesel-rotary-ups.jpg",
    },
    {
      name: "FESS Rotary UPS",
      powerRange: "100 kVA - 1.5 MVA",
      features: [
        "Flywheel energy storage",
        "Maintenance-free",
        "Environmental friendly",
        "Long service life",
      ],
      image:
        "https://hitec-ups.com/wp-content/uploads/2019/04/fess-rotary-ups.jpg",
    },
    {
      name: "Package Container UPS",
      powerRange: "500 kVA - 2 MVA",
      features: [
        "Containerized solution",
        "Weather protection",
        "Easy installation",
        "Modular design",
      ],
      image:
        "https://hitec-ups.com/wp-content/uploads/2019/04/container-ups.jpg",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Hero Section */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Three Phase Rotary UPS Systems
          </h1>
          <p className="text-xl emerald-green font-semibold mb-6">
            Kinetic energy storage for ultimate power reliability.
          </p>

          {/* Featured Manufacturers */}
          <div className="grid grid-cols-1 gap-6 mb-8 max-w-2xl mx-auto">
            {manufacturers.map((manufacturer, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardContent className="p-6 text-center">
                  <div className="mb-4">
                    <img
                      src={manufacturer.logo}
                      alt={`${manufacturer.name} Logo`}
                      className="h-16 mx-auto object-contain"
                      onError={(e) => {
                        e.currentTarget.src =
                          "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAwIiBoZWlnaHQ9IjgwIiB2aWV3Qm94PSIwIDAgMjAwIDgwIiBmaWxsPSJub25lIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPjxyZWN0IHdpZHRoPSIyMDAiIGhlaWdodD0iODAiIGZpbGw9IiNmMGYwZjAiLz48dGV4dCB4PSIxMDAiIHk9IjQ1IiBmb250LWZhbWlseT0iQXJpYWwiIGZvbnQtc2l6ZT0iMTYiIGZpbGw9IiM2NjY2NjYiIHRleHQtYW5jaG9yPSJtaWRkbGUiPkxvZ28gSW1hZ2U8L3RleHQ+PC9zdmc+";
                      }}
                    />
                  </div>
                  <h3 className="text-lg font-semibold mb-2">
                    {manufacturer.name}
                  </h3>
                  <ul className="text-sm text-gray-600 mb-4">
                    {manufacturer.products.map((product, idx) => (
                      <li key={idx}>• {product}</li>
                    ))}
                  </ul>
                  <Button
                    variant="outline"
                    onClick={() => window.open(manufacturer.url, "_blank")}
                    className="text-emerald-blue border-emerald-blue hover:bg-emerald-blue hover:text-white"
                  >
                    Visit Website <ExternalLink className="h-4 w-4 ml-2" />
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* What It Is */}
        <Card className="mb-12 shadow-lg">
          <CardContent className="p-8">
            <h2 className="text-3xl font-bold emerald-blue mb-1">What It Is</h2>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 items-center">
              <div>
                <p className="text-lg text-gray-700 leading-relaxed mb-0">
                  Three Phase Rotary UPS systems use a motor-generator set with
                  kinetic energy storage to provide uninterrupted power
                  protection. These robust systems solve power quality issues by
                  mechanically isolating the load from utility disturbances
                  while storing energy in a rotating flywheel for instantaneous
                  backup power.
                </p>
                <p className="text-lg text-gray-700 leading-relaxed">
                  Available from 400 kVA to 2.7 MVA, these systems are ideal for
                  high-power applications requiring superior reliability, with
                  options for diesel backup, flywheel energy storage (FESS), and
                  containerized installations for any environment.
                </p>
              </div>
              <img
                src={hitecgen}
                alt="Rotary UPS System"
                className="w-full max-w-md h-64 object-cover rounded-lg   shadow-md"
              />
            </div>
          </CardContent>
        </Card>

        {/* Where It's Used */}
        <Card className="mb-12 shadow-lg">
          <CardContent className="p-8">
            <h2 className="text-3xl font-bold emerald-blue mb-6">
              Where It's Used
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-6 lg:grid-cols-6 gap-6">
              {useCases.map((useCase, index) => (
                <div
                  key={index}
                  className="bg-gray-50 rounded-lg p-6 text-center hover:shadow-md transition-shadow"
                >
                  <div className="text-4xl mb-3">{useCase.icon}</div>
                  <h3 className="text-lg font-semibold mb-2 text-gray-900">
                    {useCase.title}
                  </h3>
                  <p className="text-sm text-gray-600">{useCase.description}</p>
                  <CheckCircle className="h-5 w-5 text-emerald-green mx-auto mt-3" />
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Why This Solution */}
        <Card className="mb-12 shadow-lg">
          <CardContent className="p-8">
            <h2 className="text-3xl font-bold emerald-blue mb-6">
              Why This Solution
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {whyChoose.map((benefit, index) => (
                <div key={index} className="flex items-start space-x-4">
                  <div className="p-3 bg-emerald-green rounded-lg">
                    <benefit.icon className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-2">
                      {benefit.title}
                    </h3>
                    <p className="text-gray-600">{benefit.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Our Approach */}
        <Card className="mb-12 shadow-lg">
          <CardContent className="p-8">
            <h2 className="text-3xl font-bold emerald-blue mb-6">
              Our Approach / How It Works
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
              <img
                src="https://images.unsplash.com/photo-1621905251189-08b45d6a269e?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400"
                alt="Rotary UPS Installation"
                className="w-full h-64 object-cover rounded-lg shadow-md"
              />
              <div>
                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <div className="bg-emerald-blue text-white rounded-full w-8 h-8 flex items-center justify-center font-semibold">
                      1
                    </div>
                    <div>
                      <h4 className="font-semibold">
                        Assess Your High-Power Requirements
                      </h4>
                      <p className="text-sm text-gray-600">
                        Evaluate load characteristics and power quality needs
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="bg-emerald-blue text-white rounded-full w-8 h-8 flex items-center justify-center font-semibold">
                      2
                    </div>
                    <div>
                      <h4 className="font-semibold">
                        Recommend Optimal Rotary Solution
                      </h4>
                      <p className="text-sm text-gray-600">
                        Select motor-generator, diesel, or FESS configuration
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="bg-emerald-blue text-white rounded-full w-8 h-8 flex items-center justify-center font-semibold">
                      3
                    </div>
                    <div>
                      <h4 className="font-semibold">
                        Partner with Hitec Power Protection
                      </h4>
                      <p className="text-sm text-gray-600">
                        Leverage proven rotary UPS technology and expertise
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="bg-emerald-blue text-white rounded-full w-8 h-8 flex items-center justify-center font-semibold">
                      4
                    </div>
                    <div>
                      <h4 className="font-semibold">
                        Complete Installation & Commissioning
                      </h4>
                      <p className="text-sm text-gray-600">
                        Full project management and system optimization
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Product Lineup */}
        <Card className="shadow-lg">
          <CardContent className="p-8">
            <h2 className="text-3xl font-bold emerald-blue mb-6">
              Hitec Rotary UPS Products
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {products.map((product, index) => (
                <div
                  key={index}
                  className="border border-gray-200 rounded-lg p-6 hover:shadow-lg transition-shadow"
                >
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-48 object-cover rounded-lg mb-4"
                    onError={(e) => {
                      e.currentTarget.src =
                        "https://images.unsplash.com/photo-1621905251189-08b45d6a269e?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=200";
                    }}
                  />
                  <h3 className="text-xl font-bold mb-2">{product.name}</h3>
                  <div className="bg-emerald-green bg-opacity-10 p-3 rounded-lg mb-4">
                    <p className="text-sm font-semibold text-emerald-green">
                      Power Range: {product.powerRange}
                    </p>
                  </div>
                  <ul className="space-y-2">
                    {product.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center text-sm">
                        <CheckCircle className="h-4 w-4 text-emerald-green mr-2 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>

            <div className="mt-8 text-center">
              <Button
                onClick={() =>
                  window.open("https://hitec-ups.com/products/", "_blank")
                }
                className="bg-emerald-blue hover:bg-emerald-blue-dark text-white px-8 py-3"
              >
                View All Hitec Products{" "}
                <ExternalLink className="h-4 w-4 ml-2" />
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
