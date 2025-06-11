import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { CheckCircle, ExternalLink, Battery, Zap, Shield, TrendingUp } from "lucide-react";
import eatonLogo from "@assets/EAton_1749638488093.png";
import xtremeLogo from "@assets/ExtremePowerConversions_1749638498676.png";

export default function SinglePhaseUPS() {
  const manufacturers = [
    {
      name: "Eaton",
      logo: eatonLogo,
      url: "https://www.eaton.com/us/en-us.html",
      products: ["UPS Power Management", "Power Distribution for IT", "Rackmount PDUs", "Surge Protection"]
    },
    {
      name: "Xtreme Power Conversion",
      logo: xtremeLogo,
      url: "https://www.xpcc.com/",
      products: ["TVSS Devices", "PDUs", "Modular Solutions"]
    }
  ];

  const useCases = [
    { icon: "💻", title: "Workstations", description: "Desktop computers and office equipment" },
    { icon: "🏢", title: "Small Offices", description: "Branch office and remote location protection" },
    { icon: "🖥️", title: "Server Rooms", description: "Small to medium server installations" },
    { icon: "📡", title: "Network Equipment", description: "Routers, switches, and telecom gear" },
    { icon: "🏥", title: "Medical Devices", description: "Non-critical medical equipment" },
    { icon: "🏪", title: "Retail Systems", description: "POS systems and payment terminals" }
  ];

  const whyChoose = [
    { icon: Shield, title: "Proven Reliability", description: "Industry-leading uptime with 700 VA to 6 kVA range" },
    { icon: TrendingUp, title: "Cost Effective", description: "Lower total cost of ownership for small applications" },
    { icon: Battery, title: "Modular Design", description: "Scalable solutions that grow with your needs" },
    { icon: Zap, title: "Surge Protection", description: "TVSS devices protect against power surges" }
  ];

  const eatonProducts = [
    {
      category: "UPS Systems",
      description: "Complete backup power solutions for workstations and small offices",
      features: ["700 VA - 6 kVA capacity", "Line interactive technology", "Automatic voltage regulation", "Energy efficient design"],
      url: "https://www.eaton.com/us/en-us/products/backup-power-ups-surge-it-power-distribution/ups-power-management-software.html"
    },
    {
      category: "Power Distribution Units (PDUs)",
      description: "Rackmount and cabinet power distribution for IT equipment",
      features: ["Multiple outlet configurations", "Surge protection built-in", "Remote monitoring options", "Easy installation"],
      url: "https://www.eaton.com/us/en-us/products/backup-power-ups-surge-it-power-distribution/power-distribution-for-it-equipment.html"
    },
    {
      category: "Surge Protection (TVSS)",
      description: "Transient voltage surge suppressors for sensitive equipment",
      features: ["UL Type 1 surge protection", "High energy absorption", "Diagnostic indicators", "Replaceable modules"],
      url: "https://www.eaton.com/us/en-us/catalog/fuses-and-fuse-holders/bussmann-series-ul-type-1-surge-protective-devices.html"
    }
  ];

  const xpccProducts = [
    {
      name: "TVSS Devices",
      description: "Comprehensive surge protection solutions",
      features: ["Transient voltage suppression", "Multiple protection levels", "Diagnostic monitoring", "Easy maintenance"]
    },
    {
      name: "Power Distribution Units",
      description: "Modular power distribution systems",
      features: ["Flexible configurations", "Hot-swappable components", "Metering capabilities", "Compact design"]
    },
    {
      name: "Modular Solutions",
      description: "Scalable power protection systems",
      features: ["Expandable architecture", "Redundant configurations", "Easy upgrades", "Future-proof design"]
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Hero Section */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Single Phase UPS Systems</h1>
          <p className="text-xl emerald-green font-semibold mb-6">Reliable power protection for workstations and small offices.</p>
          
          {/* Featured Manufacturers */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            {manufacturers.map((manufacturer, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardContent className="p-6 text-center">
                  <div className="mb-4">
                    <img 
                      src={manufacturer.logo} 
                      alt={`${manufacturer.name} Logo`}
                      className="h-16 mx-auto object-contain"
                      onError={(e) => {
                        e.currentTarget.src = "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAwIiBoZWlnaHQ9IjgwIiB2aWV3Qm94PSIwIDAgMjAwIDgwIiBmaWxsPSJub25lIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPjxyZWN0IHdpZHRoPSIyMDAiIGhlaWdodD0iODAiIGZpbGw9IiNmMGYwZjAiLz48dGV4dCB4PSIxMDAiIHk9IjQ1IiBmb250LWZhbWlseT0iQXJpYWwiIGZvbnQtc2l6ZT0iMTYiIGZpbGw9IiM2NjY2NjYiIHRleHQtYW5jaG9yPSJtaWRkbGUiPkxvZ28gSW1hZ2U8L3RleHQ+PC9zdmc+";
                      }}
                    />
                  </div>
                  <h3 className="text-lg font-semibold mb-2">{manufacturer.name}</h3>
                  <ul className="text-sm text-gray-600 mb-4">
                    {manufacturer.products.map((product, idx) => (
                      <li key={idx}>• {product}</li>
                    ))}
                  </ul>
                  <Button 
                    variant="outline" 
                    onClick={() => window.open(manufacturer.url, '_blank')}
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
            <h2 className="text-3xl font-bold emerald-blue mb-6">What It Is</h2>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
              <div>
                <p className="text-lg text-gray-700 leading-relaxed mb-4">
                  Single Phase UPS systems provide reliable backup power and surge protection for desktop computers, workstations, and small office equipment. These compact systems solve power quality problems by delivering clean, conditioned power during utility outages, voltage fluctuations, and electrical disturbances.
                </p>
                <p className="text-lg text-gray-700 leading-relaxed">
                  Available from 700 VA to 6 kVA capacity, these systems include TVSS (Transient Voltage Surge Suppression) devices, PDUs (Power Distribution Units), and modular solutions that protect your critical equipment while providing the flexibility to expand as your needs grow.
                </p>
              </div>
              <img 
                src="https://images.unsplash.com/photo-1586771107445-d3ca888129ff?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400" 
                alt="Single Phase UPS System"
                className="w-full h-64 object-cover rounded-lg shadow-md"
              />
            </div>
          </CardContent>
        </Card>

        {/* Where It's Used */}
        <Card className="mb-12 shadow-lg">
          <CardContent className="p-8">
            <h2 className="text-3xl font-bold emerald-blue mb-6">Where It's Used</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {useCases.map((useCase, index) => (
                <div key={index} className="bg-gray-50 rounded-lg p-6 text-center hover:shadow-md transition-shadow">
                  <div className="text-4xl mb-3">{useCase.icon}</div>
                  <h3 className="text-lg font-semibold mb-2 text-gray-900">{useCase.title}</h3>
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
            <h2 className="text-3xl font-bold emerald-blue mb-6">Why This Solution</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {whyChoose.map((benefit, index) => (
                <div key={index} className="flex items-start space-x-4">
                  <div className="p-3 bg-emerald-green rounded-lg">
                    <benefit.icon className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-2">{benefit.title}</h3>
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
            <h2 className="text-3xl font-bold emerald-blue mb-6">Our Approach / How It Works</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
              <img 
                src="https://images.unsplash.com/photo-1558618666-fcd25c85cd64?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400" 
                alt="Single Phase UPS Installation"
                className="w-full h-64 object-cover rounded-lg shadow-md"
              />
              <div>
                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <div className="bg-emerald-blue text-white rounded-full w-8 h-8 flex items-center justify-center font-semibold">1</div>
                    <div>
                      <h4 className="font-semibold">Assess Your Equipment Power Needs</h4>
                      <p className="text-sm text-gray-600">Calculate total load requirements and runtime needs</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="bg-emerald-blue text-white rounded-full w-8 h-8 flex items-center justify-center font-semibold">2</div>
                    <div>
                      <h4 className="font-semibold">Recommend Right-Sized Solution</h4>
                      <p className="text-sm text-gray-600">Select UPS capacity, TVSS, and PDU configuration</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="bg-emerald-blue text-white rounded-full w-8 h-8 flex items-center justify-center font-semibold">3</div>
                    <div>
                      <h4 className="font-semibold">Source from Trusted Partners</h4>
                      <p className="text-sm text-gray-600">Eaton and Xtreme Power Conversion quality products</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="bg-emerald-blue text-white rounded-full w-8 h-8 flex items-center justify-center font-semibold">4</div>
                    <div>
                      <h4 className="font-semibold">Deliver and Configure</h4>
                      <p className="text-sm text-gray-600">Professional installation and system testing</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Eaton Products */}
        <Card className="mb-12 shadow-lg">
          <CardContent className="p-8">
            <h2 className="text-3xl font-bold emerald-blue mb-6">Eaton Power Solutions</h2>
            
            <div className="space-y-6">
              {eatonProducts.map((product, index) => (
                <div key={index} className="border border-gray-200 rounded-lg p-6 hover:shadow-md transition-shadow">
                  <div className="flex justify-between items-start mb-4">
                    <div className="flex-1">
                      <h3 className="text-xl font-bold mb-2">{product.category}</h3>
                      <p className="text-gray-600 mb-4">{product.description}</p>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                        {product.features.map((feature, idx) => (
                          <div key={idx} className="flex items-center text-sm">
                            <CheckCircle className="h-4 w-4 text-emerald-green mr-2 flex-shrink-0" />
                            {feature}
                          </div>
                        ))}
                      </div>
                    </div>
                    <Button 
                      variant="outline" 
                      onClick={() => window.open(product.url, '_blank')}
                      className="ml-4 text-emerald-blue border-emerald-blue hover:bg-emerald-blue hover:text-white"
                    >
                      Learn More <ExternalLink className="h-4 w-4 ml-2" />
                    </Button>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* XPCC Products */}
        <Card className="shadow-lg">
          <CardContent className="p-8">
            <h2 className="text-3xl font-bold emerald-blue mb-6">Xtreme Power Conversion Solutions</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {xpccProducts.map((product, index) => (
                <div key={index} className="border border-gray-200 rounded-lg p-6 hover:shadow-lg transition-shadow">
                  <h3 className="text-lg font-bold mb-3">{product.name}</h3>
                  <p className="text-gray-600 mb-4">{product.description}</p>
                  <ul className="space-y-2">
                    {product.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center text-sm">
                        <CheckCircle className="h-3 w-3 text-emerald-green mr-2 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>

            <div className="mt-8 text-center">
              <Button 
                onClick={() => window.open('https://www.xpcc.com/products/', '_blank')}
                className="bg-emerald-blue hover:bg-emerald-blue-dark text-white px-8 py-3"
              >
                View All XPCC Products <ExternalLink className="h-4 w-4 ml-2" />
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}