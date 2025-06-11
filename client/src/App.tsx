import { Switch, Route } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import Header from "@/components/layout/header";
import Footer from "@/components/layout/footer";
import Home from "@/pages/home";
import Services from "@/pages/services";
import Recycling from "@/pages/recycling";
import Quote from "@/pages/quote";
import NotFound from "@/pages/not-found";
import BatteryEnergyStorage from "@/pages/battery-energy-storage";
import ThreePhaseRotaryUPS from "@/pages/three-phase-rotary-ups";
import ThreePhaseStaticUPS from "@/pages/three-phase-static-ups";
import SinglePhaseUPS from "@/pages/single-phase-ups";
import LightingInverters from "@/pages/lighting-inverters";
import BatteryConditioning from "@/pages/battery-conditioning";
import CapacitorBanks from "@/pages/capacitor-banks";

function Router() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        <Switch>
          <Route path="/" component={Home} />
          <Route path="/services" component={Services} />
          <Route path="/recycling" component={Recycling} />
          <Route path="/quote" component={Quote} />
          <Route path="/battery-energy-storage" component={BatteryEnergyStorage} />
          <Route path="/three-phase-rotary-ups" component={ThreePhaseRotaryUPS} />
          <Route path="/three-phase-static-ups" component={ThreePhaseStaticUPS} />
          <Route path="/single-phase-ups" component={SinglePhaseUPS} />
          <Route path="/lighting-inverters" component={LightingInverters} />
          <Route path="/battery-conditioning" component={BatteryConditioning} />
          <Route path="/capacitor-banks" component={CapacitorBanks} />
          <Route component={NotFound} />
        </Switch>
      </main>
      <Footer />
    </div>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Router />
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
