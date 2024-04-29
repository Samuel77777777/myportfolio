import styled from "styled-components";

const Projects = () => {
  return (
    <Div>
      <h1 className="heading">Projects</h1>
      <div className="projects">
        <div className="project">
          <img src="assets/lan4vote.png" alt="" />
          <div className="text">
            <h2>Lan 4 Vote</h2>

            <p>
              Dopefolio is a successful Open-Source project that I created which
              have been featured on some of the biggest tech sites like
              CSS-Tricks, Hostinger, etc & used by thousands of developers
              globally
            </p>
            <button className="cv-btn">Case Study</button>
          </div>
        </div>

        <div className="project">
          <img src="assets/tecbiz.png" alt="" />
          <div className="text">
            <h2>Techbiz</h2>

            <p>
              Dopefolio is a successful Open-Source project that I created which
              have been featured on some of the biggest tech sites like
              CSS-Tricks, Hostinger, etc & used by thousands of developers
              globally
            </p>
            <button className="cv-btn">Case Study</button>
          </div>
        </div>

        <div className="project">
          <img src="assets/splash.png" alt="" />
          <div className="text">
            <h2>Cash Box</h2>

            <p>
              Dopefolio is a successful Open-Source project that I created which
              have been featured on some of the biggest tech sites like
              CSS-Tricks, Hostinger, etc & used by thousands of developers
              globally
            </p>
            <button className="cv-btn">Case Study</button>
          </div>
        </div>

        <div className="project">
          <img src="assets/neuenergy.png" alt="" />
          <div className="text">
            <h2>Neuenergy</h2>

            <p>
              Dopefolio is a successful Open-Source project that I created which
              have been featured on some of the biggest tech sites like
              CSS-Tricks, Hostinger, etc & used by thousands of developers
              globally
            </p>
            <button className="cv-btn">Case Study</button>
          </div>
        </div>

        <div className="project">
          <img src="assets/berakah.png" alt="" />
          <div className="text">
            <h2>Berahkah</h2>

            <p>
              Dopefolio is a successful Open-Source project that I created which
              have been featured on some of the biggest tech sites like
              CSS-Tricks, Hostinger, etc & used by thousands of developers
              globally
            </p>
            <button className="cv-btn">Case Study</button>
          </div>
        </div>

        <div className="project">
          <img src="assets/dele.png" alt="" />
          <div className="text">
            <h2>Taramax</h2>

            <p>
              Dopefolio is a successful Open-Source project that I created which
              have been featured on some of the biggest tech sites like
              CSS-Tricks, Hostinger, etc & used by thousands of developers
              globally
            </p>
            <button className="cv-btn">Case Study</button>
          </div>
        </div>
      </div>

      <div className="git-link">
        <button className="btt">Checkout the all my projects in Github </button>
      </div>
    </Div>
  );
};

export default Projects;

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
