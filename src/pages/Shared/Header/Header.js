import { useContext } from "react";
import { Button, Image } from "react-bootstrap";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { FaUser } from "react-icons/fa";
import { Link } from "react-router-dom";
import { AuthContext } from "../../../contexts/AuthProvider/AuthProvider";

const Header = () => {
    const { user, logOut } = useContext(AuthContext);

    const handleLogOut = () => {
        logOut()
            .then(() => {})
            .catch((error) => console.log(error));
    };
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
                        <div
                            className="btn-group"
                            role="group"
                            aria-label="Basic checkbox toggle button group"
                        >
                            <input
                                type="checkbox"
                                class="btn-check"
                                id="btncheck1"
                                autoComplete="off"
                            />
                            <label
                                className="sm btn btn-outline-primary"
                                for="btncheck1"
                            >
                                Light
                            </label>

                            <input
                                type="checkbox"
                                className="btn-check"
                                id="btncheck2"
                                autoComplete="off"
                            />
                            <label
                                className="sm btn btn-outline-dark"
                                for="btncheck2"
                            >
                                Dark
                            </label>
                        </div>
                        {user?.uid ? (
                            <>
                                <Link
                                    to="/profile"
                                    className="p-0 me-2 text-decoration-none"
                                >
                                    <span title={user?.displayName}>
                                        {user?.photoURL ? (
                                            <Image
                                                style={{ height: "30px" }}
                                                roundedCircle
                                                src={user.photoURL}
                                            ></Image>
                                        ) : (
                                            <FaUser className="fs-5"></FaUser>
                                        )}
                                    </span>
                                    <Button
                                        onClick={handleLogOut}
                                        className="ms-2 fw-semibold"
                                        size="sm"
                                        variant="outline-primary"
                                    >
                                        Log Out
                                    </Button>
                                </Link>
                            </>
                        ) : (
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
                        )}
                    </Nav>
                    <div className="d-lg-none"></div>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default Header;
