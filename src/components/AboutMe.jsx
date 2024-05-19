/* eslint-disable react/no-unescaped-entities */
import styled from "styled-components";
import Button from "./Button";
import { motion } from "framer-motion";

const AboutMe = () => {
  return (
    <Div>
      <h1 className="heading">About Me</h1>

      <div className="about-me-container">
        <motion.div
          className="container-1"
          initial={{
            scale: 0,
            opacity: 0,
            x: -400,
          }}
          whileInView={{
            scale: 1,
            opacity: 1,
            x: 0,
          }}
          transition={{
            duration: 0.5,
          }}
          viewport={{
            once: true,
          }}
        >
          <h1 className="heads">Get to Know Me!</h1>

          <p>
            Hey there! I'm Samuel B Koroma, and I'm a full-stack developer based
            in Sierra Leone. I've tackled remote projects for agencies, provided
            consultations for startups, and teamed up with talented individuals
            to craft digital solutions for various business needs and consumer
            applications. I'm a passionate enthusiast of digital products. Over
            time, I've immersed myself in countless web and mobile applications
            across diverse industries and sectors. Don't hesitate to reach out
            to me right here!
          </p>

          <Button buttonText="Contact Me" />
        </motion.div>

        <motion.div
          className="container-2"
          initial={{
            scale: 0,
            opacity: 0,
            x: 400,
          }}
          whileInView={{
            scale: 1,
            opacity: 1,
            x: 0,
          }}
          transition={{
            duration: 0.5,
          }}
          viewport={{
            once: true,
          }}
        >
          <h1 className="heads">My Skills</h1>

          <div className="skills">
            <div className="skill">Flutter</div>
            <div className="skill">React</div>
            <div className="skill">MySql</div>
            <div className="skill">HTML</div>
            <div className="skill">CSS</div>
            <div className="skill">Javascript</div>
            <div className="skill">GitHub</div>
            <div className="skill">Firebase</div>
            <div className="skill">Microsoft Package</div>
            <div className="skill">3D Printing</div>
            <div className="skill">Laser Cutting</div>
          </div>
        </motion.div>
      </div>
    </Div>
  );
};

export default AboutMe;

const Div = styled.div`
  margin-top: 200px;
  .heading {
    text-align: center;
    padding: 1rem;
    color: #fff;
    font-size: 6rem;
    -webkit-text-stroke: #666 0.1rem;
    text-shadow: 0 0.3rem 0.5rem rgba(0, 0, 0, 0.1);
    font-weight: bolder;
    text-transform: uppercase;
    letter-spacing: 0.3rem;
  }

  .about-me-container {
    display: flex;
    justify-content: center;
    margin: 0 auto;

    gap: 100px;
    margin: 20px;
  }

  .container-1 {
    display: flex;
    flex-direction: column;
    gap: 30px;
    width: 100%;

    margin-left: 30px;
    justify-content: center;
    align-items: start;
  }

  .container-2 {
    display: flex;
    flex-direction: column;
    margin: 0 auto;
    gap: 33px;
    width: 100%;
  }

  .container-1 p {
    max-width: 600px;
    font-family: "Poppins", sans-serif;
    font-size: 18px;
    letter-spacing: 1px;
    color: #808080;
  }

  .heads {
    font-family: "Poppins", sans-serif;
    font-size: 24px;
    font-weight: bold;
  }

  .skills {
    display: flex;
    flex-wrap: wrap;
    gap: 15px;
  }
  .skill {
    text-align: center;
    padding: 1rem 2rem;
    margin-right: 1rem;
    font-size: 18px;
    background: rgba(153, 153, 153, 0.2);
    border-radius: 5px;
    font-weight: 600;
    font-family: "Poppins", sans-serif;
    color: #777;
    cursor: pointer;
  }
  .skill:hover {
    background: #2f27ce;
    color: white;
    scale: 1.2;
    transition: 0.5s ease-in-out;
    border-radius: 20px;
  }

  .contact {
    margin-top: 5px;
    width: 200px;
    display: inline-block;
    border-radius: 5rem;
    background: #444;
    color: #fff;
    box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.2);
    padding: 10px 10px;
    position: relative;
    z-index: 0;
    overflow: hidden;
    font-size: 17px;
    cursor: pointer;
    transition: 0.3s ease-in;
  }
  .contact:hover {
    background-color: #2f27ce;
  }
`;
