import React, { useState } from "react";
import { Card, Col, Row, Button } from "react-bootstrap";
import Popup from 'reactjs-popup';

const DataCard = ({ heading, short_desc, long_desc, img_url }) => {


  return (
    <>
      <Card
        style={{
          width: "20rem",
          height: "20rem",
          borderRadius: "20px",
          display: "inline-block",
          marginBottom: "50px",
        }}
      >
        <Card.Body>
          <img
            alt="..."
            className="rounded-circle"
            style={{
              width: "100px",
              height: "100px",
              textAlign: "center",
              marginBottom: "20px",
            }}
            src={img_url}
          />
          <Card.Title>{heading}</Card.Title>
          <Card.Text>{short_desc}</Card.Text>
          <Card.Link>Try Out{">"}</Card.Link>
        </Card.Body>
      </Card>
    </>
  );
};

export default DataCard;
