import styled from "styled-components";
import Button from "./Button";

const Navbar = () => {
  const handleDownload = () => {
    // Create a link element
    const link = document.createElement("a");
    // Set the href attribute to the URL of the file you want to download
    link.href = "/assets/samuelbkoroma.pdf";
    // Set the download attribute to specify the file name
    link.download = "samuelbkoroma.pdf";
    // Programmatically trigger the click event to start the download
    link.click();
  };

  return (
    <Div>
      <ul>
        <li>Home</li>
        <li>About</li>
        <li>Contact</li>
        <li>Services</li>
        <li>Blog</li>
      </ul>

      <Button buttonText="Download Cv" onClick={handleDownload} />
    </Div>
  );
};

export default Navbar;

const Div = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  z-index: 1000;
  width: 100%;
  background: #fff;
  padding: 1.5rem 5%;
  box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.1);
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-bottom-left-radius: 20px;
  border-bottom-right-radius: 20px;

  ul {
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #ffff;
    height: 100%;
    gap: 40px;
  }

  li {
    list-style: none;
    font-size: 20px;
    font-family: "Poppins", sans-serif;
    color: #000;
    cursor: pointer;
  }

  li:hover {
    cursor: pointer;
    color: #2f27ce;
  }
`;

/*   
colors

Text -  #050315
background - #FBFBFE
Primary - #2F27CE
Secondary - #DEDCFF
Accent  -  #433BFF





*/
