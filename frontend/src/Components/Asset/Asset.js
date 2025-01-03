import React from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { Card, Button } from "react-bootstrap";

function Asset(props) {
  console.log(props);
  const {
    _id,
    name,
    EPF,
    location,
    Intercom,
    Item,
    Brand,
    Model,
    SerialNumber,
    AssetNumber,
    Error,
    currentStatus,
  } = props.asset;

  const navigate = useNavigate();

  const deleteHandler = async () => {
    await axios
      .delete(`http://localhost:5000/asset/${_id}`)
      .then((res) => res.data)
      .then(() => navigate("/"))
      .then(() => navigate("/details"));
  };

  return (
    <Card className="h-100 shadow-sm">
      <Card.Body>
        <Card.Title className="text-primary">{name}</Card.Title>
        <Card.Text>
          <strong>Current Status:</strong> {currentStatus} <br />
          <strong>EPF:</strong> {EPF} <br />
          <strong>Location:</strong> {location} <br />
          <strong>Intercom:</strong> {Intercom} <br />
          <strong>Item:</strong> {Item} <br />
          <strong>Brand:</strong> {Brand} <br />
          <strong>Model:</strong> {Model} <br />
          <strong>Serial Number:</strong> {SerialNumber} <br />
          <strong>Asset Number:</strong> {AssetNumber} <br />
          <strong>Error:</strong> {Error}
        </Card.Text>
        <div className="d-flex justify-content-between mt-3">
          <Link to={`/details/${_id}`} className="btn btn-outline-primary">
            Update
          </Link>
          <Button variant="outline-danger" onClick={deleteHandler}>
            Delete
          </Button>
        </div>
      </Card.Body>
    </Card>
  );
}

export default Asset;
