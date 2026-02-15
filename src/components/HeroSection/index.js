import Heading from '@theme/Heading';
import styles from './styles.module.css';

export default function HeroSection() {
  return (
    <header id="home" className={styles.hero}>
      <div className="container">
        <p className={styles.subtitle}>Hello there, I am</p>
        <Heading as="h1" className={styles.name}>Jose Arcani</Heading>
        <p className={styles.role}>Backend Developer</p>
        <a href="#projects" className="button button--secondary button--lg">
          Check my projects
        </a>
      </div>
    </header>
  );
}
