import React, { useContext, useState } from "react";
import { AuthContext } from "../../../contexts/AuthProvider/AuthProvider";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { Link, Navigate, useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import { ButtonGroup, Col } from "react-bootstrap";
import { FaGithub, FaGoogle } from "react-icons/fa";
import { GithubAuthProvider, GoogleAuthProvider } from "firebase/auth";

const Register = () => {
    const [error, setError] = useState("");
    const [accepted, setAccepted] = useState();
    const navigate = useNavigate();
    const { createUser, updateUserProfile, verifyEmail, loginProvider } =
        useContext(AuthContext);

    const googleProvider = new GoogleAuthProvider();
    const githubProvider = new GithubAuthProvider();

    const handleRegister = (event) => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const photoURL = form.photoURL.value;
        const email = form.email.value;
        const password = form.password.value;
        console.log(name, email, password, photoURL);

        createUser(email, password)
            .then((result) => {
                const user = result.user;
                setError("");
                form.reset();
                handleUserProfile(name, photoURL);
                handleEmailVerification();
                navigate("/login");
                toast.success(
                    "You have successfully registered! Please verify your email to login."
                );
                console.log(user);
            })
            .catch((error) => {
                setError(error.message);
                console.log(error);
            });
    };

    const handleUserProfile = (name, photoURL) => {
        const profile = { displayName: name, photoURL: photoURL };
        updateUserProfile(profile)
            .then(() => {})
            .catch((error) => console.log(error));
    };

    const handleEmailVerification = () => {
        verifyEmail()
            .then(() => {})
            .catch((error) => console.log(error));
    };

    const handleAccept = (event) => {
        const accepted = event.target.checked;
        setAccepted(accepted);
    };

    const handleSignInWithGoogle = () => {
        loginProvider(googleProvider)
            .then((result) => {
                const user = result.user;
                console.log(user);
            })
            .catch((error) => {
                toast.message("Email is in use.");
            });
    };

    const handleSignInWithGithub = () => {
        loginProvider(githubProvider)
            .then((result) => {
                const user = result.user;
                console.log(user);
            })
            .catch((error) => console.log(error));
    };

    return (
        <Col lg={6}>
            <Form onSubmit={handleRegister}>
                <Form.Group className="mb-3" controlId="formBasicName">
                    <Form.Label>Name</Form.Label>
                    <Form.Control
                        name="name"
                        type="text"
                        placeholder="Enter name"
                    />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicImage">
                    <Form.Label>Profile Photo</Form.Label>
                    <Form.Control
                        name="photoURL"
                        type="text"
                        placeholder="Upload Photo"
                    />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email</Form.Label>
                    <Form.Control
                        name="email"
                        type="email"
                        placeholder="Enter email"
                    />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control
                        name="password"
                        type="password"
                        placeholder="Enter Password"
                    />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicCheckbox">
                    <Form.Check
                        onClick={handleAccept}
                        type="checkbox"
                        label={
                            <>
                                Accept{" "}
                                <Link
                                    style={{
                                        textDecoration: "none",
                                        marginLeft: "3px",
                                        fontWeight: "500",
                                    }}
                                    to="/terms"
                                >
                                    Terms & Conditions
                                </Link>
                            </>
                        }
                    />
                </Form.Group>
                <Button
                    style={{ letterSpacing: "2px", padding: "10px 40px" }}
                    variant="primary"
                    type="submit"
                    disabled={!accepted}
                >
                    <b>Register</b>
                </Button>
                <p className="mt-2">
                    <small>
                        Already have an account? Please
                        <Link
                            style={{
                                textDecoration: "none",
                                marginLeft: "3px",
                                fontWeight: "bold",
                            }}
                            to="/login"
                        >
                            Login
                        </Link>
                    </small>
                </p>
                <Form.Text className="mx-2 text-danger">{error}</Form.Text>
            </Form>
            <ButtonGroup className="mb-5" vertical>
                <Button
                    onClick={handleSignInWithGoogle}
                    className="mb-2 rounded-2 d-flex align-items-center"
                    variant="outline-primary"
                >
                    <FaGoogle className="me-1"></FaGoogle>Sign In With Google
                </Button>
                <Button
                    onClick={handleSignInWithGithub}
                    className="rounded-2 d-flex align-items-center"
                    variant="outline-dark"
                >
                    <FaGithub className="me-1"></FaGithub> Sign In with Github
                </Button>
            </ButtonGroup>
        </Col>
    );
};

export default Register;
