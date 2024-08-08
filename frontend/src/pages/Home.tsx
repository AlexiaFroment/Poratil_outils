import { useState } from "react";

import { Container, Row, Col } from "react-bootstrap";

import { HeroSection } from "@/components/HeroSection";
import { ToolCard } from "@/components/ToolCard";
import referentielTools from "@/data/referentielTools.json";
import { CardData } from "@/modules/Types";

export const Home: React.FC = () => {
  const [filteredTools, setFilteredTools] =
    useState<CardData[]>(referentielTools);
  const handleFilter = (filtered: CardData[]) => {
    setFilteredTools(filtered);
  };
  return (
    <>
      <HeroSection
        onFilter={handleFilter}
        title='Outils Carrefour'
        showSearchInput={true}
      />
      <Container fluid>
        <Row>
          <Col md={1} className='bg-primary'>
            navigation
          </Col>
          <Col md={11} className='bg-secondary'>
            <Row className='p-3'>
              {filteredTools.map((card) => (
                <ToolCard key={card.id} card={card} />
              ))}
            </Row>
          </Col>
        </Row>
      </Container>
    </>
  );
};
