import AccessSection from "./AccessSection";
import ImpactSection from "./ImpactSection";
import ProjectSection from "./ProjectSection";
import SponsorsSection from "./SponsorsSection";
import SupportSection from "./SupportSection";

const HomeSection = () => {
  return (
    <main className="max-w-screen-2xl mx-auto px-10 py-8">
      <AccessSection />
      <SponsorsSection />
      <ProjectSection />
      <ImpactSection />
      <SupportSection />
    </main>
  );
};

export default HomeSection;
