import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Form, Alert } from "react-bootstrap";
import { Button } from "react-bootstrap";


const ResetPasw = () => {

    const handleSubmit = () => {
        console.log("working")
    }
    return (
        <>
            <div className="p-4 box">
                <h2 className="mb-3">Firebase Auth Login</h2>
                {/** {error && <Alert variant="danger">{error}</Alert>} */}
                <Form onSubmit={handleSubmit}>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Control
                            type="email"
                            placeholder="Email address"
                        // onChange={(e) => setEmail(e.target.value)}
                        />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Control
                            type="password"
                            placeholder="Password"
                        // onChange={(e) => setPassword(e.target.value)}
                        />
                        {/** <Link to="/resetpsw">Reset Password</Link>  */}
                    </Form.Group>

                    <div className="d-grid gap-2">
                        <Button variant="primary" type="Submit">
                            Reset Password
                        </Button>
                    </div>
                </Form>
                <hr />

            </div>

        </>
    );
};

export default ResetPasw;
