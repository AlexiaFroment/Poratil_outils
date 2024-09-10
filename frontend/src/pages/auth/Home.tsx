import { Container, Row, Col } from "react-bootstrap";
import { HeroSection } from "@/components/HeroSection";
import { GrafanaDashboard } from "@/components/GrafanaDashboard";

export const Home: React.FC = () => {
  const dashboardUrl =
    "https://mpgco.logm.vpodg1p.carrefour.com/dsr-prd-gcp/grafana/main/d/xtkCtBkiz/infra-outils?orgId=1&from=1725531502975&to=1725535102975&viewPanel=150";

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
            <GrafanaDashboard dashboardURL={dashboardUrl} />
          </Row>
        </Col>
      </Row>
    </section>
  );
};
