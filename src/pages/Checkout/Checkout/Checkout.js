import React from "react";
import {
    Button,
    Card,
    Col,
    Container,
    ListGroup,
    ListGroupItem,
    Row,
} from "react-bootstrap";

const Checkout = () => {
    return (
        <div>
            <section className="h-100 gradient-custom">
                <Container className="py-5 h-100">
                    <Row className="justify-content-center my-4">
                        <Col md="8">
                            <Card className="mb-4">
                                <Card.Header>
                                    <h3 className="mb-0">Cart</h3>
                                </Card.Header>
                                <Card.Body>
                                    <Row className="p-3">
                                        <Col
                                            lg="4"
                                            md="4"
                                            className=" mb-4 mb-lg-0"
                                        >
                                            Course
                                        </Col>
                                        <Col
                                            lg="4"
                                            md="4"
                                            className="mb-4 mb-lg-0"
                                        >
                                            Course Info
                                        </Col>
                                        <Col
                                            lg="4"
                                            md="4"
                                            className="mb-4 mb-lg-0"
                                        >
                                            Price
                                        </Col>
                                    </Row>
                                    <Row className="p-3">
                                        <Col
                                            lg="4"
                                            md="4"
                                            className=" mb-4 mb-lg-0"
                                        >
                                            Course
                                        </Col>
                                        <Col
                                            lg="4"
                                            md="4"
                                            className="mb-4 mb-lg-0"
                                        >
                                            Course Info
                                        </Col>
                                        <Col
                                            lg="4"
                                            md="4"
                                            className="mb-4 mb-lg-0"
                                        >
                                            Price
                                        </Col>
                                    </Row>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col md="4">
                            <Card className="mb-4">
                                <Card.Header>
                                    <h3 className="mb-0">Summary</h3>
                                </Card.Header>
                                <Card.Body>
                                    <ListGroup flush>
                                        <ListGroupItem className="d-flex justify-content-between align-items-center border-0 px-0 pb-0">
                                            Products
                                            <span>$53.98</span>
                                        </ListGroupItem>
                                        <ListGroupItem className="d-flex justify-content-between align-items-center border-0 px-0 pb-0">
                                            Discount
                                            <span>-$0.00</span>
                                        </ListGroupItem>
                                        <hr />
                                        <ListGroupItem className="d-flex justify-content-between align-items-center border-0 px-0 mb-3">
                                            <div>
                                                <strong>Total amount</strong>
                                                <strong>
                                                    <p className="mb-0">
                                                        (including VAT)
                                                    </p>
                                                </strong>
                                            </div>
                                            <span>
                                                <strong>$53.98</strong>
                                            </span>
                                        </ListGroupItem>
                                    </ListGroup>

                                    <Button block size="lg">
                                        Go to checkout
                                    </Button>
                                </Card.Body>
                            </Card>
                        </Col>
                    </Row>
                </Container>
            </section>
        </div>
    );
};

export default Checkout;
