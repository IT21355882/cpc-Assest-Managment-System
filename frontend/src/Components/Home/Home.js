import React from "react";
import { Container, Row, Col, Button, Image } from "react-bootstrap";
import NavigationBar from "../Nav/Nav";
import Logo from "../../assets/logo.png";
import { Link } from "react-router-dom";
import Footer from "../Footer";

function HomePage() {
  return (
    <div>
      <NavigationBar />
      <div
        style={{ minHeight: "80vh", display: "flex", flexDirection: "column" }}
      >
        {/* Header Section */}

        {/* Main Content Section */}
        <Container
          className="d-flex flex-column align-items-center justify-content-center flex-grow-1"
          style={{ textAlign: "center" }}
        >
          <header className="text-center mb-4">
            <h1>Ceylon Petroleum Assets Management System</h1>
          </header>
          <Image
            src={Logo}
            alt="Logo"
            fluid
            style={{ maxHeight: "200px", marginBottom: "2rem" }}
          />
          <Row>
            <Col>
              <Link
                to={`/details`}
                style={{ textDecoration: "none" }}
                className="btn btn-danger me-4"
              >
                Broken Assets
              </Link>
              <Link
                to={`/addasset`}
                style={{ textDecoration: "none" }}
                className="btn btn-secondary me-4"
              >
                Add Broken Asset
              </Link>
            </Col>
          </Row>
        </Container>
      </div>

      {/* Footer Section */}
      <Footer/>
    </div>
  );
}

export default HomePage;
