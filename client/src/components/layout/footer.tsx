import epLogo from "@assets/EP.png";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between space-y-8 lg:space-y-0">
            <div className="lg:w-1/3">
              {/* Assuming Logo component is defined elsewhere and handles the new logo */}
              {/* You might need to adjust the size prop as needed */}
              <Logo size="sm" className="mb-4" />
              <p className="text-sm text-gray-400 leading-relaxed">
                Leading provider of power solutions and battery recycling services for a greener future.
              </p>
            </div>

            {/* Contact Information */}
            <div className="lg:w-1/3">
              <h4 className="text-lg font-semibold text-white mb-4">Contact Us</h4>
              <div className="space-y-2 text-sm text-gray-400">
                <p>Boise, ID 83704</p>
                <p>Email: <a href="mailto:ed@emeraldpwr.com" className="text-emerald-blue hover:text-emerald-green">ed@emeraldpwr.com</a></p>
                <p>24 Hour Service: <a href="tel:8008410789" className="text-emerald-blue hover:text-emerald-green">(800) 841-0789</a></p>
                <p>Cell: <a href="tel:7144022477" className="text-emerald-blue hover:text-emerald-green">714-402-2477</a></p>
              </div>
            </div>

            {/* Services */}
            <div className="lg:w-1/3">
              <h4 className="text-lg font-semibold text-white mb-4">Services</h4>
              <div className="space-y-1 text-sm text-gray-400">
                <p>UPS Solutions</p>
                <p>Battery Services</p>
                <p>Battery Recycling</p>
                <p>Power Conditioning</p>
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