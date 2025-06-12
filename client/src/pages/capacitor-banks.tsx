import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { CheckCircle, ExternalLink, Battery, Zap, Shield, TrendingUp } from "lucide-react";

export default function CapacitorBanks() {
  const useCases = [
    { icon: "🏭", title: "Industrial Facilities", description: "Power factor correction for manufacturing plants" },
    { icon: "⚡", title: "Utility Systems", description: "Grid stabilization and voltage support" },
    { icon: "🏢", title: "Commercial Buildings", description: "Energy efficiency optimization" },
    { icon: "🔌", title: "Motor Drives", description: "Reactive power compensation" },
    { icon: "🏗️", title: "Construction Sites", description: "Temporary power factor correction" },
    { icon: "🌐", title: "Distribution Networks", description: "Grid power quality improvement" }
  ];

  const whyChoose = [
    { icon: Shield, title: "Power Factor Correction", description: "Improve efficiency and reduce utility penalties" },
    { icon: TrendingUp, title: "Energy Savings", description: "Reduce reactive power demand charges" },
    { icon: Battery, title: "Voltage Stabilization", description: "Maintain consistent voltage levels" },
    { icon: Zap, title: "Grid Support", description: "Provide reactive power support to electrical systems" }
  ];

  const benefits = [
    "Improved power factor efficiency",
    "Reduced energy costs and utility penalties",
    "Enhanced voltage stability",
    "Increased system capacity",
    "Reduced harmonic distortion",
    "Extended equipment life"
  ];

  const applications = [
    {
      category: "Industrial Power Factor Correction",
      description: "Large motor loads and inductive equipment compensation",
      powerRange: "50 kVAR - 10 MVAR",
      features: ["Automatic switching", "Harmonic filtering", "Protection systems", "Remote monitoring"]
    },
    {
      category: "Utility Grid Support",
      description: "Transmission and distribution voltage support",
      powerRange: "1 MVAR - 100 MVAR",
      features: ["High voltage rated", "Weather resistant", "SCADA integration", "Fault protection"]
    },
    {
      category: "Commercial Building Systems",
      description: "HVAC and lighting load power factor improvement",
      powerRange: "25 kVAR - 500 kVAR",
      features: ["Modular design", "Space efficient", "Low maintenance", "Energy monitoring"]
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Hero Section */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Capacitor Banks</h1>
          <p className="text-xl emerald-green font-semibold mb-6">Power factor correction and reactive power compensation solutions.</p>
        </div>

        {/* What It Is */}
        <Card className="mb-12 shadow-lg">
          <CardContent className="p-8">
            <h2 className="text-3xl font-bold emerald-blue mb-6">What It Is</h2>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
              <div>
                <p className="text-lg text-gray-700 leading-relaxed mb-4">
                  Capacitor Banks are electrical systems that provide reactive power compensation to improve power factor and voltage stability in electrical networks. These systems solve power quality problems by reducing reactive power demand, improving system efficiency, and eliminating utility power factor penalties.
                </p>
                <p className="text-lg text-gray-700 leading-relaxed">
                  Available in fixed and automatic switching configurations from 25 kVAR to 100+ MVAR, capacitor banks provide essential grid support functions, voltage regulation, and energy cost reduction for industrial, commercial, and utility applications requiring improved power quality and efficiency.
                </p>
              </div>
              <img 
                src="https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400" 
                alt="Capacitor Bank Installation"
                className="w-full h-64 object-cover rounded-lg shadow-md"
              />
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
                alt="Power Factor Analysis"
                className="w-full h-64 object-cover rounded-lg shadow-md"
              />
              <div>
                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <div className="bg-emerald-blue text-white rounded-full w-8 h-8 flex items-center justify-center font-semibold">1</div>
                    <div>
                      <h4 className="font-semibold">Analyze Power Factor and Load Profile</h4>
                      <p className="text-sm text-gray-600">Comprehensive electrical system assessment and power quality analysis</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="bg-emerald-blue text-white rounded-full w-8 h-8 flex items-center justify-center font-semibold">2</div>
                    <div>
                      <h4 className="font-semibold">Design Optimal Capacitor Solution</h4>
                      <p className="text-sm text-gray-600">Calculate required reactive power compensation and switching strategy</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="bg-emerald-blue text-white rounded-full w-8 h-8 flex items-center justify-center font-semibold">3</div>
                    <div>
                      <h4 className="font-semibold">Source Quality Components</h4>
                      <p className="text-sm text-gray-600">Partner with leading capacitor and control manufacturers</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="bg-emerald-blue text-white rounded-full w-8 h-8 flex items-center justify-center font-semibold">4</div>
                    <div>
                      <h4 className="font-semibold">Install and Commission System</h4>
                      <p className="text-sm text-gray-600">Professional installation with testing and optimization</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Applications */}
        <Card className="mb-12 shadow-lg">
          <CardContent className="p-8">
            <h2 className="text-3xl font-bold emerald-blue mb-6">Capacitor Bank Applications</h2>
            
            <div className="space-y-6">
              {applications.map((app, index) => (
                <div key={index} className="border border-gray-200 rounded-lg p-6 hover:shadow-md transition-shadow">
                  <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                    <div className="lg:col-span-2">
                      <h3 className="text-xl font-bold mb-3 emerald-green">{app.category}</h3>
                      <p className="text-gray-700 mb-4">{app.description}</p>
                      <div className="bg-emerald-blue bg-opacity-10 p-3 rounded-lg mb-4">
                        <p className="text-sm font-semibold text-emerald-blue">Power Range: {app.powerRange}</p>
                      </div>
                    </div>
                    
                    <div>
                      <h4 className="font-semibold mb-3">Key Features:</h4>
                      <ul className="space-y-2">
                        {app.features.map((feature, idx) => (
                          <li key={idx} className="flex items-center text-sm">
                            <CheckCircle className="h-3 w-3 text-emerald-green mr-2 flex-shrink-0" />
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Benefits */}
        <Card className="shadow-lg">
          <CardContent className="p-8">
            <h2 className="text-3xl font-bold emerald-blue mb-6">System Benefits</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {benefits.map((benefit, index) => (
                <div key={index} className="bg-emerald-green bg-opacity-10 rounded-lg p-4 text-center">
                  <CheckCircle className="h-6 w-6 text-emerald-green mx-auto mb-2" />
                  <p className="text-sm font-medium text-gray-700">{benefit}</p>
                </div>
              ))}
            </div>

            <div className="mt-8 bg-gray-50 rounded-lg p-6">
              <h3 className="text-xl font-bold mb-4 emerald-blue">Power Factor Correction Benefits</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-semibold mb-3 text-emerald-green">Economic Benefits:</h4>
                  <ul className="space-y-1 text-sm">
                    <li>• Reduced utility demand charges and power factor penalties</li>
                    <li>• Lower energy costs through improved efficiency</li>
                    <li>• Increased system capacity without infrastructure upgrades</li>
                    <li>• Extended equipment life and reduced maintenance costs</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold mb-3 text-emerald-green">Technical Benefits:</h4>
                  <ul className="space-y-1 text-sm">
                    <li>• Improved voltage stability and regulation</li>
                    <li>• Reduced line losses and heating</li>
                    <li>• Enhanced power quality and reliability</li>
                    <li>• Support for additional loads on existing systems</li>
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