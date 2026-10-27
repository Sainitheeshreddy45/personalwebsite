import "../css/Resume.css";
import data from "../data";

export default function Resume() {
  return (
    <>
      <div className="main-header">
        <h1 className="page-title">{data.resume.pageTitle}</h1>
        <span className="experience-badge">{data.resume.badge}</span>
      </div>
      
      <div className="resume-container">
        {/* Education Column */}
        <div className="column">
          <h2 className="section-title">{data.resume.educationTitle}</h2>
          {data.resume.education.map((item) => <TimelineCard key={`${item.year}-${item.institution}`} item={item} />)}
        </div>

        {/* Experience Column */}
        <div className="column">
          <h2 className="section-title">{data.resume.experienceTitle}</h2>
          {data.resume.experience.map((item) => <TimelineCard key={`${item.year}-${item.role}`} item={item} companyName />)}
        </div>
      </div>

      <div className="container">
        {/* Certificates Section */}
        <section className="section certificates-section">
          <h2 className="section-title">{data.resume.certificatesTitle}</h2>
          <div className="certificates-grid">
            {data.resume.certificates.map((certificate) => (
              <CertificateCard key={certificate.title} {...certificate} />
            ))}
          </div>
        </section>

        {/* Skills Section */}
        <div className="grid-layout">
          {data.resume.skillGroups.map((group) => (
            <section className="section" key={group.title}>
              <h2 className="section-title">{group.title}</h2>
              {group.skills.map((skill) => <SkillBar key={skill.name} {...skill} />)}
            </section>
          ))}
        </div>
      </div>
    </>
  );
}

const CertificateCard = ({ logo, title, issuer, badge }) => (
  <article className="cert-card">
    <div className="cert-logo-wrapper" aria-hidden="true">
      <span className="cert-logo-text">{getBrandMark(logo)}</span>
    </div>
    <div className="cert-content">
      <span className="cert-issuer company-name">{issuer}</span>
      <h3 className="cert-title">{title}</h3>
      <div className="cert-footer">
        {badge && <span className="cert-badge">{badge}</span>}
      </div>
    </div>
  </article>
);

function getBrandMark(brand) {
  const brandMarks = {
    HackerRank: "HR",
    Microsoft: "MS",
    AWS: "AWS",
    JPMorgan: "JP",
  };

  return brandMarks[brand] || brand.slice(0, 2).toUpperCase();
}

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

function TimelineCard({ item, companyName = false }) {
  return (
    <div className={`timeline-item${item.wideDate ? " wide-date" : ""}`}>
      <div className="timeline-date-pill">{item.year}</div>
      <div className={`timeline-meta${companyName ? " company-name" : ""}`}>{item.institution}</div>
      <h3 className="timeline-title">{item.role}</h3>
      <p className="timeline-text">{item.description}</p>
    </div>
  );
}