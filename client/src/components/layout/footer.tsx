import epLogo from "@assets/EP.png";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <img src={epLogo} alt="Emerald Power Logo" className="h-16 w-auto mx-auto mb-6 brightness-0 invert" />
          <h3 className="text-2xl font-bold emerald-green mb-2">Clean Power for a Greener Tomorrow</h3>
          <p className="text-lg text-gray-300 mb-6">Leading provider of uninterruptible power supply solutions and critical power protection services.</p>
          
          <div className="border-t border-gray-700 pt-6">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
              <div>
                <h4 className="font-semibold mb-2">Contact</h4>
                <p className="text-sm text-gray-400">
                  10435 W Shadybrook Dr<br />
                  Boise, ID 83704<br />
                  Phone: 714-402-2477
                </p>
              </div>
              <div>
                <h4 className="font-semibold mb-2">Services</h4>
                <p className="text-sm text-gray-400">
                  UPS Solutions • Battery Service<br />
                  Recycling • Power Conditioning
                </p>
              </div>
              <div>
                <h4 className="font-semibold mb-2">Environment</h4>
                <p className="text-sm text-gray-400">
                  98% Battery Recycling Rate<br />
                  Sustainable Power Solutions
                </p>
              </div>
            </div>
          </div>
          
          <div className="mt-8 pt-6 border-t border-gray-700 text-center">
            <p className="text-sm text-gray-400">&copy; 2024 Emerald Power Inc. All rights reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
