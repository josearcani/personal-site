import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

export default function AboutSection() {
  return (
    <section id="about" className={styles.about}>
      <div className="container">
        <div className="row">
          <div className={clsx('col col--4', styles.imageCol)}>
            <img
              src="/img/jose.jpg"
              alt="Jose Arcani"
              className={styles.profileImage}
            />
          </div>
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
              <a
                href="https://www.linkedin.com/in/josearcani/"
                target="_blank"
                rel="noopener noreferrer"
                className="button button--outline button--primary"
              >
                LinkedIn
              </a>
              <a
                href="https://github.com/josearcani"
                target="_blank"
                rel="noopener noreferrer"
                className="button button--outline button--primary"
              >
                GitHub
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
