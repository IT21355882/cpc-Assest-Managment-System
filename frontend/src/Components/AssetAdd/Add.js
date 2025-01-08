import React, { useState } from "react";
import Nav from "../Nav/Nav";
import { useNavigate } from "react-router";
import axios from "axios";
import { Form, Button, Container, Row, Col } from "react-bootstrap";
import Footer from "../Footer";

function Add() {
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [EPF, setEPF] = useState("");
  const [location, setLocation] = useState("");
  const [Intercom, setIntercom] = useState("");
  const [Item, setItem] = useState("");
  const [Brand, setBrand] = useState("");
  const [Model, setModel] = useState("");
  const [SerialNumber, setSerialNumber] = useState("");
  const [AssetNumber, setAssetNumber] = useState("");
  const [Error, setError] = useState("");


  const handleEPFBlur = async () => {
    if (EPF) {
      try {
        const response = await axios.get(`http://localhost:5000/user/epfNo/${EPF}`);
        if (response.data && response.data.user.name) {
          setName(response.data.user.name);
        } else {
          setName("");
          alert("Name not found for the provided EPF number.");
        }
      } catch (error) {
        console.error("Error fetching name:", error);
        alert("Error fetching name. Please try again.");
      }
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post("http://localhost:5000/asset/addAsset", {
        name: String(name),
        EPF: Number(EPF),
        location: String(location),
        Intercom: Number(Intercom),
        Item: String(Item),
        Brand: String(Brand),
        Model: String(Model),
        SerialNumber: String(SerialNumber),
        AssetNumber: String(AssetNumber),
        Error: String(Error),
      });
      navigate("/details");
    } catch (error) {
      console.error("Error adding asset:", error);
    }
  };

  return (
    <div>
      <Nav />
      <Container className="d-flex flex-column align-items-center mb-5">
        <h1 className="my-4 text-center">Add Asset</h1>
        <Form
          onSubmit={handleSubmit}
          style={{ width: "100%", maxWidth: "600px" }}
        >
          <Row className="g-3">
            <Col md={6}>
              <Form.Group>
                <Form.Label>Name</Form.Label>
                <Form.Control
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  required
                />
              </Form.Group>
            </Col>
            <Col md={6}>
              <Form.Group>
                <Form.Label>EPF</Form.Label>
                <Form.Control
                  type="number"
                  value={EPF}
                  onChange={(e) => setEPF(e.target.value)}
                  onBlur={handleEPFBlur}
                  required
                />
              </Form.Group>
            </Col>
            <Col md={6}>
              <Form.Group>
                <Form.Label>Location</Form.Label>
                <Form.Control
                  type="text"
                  value={location}
                  onChange={(e) => setLocation(e.target.value)}
                  required
                />
              </Form.Group>
            </Col>
            <Col md={6}>
              <Form.Group>
                <Form.Label>Intercom</Form.Label>
                <Form.Control
                  type="number"
                  value={Intercom}
                  onChange={(e) => setIntercom(e.target.value)}
                  required
                />
              </Form.Group>
            </Col>
            <Col md={6}>
              <Form.Group>
                <Form.Label>Item</Form.Label>
                <Form.Control
                  type="text"
                  value={Item}
                  onChange={(e) => setItem(e.target.value)}
                  required
                />
              </Form.Group>
            </Col>
            <Col md={6}>
              <Form.Group>
                <Form.Label>Brand</Form.Label>
                <Form.Control
                  type="text"
                  value={Brand}
                  onChange={(e) => setBrand(e.target.value)}
                  required
                />
              </Form.Group>
            </Col>
            <Col md={6}>
              <Form.Group>
                <Form.Label>Model</Form.Label>
                <Form.Control
                  type="text"
                  value={Model}
                  onChange={(e) => setModel(e.target.value)}
                  required
                />
              </Form.Group>
            </Col>
            <Col md={6}>
              <Form.Group>
                <Form.Label>Serial Number</Form.Label>
                <Form.Control
                  type="text"
                  value={SerialNumber}
                  onChange={(e) => setSerialNumber(e.target.value)}
                  required
                />
              </Form.Group>
            </Col>
            <Col md={6}>
              <Form.Group>
                <Form.Label>Asset Number</Form.Label>
                <Form.Control
                  type="text"
                  value={AssetNumber}
                  onChange={(e) => setAssetNumber(e.target.value)}
                  required
                />
              </Form.Group>
            </Col>
            <Col md={6}>
              <Form.Group>
                <Form.Label>Error</Form.Label>
                <Form.Control
                  as="textarea" rows={1}
                  value={Error}
                  onChange={(e) => setError(e.target.value)}
                  required
                />
              </Form.Group>
            </Col>
          </Row>
          <Button
            variant="primary"
            type="submit"
            className="d-block mx-auto mt-4 btn-danger w-50"
          >
            Submit
          </Button>
        </Form>
      </Container>

      <Footer/>
    </div>
  );
}

export default Add;
