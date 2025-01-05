import React, { useState, useEffect } from "react";
import Nav from "../Nav/Nav";
import { useNavigate, useParams } from "react-router";
import axios from "axios";
import { Form, Button, Container, Row, Col } from "react-bootstrap";

function UpdateAsset() {
  const { id } = useParams(); // Get the asset ID from the URL
  const navigate = useNavigate();
  console.log(id);

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
  const [currentStatus, setCurrentStatus] = useState("");

  // Fetch current asset details
  useEffect(() => {
    const fetchAsset = async () => {
      try {
        const response = await axios.get(`http://localhost:5000/asset/${id}`);
        const asset = response.data.asset;
        console.log(asset);
        setName(asset.name);
        setEPF(asset.EPF);
        setLocation(asset.location);
        setIntercom(asset.Intercom);
        setItem(asset.Item);
        setBrand(asset.Brand);
        setModel(asset.Model);
        setSerialNumber(asset.SerialNumber);
        setAssetNumber(asset.AssetNumber);
        setError(asset.Error);
        setCurrentStatus(asset.currentStatus);
      } catch (error) {
        console.error("Error fetching asset details:", error);
      }
    };

    fetchAsset();
  }, [id]);

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.put(`http://localhost:5000/asset/updateAsset/${id}`, {
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
        currentStatus: String(currentStatus),
      });
      alert("Asset updated successfully!");
      navigate("/details");
    } catch (error) {
      console.error("Error updating asset:", error);
      alert("Failed to update asset.");
    }
  };

  return (
    <div>
      <Nav />
      <Container className="d-flex flex-column align-items-center mb-5">
        <h1 className="my-4 text-center">Update Asset</h1>
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
                  as="textarea"
                  rows={1}
                  value={Error}
                  onChange={(e) => setError(e.target.value)}
                  required
                />
              </Form.Group>
            </Col>
            <Col md={6}>
              <Form.Group className="mb-3" controlId="formPosition">
                <Form.Label>Current Status</Form.Label>
                <Form.Select
                  value={currentStatus}
                  onChange={(e) => setCurrentStatus(e.target.value)}
                  required
                >
                  <option value="">Select Position</option>
                  <option value="Not Fixed">Not Fixed</option>
                  <option value="Fixed">Fixed</option>
                  <option value="Pending">Pending</option>
                </Form.Select>
              </Form.Group>
            </Col>
          </Row>
          <Button
            variant="primary"
            type="submit"
            className="d-block mx-auto mt-4 btn-danger w-50"
          >
            Update
          </Button>
        </Form>
      </Container>
    </div>
  );
}

export default UpdateAsset;
