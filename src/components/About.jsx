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

export default function About() {
  return (
    <div>
      <div className="main-header">
        <h1 className="page-title">About Me</h1>
        <span className="experience-badge">Professional Experience</span>
      </div>

      <IconCarousel />
    </div>
  );
}

const icons = [
  { id: 1, component: <BiLogoReact />, name: "React" },
  { id: 2, component: <BiLogoJavascript />, name: "JS" },
  { id: 3, component: <BiLogoHtml5 />, name: "HTML" },
  { id: 4, component: <BiLogoCss3 />, name: "CSS" },
  { id: 5, component: <BiLogoNodejs />, name: "Node" },
  { id: 6, component: <BiLogoMongodb />, name: "MongoDB" },
  { id: 7, component: <BiLogoAws />, name: "AWS" },
  { id: 8, component: <BiLogoBootstrap />, name: "Bootstrap" },
  { id: 9, component: <BiLogoJava />, name: "Java" },
  { id: 10, component: <BiLogoDocker />, name: "Docker" },
  { id: 11, component: <BiLogoSpringBoot />, name: "SpringBoot" },
  { id: 12, component: <BiLogoGithub />, name: "GitHub" },
  { id: 13, component: <BiLogoGit />, name: "Git" },
  { id: 14, component: <SiMysql />, name: "MySQL" },
  { id: 15, component: <SiElasticsearch />, name: "ElasticSearch" },
  { id: 20, component: <SiExpress />, name: "Express" },
  { id: 21, component: <SiJenkins />, name: "Jenkins" },
  { id: 22, component: <SiApachegroovy />, name: "Groovy" },
  { id: 23, component: <SiLinux />, name: "Linux" },
  { id: 24, component: <SiAnsible />, name: "Ansible" },
  { id: 25, component: <SiTerraform />, name: "Terraform" },
  { id: 26, component: <SiKubernetes />, name: "Kubernetes" },
  { id: 29, component: <SiPython />, name: "Python" },
];


const IconCarousel = () => {

    const aboutImage = "https://raw.githubusercontent.com/nullsniper45/personalwebsite/main/src/assets/Person.svg";
  return (
    <>
      <section className="about-section container py-5">
        <div className="row align-items-center">
          {/* Left Side: Illustration with background blobs */}
          <div className="col-lg-6 position-relative text-center mb-5 mb-lg-0">
            <div className="blob-bg"></div>
            <img
              src={aboutImage}
              alt="Person at desk"
              className="img-fluid about-image"
            />
          </div>

          {/* Right Side: Content */}
          <div className="col-lg-6 ps-lg-5">
            <div className="content-box">
              <h2 className="about-title mb-4">
                LET ME <br />
                INTRODUCE ABOUT <br />
                MYSELF
              </h2>

              <p className="about-text mb-4">
                I am a <strong>Software Engineer</strong> with over 4 years of
                experience at Infosys, where I optimized enterprise systems for{" "}
                <strong>Intel</strong>, achieving a 50% reduction in API
                response times.
              </p>
              <p className="about-text">
                While my core expertise is in{" "}
                <strong>Java and Spring Boot</strong>, I have independently
                mastered the <strong>React ecosystem</strong> and DevOps tools.
                I combine enterprise-level discipline with a self-starter's
                curiosity to build full-stack solutions that are both scalable
                and user-centric.
              </p>
            </div>
          </div>
        </div>
      </section>

      <div className="carousel-container">
        <div className="carousel-track">
          {/* First set of icons */}
          {icons.map((icon) => (
            <div className="icon-card" key={`first-${icon.id}`}>
              {icon.component}
            </div>
          ))}
          {/* Duplicate set for seamless looping */}
          {icons.map((icon) => (
            <div className="icon-card" key={`second-${icon.id}`}>
              {icon.component}
            </div>
          ))}
        </div>
      </div>
    </>
  );
};