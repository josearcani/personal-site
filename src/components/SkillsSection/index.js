import clsx from 'clsx';
import Heading from '@theme/Heading';
import Translate from '@docusaurus/Translate';
import styles from './styles.module.css';

const icon = (file) => `/img/devicon/${file}`;

const GROUPS = [
  {
    title: <Translate id="home.skills.ai">AI</Translate>,
    items: [
      {name: 'Claude Code'},
      {name: 'Cursor'},
      {name: 'GitHub Copilot'},
      {name: <Translate id="home.skills.ai.agents">Custom agents & skills</Translate>},
      {name: <Translate id="home.skills.ai.tokens">Context & token optimization</Translate>},
      {name: <Translate id="home.skills.ai.oss">Open-source models</Translate>},
    ],
  },
  {
    title: <Translate id="home.skills.backend">Backend</Translate>,
    items: [
      {name: 'C#', icon: icon('c-sharp-original.svg')},
      {name: '.NET', icon: icon('dotnet-original.svg')},
      {name: 'Entity Framework Core'},
      {name: 'Dapper'},
      {name: 'CQRS'},
      {name: 'MassTransit'},
      {name: 'RabbitMQ'},
      {name: <Translate id="home.skills.backend.testing">Integration testing</Translate>},
    ],
  },
  {
    title: <Translate id="home.skills.data">Data</Translate>,
    items: [
      {name: 'SQL Server', icon: icon('sql-server-original.svg')},
      {name: 'MongoDB'},
    ],
  },
  {
    title: <Translate id="home.skills.frontend">Frontend</Translate>,
    items: [
      {name: 'React', icon: icon('react-original.svg')},
      {name: 'TypeScript'},
      {name: 'JavaScript', icon: icon('javascript-original.svg')},
      {name: 'Redux', icon: icon('redux-original.svg')},
      {name: 'HTML / CSS', icon: icon('html5-original.svg')},
    ],
  },
  {
    title: <Translate id="home.skills.devops">DevOps & Tools</Translate>,
    items: [
      {name: 'Docker', icon: icon('docker-original.svg')},
      {name: 'Git', icon: icon('git-original.svg')},
      {name: 'GitHub', icon: icon('github-original.svg'), invertInDark: true},
      {name: 'GitLab', icon: icon('gitlab-original.svg')},
      {name: 'Azure DevOps'},
      {name: 'Postman'},
      {name: 'Jira'},
      {name: 'Visual Studio', icon: icon('visualstudio-original.svg')},
      {name: 'VS Code', icon: icon('visualstudio-plain.svg')},
      {name: 'Bash / PowerShell'},
    ],
  },
];

function Chip({name, icon: src, invertInDark}) {
  return (
    <li className={styles.chip}>
      {src && (
        <img
          src={src}
          alt=""
          width={18}
          height={18}
          className={clsx(styles.chipIcon, invertInDark && styles.invertInDark)}
        />
      )}
      {name}
    </li>
  );
}

export default function SkillsSection() {
  return (
    <section id="skills" className={styles.skills}>
      <div className="container">
        <div className="text--center margin-bottom--lg">
          <Heading as="h2">
            <Translate id="home.skills.title">Skills</Translate>
          </Heading>
        </div>
        <div className="row" style={{justifyContent: 'center'}}>
          <div className="col col--10">
            {GROUPS.map((group, i) => (
              <div key={i} className={styles.group}>
                <Heading as="h3" className={styles.groupTitle}>
                  {group.title}
                </Heading>
                <ul className={styles.chips}>
                  {group.items.map((item, j) => (
                    <Chip key={j} {...item} />
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
