import {useState} from 'react';
import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

const PROJECTS = [
  {
    title: 'Journal App',
    description:
      'An app in which you can create, edit and delete notes adding a picture per note',
    image: '/img/portfolio/ja-preview.png',
    video: '/video/journal-video.mp4',
    githubUrl: 'https://github.com/josearcani/journal-app-react',
    tags: ['React'],
    technologies: 'React.js | Firebase | HTML 5 | SASS | Cloudinary',
    about:
      'You can create an user or use Google to login in the app. Firebase handles users and notes and Cloudinary stores the uploaded images. Application is also viewed in mobile-layout.',
  },
  {
    title: 'Calendar App',
    description: 'MERN app calendar',
    image: '/img/portfolio/mern-calendar-preview.png',
    video: '/video/mern-video.mp4',
    githubUrl: 'https://github.com/josearcani/mern-calendar',
    tags: ['React', 'REST API'],
    technologies: 'Mongo | Express | React | Node',
    about:
      'A full-stack web app where you can create events using a calendar and see others event in a coworking environment',
  },
  {
    title: 'Management System',
    description: 'An app to manage resources',
    image: '/img/portfolio/management-preview.png',
    video: '/video/pern-video.mp4',
    githubUrl: 'https://github.com/josearcani/ts-node-postgres',
    tags: ['React', 'Node'],
    technologies: 'TypeScript | React.js | Node.js | Express | PostgreSQL',
    about:
      'This management system is based on the PERN stack where admin & manager users can create resources like clients, courses & employees. Also client users can signup to different courses.',
  },
];

const FILTER_CATEGORIES = ['ALL', 'React', 'Node', 'REST API'];

function ProjectCard({project, onOpenModal}) {
  return (
    <div className={clsx('col col--4', styles.cardCol)}>
      <div className={styles.card}>
        <img
          src={project.image}
          alt={project.title}
          className={styles.cardImage}
        />
        <div className={styles.cardBody}>
          <Heading as="h3">{project.title}</Heading>
          <p>{project.description}</p>
          <div className={styles.cardActions}>
            <button
              className="button button--primary button--sm"
              onClick={() => onOpenModal(project)}
            >
              Learn More
            </button>
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="button button--outline button--primary button--sm"
            >
              GitHub
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

function ProjectModal({project, onClose}) {
  return (
    <div className={styles.modalOverlay} onClick={onClose}>
      <div className={styles.modalContent} onClick={(e) => e.stopPropagation()}>
        <button className={styles.closeButton} onClick={onClose}>
          &times;
        </button>
        <video controls autoPlay muted className={styles.video}>
          <source src={project.video} type="video/mp4" />
        </video>
        <Heading as="h3">{project.title}</Heading>
        <p>{project.about}</p>
        <p className={styles.technologies}>
          <strong>Technologies:</strong> {project.technologies}
        </p>
        <a
          href={project.githubUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="button button--primary"
        >
          View on GitHub
        </a>
      </div>
    </div>
  );
}

export default function ProjectsSection() {
  const [activeFilter, setActiveFilter] = useState('ALL');
  const [modalProject, setModalProject] = useState(null);

  const filteredProjects =
    activeFilter === 'ALL'
      ? PROJECTS
      : PROJECTS.filter((p) => p.tags.includes(activeFilter));

  return (
    <section id="projects" className={styles.projects}>
      <div className="container">
        <div className="text--center margin-bottom--lg">
          <Heading as="h2">Projects</Heading>
        </div>

        <div className={styles.filters}>
          {FILTER_CATEGORIES.map((cat) => (
            <button
              key={cat}
              className={clsx(
                'button button--sm',
                activeFilter === cat
                  ? 'button--primary'
                  : 'button--outline button--primary',
              )}
              onClick={() => setActiveFilter(cat)}
            >
              {cat}
            </button>
          ))}
        </div>

        <div className="row">
          {filteredProjects.map((project) => (
            <ProjectCard
              key={project.title}
              project={project}
              onOpenModal={setModalProject}
            />
          ))}
        </div>
      </div>

      {modalProject && (
        <ProjectModal
          project={modalProject}
          onClose={() => setModalProject(null)}
        />
      )}
    </section>
  );
}
