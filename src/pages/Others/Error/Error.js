import React from "react";
import { Link } from "react-router-dom";
import Button from "react-bootstrap/Button";
import "./Error.css";

const Error = () => {
    return (
        <div className="error-message">
            <h1>404: Requested URL Not Found!</h1>
            <p>Please try again with correct url.</p>
            <Link to="/">
                <Button className="btn-light border b-1">Back To Home</Button>
            </Link>
        </div>
    );
};

export default Error;
