import styled from "styled-components";

const Service = () => {
  return (
    <Div>
      <h1 className="heading">My Services</h1>

      <div className="service">
        <div className="services">
          <span className="number">01</span>
          <h3>web development</h3>
          <p>
            My web development services are tailored to bring your digital
            vision to life. Whether you need a simple website or a complex web
            application, I have the expertise to create responsive,
            user-friendly, and scalable web solutions that meet your specific
            needs.
          </p>
          <a href="#" className="btn">
            read more
          </a>
        </div>
        <div className="services">
          <span className="number">02</span>
          <h3>Mobile development</h3>
          <p>
            My web development services are tailored to bring your digital
            vision to life. Whether you need a simple website or a complex web
            application, I have the expertise to create responsive,
            user-friendly, and scalable web solutions that meet your specific
            needs.
          </p>
          <a href="#" className="btn">
            read more
          </a>
        </div>
        <div className="services">
          <span className="number">03</span>
          <h3>Databse development</h3>
          <p>
            My web development services are tailored to bring your digital
            vision to life. Whether you need a simple website or a complex web
            application, I have the expertise to create responsive,
            user-friendly, and scalable web solutions that meet your specific
            needs.
          </p>
          <a href="#" className="btn">
            read more
          </a>
        </div>
        <div className="services">
          <span className="number">04</span>
          <h3>Microsoft Package</h3>
          <p>
            My web development services are tailored to bring your digital
            vision to life. Whether you need a simple website or a complex web
            application, I have the expertise to create responsive,
            user-friendly, and scalable web solutions that meet your specific
            needs.
          </p>
          <a href="#" className="btn">
            read more
          </a>
        </div>

        <div className="services">
          <span className="number">05</span>s<h3>Saas</h3>
          <p>
            My web development services are tailored to bring your digital
            vision to life. Whether you need a simple website or a complex web
            application, I have the expertise to create responsive,
            user-friendly, and scalable web solutions that meet your specific
            needs.
          </p>
          <a href="#" className="btn">
            read more
          </a>
        </div>
      </div>
    </Div>
  );
};

export default Service;

const Div = styled.div`
  background: #f9f9f9;
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

  .service {
    display: flex;
    gap: 20px;
    align-items: center;
    justify-content: center;
    flex-wrap: wrap;
  }

  .services {
    border: 0.1rem solid rgba(0, 0, 0, 0.2);
    border-radius: 0.5rem;
    box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.1);
    margin: 1.5rem;
    padding: 2.5rem;
    background: linear-gradient(79deg, #eae9ef 50%, #fff 50.1%);
    position: relative;
    z-index: 0;
    flex: 1 1 30rem;
  }

  .btn {
    text-align: center;
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
  .btn:hover {
    background-color: #2f27ce;
  }

  .number {
    font-size: 7rem;
    color: rgba(0, 0, 0, 0.05);
    position: absolute;
    top: -1rem;
    right: 1rem;
    z-index: -1;
    font-weight: bolder;
  }

  .services:hover .number {
    font-size: 9rem;
  }

  .services h3 {
    font-size: 2.4rem;
    color: #333;
    font-family: "Poppins", sans-serif;
  }

  .services p {
    font-size: 16px;
    color: #666;
    font-family: "Poppins", sans-serif;
    padding: 1rem 0;
  }
`;
