import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { Card, Container, Row, Col } from "react-bootstrap";
import NavigationBar from "../Nav/Nav";
import Footer from "../Footer";

function UserProfile() {
  const { id } = useParams(); // Get the user ID from the route params
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Fetch user data from API
  const fetchUser = async () => {
    try {
      const response = await axios.get(
        `http://localhost:5000/user/${localStorage.getItem("mongoID")}`
      );
      setUser(response.data.user);
      console.log(response.data.user);
      setLoading(false);
    } catch (err) {
      setError("Failed to load user data.");
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchUser();
  }, [id]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  return (
    <div>
      <NavigationBar />
      <Container
        className="d-flex align-items-center justify-content-center"
        style={{ height: "80vh" }}
      >
        <Row>
          <Col>
            <Card className="shadow-sm" style={{ width: "24rem" }}>
              <Card.Body>
                <Card.Title className="text-center">User Profile</Card.Title>
                <Card.Text>
                  <strong>Employee ID:</strong> {user.employeeId} <br />
                  <strong>Name:</strong> {user.name} <br />
                  <strong>Email:</strong> {user.email} <br />
                  <strong>Position:</strong> {user.position} <br />
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
      <Footer/>
    </div>
  );
}

export default UserProfile;
