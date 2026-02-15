import Layout from '@theme/Layout';
import HeroSection from '@site/src/components/HeroSection';
import SkillsSection from '@site/src/components/SkillsSection';
import ToolsSection from '@site/src/components/ToolsSection';

export default function Home() {
  return (
    <Layout
      title="Home"
      description="Backend dev">
      <HeroSection />
      <main>
        <SkillsSection />
        <ToolsSection />
      </main>
    </Layout>
  );
}
