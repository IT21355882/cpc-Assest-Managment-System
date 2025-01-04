import React, { useState, useEffect } from "react";
import Nav from "../Nav/Nav";
import axios from "axios";
import Asset from "../Asset/Asset";
import { Container, Row, Col, FormControl, InputGroup } from "react-bootstrap";

const fetchHandler = async () => {
  return await axios.get("http://localhost:5000/asset").then((res) => res.data);
};

function Details() {
  const [assets, setAssets] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");

  useEffect(() => {
    fetchHandler().then((data) => setAssets(data.asset || []));
  }, []);

  // Filter assets based on search query
  const filteredAssets = assets.filter((asset) =>
    // asset.name.toLowerCase().includes(searchQuery.toLowerCase())
    asset.EPF.toString().includes(searchQuery)
  );

  return (
    <>
      <Nav />
      <Container className="mt-4">
        <h1 className="text-center mb-4">Assets Details</h1>

        {/* Search Bar */}
        <InputGroup className="mb-4">
          <FormControl
            type="number"
            placeholder="Search assets by EPF number..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </InputGroup>

        {/* Asset Cards */}
        <Row>
          {filteredAssets.length > 0 ? (
            filteredAssets.map((asset, index) => (
              <Col key={index} md={4} sm={6} xs={12} className="mb-4">
                <Asset asset={asset} />
              </Col>
            ))
          ) : (
            <p className="text-center">No assets found.</p>
          )}
        </Row>
      </Container>
    </>
  );
}

export default Details;
