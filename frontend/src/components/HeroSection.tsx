import { useState, useEffect } from "react";
import { Container, Form, InputGroup } from "react-bootstrap";

import heroImg from "@/assets/img/HeroSection.webp";
import logo from "@/assets/img/carrefourLogoBlanc.png";
import { IoMdSearch } from "react-icons/io";

import referentielTools from "@/data/referentielTools.json";
import { CardData } from "@/modules/Types";

type HeroSectionProps = {
  onFilter: (filteredTools: CardData[]) => void;
  title: string;
  showSearchInput: boolean;
};

export const HeroSection: React.FC<HeroSectionProps> = ({
  onFilter,
  title,
  showSearchInput,
}) => {
  const [searchTool, setSearchTool] = useState("");

  useEffect(() => {
    const filtered = referentielTools.filter((tool) =>
      tool.tool.name
        .toLocaleLowerCase()
        .includes(searchTool.toLocaleLowerCase())
    );
    onFilter(filtered);
  }, [searchTool, onFilter]);

  const handleSearchTool = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value: string = e.target.value;
    setSearchTool(value);
  };

  return (
    <section
      className='hero_section position-relative d-flex'
      style={{
        height: "200PX",
        width: "100%",
        backgroundImage: `url(${heroImg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}>
      <div
        className='overlay position-absolute t-0 l-0'
        style={{
          height: "200px",
          width: "100%",
          background: "#053650",
          opacity: "85%",
          zIndex: "1",
        }}></div>
      <Container className='position-relative' style={{ zIndex: "2" }}>
        <Container className='py-4 d-flex align-items-center'>
          <img
            src={logo}
            alt='logo'
            className='logo'
            style={{ height: "35px" }}></img>
          <h3 className='text-light px-2'>{title}</h3>
        </Container>
        {showSearchInput && (
          <Container className='d-flex justify-content-center'>
            <InputGroup className='py-3' style={{ width: "80%" }}>
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
        )}
      </Container>
    </section>
  );
};
