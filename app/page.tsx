import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import FeaturedCompany from "./components/FeaturedCompany";
import Category from "./components/Category";
import Banner from "./components/Banner";
import FeaturedJob from "./components/FeaturedJob";
import LatestJob from "./components/LatestJob";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <div className="">
          <Navbar/>
          <Hero/>
          <FeaturedCompany/>
          <Category/>
          <Banner/>
          <FeaturedJob/>
          <LatestJob/>
          <Footer/>
    </div>
  );
}
