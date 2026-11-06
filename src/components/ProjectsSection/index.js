import clsx from 'clsx';
import Heading from '@theme/Heading';
import Translate from '@docusaurus/Translate';
import {PROJECTS} from '@site/src/data/projects';
import styles from './styles.module.css';

function ProjectCard({project}) {
  const planned = project.status === 'planned';
  return (
    <div className={clsx('col col--6', styles.cardCol)}>
      <div className={clsx(styles.card, planned && styles.cardPlanned)}>
        {project.image && (
          <img
            src={project.image}
            alt={project.title}
            className={styles.cardImage}
            loading="lazy"
          />
        )}
        <div className={styles.cardBody}>
          <div className={styles.cardHeader}>
            <Heading as="h3">{project.title}</Heading>
            {planned && (
              <span className={styles.badge}>
                <Translate id="projects.comingSoon">Coming soon</Translate>
              </span>
            )}
          </div>
          <p>{project.description}</p>
          <ul className={styles.tech}>
            {project.tech.map((t) => (
              <li key={t} className={styles.techItem}>
                {t}
              </li>
            ))}
          </ul>
          {!planned && (project.githubUrl || project.demoUrl) && (
            <div className={styles.cardActions}>
              {project.githubUrl && (
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="button button--primary button--sm">
                  GitHub
                </a>
              )}
              {project.demoUrl && (
                <a
                  href={project.demoUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="button button--outline button--primary button--sm">
                  <Translate id="projects.demo">Demo</Translate>
                </a>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default function ProjectsSection() {
  return (
    <section id="projects" className={styles.projects}>
      <div className="container">
        <div className="text--center margin-bottom--lg">
          <Heading as="h2">
            <Translate id="projects.title">Projects</Translate>
          </Heading>
          <p>
            <Translate id="projects.intro">
              Projects around AI-powered backends, built with .NET, React and
              TypeScript. New ones are on the way.
            </Translate>
          </p>
        </div>
        <div className="row">
          {PROJECTS.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
}
