import { useState } from "react";
import { Link, useLocation } from "wouter";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { NavigationMenu, NavigationMenuContent, NavigationMenuItem, NavigationMenuList, NavigationMenuTrigger } from "@/components/ui/navigation-menu";
import { Menu, Power, Battery, Zap, Lightbulb, Settings, Cylinder, Activity, Thermometer } from "lucide-react";
import Logo from "@/components/ui/logo";

export default function Header() {
  const [location] = useLocation();
  const [isOpen, setIsOpen] = useState(false);

  const productItems = [
    { title: "Battery Energy Storage", icon: Battery },
    { title: "Three Phase Rotary  UPS ", icon: Activity },
    { title: "Three Phase Static UPS ", icon: Activity },
    { title: "Single Phase UPS", icon: Zap },
    { title: "Capacitor Banks", icon: Cylinder },
    { title: "Lighting Inverters", icon: Lightbulb },
    { title: "Battery Conditioning", icon: Thermometer },
  ];

  return (
    <nav className="bg-white shadow-lg sticky top-0 z-50 border-b">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link href="/" className="focus:outline-none focus:ring-2 focus:ring-emerald-blue rounded-lg">
              <Logo size="md" />
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-center space-x-8">
              <NavigationMenu>
                <NavigationMenuList>
                  <NavigationMenuItem>
                    <NavigationMenuTrigger className="text-gray-700 hover:text-emerald-blue font-medium">
                      Products
                    </NavigationMenuTrigger>
                    <NavigationMenuContent>
                      <div className="w-80 p-4">
                        <div className="grid gap-3">
                          {productItems.map((item, index) => (
                            <div key={index} className="flex items-center space-x-3 p-3 rounded-lg hover:bg-gray-50 cursor-pointer">
                              <item.icon className="h-5 w-5 text-emerald-blue" />
                              <span className="text-sm font-medium text-gray-700">{item.title}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </NavigationMenuContent>
                  </NavigationMenuItem>
                </NavigationMenuList>
              </NavigationMenu>

              <Link href="/services">
                <Button variant="ghost" className="text-gray-700 hover:text-emerald-blue font-medium">
                  Services
                </Button>
              </Link>

              <Link href="/recycling">
                <Button variant="ghost" className="text-gray-700 hover:text-emerald-blue font-medium">
                  Recycling
                </Button>
              </Link>

              <Link href="/quote">
                <Button className="bg-emerald-blue hover:bg-emerald-blue-dark text-white font-medium">
                  Get Quote
                </Button>
              </Link>
            </div>
          </div>

          {/* Mobile Menu */}
          <div className="md:hidden">
            <Sheet open={isOpen} onOpenChange={setIsOpen}>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon" className="text-gray-700">
                  <Menu className="h-6 w-6" />
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-80">
                <div className="flex flex-col space-y-4 mt-8">
                  <Link href="/" onClick={() => setIsOpen(false)}>
                    <Button variant="ghost" className="w-full justify-start text-left">
                      Home
                    </Button>
                  </Link>
                  
                  <div className="space-y-2">
                    <div className="text-sm font-medium text-gray-500 px-4">Products</div>
                    {productItems.map((item, index) => (
                      <div key={index} className="flex items-center space-x-3 p-3 rounded-lg hover:bg-gray-50 cursor-pointer mx-2">
                        <item.icon className="h-4 w-4 text-emerald-blue" />
                        <span className="text-sm text-gray-700">{item.title}</span>
                      </div>
      
                    ))}
                  </div>

                  <Link href="/services" onClick={() => setIsOpen(false)}>
                    <Button variant="ghost" className="w-full justify-start">
                      Services
                    </Button>
                  </Link>

                  <Link href="/recycling" onClick={() => setIsOpen(false)}>
                    <Button variant="ghost" className="w-full justify-start">
                      Recycling
                    </Button>
                  </Link>

                  <Link href="/quote" onClick={() => setIsOpen(false)}>
                    <Button className="w-full bg-emerald-blue hover:bg-emerald-blue-dark text-white">
                      Get Quote
                    </Button>
                  </Link>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </nav>
  );
}
