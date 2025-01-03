import React, { useState } from "react";
import { Container, Row, Col, Form, Button, Alert, Image } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import Logo from '../../assets/logo.png';

const Register = () => {
  const [employeeId, setEmployeeId] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [position, setPosition] = useState(""); // State for the dropdown
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setSuccess("");

    if (password !== confirmPassword) {
      setError("Passwords do not match!");
      return;
    }

    if (!position) {
      setError("Please select a position!");
      return;
    }

    try {
      const response = await axios.post("http://localhost:5000/user/register", {
        employeeId,
        name,
        email,
        password,
        position, // Include the selected position
      });

      setSuccess("Registration successful! Redirecting to login...");
      setTimeout(() => navigate("/signin"), 2000); // Redirect to Sign-In page after 2 seconds
    } catch (err) {
      console.error(err);
      setError(err.response?.data?.message || "Registration failed!");
    }
  };

  return (
    <Container className="mt-5">
      <Row className="justify-content-center">
        <Col md={6} className="text-center mb-4">
          <Image src={Logo} alt="Logo" fluid style={{ maxHeight: "100px" }} />
        </Col>
      </Row>
      <Row className="justify-content-center">
        <Col md={6}>
          <h2 className="text-center">Register</h2>
          {error && <Alert variant="danger">{error}</Alert>}
          {success && <Alert variant="success">{success}</Alert>}
          <Form onSubmit={handleSubmit}>
            <Form.Group className="mb-3" controlId="formEmployeeID">
              <Form.Label>Employee ID</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter Employee ID"
                value={employeeId}
                onChange={(e) => setEmployeeId(e.target.value)}
                required
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formName">
              <Form.Label>Employee Name</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter Employee Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formEmail">
              <Form.Label>Email</Form.Label>
              <Form.Control
                type="email"
                placeholder="Enter Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formPosition">
              <Form.Label>Position</Form.Label>
              <Form.Select
                value={position}
                onChange={(e) => setPosition(e.target.value)}
                required
              >
                <option value="">Select Position</option>
                <option value="manager">Manager</option>
                <option value="developer">Developer</option>
                <option value="designer">Designer</option>
                <option value="tester">Tester</option>
                <option value="Admin">Admin</option>
              </Form.Select>
            </Form.Group>

            <Form.Group className="mb-3" controlId="formPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control
                type="password"
                placeholder="Enter Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formConfirmPassword">
              <Form.Label>Confirm Password</Form.Label>
              <Form.Control
                type="password"
                placeholder="Confirm Password"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                required
              />
            </Form.Group>

            <Button variant="primary" type="submit" className="w-100 btn-danger">
              Register
            </Button>
          </Form>
          <div className="text-center mt-3">
            Already have an account? <Link to="/signin">Sign In</Link>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default Register;
