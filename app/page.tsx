import AccessSection from "@/components/AccessSection";
import ImpactSection from "@/components/ImpactSection";
import ProjectSection from "@/components/ProjectSection";
import Showcase from "@/components/Showcase";
import SupportSection from "@/components/SupportSection";

const HomePage = () => {
  return (
    <>
      <Showcase />
      <main className="max-w-screen-2xl mx-auto px-10 py-8">
        <AccessSection />
        <ProjectSection />
        <ImpactSection />
        <SupportSection />
      </main>
    </>
  );
};

export default HomePage;
