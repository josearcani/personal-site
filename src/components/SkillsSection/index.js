import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

const SKILLS = [
  {name: 'C#', icon: '/img/devicon/c-sharp-original.svg'},
  {name: 'JavaScript (ES5/ES6)', icon: '/img/devicon/javascript-original.svg'},
  {name: 'React.js', icon: '/img/devicon/react-original.svg'},
  {name: 'Redux', icon: '/img/devicon/redux-original.svg'},
  {name: 'Node.js', icon: '/img/devicon/nodejs-original.svg'},
  {name: 'Express', icon: '/img/devicon/express-original.svg', invertInDark: true},
  {name: 'HTML 5', icon: '/img/devicon/html5-original.svg'},
  {name: 'CSS 3', icon: '/img/devicon/css3-original.svg'},
];

function SkillItem({name, icon, invertInDark}) {
  return (
    <div className={clsx('col col--3', styles.item)}>
      <img
        src={icon}
        alt={name}
        width={80}
        height={80}
        className={clsx(styles.icon, invertInDark && styles.invertInDark)}
      />
      <p className={styles.label}>{name}</p>
    </div>
  );
}

export default function SkillsSection() {
  return (
    <section id="skills" className={styles.skills}>
      <div className="container">
        <div className="text--center margin-bottom--lg">
          <Heading as="h2">Skills</Heading>
          <p>
            Languages and Technologies that I have learned and applied to my
            projects
          </p>
        </div>
        <div className="row">
          {SKILLS.map((skill) => (
            <SkillItem key={skill.name} {...skill} />
          ))}
        </div>
      </div>
    </section>
  );
}
