import React, { useState, useEffect } from 'react';
import Nav from '../Nav/Nav';
import axios from 'axios';
import Asset from '../Asset/Asset';
import { Container, Row, Col } from 'react-bootstrap';

const URL = 'http://localhost:5000/asset';

const fetchHandler = async () => {
  return await axios.get('http://localhost:5000/asset').then((res) => res.data);
};

function Details() {
  const [assets, setAssets] = useState([]);

  useEffect(() => {
    fetchHandler().then((data) => setAssets(data.asset));
  }, []);

  return (
    <>
      <Nav />
      <Container className="mt-4">
        <h1 className="text-center mb-4">Display Page</h1>
        <Row>
          {assets &&
            assets.map((asset, index) => (
              <Col key={index} md={4} sm={6} xs={12} className="mb-4">
                <Asset asset={asset} />
              </Col>
            ))}
        </Row>
      </Container>
    </>
  );
}

export default Details;
