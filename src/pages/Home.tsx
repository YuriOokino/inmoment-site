import { Navbar } from "./components/Navbar";
import { IndustriesHeader } from "./components/IndustriesHeader";
import { Logos } from "./components/Logos";
import { Stats }from "./components/Stats";
import { HeroHeader } from "./components/HeroHeader";
import { FeatureScroll } from "./components/FeatureScroll";
import { CustomerJourney } from "./components/CustomerJourney";
import { Demo } from "./components/Demo";
import { IndustriesContainer } from "./components/IndustriesContainer";
import { Audiences } from "./components/Audiences";
import { Quote } from "./components/Quote";
import { Footer } from "./components/Footer";
import { Structure } from "./components/Structure";
import { FeaturesHeader } from "./components/FeaturesHeader";

export default function Page() {
  return (
    <div>
      <Navbar/>
      <HeroHeader/>
      <Logos/>
      <Stats/>
      <FeaturesHeader/>
      <FeatureScroll />
      <CustomerJourney/>
      <Demo/>
      <Quote />
      <IndustriesHeader/>
      <IndustriesContainer/>
      <Structure/>
      <Audiences/>
      <Footer/>
    </div>
  );
}
