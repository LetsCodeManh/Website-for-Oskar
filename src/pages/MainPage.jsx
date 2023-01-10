import About from "../components/About";
import Contact from "../components/Contact/Contact";
import Footer from "../components/Footer/Footer";
import Hero from "../components/Hero";
import Navbar from "../components/Navbar";
import Offer from "../components/Offer/Offer";

const MainPage = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <Offer />
      <Contact />
      <Footer />
    </>
  );
};

export default MainPage;
