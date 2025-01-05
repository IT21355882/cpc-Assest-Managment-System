import React from "react";
// import { Navbar, Nav, Button, Container, Image } from "react-bootstrap";
import {
  Navbar,
  Nav,
  Container,
  Row,
  Col,
  Form,
  Button,
  Alert,
  Image,
} from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import Logo from "../../assets/logo.png";

const NavigationBar = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    // Clear login state
    localStorage.removeItem("LoginUserID");
    localStorage.removeItem("LoginUserPosition");
    localStorage.removeItem("IsLogin");

    // Redirect to Sign-In page
    navigate("/signin");
  };

  const isLoggedIn = localStorage.getItem("IsLogin") === "true";

  return (
    <Navbar bg="primary" variant="light" expand="lg" sticky="top">
      <Container>
        <Navbar.Brand as={Link} to="/">
          <Image src={Logo} alt="Logo" fluid style={{ maxHeight: "50px" }} />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link
              as={Link}
              to="/"
              style={{
                color: "#fff",
                fontSize: "18px",
                textDecoration: "none",
              }}
            >
              Dashboard
            </Nav.Link>
            <Nav.Link
              as={Link}
              to="/addasset"
              style={{
                color: "#fff",
                fontSize: "18px",
                textDecoration: "none",
              }}
            >
              Add Broken Asset
            </Nav.Link>
            <Nav.Link
              as={Link}
              to="/details"
              style={{
                color: "#fff",
                fontSize: "18px",
                textDecoration: "none",
              }}
            >
              Broken Assets
            </Nav.Link>
            {localStorage.getItem("LoginUserPosition") === "Admin" && (
              <Nav.Link
              as={Link}
              to="/userList"
              style={{
                color: "#fff",
                fontSize: "18px",
                textDecoration: "none",
              }}
            >
              Users
            </Nav.Link>
            )}
          </Nav>
          {isLoggedIn ? (
            <div>
              <Link to={`/profile`} style={{textDecoration: 'none'}} className="btn btn-light me-4">
                {localStorage.getItem("LoginUserID")} | {localStorage.getItem("username")}
              </Link>
              <Button variant="outline-light" onClick={handleLogout}>
                Logout
              </Button>
            </div>
          ) : (
            <>
              <Nav.Link as={Link} to="/signin" className="text-light">
                Sign In
              </Nav.Link>
              <Nav.Link as={Link} to="/register" className="text-light">
                Register
              </Nav.Link>
            </>
          )}
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavigationBar;
