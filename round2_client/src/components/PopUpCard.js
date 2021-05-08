import React from "react";
import { Row, Col } from "react-bootstrap";

const PopUpCard = ({long_desc,heading}) => {

  function streamCamVideo() {
      // Grab elements, create settings, etc.
var video = document.getElementById('videoElement');
      // Get access to the camera!
if(navigator.mediaDevices && navigator.mediaDevices.getUserMedia) {
    // Not adding `{ audio: true }` since we only want video now
    navigator.mediaDevices.getUserMedia({ video: true }).then(function(stream) {
        //video.src = window.URL.createObjectURL(stream);
        video.srcObject = stream;
        video.play();
    });
}
   
  }
  return (
    <>
      <div style={{width:"100%"}}>
        <Row>
          <Col lg={6} md={6}>
          <h1>{heading}</h1>
          <p>{long_desc}</p>
          </Col>
          <Col lg={6} md={6}>
            <div>
              <div id="container">
                  <video id="videoElement" width="640" height="480" autoplay></video>
              </div>
              <br />
              <button onClick={streamCamVideo}>Start streaming</button>
            </div>
          </Col>
        </Row>
      </div>
    </>
  );
};

export default PopUpCard;
