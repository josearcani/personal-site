import Heading from '@theme/Heading';
import Translate from '@docusaurus/Translate';
import styles from './styles.module.css';

const EXPERIENCE = [
  {
    company: 'Jalasoft',
    period: <Translate id="home.exp.jala.period">Sep 2023 – Aug 2026</Translate>,
    roles: [
      {
        title: <Translate id="home.exp.jala.backend.title">Backend Developer</Translate>,
        period: <Translate id="home.exp.jala.backend.period">Dec 2023 – Aug 2026</Translate>,
        bullets: [
          <Translate id="home.exp.jala.backend.b1">
            Refactored a core MRP feature and proposed improvements to the
            solution.
          </Translate>,
          <Translate id="home.exp.jala.backend.b2">
            Built and maintained an integration test suite, adding coverage to
            existing features and setting up the process for new ones.
          </Translate>,
          <Translate id="home.exp.jala.backend.b3">
            Used Claude Code and Cursor for code generation, bug diagnosis and
            test writing, increasing ticket throughput.
          </Translate>,
          <Translate id="home.exp.jala.backend.b4">
            Built custom AI agents and skills for recurring workflow tasks, and
            tuned context and token usage for cost efficiency.
          </Translate>,
          <Translate id="home.exp.jala.backend.b5">
            Added compatibility for New Outlook desktop alongside Outlook
            classic in a client integration tool.
          </Translate>,
          <Translate id="home.exp.jala.backend.b6">
            Diagnosed and fixed Android app issues around incorrect data output
            and offline connectivity.
          </Translate>,
          <Translate id="home.exp.jala.backend.b7">
            Onboarded and trained new developers, including AI-assisted
            workflows.
          </Translate>,
        ],
      },
      {
        title: <Translate id="home.exp.jala.fullstack.title">Fullstack Developer</Translate>,
        period: <Translate id="home.exp.jala.fullstack.period">Sep 2023 – Dec 2023</Translate>,
        bullets: [
          <Translate id="home.exp.jala.fullstack.b1">
            Integrated a facial-detection library to calculate attendance
            percentage from a webcam feed.
          </Translate>,
          <Translate id="home.exp.jala.fullstack.b2">
            Added role-based validation to API endpoints.
          </Translate>,
        ],
      },
    ],
  },
  {
    company: 'Banco BCP',
    period: <Translate id="home.exp.bcp.period">Feb 2023 – Sep 2023</Translate>,
    roles: [
      {
        title: <Translate id="home.exp.bcp.title">Fullstack Developer</Translate>,
        bullets: [
          <Translate id="home.exp.bcp.b1">
            Migrated an application from .NET Framework to .NET 6, separating
            concerns between layers.
          </Translate>,
          <Translate id="home.exp.bcp.b2">
            Implemented JWT authentication and AWS Lambda functions.
          </Translate>,
          <Translate id="home.exp.bcp.b3">
            Set up CI/CD with Azure DevOps and documented APIs with Swagger and
            Postman.
          </Translate>,
          <Translate id="home.exp.bcp.b4">
            Supported and maintained React and .NET applications, including
            legacy projects.
          </Translate>,
        ],
      },
    ],
  },
];

export default function ExperienceSection() {
  return (
    <section id="experience" className={styles.experience}>
      <div className="container">
        <div className="text--center margin-bottom--lg">
          <Heading as="h2">
            <Translate id="home.exp.title">Experience</Translate>
          </Heading>
        </div>
        <div className="row" style={{justifyContent: 'center'}}>
          <div className="col col--8">
            {EXPERIENCE.map((job) => (
              <article key={job.company} className={styles.job}>
                <div className={styles.jobHeader}>
                  <Heading as="h3" className={styles.company}>
                    {job.company}
                  </Heading>
                  <span className={styles.period}>{job.period}</span>
                </div>
                {job.roles.map((role, i) => (
                  <div key={i} className={styles.role}>
                    <p className={styles.roleTitle}>
                      <strong>{role.title}</strong>
                      {role.period && (
                        <span className={styles.rolePeriod}> · {role.period}</span>
                      )}
                    </p>
                    <ul>
                      {role.bullets.map((b, j) => (
                        <li key={j}>{b}</li>
                      ))}
                    </ul>
                  </div>
                ))}
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
