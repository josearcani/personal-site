import Heading from '@theme/Heading';
import styles from './styles.module.css';
import clsx from 'clsx';

const socialLinks = [
  { label: 'GitHub', url: 'https://github.com/josearcani' },
  { label: 'LinkedIn', url: 'https://www.linkedin.com/in/josearcani/' },
  // { label: 'X', url: 'https://twitter.com/jose_arcani' },
  // { label: 'Medium', url: 'https://medium.com/@josearcani' },
  // { label: 'Dev.to', url: 'https://dev.to/josearcani' },
];

export default function HeroSection() {
  return (
    <>
      <header id="home" className={styles.hero}>
        <div className="container">
          <div className={clsx('row', styles.heroRow)}>
            <div className={clsx('col col--6', styles.heroTextCol)}>
              <p className={styles.subtitle}>Hi. I am</p>
              <Heading as="h1">Jose Arcani</Heading>
              <p className={styles.role}>Backend Developer</p>
            </div>
            <div className={clsx('col col--6', styles.imageCol)}>
              <img
                src="/img/jose.jpg"
                alt="Jose Arcani"
                className={styles.profileImage}
              />
            </div>
          </div>
          <div className={styles.scrollIndicator} aria-hidden="true">&#8595;</div>
        </div>
      </header>

      <section id="about" className={styles.about}>
        <div className="container">
          <div className="row">
            <div className={clsx('col col--8', styles.textCol)}>
              <Heading as="h2">About Me</Heading>
              <p>
                During my years in University, my first serious approach to
                programming was dealing with microcontrollers. Besides, I also
                learned about hardware design and building prototypes. Although it
                was more focused on the technical part, I was delighted by
                programming and software.
              </p>
              <p>
                Before graduation, I started to look up programming and learned
                more by myself. Much of the knowledge I have acquired is from
                books and platforms like FreeCodeCamp, Platzi, and Udemy to focus
                on the MERN and PERN stacks.
              </p>
              <div className={styles.links}>
                {socialLinks.map(({ label, url }) => (
                  <a
                    key={label}
                    href={url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="button button--outline button--primary"
                  >
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
