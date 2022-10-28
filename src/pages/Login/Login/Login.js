import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../../contexts/AuthProvider/AuthProvider";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { Link, useLocation, useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import { ButtonGroup, Col } from "react-bootstrap";
import { FaGithub, FaGoogle } from "react-icons/fa";

const Login = () => {
    const [error, setError] = useState("");
    const [userEmail, setUserEmail] = useState("");
    const { signIn, user, resetPassword } = useContext(AuthContext);
    const navigate = useNavigate();
    const location = useLocation();

    const from = location.state?.from?.pathname || "/";

    const handleLogin = (event) => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email, password);

        signIn(email, password)
            .then((result) => {
                const user = result.user;
                form.reset();
                setError("");
                // if (user.emailVerified) {

                // } else {
                //     toast.error(
                //         "Your email is not verified. Please verify email."
                //     );
                // }

                if (!user.emailVerified) {
                    toast.error(
                        "Your email is not verified. Please verify email."
                    );
                }
            })
            .catch((error) => {
                setError(error.message);
                console.log(error);
            });
        // .finally(() => {
        //     setLoading(false);
        // })
    };

    useEffect(() => {
        if (user && user.emailVerified) {
            navigate(from, { replace: true });
        }
    }, [user, navigate, from]);

    const handleUserEmail = (event) => {
        const email = event.target.email.value;
        console.log(email);
        setUserEmail(email);
    };

    const handleForgotPassword = () => {
        if (!userEmail) {
            alert("Please enter your email address.");
            return;
        }
        else {
            resetPassword(userEmail)
                .then(() => {
                    toast.error(
                        "Your email is not verified. Please verify email."
                    );
                })
                .catch((error) => console.log(error));
        }
    };
    return (
        <Col lg={6}>
            <Form onSubmit={handleLogin}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email</Form.Label>
                    <Form.Control
                        onBlur={handleUserEmail}
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
                            onClick={handleForgotPassword}
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
                <Form.Text className="mx-2 text-danger">{error}</Form.Text>
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
                    <FaGithub className="me-1"></FaGithub> Sign In with Github
                </Button>
            </ButtonGroup>
        </Col>
    );
};

export default Login;
