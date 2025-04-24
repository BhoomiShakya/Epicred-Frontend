import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import FeaturedCompany from "./components/FeaturedCompany";
import Category from "./components/Category";
import Banner from "./components/Banner";
export default function Home() {
  return (
    <div className="">
          <Navbar/>
          <Hero/>
          <FeaturedCompany/>
          <Category/>
          <Banner/>
    </div>
  );
}
