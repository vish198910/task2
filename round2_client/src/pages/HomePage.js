import React, { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import Header from "../components/Header";
import axios from "axios";
import DataCard from "../components/DataCard";

const HomePage = () => {
  const [data, setData] = useState([]);
  const fetchData = async () => {
    const result = await axios.get("http://localhost:8000");
    if (result) {
      setData(result.data.data);
    }
    console.log(result.data);
  };
  useEffect(() => {
    fetchData();
  }, []);
  return (
    <>
      <div style={{position:"relative"}}>
        <Header></Header>
      </div>
      <div style={{marginTop:"250px"}}>
          <Container>
          <Row>
            {data.map((dataItem, key) => {
              return (
                <Col>
                  <DataCard
                  key={key}
                    heading={dataItem.heading}
                    short_desc={dataItem.small_desc}
                    long_desc={dataItem.long_desc}
                    img_url={dataItem.img_url}
                  ></DataCard>
                </Col>
              );
            })}
          </Row>
          </Container>
          

      </div>
      
    </>
  );
};

export default HomePage;
