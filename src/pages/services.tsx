import { Card, CardContent } from "@/components/ui/card";
import { CheckCircle, Drill, Battery, Shield, AlertTriangle } from "lucide-react";

export default function Services() {
  const semiAnnualServices = [
    "Complete visual inspection of all internal sub-assemblies, wiring harnesses, contactors, cables, and major components",
    "Check for proper clearance around the unit",
    "Perform temperature checks on all breakers, connections, and associated controls. Report all high temperature areas",
    "Check air filters for cleanliness; clean or replace",
    "Rectifier and inverter snubber circuit board discoloration",
    "Power capacitors for swelling or leakage",
    "Capacitor vent caps extruded more than 1/8\"",
    "Fans for proper operation",
    "Lubricate and check bearings for abnormal condition, as applicable, where possible",
    "Record all meter readings and calibrate as necessary, where possible",
    "Measure and record phase-to-phase input, output, bypass and battery voltages and currents",
    "Review alarm log/history for any irregular activity",
    "Verify remote status panel operation, as applicable",
    "Measure and record harmonic trap filter currents, where possible",
    "Review system performance with customer to address any questions",
    "Implement manufacturer field change notices, as possible",
    "Perform functional system test upon customer approval",
    "Provide inspection report, with recommendations, to Customer within 7 to 10 business days"
  ];

  const annualServices = [
    "Check the inverter and rectifier snubbers for discoloration or damaged wiring",
    "Check all contacts to ensure secure connections",
    "Verify all connections show no signs of discoloration",
    "Check fuses on the DC capacitor deck for continuity, as applicable",
    "Clean interior and exterior of unit",
    "With customer approval, perform operational test of the system including unit transfer and battery discharge",
    "Measure and calibrate, as necessary, where possible, all electronics to system specifications",
    "Measure and record all low-voltage power supply levels"
  ];

  const batteryServices = [
    "Measure and record VDC & VAC of jar/cell (cell #1 + post to frame ground; frame ground to post of last cell in string)",
    "Measure and record overall system DC voltage and current levels",
    "Measure and record overall AC ripple voltage and current",
    "Measure and record each cell terminal voltage (DC)",
    "Measure and record the cell/unit internal ohmic measurement on 100% of string and preserve data for trending",
    "Measure and record ambient room temperature",
    "Measure and record temperature of all negative posts",
    "Check jar and cover for signs of leakage",
    "Check for corrosion on terminal post and connector",
    "Check general appearance and cleanliness of battery room and batteries",
    "Review Customer battery maintenance logs and add maintenance entry",
    "Confirm proper warning/hazard labels",
    "Confirm proper operational information, placards, and labeling",
    "Check safety equipment and supplies for proper amount and location",
    "Provide inspection report with recommendations to customer"
  ];

  const batteryAnnualServices = [
    "Torque battery to manufacturers specification (as needed if connection resistance measures greater than 20% of average)",
    "Clean and re-secure all battery terminals and jumper connections, as applicable (up to 20%)",
    "Clean and neutralize jar and rack/cabinet, as applicable",
    "For strings with battery packs, that measure below 20% of the average offline VDC should be further investigated for defective jars"
  ];

  const serviceNotes = [
    "Preventative Maintenance may require placing the Critical Load onto Maintenance Bypass to ensure electrical integrity.",
    "While air filters are covered by the terms of the full-service contract, we recommend that customers check them monthly for cleanliness and replace as necessary",
    "Preventative Maintenance on System Control Cabinet, Power Tie, Breaker Cabinets, Load Bus Sync, or Maintenance Bypass Cabinets, if included on the Schedule of Equipment, utilizes a separate scope of work.",
    "Some checks are not applicable to all UPS brands/models."
  ];

  const batteryNotes = [
    "Preventative Maintenance may require placing the Critical Load onto Maintenance Bypass to ensure electrical integrity.",
    "PM pricing is based on standard string configuration. Upon inspection, should the number of batteries or strings change, pricing will be adjusted accordingly.",
    "Corrective Maintenance, not covered by the terms of the Service Contract, will be billed at current Time & Materials rates.",
    "If battery is attached to a DC Plant, an ohmic battery test instrument is required to obtain cell resistance impedance or conductance.",
    "Scope of Work will be site specific and subject to change to accurately reflect equipment onsite."
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Our Services</h1>
          <p className="text-xl emerald-green font-semibold">"Clean Power for a Greener Tomorrow"</p>
        </div>

        {/* UPS Service Section */}
        <Card className="mb-12 shadow-lg">
          <CardContent className="p-8">
            <div className="flex flex-col lg:flex-row items-start mb-8">
              <div className="lg:w-1/3 mb-6 lg:mb-0 lg:mr-8">
                <img 
                  src="https://images.unsplash.com/photo-1581094794329-c8112a89af12?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=300" 
                  alt="UPS Service Technician" 
                  className="w-full h-64 object-cover rounded-lg shadow-md"
                />
              </div>
              <div className="lg:w-2/3">
                <div className="flex items-center mb-4">
                  <Drill className="h-8 w-8 emerald-blue mr-3" />
                  <h2 className="text-3xl font-bold emerald-blue">UPS Service</h2>
                </div>
                <p className="text-lg text-gray-600 leading-relaxed">
                  Comprehensive maintenance programs to ensure your critical power systems operate at peak performance. 
                  Our certified technicians provide thorough inspections, preventive maintenance, and performance optimization 
                  to maximize uptime and extend equipment life.
                </p>
              </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {/* Semi-Annual Service */}
              <div className="bg-gray-50 rounded-lg p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center">
                  <Shield className="h-5 w-5 mr-2 emerald-blue" />
                  Semi-Annual Service
                </h3>
                <ul className="space-y-2">
                  {semiAnnualServices.map((service, index) => (
                    <li key={index} className="flex items-start text-sm text-gray-700">
                      <CheckCircle className="h-4 w-4 text-emerald-green mr-2 mt-0.5 flex-shrink-0" />
                      {service}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Annual Service */}
              <div className="bg-emerald-green bg-opacity-10 rounded-lg p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center">
                  <Drill className="h-5 w-5 mr-2 emerald-green" />
                  Annual Service
                </h3>
                <p className="text-sm text-gray-600 mb-4 font-medium">Includes all Semi-Annual Service items, plus:</p>
                <ul className="space-y-2">
                  {annualServices.map((service, index) => (
                    <li key={index} className="flex items-start text-sm text-gray-700">
                      <CheckCircle className="h-4 w-4 text-emerald-green mr-2 mt-0.5 flex-shrink-0" />
                      {service}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Service Notes */}
            <div className="mt-8 bg-yellow-50 border border-yellow-200 rounded-lg p-6">
              <h4 className="text-lg font-semibold text-gray-900 mb-3 flex items-center">
                <AlertTriangle className="h-5 w-5 mr-2 text-yellow-600" />
                Important Service Notes
              </h4>
              <div className="space-y-2">
                {serviceNotes.map((note, index) => (
                  <p key={index} className="text-sm text-gray-700">
                    <span className="font-semibold">Note {index + 1}:</span> {note}
                  </p>
                ))}
              </div>
            </div>
          </CardContent>
        </Card>

        {/* VRLA Battery Service Section */}
        <Card className="shadow-lg">
          <CardContent className="p-8">
            <div className="flex flex-col lg:flex-row items-start mb-8">
              <div className="lg:w-1/3 mb-6 lg:mb-0 lg:mr-8">
                <img 
                  src="https://images.unsplash.com/photo-1586771107445-d3ca888129ff?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=300" 
                  alt="VRLA Battery Service" 
                  className="w-full h-64 object-cover rounded-lg shadow-md"
                />
              </div>
              <div className="lg:w-2/3">
                <div className="flex items-center mb-4">
                  <Battery className="h-8 w-8 emerald-green mr-3" />
                  <h2 className="text-3xl font-bold emerald-green">VRLA (Sealed) Battery Service</h2>
                </div>
                <p className="text-lg text-gray-600 leading-relaxed">
                  Professional battery maintenance performed in accordance with IEEE Standard (Valve Regulated Lead Acid Batteries) 
                  and manufacturer specifications. Our comprehensive testing and maintenance programs ensure optimal battery 
                  performance and maximum service life.
                </p>
              </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {/* Semi-Annual/Quarterly Service */}
              <div className="bg-gray-50 rounded-lg p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center">
                  <Battery className="h-5 w-5 mr-2 emerald-blue" />
                  Semi-Annual or Quarterly Service
                </h3>
                <p className="text-sm text-gray-600 mb-4 font-medium">
                  All tasks performed in accordance with IEEE Standards and manufacturer specifications:
                </p>
                <ul className="space-y-2">
                  {batteryServices.map((service, index) => (
                    <li key={index} className="flex items-start text-sm text-gray-700">
                      <CheckCircle className="h-4 w-4 text-emerald-green mr-2 mt-0.5 flex-shrink-0" />
                      {service}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Annual Service */}
              <div className="bg-emerald-blue bg-opacity-10 rounded-lg p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center">
                  <Drill className="h-5 w-5 mr-2 emerald-green" />
                  Annual Service
                </h3>
                <p className="text-sm text-gray-600 mb-4 font-medium">Includes all Semi-Annual/Quarterly Service items, plus:</p>
                <ul className="space-y-2">
                  {batteryAnnualServices.map((service, index) => (
                    <li key={index} className="flex items-start text-sm text-gray-700">
                      <CheckCircle className="h-4 w-4 text-emerald-green mr-2 mt-0.5 flex-shrink-0" />
                      {service}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Battery Service Notes */}
            <div className="mt-8 bg-blue-50 border border-blue-200 rounded-lg p-6">
              <h4 className="text-lg font-semibold text-gray-900 mb-3 flex items-center">
                <AlertTriangle className="h-5 w-5 mr-2 text-blue-600" />
                Battery Service Notes
              </h4>
              <div className="space-y-2">
                {batteryNotes.map((note, index) => (
                  <p key={index} className="text-sm text-gray-700">
                    <span className="font-semibold">Note {index + 1}:</span> {note}
                  </p>
                ))}
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
