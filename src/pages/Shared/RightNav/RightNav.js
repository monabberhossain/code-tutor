import React from "react";
import { Row } from "react-bootstrap";
import { Link } from "react-router-dom";

const RightNav = () => {
    return (
        <div className="bg-light border border-1 rounded-1 mb-2 px-3">
            <h3 className="text-primary">All Courses</h3>
            <Row className="border border-1 rounded-1 my-2">
                <Link className="text-decoration-none" to="/courses/1">
                    C Tutorial - Learn C Programming With Examples
                </Link>
            </Row>
            <Row className="border border-1 rounded-1 my-3">
                <Link className="text-decoration-none" to="/courses/2">
                    Learn C++ Programming With Core Concepts
                </Link>
            </Row>
            <Row className="border border-1 rounded-1 my-2">
                <Link className="text-decoration-none" to="/courses/3">
                    Interactive Basic Java Tutorial For Beginners
                </Link>
            </Row>
            <Row className="border border-1 rounded-1 my-2">
                <Link className="text-decoration-none" to="/courses/4">
                    Learn Python Basic Programming With Fun
                </Link>
            </Row>
            <Row className="border border-1 rounded-1 my-2">
                <Link className="text-decoration-none" to="/courses/5">
                    PHP Tutorial - An Ultimate Guide for Beginners From Scratch
                </Link>
            </Row>
            <Row className="border border-1 rounded-1 my-2">
                <Link className="text-decoration-none" to="/courses/6">
                    Introduction To Basic Javascript For Absolute Beginners
                </Link>
            </Row>
        </div>
    );
};

export default RightNav;
