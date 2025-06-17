import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { CheckCircle, ExternalLink, Battery, Zap, Shield, TrendingUp } from "lucide-react";
import activePowerLogo from "@assets/ActivePower_1749638488090.png";
import mitsubishiLogo from "@assets/MistobishiElectric_1749638512914.png";
import toshibaLogo from "@assets/Toshiba_1749638508954.png";
import toshiba4400Image from "@assets/4400 Series 3 Phase UPS_1750054548773.jpg";
import mitsubishi1100Image from "@assets/1100 Series 3 phase UPS Compact, Modular UPS Ideal for Server Rooms & IT Backup_1750054548769.png";
import mitsubishi9900Image from "@assets/9900AEGIS Energy Efficient Three Phase UPS_1750054548773.jpg";
import toshibaG9400Image from "@assets/G9400 Series UPS_1750054548774.jpg";

export default function ThreePhaseStaticUPS() {
  const manufacturers = [
    {
      name: "Active Power",
      logo: activePowerLogo,
      url: "https://www.activepower.com/",
      products: ["CleanSource SMS Plus", "CleanSource Plus MMS", "CleanSource XT MMS", "CleanSource HD", "PowerHouse", "GenStart"]
    },
    {
      name: "Mitsubishi Critical",
      logo: mitsubishiLogo,
      url: "https://mitsubishicritical.com/",
      products: ["Three Phase UPS Systems", "Industrial UPS", "Medical Grade UPS"]
    },
    {
      name: "Toshiba",
      logo: toshibaLogo,
      url: "https://www.toshiba.com/tic/",
      products: ["4400 Series 3-Phase UPS", "Power Electronics Systems", "Industrial UPS Solutions"]
    }
  ];

  const useCases = [
    { icon: "🏥", title: "Medical Equipment", description: "Life-critical medical systems and equipment", url: "https://mitsubishicritical.com/applications/medical-equipment/" },
    { icon: "🏢", title: "Data Centers", description: "High-density server and storage protection", url: "https://mitsubishicritical.com/applications/data-centers/" },
    { icon: "🏭", title: "Manufacturing", description: "Process control and automation systems", url: "https://mitsubishicritical.com/applications/manufacturing/" },
    { icon: "📡", title: "Telecom Facilities", description: "Network infrastructure and communications" },
    { icon: "🏛️", title: "Government Buildings", description: "Security and mission-critical systems" },
    { icon: "🔋", title: "FESS Applications", description: "Flywheel Energy Storage System integration" }
  ];

  const whyChoose = [
    { icon: Shield, title: "FESS Technology", description: "Flywheel Energy Storage for maintenance-free backup power" },
    { icon: TrendingUp, title: "Modular Scalability", description: "Expand capacity as your facility grows" },
    { icon: Battery, title: "High Efficiency", description: "Advanced power conversion with minimal losses" },
    { icon: Zap, title: "Fast Transfer", description: "Seamless power transfer with zero interruption" }
  ];

  const activePowerProducts = [
    {
      name: "CleanSource SMS Plus UPS",
      powerRange: "225-900 kVA",
      features: ["Flywheel energy storage", "Maintenance-free operation", "Green technology", "Compact footprint"],
      url: "https://www.activepower.com/product/cleansource-sms-plus-ups/",
      image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=200"
    },
    {
      name: "CleanSource Plus MMS",
      powerRange: "300-1800 kVA",
      features: ["Modular design", "N+1 redundancy", "Flywheel backup", "Hot-swappable modules"],
      url: "https://www.activepower.com/product/cleansource-plus-mms/",
      image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=200"
    },
    {
      name: "CleanSource XT MMS",
      powerRange: "400-2400 kVA",
      features: ["Extended runtime", "High power density", "Advanced controls", "Remote monitoring"],
      url: "https://www.activepower.com/product/cleansource-xt-mms/",
      image: "https://images.unsplash.com/photo-1621905251189-08b45d6a269e?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=200"
    },
    {
      name: "CleanSource HD UPS",
      powerRange: "500-1000 kVA",
      features: ["Heavy-duty design", "Industrial applications", "Harsh environment rated", "Long service life"],
      url: "https://www.activepower.com/product/cleansource-hd-ups/",
      image: "https://images.unsplash.com/photo-1581092160607-ee22621dd758?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=200"
    },
    {
      name: "PowerHouse UPS",
      powerRange: "1-3 MW",
      features: ["Megawatt-scale power", "Container solutions", "Grid support functions", "Energy storage integration"],
      url: "https://www.activepower.com/product/powerhouse-ups/",
      image: "https://images.unsplash.com/photo-1497515114629-f71d768fd07c?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=200"
    },
    {
      name: "GenStart",
      powerRange: "Variable",
      features: ["Generator starting system", "Fast response", "Reduced fuel consumption", "Extended generator life"],
      url: "https://www.activepower.com/product/genstart/",
      image: "https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=200"
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Hero Section */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Three Phase Static UPS Systems</h1>
          <p className="text-xl emerald-green font-semibold mb-6">Advanced static power protection with flywheel energy storage.</p>
          
          {/* Featured Manufacturers */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
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
                    {manufacturer.products.slice(0, 3).map((product, idx) => (
                      <li key={idx}>• {product}</li>
                    ))}
                    {manufacturer.products.length > 3 && <li>• And more...</li>}
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
                  Three Phase Static UPS systems use advanced power electronics and flywheel energy storage (FESS) to provide clean, uninterrupted power protection. These systems solve power quality issues through double conversion technology while using maintenance-free flywheel backup instead of traditional batteries.
                </p>
                <p className="text-lg text-gray-700 leading-relaxed">
                  Available in modular configurations from 225 kVA to 3 MW, these systems offer superior efficiency, scalability, and reliability for mission-critical applications requiring the highest levels of power protection and environmental sustainability.
                </p>
              </div>
              <img 
                src="https://images.unsplash.com/photo-1558618666-fcd25c85cd64?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400" 
                alt="Static UPS System"
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
                  <p className="text-sm text-gray-600 mb-3">{useCase.description}</p>
                  <CheckCircle className="h-5 w-5 text-emerald-green mx-auto mb-2" />
                  {useCase.url && (
                    <Button 
                      variant="ghost" 
                      size="sm"
                      onClick={() => window.open(useCase.url, '_blank')}
                      className="text-xs text-emerald-blue"
                    >
                      Learn More <ExternalLink className="h-3 w-3 ml-1" />
                    </Button>
                  )}
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
                src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400" 
                alt="Static UPS Installation"
                className="w-full h-64 object-cover rounded-lg shadow-md"
              />
              <div>
                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <div className="bg-emerald-blue text-white rounded-full w-8 h-8 flex items-center justify-center font-semibold">1</div>
                    <div>
                      <h4 className="font-semibold">Analyze Critical Load Requirements</h4>
                      <p className="text-sm text-gray-600">Detailed power quality assessment and load analysis</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="bg-emerald-blue text-white rounded-full w-8 h-8 flex items-center justify-center font-semibold">2</div>
                    <div>
                      <h4 className="font-semibold">Design Optimal Static UPS Solution</h4>
                      <p className="text-sm text-gray-600">Select FESS or battery backup based on application needs</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="bg-emerald-blue text-white rounded-full w-8 h-8 flex items-center justify-center font-semibold">3</div>
                    <div>
                      <h4 className="font-semibold">Partner with Leading Manufacturers</h4>
                      <p className="text-sm text-gray-600">Active Power and Mitsubishi Critical expertise</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="bg-emerald-blue text-white rounded-full w-8 h-8 flex items-center justify-center font-semibold">4</div>
                    <div>
                      <h4 className="font-semibold">Complete System Integration</h4>
                      <p className="text-sm text-gray-600">Full installation, testing, and commissioning services</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>


        {/* Active Power Products */}
        <Card className="mb-12 shadow-lg">
          <CardContent className="p-8">
            <div className="flex items-center mb-6">
              <img 
                src={activePowerLogo} 
                alt="Active Power"
                className="h-12 mr-4"
              />
              <h2 className="text-3xl font-bold emerald-blue">Active Power FESS Solutions</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="border border-gray-200 rounded-lg p-6 hover:shadow-lg transition-shadow">
                <img 
                  src="https://images.unsplash.com/photo-1558618666-fcd25c85cd64?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=300" 
                  alt="CleanSource SMS Plus"
                  className="w-full h-48 object-cover rounded-lg mb-4"
                />
                <h3 className="text-lg font-bold mb-2">CleanSource SMS Plus</h3>
                <div className="bg-emerald-green bg-opacity-10 p-3 rounded-lg mb-4">
                  <p className="text-sm font-semibold text-emerald-green">Power Range: 225-675 kVA</p>
                </div>
                <Button 
                  variant="outline" 
                  size="sm"
                  onClick={() => window.open('https://www.activepower.com/', '_blank')}
                  className="w-full text-emerald-blue border-emerald-blue hover:bg-emerald-blue hover:text-white"
                >
                  Learn More <ExternalLink className="ml-2 h-4 w-4" />
                </Button>
              </div>
              <div className="border border-gray-200 rounded-lg p-6 hover:shadow-lg transition-shadow">
                <img 
                  src="https://images.unsplash.com/photo-1558618666-fcd25c85cd64?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=300" 
                  alt="CleanSource HD"
                  className="w-full h-48 object-cover rounded-lg mb-4"
                />
                <h3 className="text-lg font-bold mb-2">CleanSource HD</h3>
                <div className="bg-emerald-green bg-opacity-10 p-3 rounded-lg mb-4">
                  <p className="text-sm font-semibold text-emerald-green">Power Range: 900-2000 kVA</p>
                </div>
                <Button 
                  variant="outline" 
                  size="sm"
                  onClick={() => window.open('https://www.activepower.com/', '_blank')}
                  className="w-full text-emerald-blue border-emerald-blue hover:bg-emerald-blue hover:text-white"
                >
                  Learn More <ExternalLink className="ml-2 h-4 w-4" />
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Mitsubishi Electric Products */}
        <Card className="mb-12 shadow-lg">
          <CardContent className="p-8">
            <div className="flex items-center mb-6">
              <img 
                src={mitsubishiLogo} 
                alt="Mitsubishi Electric"
                className="h-12 mr-4"
              />
              <h2 className="text-3xl font-bold emerald-blue">Mitsubishi Critical Power Solutions</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="border border-gray-200 rounded-lg p-6 hover:shadow-lg transition-shadow">
                <img 
                  src={mitsubishi9900Image} 
                  alt="9900AEGIS UPS"
                  className="w-full h-48 object-cover rounded-lg mb-4"
                />
                <h3 className="text-lg font-bold mb-2">9900AEGIS UPS</h3>
                <div className="bg-red-50 p-3 rounded-lg mb-4">
                  <p className="text-sm font-semibold text-red-700">Energy Efficient Three Phase UPS</p>
                </div>
                <Button 
                  variant="outline" 
                  size="sm"
                  onClick={() => window.open('https://mitsubishicritical.com/uninterruptible-power-supplies/9900aegis-ups/', '_blank')}
                  className="w-full text-emerald-blue border-emerald-blue hover:bg-emerald-blue hover:text-white"
                >
                  Learn More <ExternalLink className="ml-2 h-4 w-4" />
                </Button>
              </div>
              <div className="border border-gray-200 rounded-lg p-6 hover:shadow-lg transition-shadow">
                <img 
                  src={mitsubishi1100Image} 
                  alt="Diamond Plus 1100 Series UPS"
                  className="w-full h-48 object-cover rounded-lg mb-4"
                />
                <h3 className="text-lg font-bold mb-2">Diamond Plus 1100 Series UPS</h3>
                <div className="bg-red-50 p-3 rounded-lg mb-4">
                  <p className="text-sm font-semibold text-red-700">Compact, Modular UPS for Server Rooms</p>
                </div>
                <Button 
                  variant="outline" 
                  size="sm"
                  onClick={() => window.open('https://mitsubishicritical.com/uninterruptible-power-supplies/diamond-plus-1100-series-ups/', '_blank')}
                  className="w-full text-emerald-blue border-emerald-blue hover:bg-emerald-blue hover:text-white"
                >
                  Learn More <ExternalLink className="ml-2 h-4 w-4" />
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Toshiba Products */}
        <Card className="mb-12 shadow-lg">
          <CardContent className="p-8">
            <div className="flex items-center mb-6">
              <img 
                src={toshibaLogo} 
                alt="Toshiba"
                className="h-12 mr-4"
              />
              <h2 className="text-3xl font-bold emerald-blue">Toshiba Power Electronics</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="border border-gray-200 rounded-lg p-6 hover:shadow-lg transition-shadow">
                <img 
                  src={toshibaG9400Image} 
                  alt="G9400 Series UPS"
                  className="w-full h-48 object-cover rounded-lg mb-4"
                />
                <h3 className="text-lg font-bold mb-2">G9400 Series UPS</h3>
                <div className="bg-red-50 p-3 rounded-lg mb-4">
                  <p className="text-sm font-semibold text-red-700">High Performance Three Phase UPS</p>
                </div>
                <Button 
                  variant="outline" 
                  size="sm"
                  onClick={() => window.open('https://www.toshiba.com/tic/power-electronics/uninterruptible-power-systems/three-phase/g9400-series-ups', '_blank')}
                  className="w-full text-emerald-blue border-emerald-blue hover:bg-emerald-blue hover:text-white"
                >
                  Learn More <ExternalLink className="ml-2 h-4 w-4" />
                </Button>
              </div>
              <div className="border border-gray-200 rounded-lg p-6 hover:shadow-lg transition-shadow">
                <img 
                  src={toshiba4400Image} 
                  alt="4400 Series 3-Phase UPS"
                  className="w-full h-48 object-cover rounded-lg mb-4"
                />
                <h3 className="text-lg font-bold mb-2">4400 Series 3-Phase UPS</h3>
                <div className="bg-red-50 p-3 rounded-lg mb-4">
                  <p className="text-sm font-semibold text-red-700">Advanced Digital Signal Processing</p>
                </div>
                <Button 
                  variant="outline" 
                  size="sm"
                  onClick={() => window.open('https://www.toshiba.com/tic/power-electronics/uninterruptible-power-systems/three-phase/4400-series-3-phase-ups', '_blank')}
                  className="w-full text-emerald-blue border-emerald-blue hover:bg-emerald-blue hover:text-white"
                >
                  Learn More <ExternalLink className="ml-2 h-4 w-4" />
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}