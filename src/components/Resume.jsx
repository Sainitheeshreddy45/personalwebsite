import "../css/Resume.css";

export default function Resume() {
  return (
    <>
      <div class="main-header">
        <h1 class="page-title">Resume</h1>
        <span class="experience-badge">3.8 Years of Experience</span>
      </div>
      <div class="resume-container">
        <div class="column">
          <h2 class="section-title">Education</h2>

          <div class="timeline-item wide-date">
            <div class="timeline-date-pill">2017-21</div>
            <div class="timeline-meta">
              Mallareddy Institute of Technology and sciences
            </div>
            <h3 class="timeline-title">Computer Science & Engineering</h3>
            <p class="timeline-text">
              Persued my Bachelor's degree in computer science and engineering
              from esteemed MRITS, Secundrabad with an aggregate of 7.41 CGPa
            </p>
          </div>

          <TimelineCard
            year="2017"
            college="Narayana Junior College"
            role="MPC"
            description="Persued my Intermediate education from Narayan junior College, Hyderabad in MPC with an aggregate oof 96.4%"
          />

          <div class="timeline-item">
            <div class="timeline-date-pill">2015</div>
            <div class="timeline-meta">Sharada High School</div>
            <h3 class="timeline-title">SSC</h3>
            <p class="timeline-text">
              FInished my schooling from Sharada High School, Nagarkurnool, with
              an aggregate of 9.7 CGPA.
            </p>
          </div>
        </div>

        <div class="column">
          <h2 class="section-title">Experience</h2>

          <div class="timeline-item wide-date">
            <div class="timeline-date-pill">2021 - 2023</div>
            <div class="timeline-meta">Infosys</div>
            <h3 class="timeline-title">Senior Systems Engineer</h3>
            <p class="timeline-text">
              Worked as an BackEnd Developer, Executed development tasks with
              100% SLA adherence, establishing a strong foundation in
              banking-grade software reliability. Developed API endpoints from
              scratch following Test-Driven Development (TDD) principles.
              Optimized service calls and data structures to reduce
              organizational costs. Wrote comprehensive unit tests to ensure
              code reliability and high accuracy in production.
            </p>
          </div>

          <div class="timeline-item wide-date">
            <div class="timeline-date-pill">2023 - 2025</div>
            <div class="timeline-meta">Infosys</div>
            <h3 class="timeline-title">Senior Systems Engineer</h3>
            <p class="timeline-text">
              During my tenure on an enterprise-level Intel project, 
              I progressed into a role focused on the design and optimization of large-scale backend systems. 
              I spearheaded efforts to enhance application efficiency, 
              successfully achieving a ~50% reduction in API response times through meticulous backend tuning. 
              My technical contributions included implementing messaging queues for seamless asynchronous communication and 
              integrating Elasticsearch to provide high-speed search capabilities across the platform.
              To ensure system reliability and security, I utilized AWS CloudWatch for real-time performance monitoring, 
              implemented JWT-based authentication, and maintained a high standard of code quality through robust unit testing with Mockito.
            </p>
          </div>
        </div>
      </div>

      <div className="container">
        {/* Certificates Section */}
        <section className="section">
          <h2 className="section-title">Certificates</h2>
          <div className="grid-layout">
            <CertificateCard
              logo="Java"
              title="Professional Java Developer"
              id="Infosys"
              date="21 January 2021"
            />
            <CertificateCard
              logo="SpringBoot"
              title="Professional Springboot Devloper"
              id="Infosys"
              date="7 April 2021"
            />
          </div>
        </section>

        {/* Skills Section */}
        <div className="grid-layout">
          <section className="section">
            <h2 className="section-title">Coding Skills</h2>
            <SkillBar name="Java" level={95} />
            <SkillBar name="SpringBoot" level={95} />
          </section>

          <section className="section">
            <h2 className="section-title">Design Skills</h2>
            <SkillBar name="HTML / CSS" level={100} />
            <SkillBar name="JavaScript" level={90} />
          </section>
        </div>
      </div>
    </>
  );
}

const CertificateCard = ({ logo, title, id, date }) => (
  <div className="certificate-card">
    <div className="certificate-logo">
      <span>{logo}</span>
    </div>
    <div className="certificate-info">
      <h3>{title}</h3>
      <p className="id">Company: {id}</p>
      <p className="date">{date}</p>
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
    <div class="timeline-item">
      <div class="timeline-date-pill">{year}</div>
      <div class="timeline-meta">{college}</div>
      <h3 class="timeline-title">{role}</h3>
      <p class="timeline-text">{description}</p>
    </div>
  );
}