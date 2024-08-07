import { Container, Row, Col } from "react-bootstrap";
import { ToolCard } from "@/components/ToolCard";

export const Home: React.FC = () => {
  return (
    <Container fluid>
      <Row>
        <Col md={1} className='bg-primary'>
          navigation
        </Col>
        <Col md={11} className='bg-secondary'>
          <Row className='p-3'>
            <ToolCard />
          </Row>
        </Col>
      </Row>
    </Container>
  );
};
