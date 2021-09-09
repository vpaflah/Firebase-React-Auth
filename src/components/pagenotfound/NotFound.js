import React from "react";
import { Card, Container } from "react-bootstrap";
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <>
      <Card>
        <Card.Body>
          <h1 className="text-center mb-4">404</h1>
          <h3 className="text-center mb-4">Page Not Found</h3>
          <Container className="d-flex align-items-center justify-content-center">
            <div className="w-100" style={{ maxWidth: "400px" }}>
              <Link to="/" className="btn btn-primary w-100 mt-3">
                Goto Home
              </Link>
            </div>
          </Container>
        </Card.Body>
      </Card>
    </>
  );
};

export default NotFound;
