
import Hero from "../components/About/Hero";
import Footer from "../components/Footer/Footer";
import Header from "../components/Header/Header";
import CTA from "../components/Service-Section/Cta";
import Services from "../components/Service-Section/Services";
import Technologies from "../components/Service-Section/Technologies";
import Team from "../components/Team/Team";

export default function Home() {
  return (

    <div>
    <Header />
    <Hero />
    <Team />
    <Services />
    <Technologies />
    <CTA />
    <Footer/>
   
  </div>
  );

}
