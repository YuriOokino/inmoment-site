import { Navbar } from "./components/Navbar";
import { SectionHeader } from "./components/SectionHeader";
import { Logos } from "./components/Logos";
import { Stats }from "./components/Stats";
import { HeroHeader } from "./components/HeroHeader";
import { MainScroll } from "./components/MainScroll";
import { CustomerJourney } from "./components/CustomerJourney";
import { DashboardScreens } from "./components/DashboardScreens";
import { TabContainer } from "./components/TabContainer";
import { Features } from "./components/Features";
import { Quote } from "./components/Quote";
import { Footer } from "./components/Footer";
import { ModularStructure } from "./components/ModularStructure";

export default function Page() {
  return (
    <div>
      <Navbar/>
      <HeroHeader/>
      <Logos/>
      <Stats/>
      <SectionHeader/>
      <MainScroll />
      <CustomerJourney/>
      <DashboardScreens/>
      <Quote />
      <SectionHeader/>
      <TabContainer/>
      <ModularStructure/>
      <Features/>
      <Footer/>
    </div>
  );
}
