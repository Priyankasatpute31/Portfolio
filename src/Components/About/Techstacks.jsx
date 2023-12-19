import React from "react";
import "./Techstacks.css";
import { FaReact, FaAws } from "react-icons/fa";
import {
  SiRedux,
  SiHtml5,
  SiPostman,SiJavascript, SiMysql
} from "react-icons/si";
import { DiCss3} from "react-icons/di";
import { VscGithub } from "react-icons/vsc";
import { BiLogoSpringBoot } from "react-icons/bi";
import  {BsBootstrap} from "react-icons/bs";
import { LiaJava } from "react-icons/lia";

export const Techstacks = () => {
  return (
    <>
      <div className="section main" data-aos="fade-right">
        <h2 className="section__title different">Skills</h2>
        <div className="techsection">
          <div>
            <SiJavascript />
            <h5>Javascript</h5>
          </div>
          <div>
            <SiHtml5 />
            <h5>HTML</h5>
          </div>
          <div>
            <DiCss3 />
            <h5>CSS</h5>
          </div>
          <div>
            <FaReact />
            <h5>React</h5>
          </div>
          <div>
          <SiRedux />
            <h5>Redux</h5>
          </div>
          <div>
          <LiaJava />
            <h5>Java</h5>
          </div>

          <div>
          <BiLogoSpringBoot />
            <h5>SpringBoot</h5>
          </div>

          <div>
            <FaAws />
            <h5>AWS</h5>
          </div>
          <div>
            <BsBootstrap />
            <h5>Bootstrap</h5>
          </div>
          <div>
          <SiMysql />
            <h5>Mysql</h5>
          </div>
          <div>
            <SiPostman />
            <h5>Postman</h5>
          </div>
          <div>
            <VscGithub />
            <h5>Github</h5>
          </div>
        </div>
      </div>
    </>
  );
};
