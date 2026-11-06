import Layout from '@theme/Layout';
import {translate} from '@docusaurus/Translate';
import ProjectsSection from '@site/src/components/ProjectsSection';

export default function Projects() {
  return (
    <Layout
      title={translate({id: 'projects.meta.title', message: 'Projects'})}
      description={translate({
        id: 'projects.meta.description',
        message:
          'Projects by Jose Arcani around AI-powered backends with .NET, React and TypeScript.',
      })}>
      <main>
        <ProjectsSection />
      </main>
    </Layout>
  );
}
