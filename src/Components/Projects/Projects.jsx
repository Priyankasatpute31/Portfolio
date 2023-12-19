import React from "react";
import "./Projects.css";
import { FaReact} from "react-icons/fa";
import { TbPoint } from "react-icons/tb";
import eIPO from "../../assets/e-IPO.png";
import NDM from "../../assets/NDM.jpeg";
import JobPortal from "../../assets/JobPortal.png";
import { VscGithub } from "react-icons/vsc";
import { BiLogoSpringBoot } from "react-icons/bi";
import { BsBootstrap} from "react-icons/bs";
import { LiaJava } from "react-icons/lia";
import {
  SiHtml5,
  SiJavascript,
  SiRedux,
  SiPostman,
  SiMysql
} from "react-icons/si";
import { DiCss3 } from "react-icons/di";
import { IoLogoJavascript } from "react-icons/io";
export const Projects = () => {
  return (
    <>
      <div className="section">
        <h2 className="section__title different">Projects</h2>
        <div className="allProjects">
          <div className="projects_container" data-aos="fade-right">
            <div className="project">
              <div className="project_videocontainer">
                <div>
                <img src={eIPO} alt="Images" />
                </div>
              </div>
              <div className="project_information">
                <h3>E-IPO</h3>
                <p>
                <ul>
    <li><TbPoint />E-Initial Public Offering" its a Bidding Platform </li>
    
    <li><TbPoint />Assisting senior developers into Develope and maintaine full-stack web apps and implementing front-end
and back-end features using Spring Boot and Reactjs.</li>
    
    <li><TbPoint />Developed RESTful APIs for user authentication, course creation, and data retrieval. Implemented Spring
Security for role-based access control and JWT-based authentication to ensure data security.
</li>
    <li><TbPoint />Participating in daily stand-up meetings to report progress, discuss challenges, and plan tasks.
</li>
    <li><TbPoint />Learning and applying industry-standard development tools and practices, such as Git version control
and responsive design principles.</li> 
<li><TbPoint />Gaining hands-on experience with debugging and troubleshooting issues in the codebase.</li>
</ul>
                </p>
                <div>
                <LiaJava />
                <BiLogoSpringBoot />
                <SiRedux />
                <FaReact />
                <SiPostman />
                <SiMysql />
                <VscGithub />
                </div>
              </div>
            </div>
          </div>
          <div className="projects_container" data-aos="fade-right">
            <div className="project">
              <div className="project_videocontainer">
                <div>
                <img src={NDM} alt="Images" />
                </div>
              </div>
              <div className="project_information">
                <h2>NDM</h2>
                <ul>
    <li><TbPoint />NEW Debt Market" its a Trading Platform </li>
    
    <li><TbPoint />Implemented routing using libraries like React Router to enable navigation between different views within
a single-page application.</li>
    
    <li><TbPoint />Integrated with backend APIs using fetch or Axios to fetch and update data from the server.
</li>
    <li><TbPoint />Designed and implemented scalable microservices architecture, improving performance by 50% and
reducing downtime. 
</li>
    <li><TbPoint />code reviewed on Git for both the Java backend and React frontend codebases to maintain code quality
and identify potential issues early.
</li> 
<li><TbPoint />Participated in code reviews,Debugging and Troubleshooting, leading to higher code quality and fewer
bugs.</li>
</ul>
                <div>
                 <LiaJava />
                  <DiCss3 />
                  <SiHtml5 />
                  <SiJavascript />
                  <BsBootstrap />
                </div>
              </div>
            </div>
          </div>
       

          <div className="projects_container" data-aos="fade-right">
            <div className="project">
              <div className="project_videocontainer">
              <div>
                <img src={JobPortal} alt="Images" />
                </div>
              </div>
              <div className="project_information">
                <h2>Online job portal</h2>
                <ul>
    <li><TbPoint />nternal recruitment automation product</li>
    
    <li><TbPoint />Online job application Portal This project allows companies to register and add different jobs at this
website. It also allows Job seekers to create a profile to find best matching job and apply for it according
to skill set required.
</li>
<li><TbPoint />Automatic question Generation. Question Generation system can generate question from the given text
automatically.it is the process of taking text as input and generating questions as output. rules are
applied to generate many simple and complex type questions such as what who,who,whom,how much
and how many etc
</li>
    <li><TbPoint />According to that result is created and interview scheduling 
</li>
    <li><TbPoint />Job posting management, offer letter automation, resource allocation.
</li> 
</ul>
<div> 
<LiaJava />
                <BiLogoSpringBoot />
                <SiRedux />
                <FaReact />
                <SiPostman />
                <SiMysql />
                <VscGithub />
                </div>
              </div>
            </div>
          </div>
            </div>
          </div>
    </>
  );
};
