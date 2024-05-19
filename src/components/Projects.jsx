/* eslint-disable react/no-unescaped-entities */
import styled from "styled-components";
import Button from "./Button";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const Projects = () => {
  return (
    <Div>
      <h1 className="heading">Projects</h1>
      <div className="projects">
        <div className="project">
          <motion.div
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
            transition={{ duration: 0.5 }}
            viewport={{
              once: true,
            }}
          >
            <img src="assets/lan4vote.png" alt="" />
          </motion.div>
          <motion.div
            className="text"
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
            transition={{ duration: 0.5 }}
            viewport={{
              once: true,
            }}
          >
            <h2>Lan 4 Vote</h2>

            <p>
              I design the frontend of an app designed to educate citizens in
              Sierra Leone on proper voting procedures.
            </p>
            <Button buttonText="Case Study" />
          </motion.div>
        </div>

        <div className="project">
          <motion.div
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
            transition={{ duration: 0.7 }}
            viewport={{
              once: true,
            }}
          >
            <img src="assets/tecbiz.png" alt="" />
          </motion.div>

          <motion.div
            className="text"
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
            transition={{ duration: 0.7 }}
            viewport={{
              once: true,
            }}
          >
            <h2>Techbiz</h2>

            <p>
              I was part of a team that developed an app aimed at helping users
              locate restaurants and hotels in Sierra Leone, providing detailed
              information about each establishment
            </p>
            <Button buttonText="Case Study" />
          </motion.div>
        </div>

        <div className="project">
          <motion.div
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
            transition={{ duration: 0.7 }}
            viewport={{
              once: true,
            }}
          >
            <img src="assets/splash.png" alt="" />
          </motion.div>

          <motion.div
            className="text"
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
            transition={{ duration: 0.7 }}
            viewport={{
              once: true,
            }}
          >
            <h2>Cash Box</h2>

            <p>
              I was part of a team that developed a mobile app allowing users to
              set savings goals and deposit money for a predetermined duration.
              Once the set time period is complete, users can withdraw their
              savings as required.
            </p>
            <Button buttonText="Case Study" />
          </motion.div>
        </div>

        <div className="project">
          <motion.div
            className="text"
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
            transition={{ duration: 0.7 }}
            viewport={{
              once: true,
            }}
          >
            <img src="assets/neuenergy.png" alt="" />
          </motion.div>

          <motion.div
            className="text"
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
            transition={{ duration: 0.7 }}
            viewport={{
              once: true,
            }}
          >
            <h2>Neuenergy</h2>

            <p>
              I developed an app showcasing comprehensive information about a
              Sierra Leonean company specializing in electric vehicles,
              providing users with all they need to know about the company's
              offerings.
            </p>
            <Button buttonText="Case Study" />
          </motion.div>
        </div>

        <div className="project">
          <motion.div
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
            transition={{ duration: 0.7 }}
            viewport={{
              once: true,
            }}
          >
            <img src="assets/berakah.png" alt="" />
          </motion.div>

          <motion.div
            className="text"
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
            transition={{ duration: 0.7 }}
            viewport={{
              once: true,
            }}
          >
            <h2>Berahkah</h2>

            <p>
              I developed a booking system app tailored for hotels, simplifying
              the process of collecting and managing all their data efficiently.
            </p>
            <Button buttonText="Case Study" />
          </motion.div>
        </div>

        <div className="project">
          <motion.div
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
            transition={{ duration: 0.7 }}
            viewport={{
              once: true,
            }}
          >
            <img src="assets/dele.png" alt="" />
          </motion.div>

          <motion.div
            className="text"
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
            transition={{ duration: 0.7 }}
            viewport={{
              once: true,
            }}
          >
            <h2>Taramax</h2>

            <p>
              Introducing TaramaX, the comprehensive loan system app designed
              specifically for TaramaxSl. Simplify loan applications, approvals,
              and management with our secure, user-friendly platform. Optimize
              your loan business with TaramaX.
            </p>
            <Button buttonText="Case Study" />
          </motion.div>
        </div>
      </div>

      <div className="git-link">
        <Link
          className="btt"
          to="https://github.com/Samuel77777777?tab=repositories"
          target="_blank"
          rel="noopener noreferrer"
        >
          Checkout the all my projects in Github
        </Link>
      </div>
    </Div>
  );
};

export default Projects;

const Div = styled.div`
  margin-top: 200px;
  margin-bottom: 200px;
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

  .cv-btn {
    display: inline-block;
    border-radius: 5rem;
    background: #444;
    color: #fff;
    box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.2);
    padding: 10px 30px;
    position: relative;
    z-index: 0;
    overflow: hidden;
    font-size: 17px;
    cursor: pointer;
    transition: 0.3s ease-in;
  }
  .cv-btn:hover {
    background-color: #2f27ce;
  }

  .projects {
    margin-top: 100px;
    display: flex;
    justify-content: center;
    flex-direction: column;
    gap: 100px;
    aling-items: center;
  }

  .project {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 100px;
  }
  .projects img {
    width: 500px;
    height: 300px;
    object-fit: cover;
    border-radius: 50px;
    border: 5px solid #eae9ef;
    box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.1);
    cursor: pointer;
  }

  .projects img:hover {
    transform: scale(1.1);
  }

  .text p {
    max-width: 500px;
    font-family: "Poppins", sans-serif;
    letter-spacing: 1px;
  }

  .text {
    display: flex;
    flex-direction: column;
    gap: 50px;
  }

  .text h2 {
    font-size: 29px;
    font-weight: bold;
    text-transform: capitalize;
    font-family: "Poppins", sans-serif;
  }

  .btt {
    margin-top: 100px;
    margin-bottom: 100px;
    margin-left: auto;
    margin-right: auto;
    border-radius: 15px;

    background: #444;
    color: #fff;
    box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.2);
    padding: 10px 30px;

    font-size: 17px;
    cursor: pointer;
    transition: 0.3s ease-in;
  }

  .git-link {
    margin: 0 auto;
    display: flex;
    justify-content: center;
  }
`;
