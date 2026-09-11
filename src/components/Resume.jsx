import "../css/Resume.css";

export default function Resume() {
  return (
    <>
      <div className="main-header">
        <h1 className="page-title">Resume</h1>
        <span className="experience-badge">3.8+ Years of Experience</span>
      </div>
      
      <div className="resume-container">
        {/* Education Column */}
        <div className="column">
          <h2 className="section-title">Education</h2>

          <div className="timeline-item wide-date">
            <div className="timeline-date-pill">2017 - 2021</div>
            <div className="timeline-meta">
              Malla Reddy Institute of Technology and Sciences
            </div>
            <h3 className="timeline-title">Computer Science & Engineering</h3>
            <p className="timeline-text">
              Pursued my Bachelor's degree in Computer Science and Engineering
              from MRITS, Hyderabad with an aggregate of 7.41 CGPA.
            </p>
          </div>

          <TimelineCard
            year="2015 - 2017"
            college="Narayana Junior College"
            role="MPC (Intermediate)"
            description="Completed my Intermediate education from Narayana Junior College, Hyderabad in MPC with an aggregate of 96.4%."
          />

          <div className="timeline-item">
            <div className="timeline-date-pill">2015</div>
            <div className="timeline-meta">Sharada High School</div>
            <h3 className="timeline-title">SSC</h3>
            <p className="timeline-text">
              Finished my schooling from Sharada High School, Nagarkurnool, with
              an aggregate of 9.7 CGPA.
            </p>
          </div>
        </div>

        {/* Experience Column */}
        <div className="column">
          <h2 className="section-title">Experience</h2>

          <div className="timeline-item wide-date">
            <div className="timeline-date-pill">2021 - 2023</div>
            <div className="timeline-meta">Infosys</div>
            <h3 className="timeline-title">Systems Engineer</h3>
            <p className="timeline-text">
              Worked as a Backend Developer on Bulgarian Banking Project.
              Executed development tasks with 100% SLA adherence, establishing a
              strong foundation in banking-grade software reliability. Developed
              15+ core REST API endpoints from scratch following Test-Driven
              Development (TDD) principles with JUnit and Mockito. Optimized database query
              indexing to cut CPU/memory overhead by ~25%.
            </p>
          </div>

          <div className="timeline-item wide-date">
            <div className="timeline-date-pill">09/2021 - 04/2025</div>
            <div className="timeline-meta">Infosys</div>
            <h3 className="timeline-title">Systems Engineer (Intel IPOS-Central)</h3>
            <p className="timeline-text">
              Progressed into designing and optimizing large-scale backend systems.
              Spearheaded backend data re-engineering using parallel execution patterns,
              slashing API response times by 40-50%. Architected enterprise microservices
              using Spring Boot, gRPC, and Amazon SQS for decoupled asynchronous messaging.
              Integrated Elasticsearch with DynamoDB to deliver sub-second search across 1M+ records,
              enforced JWT security, and maintained high code quality via SonarQube.
            </p>
          </div>
        </div>
      </div>

      <div className="container">
        {/* Certificates Section */}
        <section className="section">
          <h2 className="section-title">Certificates & Badges</h2>
          <div className="certificates-grid">
            <CertificateCard
              logo="HackerRank"
              title="HackerRank SQL (Advanced)"
              issuer="HackerRank"
              badge="Verified"
            />
            <CertificateCard
              logo="Microsoft"
              title="Azure AI Essentials Professional Certificate"
              issuer="Microsoft & LinkedIn"
              badge="Professional Cert"
            />
            <CertificateCard
              logo="Microsoft"
              title="Microsoft Azure Essentials"
              issuer="Microsoft Press"
              badge="Verified"
            />
            <CertificateCard
              logo="AWS"
              title="AWS Cloud Quest: Cloud Practitioner"
              issuer="Amazon Web Services"
              badge="Training Badge"
            />
            <CertificateCard
              logo="JPMorgan"
              title="Software Engineering Job Simulation"
              issuer="JPMorganChase"
              badge="Virtual Experience"
            />
          </div>
        </section>

        {/* Skills Section */}
        <div className="grid-layout">
          <section className="section">
            <h2 className="section-title">Backend & Core Skills</h2>
            <SkillBar name="Java / Core Java" level={95} />
            <SkillBar name="Spring Boot / Microservices" level={95} />
            <SkillBar name="AWS & Cloud Solutions" level={85} />
          </section>

          <section className="section">
            <h2 className="section-title">Frontend & Web Skills</h2>
            <SkillBar name="JavaScript" level={90} />
            <SkillBar name="React" level={85} />
            <SkillBar name="HTML / CSS" level={95} />
          </section>
        </div>
      </div>
    </>
  );
}

const CertificateCard = ({ logo, title, issuer, badge }) => (
  <div className="cert-card">
    <div className="cert-logo-wrapper">
      <span className="cert-logo-text">{logo}</span>
    </div>
    <div className="cert-content">
      <h3 className="cert-title">{title}</h3>
      <div className="cert-footer">
        <span className="cert-issuer">{issuer}</span>
        {badge && <span className="cert-badge">{badge}</span>}
      </div>
    </div>
  </div>
);

const SkillBar = ({ name, level }) => (
  <div className="skill-item">
    <div className="skill-header">
      <span className="skill-name">{name}</span>
      <span className="skill-percentage">{level}%</span>
    </div>
    <div className="progress-bg">
      <div className="progress-fill" style={{ width: `${level}%` }}></div>
    </div>
  </div>
);

function TimelineCard({ year, college, role, description }) {
  return (
    <div className="timeline-item">
      <div className="timeline-date-pill">{year}</div>
      <div className="timeline-meta">{college}</div>
      <h3 className="timeline-title">{role}</h3>
      <p className="timeline-text">{description}</p>
    </div>
  );
}