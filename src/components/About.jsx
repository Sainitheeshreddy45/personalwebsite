import React from "react";
import "../css/About.css";
import {
  BiLogoReact,
  BiLogoJavascript,
  BiLogoHtml5,
  BiLogoCss3,
  BiLogoNodejs,
  BiLogoGithub,
  BiLogoJava,
  BiLogoDocker,
  BiLogoSpringBoot,
  BiLogoGit,
  BiLogoMongodb,
  BiLogoAws,
  BiLogoBootstrap,
  BiCodeAlt,
} from "react-icons/bi";
import {
  SiAnsible,
  SiApachegroovy,
  SiElasticsearch,
  SiExpress,
  SiJenkins,
  SiKubernetes,
  SiLinux,
  SiMysql,
  SiPython,
  SiTerraform,
} from "react-icons/si";
import data from "../data";

export default function About() {
  return (
    <div>
      <div className="main-header">
        <h1 className="page-title">{data.about.pageTitle}</h1>
        <span className="experience-badge">{data.about.badge}</span>
      </div>

      <IconCarousel />
    </div>
  );
}

const skillIcons = {
  React: <BiLogoReact />,
  JS: <BiLogoJavascript />,
  HTML: <BiLogoHtml5 />,
  CSS: <BiLogoCss3 />,
  Node: <BiLogoNodejs />,
  MongoDB: <BiLogoMongodb />,
  AWS: <BiLogoAws />,
  Bootstrap: <BiLogoBootstrap />,
  Java: <BiLogoJava />,
  Docker: <BiLogoDocker />,
  SpringBoot: <BiLogoSpringBoot />,
  GitHub: <BiLogoGithub />,
  Git: <BiLogoGit />,
  MySQL: <SiMysql />,
  ElasticSearch: <SiElasticsearch />,
  Express: <SiExpress />,
  Jenkins: <SiJenkins />,
  Groovy: <SiApachegroovy />,
  Linux: <SiLinux />,
  Ansible: <SiAnsible />,
  Terraform: <SiTerraform />,
  Kubernetes: <SiKubernetes />,
  Python: <SiPython />,
};


const IconCarousel = () => {
  return (
    <>
      <section className="about-section container py-5">
        <div className="row align-items-center">
          {/* Left Side: Illustration with background blobs */}
          <div className="col-lg-6 position-relative text-center mb-5 mb-lg-0">
            <div className="blob-bg"></div>
            <img
              src={data.about.illustration}
              alt={data.about.illustrationAlt}
              className="img-fluid about-image"
            />
          </div>

          {/* Right Side: Content */}
          <div className="col-lg-6 ps-lg-5">
            <div className="content-box">
              <h2 className="about-title mb-4">
                {data.about.heading.map((line, index) => (
                  <React.Fragment key={line}>
                    {line}
                    {index < data.about.heading.length - 1 && <br />}
                  </React.Fragment>
                ))}
              </h2>

              {data.about.paragraphs.map((paragraph, index) => (
                <p className={`about-text${index === 0 ? " mb-4" : ""}`} key={index}>
                  {paragraph.map((part, partIndex) =>
                    part.emphasis
                      ? <strong key={partIndex}>{part.text}</strong>
                      : <React.Fragment key={partIndex}>{part.text}</React.Fragment>
                  )}
                </p>
              ))}
            </div>
          </div>
        </div>
      </section>

      <div className="carousel-container">
        <div className="carousel-track">
          {/* First set of icons */}
          {data.about.skills.map((skill) => (
            <div className="icon-card" key={`first-${skill}`}>
              <span title={skill}>{skillIcons[skill] || <BiCodeAlt />}</span>
            </div>
          ))}
          {/* Duplicate set for seamless looping */}
          {data.about.skills.map((skill) => (
            <div className="icon-card" key={`second-${skill}`}>
              <span title={skill}>{skillIcons[skill] || <BiCodeAlt />}</span>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};