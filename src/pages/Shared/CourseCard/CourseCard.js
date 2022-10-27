import React from "react";
import { Button, Card, Col } from "react-bootstrap";
import { FaClock, FaStar } from "react-icons/fa";
import { Link } from "react-router-dom";

const CourseCard = ({ course }) => {
    const { id, title, image, description, rating, price, duration } = course;
    return (
        <Col>
            <Card>
                <Card.Img variant="top" src={image} />
                <Card.Body>
                    <Card.Title className="text-primary">{title}</Card.Title>
                    <Card.Text>{description}</Card.Text>
                    <div className="d-flex justify-content-around align-items-center text-primary border border-primary p-3 rounded-2">
                        <span className="d-flex align-items-center">
                            <FaStar></FaStar>
                            <span className="ms-2">{rating}</span>
                        </span>
                        <span className="d-flex align-items-center">
                            <b>$</b>
                            <span className="ms-2 fs-2 fw-bold">{price}</span>
                        </span>
                        <span className="d-flex align-items-center">
                            <FaClock></FaClock>
                            <span className="ms-2">{duration}</span>
                        </span>
                    </div>
                </Card.Body>
                <Card.Footer>
                    <Button>
                        <Link
                            style={{
                                textDecoration: "none",
                                color: "white",
                                fontWeight: "bold",
                            }}
                            to={`/courses/${id}`}
                        >
                            Explore More
                        </Link>
                    </Button>
                </Card.Footer>
            </Card>
        </Col>
    );
};

export default CourseCard;
