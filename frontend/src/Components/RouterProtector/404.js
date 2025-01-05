import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import Nav from "../Nav/Nav";

const NotFound = () => {
  return (
    <div>
      <Nav />
    <Container className="text-center mt-5">
      <Row>
        <Col>
          <h1 className="display-1 text-danger">404..!</h1>
          <h2 className="text-muted">Page Not Found</h2>
          <p className="lead">
            Oops! The page you're looking for doesn't exist. It might have been moved or not authorized..!
          </p>
          <Button 
            variant="primary" 
            href="/" 
            className="mt-3 btn-danger"
          >
            Go Back to Home
          </Button>
        </Col>
      </Row>
    </Container>
    </div>
  );
};

export default NotFound;
