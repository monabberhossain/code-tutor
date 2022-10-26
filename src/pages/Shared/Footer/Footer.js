import React from "react";
import { Nav } from "react-bootstrap";
import { Link } from "react-router-dom";

const Footer = () => {
    return (
        <footer className="text-center bg-light text-muted mt-5">
            <section className="container pt-5">
                <Nav className="justify-content-center">
                    <Link
                        className="me-2"
                        style={{
                            textDecoration: "none",
                        }}
                        to=""
                    >
                        About
                    </Link>
                    <Link
                        className="me-2"
                        style={{
                            textDecoration: "none",
                        }}
                        to=""
                    >
                        Terms & Conditions
                    </Link>
                    <Link
                        className="me-2"
                        style={{
                            textDecoration: "none",
                        }}
                        to=""
                    >
                        Contact
                    </Link>
                </Nav>
            </section>
            <div className="text-center p-4">
                © 2022 Code Tutor | All rights reserved.
            </div>
        </footer>
    );
};

export default Footer;
