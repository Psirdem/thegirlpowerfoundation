import DonationSection from "@/components/DonationSection";
import HomeSection from "@/components/HomeSection";
import NewsLetter from "@/components/NewsLetter";
import Showcase from "@/components/Showcase";
import SocialSection from "@/components/SocialSection";

const HomePage = () => {
  return (
    <>
      <Showcase />
      <HomeSection />
      <DonationSection />
      <NewsLetter />
      <SocialSection />
    </>
  );
};

export default HomePage;
