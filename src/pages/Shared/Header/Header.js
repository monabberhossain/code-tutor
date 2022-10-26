import { Button, Image } from "react-bootstrap";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { FaUser } from "react-icons/fa";
import { Link } from "react-router-dom";

const Header = () => {
    return (
        <Navbar collapseOnSelect expand="lg" bg="light" variant="light">
            <Container>
                <Navbar.Brand>
                    <Link className="fs-2 fw-bold text-decoration-none" to="/">
                        Code Tutor
                    </Link>
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="me-auto pt-3 pb-2 fs-6 fw-semibold">
                        <Link
                            className="border border-primary rounded-1 mx-2 mb-1 px-2 text-decoration-none"
                            to="/courses"
                        >
                            Courses
                        </Link>
                        <Link
                            className="border border-primary rounded-1 mx-2 mb-1 px-2 text-decoration-none"
                            to="/faq"
                        >
                            FAQ
                        </Link>
                        <Link
                            className="border border-primary rounded-1 mx-2 mb-1 px-2 text-decoration-none"
                            to="/blog"
                        >
                            Blog
                        </Link>
                    </Nav>
                    <Nav className="d-flex align-items-center">
                        <>
                            <Link
                                to="/profile"
                                className="p-0 me-2 text-decoration-none"
                            >
                                <span className="me-2"></span>
                                <span>
                                    <Image
                                        style={{ height: "30px" }}
                                        roundedCircle
                                    ></Image>
                                    <FaUser className="fs-5"></FaUser>
                                </span>
                                <Button
                                    className="ms-2 fw-semibold"
                                    size="sm"
                                    variant="outline-primary"
                                >
                                    Log Out
                                </Button>
                            </Link>
                        </>

                        <div className="d-flex flex-row">
                            <Link to="/login">
                                <Button
                                    className="ms-2 fw-semibold"
                                    size="sm"
                                    variant="outline-primary"
                                >
                                    Login
                                </Button>
                            </Link>
                            <Link to="/register">
                                <Button
                                    className="ms-2 fw-semibold"
                                    size="sm"
                                    variant="outline-primary"
                                >
                                    Register
                                </Button>
                            </Link>
                        </div>
                    </Nav>
                    <div className="d-lg-none"></div>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default Header;
