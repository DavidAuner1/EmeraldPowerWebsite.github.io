import { Card, CardContent } from "@/components/ui/card";
import { Recycle, Leaf, Shield, TrendingUp, CheckCircle, Truck, Factory } from "lucide-react";

export default function Recycling() {
  const processSteps = [
    {
      title: "Collection & Transportation",
      icon: Truck,
      items: [
        "Professional de-installation and rigging",
        "Safe removal and packaging",
        "Secure logistics and transportation",
        "Temporary storage when needed"
      ]
    },
    {
      title: "Recycling & Documentation",
      icon: Factory,
      items: [
        "Processing at certified smelting facilities",
        "98% of battery material reused (100% of lead)",
        "Complete chain of custody documentation",
        "Transfer of ownership certificates provided"
      ]
    }
  ];

  const benefits = [
    {
      title: "Environmental Compliance",
      description: "Stay compliant with environmental regulations while protecting your business from liability.",
      image: "https://images.unsplash.com/photo-1532996122724-e3c354a0b15b?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=200",
      icon: Shield
    },
    {
      title: "Turnkey Solution",
      description: "Complete service from removal to recycling with full liability protection and documentation.",
      image: "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=200",
      icon: CheckCircle
    },
    {
      title: "Resource Recovery",
      description: "Maximum material recovery ensures valuable resources return to the manufacturing cycle.",
      image: "https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=200",
      icon: TrendingUp
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Hero Section */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Battery Recycling Program</h1>
          <div className="flex items-center justify-center mb-4">
            <Recycle className="h-8 w-8 emerald-green mr-3" />
            <p className="text-2xl emerald-green font-bold">98% Battery Recycling Rate</p>
          </div>
          <p className="text-lg text-gray-600">Leading the industry in environmental responsibility and sustainable power solutions</p>
        </div>

        {/* Main Content */}
        <Card className="mb-12 shadow-lg">
          <CardContent className="p-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center mb-8">
              <img 
                src="https://images.unsplash.com/photo-1611273426858-450d8e3c9fce?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400" 
                alt="Battery Recycling Facility" 
                className="w-full h-64 object-cover rounded-lg shadow-md"
              />
              <div>
                <h2 className="text-3xl font-bold emerald-green mb-4 flex items-center">
                  <Leaf className="h-8 w-8 mr-3" />
                  Comprehensive Recycling Services
                </h2>
                <p className="text-lg text-gray-700 leading-relaxed">
                  Emerald Power's comprehensive UPS battery recycling services include de-installation, rigging, removal, 
                  logistics, transportation, storage, and recycling—everything you need to make your UPS battery removal 
                  project run seamlessly while protecting the environment.
                </p>
              </div>
            </div>

            {/* Process Section */}
            <div className="bg-emerald-green bg-opacity-10 rounded-lg p-6 mb-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Our Recycling Process</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {processSteps.map((step, index) => (
                  <div key={index}>
                    <div className="flex items-center mb-3">
                      <step.icon className="h-6 w-6 emerald-green mr-3" />
                      <h4 className="text-lg font-semibold emerald-green">{step.title}</h4>
                    </div>
                    <ul className="space-y-2">
                      {step.items.map((item, itemIndex) => (
                        <li key={itemIndex} className="flex items-start text-gray-700">
                          <CheckCircle className="h-4 w-4 text-emerald-green mr-2 mt-0.5 flex-shrink-0" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>

            {/* Environmental Commitment */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Environmental Leadership</h3>
                <p className="text-gray-700 mb-4 leading-relaxed">
                  At Emerald Power, we're dedicated to reducing carbon footprint and helping customers maximize their 
                  power efficiency while minimizing environmental impact. Our commitment to sustainability goes beyond 
                  just providing power solutions—we ensure responsible end-of-life management for all equipment.
                </p>
                <p className="text-gray-700 mb-4 leading-relaxed">
                  Battery recycling is done through one of three smelting facilities we use, where 98% of the battery 
                  is reused (100% of the lead) and repurposed for future battery manufacturing. Upon unloading of the 
                  batteries to these facilities, Emerald Power is given paperwork to document the transfer of ownership 
                  to the recycling facility, which we will provide to you (the customer).
                </p>
                <div className="bg-emerald-green text-white p-4 rounded-lg">
                  <p className="font-semibold text-center">Emerald Power: For a "Greener Future!"</p>
                </div>
              </div>
              <img 
                src="https://images.unsplash.com/photo-1472214103451-9374bd1c798e?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400" 
                alt="Environmental Protection" 
                className="w-full h-64 object-cover rounded-lg shadow-md"
              />
            </div>
          </CardContent>
        </Card>

        {/* Benefits Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          {benefits.map((benefit, index) => (
            <Card key={index} className="hover:shadow-lg transition-shadow">
              <CardContent className="p-6 text-center">
                <img 
                  src={benefit.image} 
                  alt={benefit.title} 
                  className="w-full h-32 object-cover rounded-lg mb-4"
                />
                <div className="flex items-center justify-center mb-3">
                  <benefit.icon className="h-6 w-6 emerald-green mr-2" />
                  <h4 className="text-lg font-bold emerald-green">{benefit.title}</h4>
                </div>
                <p className="text-sm text-gray-600">{benefit.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Additional Benefits Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          <Card className="hover:shadow-lg transition-shadow">
            <CardContent className="p-6">
              <img 
                src="https://images.unsplash.com/photo-1569163139394-de4e4f43e4e5?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=200" 
                alt="Electronic Waste Management" 
                className="w-full h-32 object-cover rounded-lg mb-4"
              />
              <h4 className="text-lg font-bold emerald-blue mb-2">Electronic Waste Management</h4>
              <p className="text-sm text-gray-600">
                Comprehensive management of electronic waste including batteries, UPS systems, and related infrastructure 
                with full environmental compliance and documentation.
              </p>
            </CardContent>
          </Card>
          
          <Card className="hover:shadow-lg transition-shadow">
            <CardContent className="p-6">
              <img 
                src="https://images.unsplash.com/photo-1581092160607-ee22621dd758?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=200" 
                alt="Sustainable Technology" 
                className="w-full h-32 object-cover rounded-lg mb-4"
              />
              <h4 className="text-lg font-bold emerald-green mb-2">Sustainable Technology</h4>
              <p className="text-sm text-gray-600">
                Leading-edge recycling technology ensures maximum material recovery while minimizing environmental 
                impact throughout the entire process lifecycle.
              </p>
            </CardContent>
          </Card>
        </div>

        {/* Liability Protection */}
        <Card className="bg-gray-100 shadow-lg">
          <CardContent className="p-6">
            <div className="flex items-center mb-4">
              <Shield className="h-6 w-6 emerald-blue mr-3" />
              <h3 className="text-xl font-bold text-gray-900">Complete Liability Protection</h3>
            </div>
            <p className="text-gray-700 leading-relaxed">
              Emerald Power agrees to defend, indemnify, and hold harmless our customers, their parent companies, 
              subsidiaries, and affiliated companies (if applicable) and their respective shareholders, officers, 
              directors, principals, agents and employees against any and all losses, liabilities, damages, injuries, 
              claims, demands, causes of action, costs and expenses arising out of Emerald Power's transportation of 
              waste batteries obtained from customer sites.
            </p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
