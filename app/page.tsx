import DonationSection from "@/components/DonationSection";
import HomeSection from "@/components/HomeSection";
import NewsLetter from "@/components/NewsLetter";
import Showcase from "@/components/Showcase";
import Footer from "@/components/Footer";

const HomePage = () => {
  return (
    <>
      <Showcase />
      <HomeSection />
      <DonationSection />
      <NewsLetter />
      <Footer />
    </>
  );
};

export default HomePage;
