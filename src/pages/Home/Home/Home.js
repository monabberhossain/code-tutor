import React from "react";
import { Card, Col, Row } from "react-bootstrap";
import BrandCarousel from "../../Shared/BrandCarousel/BrandCarousel";
import Feedback1 from "../../../assets/feedbacks/feedback1.jpg";
import Feedback2 from "../../../assets/feedbacks/feedback2.jpg";
import Feedback3 from "../../../assets/feedbacks/feedback3.jpg";
import Feedback4 from "../../../assets/feedbacks/feedback4.jpg";

const Home = () => {
    return (
        <div>
            <BrandCarousel></BrandCarousel>
            <h1 className="mt-5 text-center text-primary">Learner Feedback</h1>
            <Row xs={1} md={2} lg={4} className="g-5 mt-0 px-5">
                <Col>
                    <Card>
                        <Card.Img
                            className="p-3 rounded-circle"
                            variant="left"
                            src={Feedback1}
                        />
                        <Card.Body>
                            <Card.Title className="text-center text-primary">
                                Maria Jessica
                            </Card.Title>
                            <Card.Text className="text-center text-justify">
                                This is a longer card with supporting text below
                                as a natural lead-in to additional content. This
                                content is a little bit longer.
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
                <Col>
                    <Card>
                        <Card.Img
                            className="p-3 rounded-circle"
                            variant="top"
                            src={Feedback2}
                        />
                        <Card.Body>
                            <Card.Title className="text-center text-primary">
                                Andre Fletcher
                            </Card.Title>
                            <Card.Text className="text-center text-justify">
                                This is a longer card with supporting text below
                                as a natural lead-in to additional content. This
                                content is a little bit longer.
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
                <Col>
                    <Card>
                        <Card.Img
                            className="p-3 rounded-circle"
                            variant="top"
                            src={Feedback3}
                        />
                        <Card.Body>
                            <Card.Title className="text-center text-primary">
                                Lipa Mulani
                            </Card.Title>
                            <Card.Text className="text-center text-justify">
                                This is a longer card with supporting text below
                                as a natural lead-in to additional content. This
                                content is a little bit longer.
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
                <Col>
                    <Card>
                        <Card.Img
                            className="p-3 rounded-circle"
                            variant="top"
                            src={Feedback4}
                        />
                        <Card.Body>
                            <Card.Title className="text-center text-primary">
                                John Gray
                            </Card.Title>
                            <Card.Text className="text-center text-justify">
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
