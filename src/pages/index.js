import Layout from '@theme/Layout';
import HeroSection from '@site/src/components/HeroSection';
import AboutSection from '@site/src/components/AboutSection';
import ProjectsSection from '@site/src/components/ProjectsSection';
import SkillsSection from '@site/src/components/SkillsSection';
import ToolsSection from '@site/src/components/ToolsSection';

export default function Home() {
  return (
    <Layout
      title="Home"
      description="Jose Arcani - Backend Developer Portfolio">
      <HeroSection />
      <main>
        <AboutSection />
        <ProjectsSection />
        <SkillsSection />
        <ToolsSection />
      </main>
    </Layout>
  );
}
