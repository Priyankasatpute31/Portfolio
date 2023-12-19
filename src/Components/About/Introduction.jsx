import React from "react";
import "./Introduction.css";
import ExitToAppIcon from "@material-ui/icons/ExitToApp";
import { ThemeContext } from "../../Context/theme";
import profilePic from "../../assets/Priyanka.png";


export const Introduction = () => {
  const [{ themename }] = React.useContext(ThemeContext);

  return (
    <>
      <section id="#about">
        <div className="section" data-aos="fade-right">
          <h2 className="section__title">
            About <span className="different">Me</span>
          </h2>
          <div className={"introduction " + themename}>
            <div className="introduction_logocontainer">
              <img src={profilePic} alt="Images" />
            </div>
            <div className="introduction_datacontainer">
              <h4>
                Hi Everyone, My name is{" "}
                <span className="different">Priyanka Satpute </span> and I am from{" "}
                <span className="different">
                  {" "}
                  Pune, Maharashtra (India)
                </span>
                . I am a {" "}
                <span className="different">
                  FullStack Developer 
                </span>
                , I have 1.1 year of relevant industrial experience in development
                . I have completed my post graduation diploma in Advanced Computing 
                from{" "}
                <span className="different">
                 CDAC Mumbai
                </span>
                . I also completed graduation in BE (Computer Science Engineering)
                from{" "}
                <span className="different">
                  Savitribai Phule University, Pune (MH)
                </span>
              </h4>
              <h4>Terms That can describe me apart form Coding :</h4>
              <h4 className="different">
                <span className="icons">
                  <ExitToAppIcon />
                </span>
                Freelancer{" "}
              </h4>
              <h4 className="different">
                <span className="icons">
                  <ExitToAppIcon />
                </span>
                Team Player{" "}
              </h4>
              <h4 className="different">
                <span className="icons">
                  <ExitToAppIcon />
                </span>
                Leadership Qualities{" "}
              </h4>
              <h4 className="different">
                <span className="icons">
                  <ExitToAppIcon />
                </span>
                Lifelong Learner{" "}
              </h4>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
