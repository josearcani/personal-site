import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

const TOOLS = [
  {name: 'Visual Studio Code', icon: '/img/devicon/visualstudio-plain.svg'},
  {name: 'Visual Studio', icon: '/img/devicon/visualstudio-original.svg'},
  {name: 'Git', icon: '/img/devicon/git-original.svg'},
  {name: 'GitHub', icon: '/img/devicon/github-original.svg', invertInDark: true},
  {name: 'GitLab', icon: '/img/devicon/gitlab-original.svg'},
  {name: 'Dotnet', icon: '/img/devicon/dotnet-original.svg'},
  {name: 'Docker', icon: '/img/devicon/docker-original.svg'},
  {name: 'SQL Server', icon: '/img/devicon/sql-server-original.svg'},
  {name: 'npm', icon: '/img/devicon/npm-original.svg'},
  {name: 'Figma', icon: '/img/devicon/figma-original.svg'},
];

function ToolItem({name, icon, invertInDark}) {
  return (
    <div className={clsx('col col--2', styles.item)}>
      <img
        src={icon}
        alt={name}
        width={70}
        height={70}
        className={clsx(styles.icon, invertInDark && styles.invertInDark)}
      />
      <p className={styles.label}>{name}</p>
    </div>
  );
}

export default function ToolsSection() {
  return (
    <section id="tools" className={styles.tools}>
      <div className="container">
        <div className="text--center margin-bottom--lg">
          <Heading as="h2">Tools</Heading>
          <p>These are the tools I choose to help tackle any project.</p>
        </div>
        <div className={clsx('row', styles.grid)}>
          {TOOLS.map((tool) => (
            <ToolItem key={tool.name} {...tool} />
          ))}
        </div>
      </div>
    </section>
  );
}
