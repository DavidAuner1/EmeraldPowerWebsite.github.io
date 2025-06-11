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
import epcPowerImage from "@assets/EPC Power CAB1000 PCS_1749633471196.png";
import intensiumShiftImage from "@assets/Intensium Shift Energy Storage Lineup_1749633556051.png";

import TELogo from "@assets/TotalEnergy.png";

import EpcLogo from "@assets/EpcPower.png";

export default function BatteryEnergyStorage() {
  const manufacturers = [
    {
      name: "Total Energies (Saft)",
      logo: TELogo,
      url: "https://totalenergies.com/",
      products: ["Intensium Shift", "I-Shift Battery Systems"],
    },
    {
      name: "EPC Power",
      logo: EpcLogo,
      url: "https://epcpower.com/",
      products: ["CAB1000 Storage Inverter"],
    },
  ];

  const useCases = [
    {
      icon: "🏥",
      title: "Hospitals",
      description: "Critical power backup for life-saving equipment",
    },
    {
      icon: "🏢",
      title: "Data Centers",
      description: "Uninterrupted power for mission-critical servers",
    },
    {
      icon: "🏭",
      title: "Industrial Manufacturing",
      description: "Power continuity for production lines",
    },
    {
      icon: "📡",
      title: "Telecom Facilities",
      description: "Reliable communication infrastructure",
    },
    {
      icon: "🏛️",
      title: "Government Buildings",
      description: "Essential services continuity",
    },
    {
      icon: "🔋",
      title: "Renewable Integration",
      description: "Grid stabilization and energy shifting",
    },
  ];

  const whyChoose = [
    {
      icon: Shield,
      title: "Proven Reliability",
      description: "99%+ uptime with redundant systems",
    },
    {
      icon: TrendingUp,
      title: "Cost Effective",
      description: "Lower TCO over 20-year lifecycle",
    },
    {
      icon: Battery,
      title: "Scalable Solutions",
      description: "From 1MW to Gigawatt-hour systems",
    },
    {
      icon: Zap,
      title: "Fast Response",
      description: "<150ms response time for grid support",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Hero Section */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Battery Energy Storage Systems
          </h1>
          <p className="text-xl emerald-green font-semibold mb-6">
            Power continuity when it matters most.
          </p>

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
            <h2 className="text-3xl font-bold emerald-blue mb-6">What It Is</h2>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
              <div>
                <p className="text-lg text-gray-700 leading-relaxed mb-4">
                  Battery Energy Storage Systems (BESS) are large-scale
                  lithium-ion battery installations that store electrical energy
                  for later use. These systems solve the critical problem of
                  power reliability and grid stability by providing instant
                  backup power during outages and helping balance supply and
                  demand on the electrical grid.
                </p>
                <p className="text-lg text-gray-700 leading-relaxed">
                  Our containerized solutions range from 1MW to multi-gigawatt
                  installations, featuring advanced battery management systems,
                  power conversion equipment, and intelligent controls that
                  seamlessly integrate with existing infrastructure to deliver
                  reliable, clean energy when you need it most.
                </p>
              </div>
              <img
                src={intensiumShiftImage}
                alt="Intensium Shift Energy Storage System"
                className="w-full h-full object-cover rounded-lg shadow-md"
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
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
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
                src={epcPowerImage}
                alt="EPC Power CAB1000 Storage Inverter"
                className="w-full h-full object-cover rounded-lg shadow-md"
              />
              <div>
                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <div className="bg-emerald-blue text-white rounded-full w-8 h-8 flex items-center justify-center font-semibold">
                      1
                    </div>
                    <div>
                      <h4 className="font-semibold">
                        Assess Your Facility's Power Needs
                      </h4>
                      <p className="text-sm text-gray-600">
                        Comprehensive energy audit and load analysis
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="bg-emerald-blue text-white rounded-full w-8 h-8 flex items-center justify-center font-semibold">
                      2
                    </div>
                    <div>
                      <h4 className="font-semibold">
                        Recommend the Best-Fit Solution
                      </h4>
                      <p className="text-sm text-gray-600">
                        Customized system design based on your requirements
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="bg-emerald-blue text-white rounded-full w-8 h-8 flex items-center justify-center font-semibold">
                      3
                    </div>
                    <div>
                      <h4 className="font-semibold">
                        Coordinate with Trusted Manufacturers
                      </h4>
                      <p className="text-sm text-gray-600">
                        Direct partnerships with Saft, EPC Power, and other
                        leaders
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="bg-emerald-blue text-white rounded-full w-8 h-8 flex items-center justify-center font-semibold">
                      4
                    </div>
                    <div>
                      <h4 className="font-semibold">
                        Oversee Delivery and Installation
                      </h4>
                      <p className="text-sm text-gray-600">
                        Complete project management and commissioning
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Product Specifications */}
        <Card className="shadow-lg">
          <CardContent className="p-8">
            <h2 className="text-3xl font-bold emerald-blue mb-6">
              Featured Products
            </h2>

            <div className="space-y-8">
              {/* Saft Intensium Shift */}
              <div className="border-l-4 border-emerald-green pl-6">
                <h3 className="text-2xl font-bold mb-4">
                  Saft Intensium® Shift
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
                  <div className="bg-emerald-green bg-opacity-10 p-4 rounded-lg">
                    <h4 className="font-semibold">Energy Capacity</h4>
                    <p className="text-2xl font-bold emerald-green">3.0 MWh</p>
                    <p className="text-sm text-gray-600">Per container</p>
                  </div>
                  <div className="bg-emerald-blue bg-opacity-10 p-4 rounded-lg">
                    <h4 className="font-semibold">Voltage Range</h4>
                    <p className="text-2xl font-bold emerald-blue">1500V</p>
                    <p className="text-sm text-gray-600">High voltage LFP</p>
                  </div>
                  <div className="bg-gray-100 p-4 rounded-lg">
                    <h4 className="font-semibold">Applications</h4>
                    <p className="text-lg font-bold">2-8 Hours</p>
                    <p className="text-sm text-gray-600">Energy shifting</p>
                  </div>
                </div>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-emerald-green mr-2" />
                    Modular containerized design for easy transport and
                    installation
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-emerald-green mr-2" />
                    Advanced thermal management and safety systems
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-emerald-green mr-2" />
                    Lithium Iron Phosphate (LFP) technology for enhanced safety
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-emerald-green mr-2" />
                    Intensium Sight® cloud-based monitoring platform
                  </li>
                </ul>
              </div>

              {/* EPC Power CAB1000 */}
              <div className="border-l-4 border-emerald-blue pl-6">
                <h3 className="text-2xl font-bold mb-4">
                  EPC Power CAB1000/AC
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
                  <div className="bg-emerald-blue bg-opacity-10 p-4 rounded-lg">
                    <h4 className="font-semibold">Power Range</h4>
                    <p className="text-2xl font-bold emerald-blue">1-6 MW</p>
                    <p className="text-sm text-gray-600">Scalable blocks</p>
                  </div>
                  <div className="bg-emerald-green bg-opacity-10 p-4 rounded-lg">
                    <h4 className="font-semibold">Efficiency</h4>
                    <p className="text-2xl font-bold emerald-green">99%</p>
                    <p className="text-sm text-gray-600">Max conversion</p>
                  </div>
                  <div className="bg-gray-100 p-4 rounded-lg">
                    <h4 className="font-semibold">DC Voltage</h4>
                    <p className="text-lg font-bold">1500V</p>
                    <p className="text-sm text-gray-600">Up to 1500 VDC</p>
                  </div>
                </div>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-emerald-green mr-2" />
                    Utility-grade storage inverter for large-scale applications
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-emerald-green mr-2" />
                    Modular 1-1.5 MW blocks for flexible configuration
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-emerald-green mr-2" />
                    Standard freight shipping - no crane required
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-emerald-green mr-2" />
                    UL1741/IEC certified with parallel UPS functionality
                  </li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
