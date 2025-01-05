import React, { useState } from "react";
import { Container, Row, Col, Form, Button, Alert, Image } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import Logo from '../../assets/logo.png';
import axios from "axios";

const SignIn = () => {
  const [employeeId, setEmployeeId] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // API call using Axios
      const response = await axios.post("http://localhost:5000/user/login", {
        employeeId, // Adjust the key if your API uses a different one
        password,
      });

      console.log("Sign In Success:", response.data);

      // Store token or user data
      localStorage.setItem("LoginUserID", response.data.user.employeeId);
      localStorage.setItem("mongoID", response.data.user._id);
      localStorage.setItem("username", response.data.user.name);
      localStorage.setItem("LoginUserPosition", response.data.user.position);
      localStorage.setItem("IsLogin", "true");

      // Redirect to the dashboard
      navigate("/");
    } catch (err) {
      console.error(err);
      setError(err.response?.data?.message || "Failed to sign in!");
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
          <h2 className="text-center">Sign In</h2>
          {error && <Alert variant="danger">{error}</Alert>}
          <Form onSubmit={handleSubmit}>
            <Form.Group className="mb-3" controlId="formEmployeeID">
              <Form.Label>Employee ID</Form.Label>
              <Form.Control
                type="employeeId"
                placeholder="Enter Employee Id"
                value={employeeId}
                onChange={(e) => setEmployeeId(e.target.value)}
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control
                type="password"
                placeholder="Enter password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </Form.Group>

            <Button variant="primary" type="submit" className="w-100 btn-danger" >
              Sign In
            </Button>
          </Form>
          <div className="text-center mt-3">
            Don't have an account? <Link to="/register">Contact Administrator</Link>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default SignIn;
