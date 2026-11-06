import Heading from '@theme/Heading';
import Translate, {translate} from '@docusaurus/Translate';
import useCvUrl from '@site/src/hooks/useCvUrl';
import styles from './styles.module.css';
import clsx from 'clsx';

const socialLinks = [
  {label: 'GitHub', url: 'https://github.com/josearcani'},
  {label: 'LinkedIn', url: 'https://www.linkedin.com/in/josearcani/'},
];

export default function HeroSection() {
  const cvUrl = useCvUrl();
  return (
    <>
      <header id="home" className={styles.hero}>
        <div className="container">
          <div className={clsx('row', styles.heroRow)}>
            <div className={clsx('col col--6', styles.heroTextCol)}>
              <p className={styles.subtitle}>
                <Translate id="home.hero.greeting">Hi. I am</Translate>
              </p>
              <Heading as="h1">Jose Arcani</Heading>
              <p className={styles.role}>
                <Translate id="home.hero.role">Software Engineer</Translate>
              </p>
              <p className={styles.tagline}>
                <Translate id="home.hero.tagline">
                  I build .NET backends and React interfaces, and integrate AI
                  into real systems.
                </Translate>
              </p>
              <div className={styles.heroActions}>
                <a
                  href={cvUrl}
                  className="button button--secondary button--lg"
                  download>
                  <Translate id="home.hero.cv">Download CV</Translate>
                </a>
                <a
                  href="#contact"
                  className="button button--outline button--secondary button--lg">
                  <Translate id="home.hero.contact">Contact</Translate>
                </a>
              </div>
            </div>
            <div className={clsx('col col--6', styles.imageCol)}>
              <img
                src="/img/jose.jpg"
                alt={translate({
                  id: 'home.hero.photoAlt',
                  message: 'Jose Arcani',
                })}
                className={styles.profileImage}
              />
            </div>
          </div>
          <div className={styles.scrollIndicator} aria-hidden="true">&#8595;</div>
        </div>
      </header>

      <section id="about" className={styles.about}>
        <div className="container">
          <div className="row" style={{justifyContent: 'center'}}>
            <div className={clsx('col col--8', styles.textCol)}>
              <Heading as="h2">
                <Translate id="home.about.title">About Me</Translate>
              </Heading>
              <p>
                <Translate id="home.about.p1">
                  I'm a software engineer with 3+ years of experience in
                  .NET/C# and SQL Server, working across ERP, banking and
                  real-time communication platforms. I specialize in
                  refactoring production systems and building integration
                  tests that keep them stable.
                </Translate>
              </p>
              <p>
                <Translate id="home.about.p2">
                  I use Claude Code and Cursor daily, have built custom agents
                  and skills for recurring team tasks, and tune context and
                  token usage for cost. I'm focused on AI-powered backends,
                  with React and TypeScript on the front.
                </Translate>
              </p>
              <p>
                <Translate id="home.about.p3">
                  I enjoy mentoring: I've onboarded new developers and run
                  technical interviews. My background is in electronics
                  engineering, which is where my interest in programming
                  started.
                </Translate>
              </p>
              <div className={styles.links}>
                {socialLinks.map(({label, url}) => (
                  <a
                    key={label}
                    href={url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="button button--outline button--primary">
                    {label}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
