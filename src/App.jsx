import "./App.css";
import Navbar from "./sections/Navbar";
import Banner from "./sections/Banner";
import About from "./sections/About";
import CardsOne from "./sections/CardsOne";
import Contacts from "./sections/Contacts";
import Footer from "./sections/Footer";
import SliderSection from "./sections/SliderSection";
import WhyMe from './sections/WhyMe'
import { ProjectSliderData, certificationsData, servicesData } from './data'

function App() {
  return (
    <>
      <Navbar />
      <main className="container-fluid" id="home">
        <Banner />
        <About />
      </main>

      <CardsOne data={certificationsData} title='Education & Certifications' />
      <main className="container-fluid">
        <WhyMe />
        <SliderSection sliderData={ProjectSliderData} title='Projects' />
      </main>
      <CardsOne data={servicesData} title='Our Services' id='services' />
      <Contacts />
      <Footer />
    </>
  );
}

export default App;
