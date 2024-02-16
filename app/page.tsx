import DonationSection from "@/components/DonationSection";
import HomeSection from "@/components/HomeSection";
import NewsLetter from "@/components/NewsLetter";
import Showcase from "@/components/Showcase";

const HomePage = () => {
  return (
    <>
      <Showcase />
      <HomeSection />
      <DonationSection />
      <NewsLetter />
    </>
  );
};

export default HomePage;
