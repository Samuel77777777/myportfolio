import styled from "styled-components";
import Button from "./Button";

const Contact = () => {
  return (
    <Div>
      <h1 className="heading">Contact Me</h1>

      <div>
        <section className="contact" id="contact">
          <div className="row">
            <form action="">
              <div className="inputBox">
                <input type="text" required />
                <label>name</label>
              </div>

              <div className="inputBox">
                <input type="email" required />
                <label>email</label>
              </div>

              <div className="inputBox">
                <input type="number" required />
                <label>phone</label>
              </div>

              <div className="inputBox">
                <input type="text" required />
                <label>subject</label>
              </div>

              <div className="inputBox">
                <textarea required name="" id="" cols="30" rows="10"></textarea>
                <label>message</label>
              </div>

              <Button buttonText="Send Message" value="send" type="submit" />
              <input type="submit" value="send message" className="btn" />
            </form>

            <div className="image">
              <img src="assets/mainpic.png" alt="" />
            </div>
          </div>
        </section>
      </div>
    </Div>
  );
};

export default Contact;

const Div = styled.div`
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

  .contact .row {
    display: flex;
    border-radius: 0.5rem;
    overflow: hidden;
    box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.1);
    border: 0.1rem solid rgba(0, 0, 0, 0.2);
    margin:20px;
  }

  .contact .row form {
    padding: 20px;
    flex: 1 1 40rem;
  }

  .contact .row .image {
    flex: 1 1 40rem;
  }

  .contact .row .image img {
     height:700px
     width:700px;
    object-fit: cover;
  }

  .contact .row form .inputBox {
    position: relative;
  }

  .contact .row form .inputBox input,
  .contact .row form .inputBox textarea {
    width: 100%;
    padding: 0.5rem 1rem;
    margin: 1.5rem 0;
    font-size: 1.5rem;
    color: #333;
    border: 0.1rem solid green;
    text-transform: none;
    resize: none;
  }

  .contact .row form .inputBox label {
    position: absolute;
    top: 2.1rem;
    left: 1rem;
    font-size: 1.5rem;
    color: #666;
  }

  .contact .row form .inputBox input:invalid,
  .contact .row form .inputBox textarea:invalid {
    border-color: rgba(0, 0, 0, 0.1);
  }

  .contact .row form .inputBox input:valid ~ label,
  .contact .row form .inputBox textarea:valid ~ label,
  .contact .row form .inputBox input:focus ~ label,
  .contact .row form .inputBox textarea:focus ~ label {
    top: -0.6rem;
    left: 0;
    color: var(--pink);
    font-size: 1.3rem;
  }

  .contact .row form .btn:hover {
    background: var(--pink);
    cursor: pointer;
  }
`;
