import Hero from "../components/HomeComp/Hero";
import Features from "../components/HomeComp/Features";
import Services from "../components/HomeComp/Services";
import CTA from "../components/HomeComp/CTA";
import Mentors from "../components/HomeComp/Mentors";
import Analytics from "../components/HomeComp/Analytics";

export default function Home() {
  return (
    <div>
      <Hero></Hero>
      <Features></Features>
      <Services></Services>
      <Mentors></Mentors>
      <Analytics></Analytics>
      <CTA></CTA>
    </div>
  );
}
