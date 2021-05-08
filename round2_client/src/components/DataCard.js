import React from "react";
import { Card} from "react-bootstrap";
import PopUp from "../components/PopUp";

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
          <PopUp heading={heading} long_desc={long_desc}></PopUp>
        </Card.Body>
      </Card>
    </>
  );
};

export default DataCard;
