import { Container, Card, Col, Tabs, Tab } from "react-bootstrap";
import { CardData } from "@/modules/Types";
import { MdInfo } from "react-icons/md";

const categoryColors: { [key: string]: string } = {
  "Manage C4": "yellow",
  DSR: "red",
  "Team automation": "grey",
  "C4's VM & Servers": "blue",
};

type ToolCardProps = {
  card: CardData;
};

export const ToolCard: React.FC<ToolCardProps> = ({ card }) => {
  const backgroundColor = categoryColors[card.tool.category] || "transparent";
  return (
    <>
      <Col
        key={card.id}
        xs={12}
        sm={6}
        md={4}
        xl={3}
        className='d-flex justify-content-center py-3'>
        <Card className='w-100'>
          <Tabs
            defaultActiveKey='outil'
            justify
            // transition={false}
            id='toolCardTabs'>
            <Tab eventKey='outil' title='Outil'>
              <Card.Img
                variant='top'
                src={card.img}
                style={{ height: "200px", borderRadius: "0" }}
              />
              <Card.Body>
                <Card.Title>{card.tool.name}</Card.Title>
                <h6 style={{ backgroundColor }} className='p-1 text-light'>
                  {card.tool.category}
                </h6>
                <Card.Text>{card.tool.description}</Card.Text>

                <a href={card.tool.doc}>
                  <MdInfo /> documentation
                </a>

                <a href={card.tool.url} className='btn btn-primary mt-2'>
                  Accéder à l&apos;outil
                </a>
              </Card.Body>
            </Tab>

            <Tab eventKey='contact' title='Contact'>
              <Container>
                <h5 className='my-3'>{card.tool.name}</h5>
                <div className='my-4 lh-lg'>
                  <span
                    className={
                      card.contact?.name ? "fw-bold" : "text-secondary"
                    }>
                    Contact :{" "}
                  </span>
                  <span>{card.contact.name} </span>
                  <br />
                  {/* <span
                        className={
                          card.contact?.email ? "fw-bold" : "text-secondary"
                        }>
                        Mail :{" "}
                      </span>
                      <span>{card.contact.email}</span>
                      <br /> */}
                  {/* <span
                        className={
                          card.contact?.phone ? "fw-bold" : "text-secondary"
                        }>
                        Téléphone :{" "}
                      </span> */}
                  <span>{card.contact.phone}</span>
                  <br />
                </div>

                <a
                  href={
                    card.contact?.email ? `mailto:${card.contact.email}` : "#"
                  }
                  target='_blank'
                  rel='noreferrer'
                  className={`btn btn-primary mb-3 ${
                    card.contact?.email ? "" : "disabled"
                  }`}>
                  Nous contacter
                </a>
              </Container>
            </Tab>
            {/* <Tab eventKey='autre' title='Autre' disabled></Tab> */}
          </Tabs>
        </Card>
      </Col>
    </>
  );
};
