import React, { useState, useReducer } from "react";
import { TellMeHow, ImgWrapper, ImgContainer } from "../styles/styles";
import Webcam from "react-webcam";

export default function SnapMug() {
    // const [II, setII] = useState(null);
    // might be better touse a reducer here
    const [items, setItems] = useState([]);

    const videoConstraints = {
      width: 715,
      height: 724,
      facingMode: "user"
    };
    const webcamRef = React.useRef(null);
    function capture() {
      const shot = webcamRef.current.getScreenshot();
      setItems(items => [...items, shot]);
      console.log(items);
    };
    function restart() {
      setItems([]);
    }
    let imagesPreview = null;
    if (items.length > 0) {
      imagesPreview = (
          <ImgContainer>
              {items.map((image, index) => (
                  <ImgWrapper>
                    <img width='300px' height='300px' src={image} alt="" key={index} />
                  </ImgWrapper>
              ))}
          </ImgContainer>
      );
    }
    return (
      <>
        {/* <Title>
            Get your mug on this page!
        </Title> */}
          {/* <div className="App">
              <h1>Image capture test</h1>
              <p>Capture image from USB webcamera and upload to form</p>
              <CameraFeed sendFile={uploadImage} />
          </div> */}
        <Webcam
          audio={false}
          height={724}
          ref={webcamRef}
          screenshotFormat="image/jpeg"
          width={715}
          videoConstraints={videoConstraints}
        />
        {/* <TellMeHow> */}
          <button onClick={() => capture()}>Capture photo</button>
          <button onClick={() => restart()}>Restart</button>
          {imagesPreview}
         [<a href='/how'>back</a>]
        {/* </TellMeHow> */}
      </>
    );
  }