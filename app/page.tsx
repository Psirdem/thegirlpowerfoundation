import AccessSection from "@/components/AccessSection";
import ProjectSection from "@/components/ProjectSection";
import Showcase from "@/components/Showcase";

const HomePage = () => {
  return (
    <>
      <Showcase />
      <main className="max-w-screen-xl mx-auto px-10 py-8">
        <AccessSection />
        <ProjectSection />
      </main>
    </>
  );
};

export default HomePage;
