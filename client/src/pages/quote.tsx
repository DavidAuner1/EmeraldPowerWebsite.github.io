import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Phone, Mail, MapPin } from "lucide-react";

export default function Quote() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    company: "",
    city: "",
    state: "",
    description: ""
  });
  
  const [charCount, setCharCount] = useState(0);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    
    if (name === "description") {
      setCharCount(value.length);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Build mailto URL
    const subject = encodeURIComponent('Power Solution Quote Request');
    const body = encodeURIComponent(
      `Quote Request Details:\n\n` +
      `Name: ${formData.name}\n` +
      `Phone: ${formData.phone}\n` +
      `Email: ${formData.email}\n` +
      `Company: ${formData.company}\n` +
      `City: ${formData.city}\n` +
      `State: ${formData.state}\n\n` +
      `Project Description:\n${formData.description}`
    );
    
    const mailtoURL = `mailto:davidauner1@gmail.com?subject=${subject}&body=${body}`;
    window.location.href = mailtoURL;
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Get Your Power Solution Quote</h1>
          <p className="text-lg text-gray-600">
            Tell us about your power requirements and we'll provide a customized solution
          </p>
        </div>

        <Card className="shadow-lg">
          <CardContent className="p-8">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <Label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                    Name *
                  </Label>
                  <Input
                    type="text"
                    id="name"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleInputChange}
                    className="focus:ring-emerald-blue focus:border-emerald-blue"
                  />
                </div>
                
                <div>
                  <Label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                    Phone *
                  </Label>
                  <Input
                    type="tel"
                    id="phone"
                    name="phone"
                    required
                    value={formData.phone}
                    onChange={handleInputChange}
                    className="focus:ring-emerald-blue focus:border-emerald-blue"
                  />
                </div>
                
                <div>
                  <Label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                    Email *
                  </Label>
                  <Input
                    type="email"
                    id="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleInputChange}
                    className="focus:ring-emerald-blue focus:border-emerald-blue"
                  />
                </div>
                
                <div>
                  <Label htmlFor="company" className="block text-sm font-medium text-gray-700 mb-2">
                    Company *
                  </Label>
                  <Input
                    type="text"
                    id="company"
                    name="company"
                    required
                    value={formData.company}
                    onChange={handleInputChange}
                    className="focus:ring-emerald-blue focus:border-emerald-blue"
                  />
                </div>
                
                <div>
                  <Label htmlFor="city" className="block text-sm font-medium text-gray-700 mb-2">
                    City *
                  </Label>
                  <Input
                    type="text"
                    id="city"
                    name="city"
                    required
                    value={formData.city}
                    onChange={handleInputChange}
                    className="focus:ring-emerald-blue focus:border-emerald-blue"
                  />
                </div>
                
                <div>
                  <Label htmlFor="state" className="block text-sm font-medium text-gray-700 mb-2">
                    State *
                  </Label>
                  <Input
                    type="text"
                    id="state"
                    name="state"
                    required
                    value={formData.state}
                    onChange={handleInputChange}
                    className="focus:ring-emerald-blue focus:border-emerald-blue"
                  />
                </div>
              </div>
              
              <div>
                <Label htmlFor="description" className="block text-sm font-medium text-gray-700 mb-2">
                  Project Description *
                </Label>
                <Textarea
                  id="description"
                  name="description"
                  required
                  maxLength={500}
                  rows={6}
                  value={formData.description}
                  onChange={handleInputChange}
                  placeholder="Please describe your power requirements, critical loads, and any specific needs..."
                  className="focus:ring-emerald-blue focus:border-emerald-blue"
                />
                <div className="text-right text-sm text-gray-500 mt-1">
                  {charCount}/500 characters
                </div>
              </div>

              <div className="text-center">
                <Button 
                  type="submit" 
                  className="bg-emerald-blue hover:bg-emerald-blue-dark text-white px-8 py-3 text-lg font-semibold"
                >
                  Submit Quote Request
                </Button>
              </div>
            </form>
          </CardContent>
        </Card>

        {/* Contact Information */}
        <Card className="mt-12 bg-emerald-green bg-opacity-10">
          <CardContent className="p-6 text-center">
            <h3 className="text-xl font-bold text-gray-900 mb-2">Need Immediate Assistance?</h3>
            <p className="text-gray-700 mb-4">Our power solution experts are ready to help</p>
            <div className="flex flex-col sm:flex-row justify-center items-center space-y-2 sm:space-y-0 sm:space-x-8">
              <div className="flex items-center">
                <Phone className="h-5 w-5 emerald-blue mr-2" />
                <span className="font-semibold">714-402-2477</span>
              </div>
              <div className="flex items-center">
                <Mail className="h-5 w-5 emerald-blue mr-2" />
                <span>davidauner1@gmail.com</span>
              </div>
              <div className="flex items-center">
                <MapPin className="h-5 w-5 emerald-blue mr-2" />
                <span>Boise, ID</span>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
