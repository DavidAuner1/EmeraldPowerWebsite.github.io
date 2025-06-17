import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { CheckCircle, ExternalLink, Battery, Zap, Shield, TrendingUp, Lightbulb } from "lucide-react";
import controlledPowerLogo from "@assets/ControlledPowerCompany_1749638488092.png";
import lightingInverter1 from "@assets/lightinginverter1_1750055183789.png";
import lightingInverter2 from "@assets/lightinginverter2_1750055183790.png";

export default function LightingInverters() {
  const manufacturers = [
    {
      name: "Trystar (Controlled Power Company)",
      logo: controlledPowerLogo,
      url: "https://www.trystar.com/brands/controlled-power-company/",
      products: ["HV Series Inverters", "MedPowerX UPS", "Emergency Lighting", "Power Conditioners"]
    }
  ];

  const certifications = [
    {
      standard: "UL 924",
      description: "Emergency Lighting Equipment and Auxiliary Lighting and Power Equipment",
      runtime: "90 minutes standard, alternative runtimes available (15+ minutes)",
      applications: ["Emergency egress lighting", "Generator-compatible systems", "Self-testing features"]
    },
    {
      standard: "UL 1778",
      description: "Uninterruptible Power Supply Equipment",
      runtime: "Variable based on application",
      applications: ["Critical lighting circuits", "Power conditioning", "Voltage regulation"]
    },
    {
      standard: "UL 60601",
      description: "Medical Electrical Equipment",
      runtime: "Medical-grade specifications",
      applications: ["Hospital lighting", "Medical facilities", "Life safety systems"]
    }
  ];

  const useCases = [
    { icon: "🏥", title: "Medical Power", description: "Medical-grade lighting systems for healthcare facilities" },
    { icon: "🚦", title: "Traffic Light Backup", description: "Battery backup systems for traffic control" },
    { icon: "🏢", title: "Emergency Egress", description: "Life safety lighting during power outages" },
    { icon: "🏭", title: "Industrial Facilities", description: "Critical area lighting protection" },
    { icon: "🏛️", title: "Government Buildings", description: "Security and safety lighting systems" },
    { icon: "⚡", title: "Power Conditioning", description: "Clean power for sensitive lighting loads" }
  ];

  const whyChoose = [
    { icon: Shield, title: "UL Listed Solutions", description: "Certified to UL 924, UL 1778, and UL 60601 standards" },
    { icon: TrendingUp, title: "Generator Compatible", description: "Seamless integration with backup generators" },
    { icon: Battery, title: "Self-Testing", description: "Automated testing and data logging per NFPA 101" },
    { icon: Lightbulb, title: "Versatile Applications", description: "Emergency, medical, and traffic lighting solutions" }
  ];

  const products = [
    {
      name: "HV Series Inverters",
      powerRange: "7.5 kVA - 25 kVA",
      features: ["High voltage applications", "Generator synchronization", "Advanced controls", "Remote monitoring"],
      url: "https://www.trystar.com/product/hv-series-7-5-kva-25-kva/",
      image: "https://images.unsplash.com/photo-1497515114629-f71d768fd07c?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=200"
    },
    {
      name: "MedPowerX Medical UPS",
      powerRange: "700VA - 2.1kVA",
      features: ["UL 60601 medical grade", "Isolated power", "Low leakage current", "Hospital approved"],
      url: "https://www.trystar.com/product/medpowerx-ups-model-lt-m-700va-2-1kva-medical-grade/",
      image: "https://images.unsplash.com/photo-1586771107445-d3ca888129ff?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=200"
    },
    {
      name: "Emergency Lighting Inverters",
      powerRange: "Multiple configurations",
      features: ["UL 924 listed", "90-minute runtime", "Self-testing capability", "Generator compatible"],
      url: "https://www.trystar.com/brands/controlled-power-company/",
      image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=200"
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Hero Section */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Lighting Inverters</h1>
          <p className="text-xl emerald-green font-semibold mb-6">Critical lighting protection for life safety and emergency applications.</p>
          
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
                  Lighting Inverters are specialized UPS systems designed to provide emergency backup power for critical lighting applications. These systems solve life safety challenges by ensuring continuous illumination during power outages, maintaining emergency egress lighting, and supporting medical-grade lighting requirements.
                </p>
                <p className="text-lg text-gray-700 leading-relaxed">
                  Certified to UL 924, UL 1778, and UL 60601 standards, these inverters provide reliable power conditioning and backup for emergency lighting, medical facilities, traffic control systems, and other critical lighting applications where uninterrupted operation is essential for safety and compliance.
                </p>
              </div>
              <img 
                src="https://images.unsplash.com/photo-1497515114629-f71d768fd07c?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400" 
                alt="Emergency Lighting System"
                className="w-full h-64 object-cover rounded-lg shadow-md"
              />
            </div>
          </CardContent>
        </Card>

        {/* UL Standards */}
        <Card className="mb-12 shadow-lg">
          <CardContent className="p-8">
            <h2 className="text-3xl font-bold emerald-blue mb-6">UL Certifications & Standards</h2>
            
            <div className="space-y-6">
              {certifications.map((cert, index) => (
                <div key={index} className="border-l-4 border-emerald-green pl-6 bg-gray-50 p-6 rounded-r-lg">
                  <h3 className="text-xl font-bold mb-2 emerald-green">{cert.standard}</h3>
                  <p className="text-gray-700 mb-3">{cert.description}</p>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <h4 className="font-semibold text-emerald-blue mb-2">Runtime Requirements</h4>
                      <p className="text-sm text-gray-600">{cert.runtime}</p>
                    </div>
                    <div>
                      <h4 className="font-semibold text-emerald-blue mb-2">Applications</h4>
                      <ul className="text-sm text-gray-600">
                        {cert.applications.map((app, idx) => (
                          <li key={idx} className="flex items-center">
                            <CheckCircle className="h-3 w-3 text-emerald-green mr-2" />
                            {app}
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
                src="https://images.unsplash.com/photo-1558618666-fcd25c85cd64?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400" 
                alt="Lighting Inverter Installation"
                className="w-full h-64 object-cover rounded-lg shadow-md"
              />
              <div>
                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <div className="bg-emerald-blue text-white rounded-full w-8 h-8 flex items-center justify-center font-semibold">1</div>
                    <div>
                      <h4 className="font-semibold">Assess Critical Lighting Requirements</h4>
                      <p className="text-sm text-gray-600">Evaluate emergency egress and life safety lighting needs</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="bg-emerald-blue text-white rounded-full w-8 h-8 flex items-center justify-center font-semibold">2</div>
                    <div>
                      <h4 className="font-semibold">Select Appropriate UL Listed Solution</h4>
                      <p className="text-sm text-gray-600">Choose UL 924, UL 1778, or UL 60601 certified systems</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="bg-emerald-blue text-white rounded-full w-8 h-8 flex items-center justify-center font-semibold">3</div>
                    <div>
                      <h4 className="font-semibold">Source from Trystar/Controlled Power</h4>
                      <p className="text-sm text-gray-600">Leverage proven emergency lighting technology</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="bg-emerald-blue text-white rounded-full w-8 h-8 flex items-center justify-center font-semibold">4</div>
                    <div>
                      <h4 className="font-semibold">Install and Commission System</h4>
                      <p className="text-sm text-gray-600">Complete testing and compliance verification</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Product Solutions */}
        <Card className="shadow-lg">
          <CardContent className="p-8">
            <h2 className="text-3xl font-bold emerald-blue mb-6">Trystar Lighting Solutions</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
              {products.map((product, index) => (
                <div key={index} className="border border-gray-200 rounded-lg p-6 hover:shadow-lg transition-shadow">
                  <img 
                    src={product.image} 
                    alt={product.name}
                    className="w-full h-40 object-cover rounded-lg mb-4"
                  />
                  <h3 className="text-lg font-bold mb-2">{product.name}</h3>
                  <div className="bg-emerald-green bg-opacity-10 p-3 rounded-lg mb-4">
                    <p className="text-sm font-semibold text-emerald-green">Power Range: {product.powerRange}</p>
                  </div>
                  <ul className="space-y-1 mb-4">
                    {product.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center text-sm">
                        <CheckCircle className="h-3 w-3 text-emerald-green mr-2 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <Button 
                    variant="outline" 
                    size="sm"
                    onClick={() => window.open(product.url, '_blank')}
                    className="w-full text-emerald-blue border-emerald-blue hover:bg-emerald-blue hover:text-white"
                  >
                    Learn More <ExternalLink className="h-3 w-3 ml-1" />
                  </Button>
                </div>
              ))}
            </div>

            {/* UL 924 Specification Highlight */}
            <div className="bg-emerald-green bg-opacity-10 rounded-lg p-6">
              <h3 className="text-xl font-bold mb-4 emerald-green">UL 924 Auxiliary Lighting and Power</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-semibold mb-2">Standard Features:</h4>
                  <ul className="space-y-1 text-sm">
                    <li className="flex items-center"><CheckCircle className="h-3 w-3 text-emerald-green mr-2" />90-minute battery runtime standard</li>
                    <li className="flex items-center"><CheckCircle className="h-3 w-3 text-emerald-green mr-2" />Alternative runtimes (15+ minutes) available</li>
                    <li className="flex items-center"><CheckCircle className="h-3 w-3 text-emerald-green mr-2" />Generator compatibility eliminates transfer delay</li>
                    <li className="flex items-center"><CheckCircle className="h-3 w-3 text-emerald-green mr-2" />Self-testing and data logging per NFPA 101</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">Applications:</h4>
                  <ul className="space-y-1 text-sm">
                    <li className="flex items-center"><CheckCircle className="h-3 w-3 text-emerald-green mr-2" />Emergency egress lighting systems</li>
                    <li className="flex items-center"><CheckCircle className="h-3 w-3 text-emerald-green mr-2" />Generator-based emergency lighting</li>
                    <li className="flex items-center"><CheckCircle className="h-3 w-3 text-emerald-green mr-2" />Sensitive electronic lighting loads</li>
                    <li className="flex items-center"><CheckCircle className="h-3 w-3 text-emerald-green mr-2" />Critical always-on lighting circuits</li>
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