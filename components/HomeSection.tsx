import AccessSection from "./AccessSection";
import ImpactSection from "./ImpactSection";
import OurSuccessStory from "./OurSuccessStory";
import ProjectSection from "./ProjectSection";

const HomeSection = () => {
  return (
    <main className="max-w-screen-2xl mx-auto px-10 py-8">
      <AccessSection />
      <ProjectSection />
      <ImpactSection />
      <OurSuccessStory />
     
    </main>
  );
};

export default HomeSection;
