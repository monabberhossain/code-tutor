import React, { useContext, useRef, useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { AuthContext } from "../../../contexts/AuthProvider/AuthProvider";

const Profile = () => {
    const { user } = useContext(AuthContext);
    const [name, setName] = useState(user.displayName);
    const photoURLRef = useRef(user.photoURL);

    const handleProfile = (event) => {
        event.preventDefault();
        console.log(name, photoURLRef.current.value);
    };

    const handleNameChanged = (event) => {
        setName(event.target.value);
    };
    return (
        <div>
            <h2 className="text-primary mb-4">Profile: {name}</h2>
            <Form onSubmit={handleProfile}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Your Email</Form.Label>
                    <Form.Control
                        readOnly
                        defaultValue={user?.email}
                        type="email"
                    />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicName">
                    <Form.Label>Your Name</Form.Label>
                    <Form.Control
                        onChange={handleNameChanged}
                        defaultValue={name}
                        type="text"
                    />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPhoto">
                    <Form.Label>Your Photo URL</Form.Label>
                    <Form.Control
                        ref={photoURLRef}
                        defaultValue={user?.photoURL}
                        type="text"
                    />
                </Form.Group>

                {/* <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" />
            </Form.Group> */}

                <Form.Group className="mb-3" controlId="formBasicCheckbox">
                    <Form.Check type="checkbox" label="Check me out" />
                </Form.Group>
                <Button variant="primary" type="submit">
                    Submit
                </Button>
            </Form>
        </div>
    );
};

export default Profile;
