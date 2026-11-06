import Layout from '@theme/Layout';
import {translate} from '@docusaurus/Translate';
import HeroSection from '@site/src/components/HeroSection';
import ExperienceSection from '@site/src/components/ExperienceSection';
import SkillsSection from '@site/src/components/SkillsSection';
import ContactSection from '@site/src/components/ContactSection';

export default function Home() {
  return (
    <Layout
      title={translate({id: 'home.meta.title', message: 'Home'})}
      description={translate({
        id: 'home.meta.description',
        message:
          'Jose Arcani, software engineer working with .NET, React and AI-powered systems. Notes, snippets and projects.',
      })}>
      <HeroSection />
      <main>
        <ExperienceSection />
        <SkillsSection />
        <ContactSection />
      </main>
    </Layout>
  );
}
