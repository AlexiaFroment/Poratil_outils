import { useParams } from "react-router-dom";
import { useState, useEffect, useCallback } from "react";
import { Outlet } from "react-router-dom";

import { Container, Row, Col } from "react-bootstrap";
import { HeroSection } from "@/components/HeroSection";
import { CardData } from "@/modules/Types";
import { ToolCard } from "@/components/ToolCard";
import referentielTools from "@/data/referentielTools.json";

export const Tools: React.FC = () => {
  const { category } = useParams<{ category: string }>();

  const [filteredTools, setFilteredTools] =
    useState<CardData[]>(referentielTools);

  const handleFilter = useCallback((filtered: CardData[]) => {
    setFilteredTools(filtered);
  }, []);

  useEffect(() => {
    if (category) {
      setFilteredTools(
        referentielTools.filter(
          (tool: CardData) => tool.tool.category === category
        )
      );
    } else {
      setFilteredTools(referentielTools);
    }
  }, [category]);

  return (
    <section>
      <Container fluid className='p-0'>
        <HeroSection
          onFilter={handleFilter}
          title={
            category
              ? `Outils de la catégorie : ${category}`
              : "Outils Carrefour"
          }
          showSearchInput={true}
        />
        <Row>
          <Col className='p-3'>
            <Row className='p-3'>
              {filteredTools.map((card) => (
                <ToolCard key={card.id} card={card} />
              ))}
            </Row>
          </Col>
        </Row>
        <Outlet />
      </Container>
    </section>
  );
};
