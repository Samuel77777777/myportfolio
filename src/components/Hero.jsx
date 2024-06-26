/* eslint-disable react/no-unescaped-entities */
import styled from "styled-components";
import Button from "./Button";
import { motion } from "framer-motion";
// import { useEffect, useRef } from "react";
// import { Typed } from "react-typed";

const Hero = () => {
  // const typed = useRef(null);

  // useEffect(() => {
  //   const options = {
  //     strings: [
  //       "Welcome to my world of captivating user experiences,\n where React and Flutter are my tools of choice for crafting\n seamless interfaces and engaging applications",
  //     ],
  //     typeSpeed: 15,
  //     backSpeed: null,
  //     loop: false,
  //     backDelay: Infinity,
  //     onComplete: () => {
  //       // Callback function to handle the completion of the typing animation
  //       console.log("Typing animation completed!");
  //     },
  //   };

  //   // Initialize the Typed instance
  //   typed.current = new Typed("#typed", options);

  //   // Clean up the Typed instance on component unmount
  //   return () => {
  //     typed.current.destroy();
  //   };
  // }, []);

  return (
    <Div>
      <motion.div
        className="hero-text"
        initial={{
          scale: 0,
          opacity: 0,
          x: -500,
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
        <h2 className="hi">Hi, there!</h2>
        <h2 className="name">
          I'M <span className="name power">Samuel B Koroma</span>{" "}
        </h2>
        <p className="para">
          A full-stack developer within the software development industry who
          integrates front-end and back-end technologies to create fully
          functional web and mobile applications or software solutions.
        </p>
        <Button buttonText="About Me" />
        {/* <span id="typed"></span> */}
      </motion.div>
      <motion.div
        className="main-pic-div"
        initial={{
          scale: 0,
          opacity: 0,
          x: 500,
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
        <img src="assets/mainpic.png" alt="" />
      </motion.div>
    </Div>
  );
};

export default Hero;

const Div = styled.div`
  margin-top: 100px;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 200px;
  align-items: center;

  .main-pic-div {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 20px;
  }

  .main-pic-div img {
    height: 500px;
    filter: drop-shadow(0px 8px 8px rgba(0, 0, 0, 0.1));
  }

  .main-pic-div h1 {
    font-size: 25px;
    font-style: normal;
    font-family: "Montserrat", sans-serif;
  }

  span {
    max-width: 500px;
    font-size: 20px;
    font-weight: 500;
    letter-spacing: 1px;
  }

  .hero-text {
    display: flex;
    flex-direction: column;
    gap: 10px;
  }
  .logos {
    display: flex;
    align-items: center;
  }

  .hi {
    color: #444444;
    font-size: 20px;
    font-family: "Poppins", sans-serif;
  }

  .name {
    color: #444444;
    font-size: 55px;
    font-family: "Poppins", sans-serif;
    font-weight: bolder;
    text-transform: uppercase;
  }

  .para {
    max-width: 500px;
    font-size: 18px;
    letter-spacing: 1px;
    color: #666666;
  }
  .power {
    color: #2f27ce;
  }

  // .about-me {
  //   margin-top: 5px;
  //   width: 200px;
  //   display: inline-block;
  //   border-radius: 5rem;
  //   background: #444;
  //   color: #fff;
  //   box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.2);
  //   padding: 10px 10px;
  //   position: relative;
  //   z-index: 0;
  //   overflow: hidden;
  //   font-size: 17px;
  //   cursor: pointer;
  //   transition: 0.3s ease-in;
  // }
  // .about-me:hover {
  //   background-color: #2f27ce;
  // }

  // .about-me {
  //   margin-top: 5px;
  //   width: 200px;
  //   display: inline-block;
  //   border-radius: 5rem;
  //   padding: 10px 10px;
  //   position: relative;
  //   z-index: 0;
  //   overflow: hidden;
  //   font-size: 17px;
  //   cursor: pointer;
  //   box-shadow: 0px 8px 15px rgba(0, 0, 0, 0.1);
  //   transition: all 0.3s ease 0s;
  //   cursor: pointer;
  //   outline: none;
  //   background: #444;
  //   color: #fff;
  // }

  // .about-me:hover {
  //   background-color: #2f27ce;
  //   box-shadow: 0px 15px 20px #2f27ce;
  //   color: #fff;
  //   transform: translateY(-7px);
  // }

  // .about-me:active {
  //   transform: translateY(-1px);
  // }
`;

/*   
colors

Text -  #050315
background - #FBFBFE
Primary - #2F27CE
Secondary - #DEDCFF
Accent  -  #433BFF





*/
