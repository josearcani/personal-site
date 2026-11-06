import Heading from '@theme/Heading';
import Translate from '@docusaurus/Translate';
import useCvUrl from '@site/src/hooks/useCvUrl';
import styles from './styles.module.css';

export default function ContactSection() {
  const cvUrl = useCvUrl();
  return (
    <section id="contact" className={styles.contact}>
      <div className="container text--center">
        <Heading as="h2">
          <Translate id="home.contact.title">Contact</Translate>
        </Heading>
        <p className={styles.lead}>
          <Translate id="home.contact.text">
            Want to work together or just say hi? Reach out.
          </Translate>
        </p>
        <div className={styles.actions}>
          <a
            href="mailto:jose.arcani@outlook.com"
            className="button button--primary button--lg">
            jose.arcani@outlook.com
          </a>
          <a
            href="https://www.linkedin.com/in/josearcani/"
            target="_blank"
            rel="noopener noreferrer"
            className="button button--outline button--primary button--lg">
            LinkedIn
          </a>
          <a
            href="https://github.com/josearcani"
            target="_blank"
            rel="noopener noreferrer"
            className="button button--outline button--primary button--lg">
            GitHub
          </a>
          <a
            href={cvUrl}
            download
            className="button button--outline button--primary button--lg">
            <Translate id="home.contact.cv">Download CV</Translate>
          </a>
        </div>
      </div>
    </section>
  );
}
