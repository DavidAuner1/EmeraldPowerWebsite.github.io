import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { CheckCircle, ExternalLink, Battery, Zap, Shield, TrendingUp, Monitor, Database } from "lucide-react";
import generexLogo from "@assets/Generex_1749638498690.png";

export default function BatteryConditioning() {
  const manufacturers = [
    {
      name: "Generex",
      logo: generexLogo,
      url: "https://www.generex.de/",
      products: ["SmartBattery Systems", "Battery Monitoring", "Facility Management", "Data Center Software"]
    }
  ];

  const useCases = [
    { icon: "🏢", title: "Data Centers", description: "Comprehensive battery monitoring and facility management" },
    { icon: "📡", title: "Telecom Facilities", description: "Remote battery monitoring and alert systems" },
    { icon: "🏥", title: "Hospitals", description: "Critical power battery health monitoring" },
    { icon: "🏭", title: "Industrial Sites", description: "Battery conditioning for manufacturing UPS" },
    { icon: "🏛️", title: "Government Facilities", description: "Mission-critical battery system monitoring" },
    { icon: "🔋", title: "Energy Storage", description: "Large-scale battery bank monitoring and conditioning" }
  ];

  const whyChoose = [
    { icon: Shield, title: "Real-Time Monitoring", description: "Continuous battery health and performance tracking" },
    { icon: TrendingUp, title: "Predictive Maintenance", description: "Early warning systems prevent costly failures" },
    { icon: Battery, title: "Multi-Chemistry Support", description: "VRLA, Wet Cell, and Lithium-Ion compatibility" },
    { icon: Monitor, title: "Remote Management", description: "Web-based monitoring and reporting platforms" }
  ];

  const batteryTypes = [
    {
      type: "VRLA Battery Solutions",
      description: "Valve Regulated Lead Acid battery monitoring and conditioning",
      features: ["IEEE standard compliance", "Impedance testing", "Temperature monitoring", "Voltage regulation"],
      url: "https://www.generex.de/products/smartbattery",
      applications: ["UPS systems", "Emergency lighting", "Telecom backup", "Security systems"]
    },
    {
      type: "Wet Cell Systems",
      description: "Traditional flooded lead-acid battery monitoring solutions",
      features: ["Electrolyte level monitoring", "Specific gravity testing", "Automated watering systems", "Gas monitoring"],
      url: "https://www.generex.de/products/battery",
      applications: ["Substations", "Power plants", "Large UPS installations", "Industrial backup"]
    },
    {
      type: "Lithium-Ion (LiON)",
      description: "Advanced monitoring for modern lithium-ion battery systems",
      features: ["Cell balancing", "Thermal monitoring", "SOC/SOH tracking", "Safety monitoring"],
      url: "https://www.generex.de/support/changelogs/cs141/2-12",
      applications: ["Energy storage", "Electric vehicles", "Grid storage", "Renewable integration"]
    }
  ];

  const solutions = [
    {
      name: "SmartBattery Monitoring",
      description: "Comprehensive battery monitoring and conditioning platform",
      features: [
        "Real-time battery cell monitoring",
        "Impedance and conductance testing",
        "Temperature and voltage tracking",
        "Predictive failure analysis",
        "Web-based dashboard",
        "SMS and email alerts"
      ],
      url: "https://www.generex.de/products/smartbattery"
    },
    {
      name: "Facility Management",
      description: "Complete facility infrastructure monitoring including cabinets and racks",
      features: [
        "Environmental monitoring",
        "Power distribution tracking",
        "Cabinet security monitoring",
        "Rack space management",
        "Asset tracking",
        "Integration with building systems"
      ],
      url: "https://www.generex.de/products/facility"
    },
    {
      name: "Data Center Software",
      description: "Enterprise-grade monitoring and reporting for data center operations",
      features: [
        "Centralized monitoring platform",
        "Historical data analysis",
        "Performance reporting",
        "Compliance documentation",
        "Integration APIs",
        "Multi-site management"
      ],
      url: "https://www.generex.de/products/software"
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Hero Section */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Battery Conditioning Systems</h1>
          <p className="text-xl emerald-green font-semibold mb-6">Advanced monitoring and conditioning for optimal battery performance.</p>
          
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
                  Battery Conditioning Systems provide comprehensive monitoring, reporting, and maintenance capabilities for all types of battery installations. These advanced systems solve the critical problem of battery failure by continuously monitoring battery health, predicting maintenance needs, and optimizing performance across VRLA, Wet Cell, and Lithium-Ion technologies.
                </p>
                <p className="text-lg text-gray-700 leading-relaxed">
                  From cabinets and racks to data center monitoring platforms, these systems ensure maximum battery life, prevent unexpected failures, and provide detailed reporting for compliance and maintenance planning. Remote monitoring capabilities enable proactive management of distributed battery installations.
                </p>
              </div>
              <img 
                src="https://images.unsplash.com/photo-1586771107445-d3ca888129ff?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400" 
                alt="Battery Monitoring System"
                className="w-full h-64 object-cover rounded-lg shadow-md"
              />
            </div>
          </CardContent>
        </Card>

        {/* Battery Types */}
        <Card className="mb-12 shadow-lg">
          <CardContent className="p-8">
            <h2 className="text-3xl font-bold emerald-blue mb-6">Battery Technology Solutions</h2>
            
            <div className="space-y-8">
              {batteryTypes.map((battery, index) => (
                <div key={index} className="border border-gray-200 rounded-lg p-6 hover:shadow-md transition-shadow">
                  <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                    <div className="lg:col-span-2">
                      <h3 className="text-xl font-bold mb-3 emerald-green">{battery.type}</h3>
                      <p className="text-gray-700 mb-4">{battery.description}</p>
                      
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                          <h4 className="font-semibold mb-2">Key Features:</h4>
                          <ul className="space-y-1">
                            {battery.features.map((feature, idx) => (
                              <li key={idx} className="flex items-center text-sm">
                                <CheckCircle className="h-3 w-3 text-emerald-green mr-2 flex-shrink-0" />
                                {feature}
                              </li>
                            ))}
                          </ul>
                        </div>
                        <div>
                          <h4 className="font-semibold mb-2">Applications:</h4>
                          <ul className="space-y-1">
                            {battery.applications.map((app, idx) => (
                              <li key={idx} className="flex items-center text-sm">
                                <CheckCircle className="h-3 w-3 text-emerald-blue mr-2 flex-shrink-0" />
                                {app}
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </div>
                    
                    <div className="flex items-center justify-center">
                      <Button 
                        onClick={() => window.open(battery.url, '_blank')}
                        className="bg-emerald-green hover:bg-emerald-success text-white px-6 py-3"
                      >
                        Learn More <ExternalLink className="h-4 w-4 ml-2" />
                      </Button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Where It's Used */}
        <Card className="mb-12 shadow-lg">
          <CardContent className="p-8">
            <h2 className="text-3xl font-bold emerald-blue mb-6">Where It's Used</h2>
            <div className="grid grid-cols-1 md:grid-cols-6 lg:grid-cols-6 gap-6">
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
                src="https://images.unsplash.com/photo-1581092160607-ee22621dd758?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400" 
                alt="Battery Monitoring Installation"
                className="w-full h-64 object-cover rounded-lg shadow-md"
              />
              <div>
                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <div className="bg-emerald-blue text-white rounded-full w-8 h-8 flex items-center justify-center font-semibold">1</div>
                    <div>
                      <h4 className="font-semibold">Assess Battery Infrastructure</h4>
                      <p className="text-sm text-gray-600">Evaluate existing battery systems and monitoring needs</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="bg-emerald-blue text-white rounded-full w-8 h-8 flex items-center justify-center font-semibold">2</div>
                    <div>
                      <h4 className="font-semibold">Design Monitoring Solution</h4>
                      <p className="text-sm text-gray-600">Select appropriate sensors and monitoring platforms</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="bg-emerald-blue text-white rounded-full w-8 h-8 flex items-center justify-center font-semibold">3</div>
                    <div>
                      <h4 className="font-semibold">Implement Generex Technology</h4>
                      <p className="text-sm text-gray-600">Deploy proven monitoring and conditioning systems</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="bg-emerald-blue text-white rounded-full w-8 h-8 flex items-center justify-center font-semibold">4</div>
                    <div>
                      <h4 className="font-semibold">Provide Ongoing Support</h4>
                      <p className="text-sm text-gray-600">Remote monitoring and maintenance optimization</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Generex Solutions */}
        <Card className="shadow-lg">
          <CardContent className="p-8">
            <h2 className="text-3xl font-bold emerald-blue mb-6">Generex Monitoring Solutions</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
              {solutions.map((solution, index) => (
                <div key={index} className="border border-gray-200 rounded-lg p-6 hover:shadow-lg transition-shadow">
                  <div className="flex items-center mb-4">
                    <Database className="h-8 w-8 text-emerald-green mr-3" />
                    <h3 className="text-lg font-bold">{solution.name}</h3>
                  </div>
                  <p className="text-gray-600 mb-4">{solution.description}</p>
                  <ul className="space-y-2 mb-6">
                    {solution.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center text-sm">
                        <CheckCircle className="h-3 w-3 text-emerald-green mr-2 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <Button 
                    variant="outline" 
                    onClick={() => window.open(solution.url, '_blank')}
                    className="w-full text-emerald-blue border-emerald-blue hover:bg-emerald-blue hover:text-white"
                  >
                    Learn More <ExternalLink className="h-4 w-4 ml-2" />
                  </Button>
                </div>
              ))}
            </div>

            {/* Monitoring Capabilities */}
            <div className="bg-emerald-green bg-opacity-10 rounded-lg p-6">
              <h3 className="text-xl font-bold mb-4 emerald-green">Comprehensive Monitoring Capabilities</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-semibold mb-3">Real-Time Monitoring:</h4>
                  <ul className="space-y-1 text-sm">
                    <li className="flex items-center"><CheckCircle className="h-3 w-3 text-emerald-green mr-2" />Individual cell voltage and temperature</li>
                    <li className="flex items-center"><CheckCircle className="h-3 w-3 text-emerald-green mr-2" />Battery string current and resistance</li>
                    <li className="flex items-center"><CheckCircle className="h-3 w-3 text-emerald-green mr-2" />Environmental conditions monitoring</li>
                    <li className="flex items-center"><CheckCircle className="h-3 w-3 text-emerald-green mr-2" />Cabinet security and access control</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold mb-3">Advanced Features:</h4>
                  <ul className="space-y-1 text-sm">
                    <li className="flex items-center"><CheckCircle className="h-3 w-3 text-emerald-green mr-2" />Predictive failure analysis</li>
                    <li className="flex items-center"><CheckCircle className="h-3 w-3 text-emerald-green mr-2" />Automated reporting and compliance</li>
                    <li className="flex items-center"><CheckCircle className="h-3 w-3 text-emerald-green mr-2" />Multi-site management platform</li>
                    <li className="flex items-center"><CheckCircle className="h-3 w-3 text-emerald-green mr-2" />Integration with building management systems</li>
                  </ul>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}