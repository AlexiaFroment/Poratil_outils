import { Container, Row, Col } from "react-bootstrap";
import { HeroSection } from "@/components/HeroSection";

export const Home: React.FC = () => {
  return (
    <section>
      <Container fluid className='p-0'>
        <HeroSection
          onFilter={() => {}}
          title='Carrefour dashboard'
          showSearchInput={false}
        />
      </Container>
      <Row>
        <Col>
          <Row>
            <h1 className='p-5' style={{ height: "500px" }}>
              Dashboard Lina & Nicolas
            </h1>
          </Row>
        </Col>
      </Row>
    </section>
  );
};
