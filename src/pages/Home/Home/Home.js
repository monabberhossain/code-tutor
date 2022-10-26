import React from "react";
import { Card, Col, Row } from "react-bootstrap";
import BrandCarousel from "../../Shared/BrandCarousel/BrandCarousel";
import Card1 from "../../../assets/cards/Card1.jpg";
import Card2 from "../../../assets/cards/Card2.jpg";

const Home = () => {
    return (
        <div>
            <BrandCarousel></BrandCarousel>

            <Row xs={1} md={2} lg={3} className="g-4 mt-5">
                <Col>
                    <Card>
                        <Card.Img variant="top" src={Card1} />
                        <Card.Body>
                            <Card.Title>Card title</Card.Title>
                            <Card.Text>
                                This is a longer card with supporting text below
                                as a natural lead-in to additional content. This
                                content is a little bit longer.
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
                <Col>
                    <Card>
                        <Card.Img variant="top" src={Card2} />
                        <Card.Body>
                            <Card.Title>Card title</Card.Title>
                            <Card.Text>
                                This is a longer card with supporting text below
                                as a natural lead-in to additional content. This
                                content is a little bit longer.
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
                <Col>
                    <Card>
                        <Card.Img variant="top" src="" />
                        <Card.Body>
                            <Card.Title>Card title</Card.Title>
                            <Card.Text>
                                This is a longer card with supporting text below
                                as a natural lead-in to additional content. This
                                content is a little bit longer.
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </div>
    );
};

export default Home;
