import React from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { Col, Row } from "react-bootstrap";
import { Link, useLoaderData } from "react-router-dom";
import LeftNav from "../RightNav/RightNav";
import {
    FaClock,
    FaCode,
    FaRegBookmark,
    FaFileDownload,
    FaStar,
} from "react-icons/fa";
import "./CourseDetail.css";

const CourseDetail = () => {
    const course = useLoaderData();
    const { id, title, image, rating, price, duration, description, syllabus } =
        course;
    const {
        lesson1,
        lesson2,
        lesson3,
        lesson4,
        lesson5,
        lesson6,
        lesson7,
        lesson8,
    } = syllabus;

    const handlePDFDownload = () => {
        // using Java Script method to get PDF file
        fetch("C.pdf").then((response) => {
            response.blob().then((blob) => {
                // Creating new object of PDF file
                const fileURL = window.URL.createObjectURL(blob);
                // Setting various property values
                let alink = document.createElement("a");
                alink.href = fileURL;
                alink.download = "C.pdf";
                alink.click();
            });
        });
    };
    return (
        <Row>
            <Col lg="9">
                <Card>
                    <Card.Header
                        className="d-flex justify-content-between text-primary"
                        as="h4"
                    >
                        {title}
                        <span>
                            <Link>
                                <FaRegBookmark className="me-2"></FaRegBookmark>
                            </Link>
                            <Link>
                                <FaFileDownload
                                    onClick={handlePDFDownload}
                                ></FaFileDownload>
                            </Link>
                        </span>
                    </Card.Header>
                    <Card.Body className="text-center mt-5">
                        <div>
                            <img className="img-fluid" src={image} alt="" />
                        </div>
                        <Card.Text className="lg:px-5 md:px-3 sm:px-1 pt-5">
                            <span className="fs-3 fw-semibold">
                                Description:
                                <br />
                            </span>
                            {description}
                        </Card.Text>
                        <div className="d-flex justify-content-around align-items-center text-primary border border-primary lg:m-5 md:m-3 sm:-1 p-3 rounded-2">
                            <span className="d-flex align-items-center">
                                <FaStar></FaStar>
                                <span className="ms-2">Rating: {rating}</span>
                            </span>
                            <span className="d-flex align-items-center">
                                <b>Price: $</b>
                                <span className="ms-2 fs-2 fw-bold">
                                    {price}
                                </span>
                            </span>
                            <span className="d-flex align-items-center">
                                <FaClock></FaClock>
                                <span className="ms-2">{duration} Hours</span>
                            </span>
                        </div>
                        <p className="list-unstyled text-start px-5">
                            <span className="fs-3 fw-semibold">
                                All Lessons:
                            </span>
                            <li className="text-decoration-none mt-3 mb-2">
                                <FaCode className="me-2"></FaCode>
                                Lesson 1:
                                <Link className="ms-2 text-decoration-none">
                                    {lesson1}
                                </Link>
                            </li>
                            <li className="text-decoration-none mb-2">
                                <FaCode className="me-2"></FaCode>
                                Lesson 2:
                                <Link className="ms-2 text-decoration-none">
                                    {lesson2}
                                </Link>
                            </li>
                            <li className="text-decoration-none mb-2">
                                <FaCode className="me-2"></FaCode>
                                Lesson 3:
                                <Link className="ms-2 text-decoration-none">
                                    {lesson3}
                                </Link>
                            </li>
                            <li className="text-decoration-none mb-2">
                                <FaCode className="me-2"></FaCode>
                                Lesson 4:
                                <Link className="ms-2 text-decoration-none">
                                    {lesson4}
                                </Link>
                            </li>
                            <li className="text-decoration-none mb-2">
                                <FaCode className="me-2"></FaCode>
                                Lesson 5:
                                <Link className="ms-2 text-decoration-none">
                                    {lesson5}
                                </Link>
                            </li>
                            <li className="text-decoration-none mb-2">
                                <FaCode className="me-2"></FaCode>
                                Lesson 6:
                                <Link className="ms-2 text-decoration-none">
                                    {lesson6}
                                </Link>
                            </li>
                            <li className="text-decoration-none mb-2">
                                <FaCode className="me-2"></FaCode>
                                Lesson 7:
                                <Link className="ms-2 text-decoration-none">
                                    {lesson7}
                                </Link>
                            </li>
                            <li className="text-decoration-none mb-2">
                                <FaCode className="me-2"></FaCode>
                                Lesson 8:
                                <Link className="ms-2 text-decoration-none">
                                    {lesson8}
                                </Link>
                            </li>
                        </p>
                        <Button className="my-4" variant="primary">
                            <Link
                                className="text-decoration-none text-white fw-semibold"
                                to={`/checkout/courses/${id}`}
                            >
                                Get Premium Access
                            </Link>
                        </Button>
                    </Card.Body>
                </Card>
            </Col>
            <Col lg="3">
                <LeftNav></LeftNav>
            </Col>
        </Row>
    );
};

export default CourseDetail;
