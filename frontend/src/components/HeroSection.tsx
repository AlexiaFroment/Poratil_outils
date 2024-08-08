import { useState } from "react";
import { Container, Form, InputGroup } from "react-bootstrap";
import heroImg from "@/assets/HeroSection.webp";
import logo from "@/assets/carrefourLogoBlanc.png";

import { IoMdSearch } from "react-icons/io";

export const HeroSection: React.FC = () => {
  const [searchTool, setSearchTool] = useState("");

  const handleSearchTool = (e) => {
    const value: string = e.target.value;
    value.length>2 && setSearchTool(value);
  };
  console.log(searchTool);

  return (
    <section
      className='hero_section position-relative d-flex'
      style={{
        backgroundImage: `url(${heroImg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        width: "100vw",
        height: "250PX",
      }}>
      <div
        className='overlay position-absolute t-0 l-0'
        style={{
          width: "100vw",
          height: "250px",
          background: "#0C0E0F",
          opacity: "80%",
          zIndex: "1",
        }}></div>
      <Container className='position-relative' style={{ zIndex: "2" }}>
        <Container className='py-4 d-flex align-items-center'>
          <img
            src={logo}
            alt='logo'
            className='logo'
            style={{ height: "35px" }}></img>
          <h3 className='text-light px-2'> Outils Carrefour</h3>
        </Container>
        <Container className='d-flex justify-content-center'>
          <InputGroup className='py-5' style={{ width: "80%" }}>
            <InputGroup.Text id='searchData'>
              <IoMdSearch size={20} />
            </InputGroup.Text>
            <Form.Control
              placeholder='Recherchez votre outil'
              aria-label='Recherchez votre outil'
              aria-describedby='searchData'
              onChange={handleSearchTool}
            />
          </InputGroup>
        </Container>
      </Container>
    </section>
  );
};
