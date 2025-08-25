import DonationSection from "@/components/DonationSection";
import HomeSection from "@/components/HomeSection";
import NewsLetter from "@/components/NewsLetter";
import Showcase from "@/components/Showcase";
import Footer from "@/components/Footer";
import AwardsCarousel from "@/components/AwardsCarousel";
import gsap from "gsap";

const HomePage = () => {
  return (
    <>
      <Showcase />
      <HomeSection />
      <AwardsCarousel />
      <DonationSection />
      <NewsLetter />
      <Footer />
    </>
  );
};

export default HomePage;
