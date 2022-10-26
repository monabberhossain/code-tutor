import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../../contexts/AuthProvider/AuthProvider";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { Link, useLocation, useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import { ButtonGroup, Col } from "react-bootstrap";
import { FaFacebookF, FaGithub, FaGoogle } from "react-icons/fa";

const Login = () => {
    return (
        <Col lg={6}>
            <Form>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email</Form.Label>
                    <Form.Control
                        name="email"
                        type="email"
                        placeholder="Enter email"
                        required
                    />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control
                        name="password"
                        type="password"
                        placeholder="Enter Password"
                        required
                    />
                </Form.Group>
                <p>
                    <small>
                        Forgot Password? Please
                        <Link
                            style={{
                                textDecoration: "none",
                                marginLeft: "3px",
                                fontWeight: "bold",
                            }}
                        >
                            Reset Password
                        </Link>
                    </small>
                </p>
                <Button
                    style={{ letterSpacing: "2px", padding: "10px 40px" }}
                    variant="primary"
                    type="submit"
                >
                    <b>Login</b>
                </Button>
                <Form.Text className="mx-2 text-danger"></Form.Text>

                {/* {!successLogin && ( */}
                <p className="mt-3">
                    <small>
                        New to this site? Please
                        <Link
                            style={{
                                textDecoration: "none",
                                marginLeft: "3px",
                                fontWeight: "bold",
                            }}
                            to="/register"
                        >
                            Register
                        </Link>
                    </small>
                </p>
                {/* )} */}
            </Form>
            <ButtonGroup className="mb-5" vertical>
                <Button
                    className="mb-2 rounded-2 d-flex align-items-center"
                    variant="outline-primary"
                >
                    <FaGoogle className="me-1"></FaGoogle>Sign In With Google
                </Button>
                <Button
                    className="rounded-2 d-flex align-items-center"
                    variant="outline-dark"
                >
                    <FaGithub className="me-1"></FaGithub> Sign In with
                    Github
                </Button>
            </ButtonGroup>
        </Col>
    );
};

export default Login;
