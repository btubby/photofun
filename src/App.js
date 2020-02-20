import React, { useState } from "react";
import styled from "styled-components";
import SwivelFace from "./componments/Face";

import kstraight from "./kerry/straight.jpg";
import kwest from "./kerry/w.jpg";
import keast from "./kerry/e.jpg";
import knorth from "./kerry/n.jpg";
import ksouth from "./kerry/s.jpg";
import knortheast from "./kerry/ne.jpg";
import knorthwest from "./kerry/nw.jpg";
import ksoutheast from "./kerry/se.jpg";
import ksouthwest from "./kerry/sw.jpg";

import wstraight from "./will/straight.jpg";
import wwest from "./will/w.jpg";
import weast from "./will/e.jpg";
import wnorth from "./will/n.jpg";
import wsouth from "./will/s.jpg";
import wnortheast from "./will/ne.jpg";
import wnorthwest from "./will/nw.jpg";
import wsoutheast from "./will/se.jpg";
import wsouthwest from "./will/sw.jpg";

import bstraight from "./ben/straight.jpg";
import bwest from "./ben/w.jpg";
import beast from "./ben/e.jpg";
import bnorth from "./ben/n.jpg";
import bsouth from "./ben/s.jpg";
import bnortheast from "./ben/ne.jpg";
import bnorthwest from "./ben/nw.jpg";
import bsoutheast from "./ben/se.jpg";
import bsouthwest from "./ben/sw.jpg";

const images = {
  ben: {
    straight: bstraight,
    n: bnorth,
    ne: bnortheast,
    e: beast,
    s: bsouth,
    se: bsoutheast,
    s: bsouth,
    sw: bsouthwest,
    w: bwest,
    nw: bnorthwest
  },
  kerry: {
    straight: kstraight,
    n: knorth,
    ne: knortheast,
    e: keast,
    s: ksouth,
    se: ksoutheast,
    s: ksouth,
    sw: ksouthwest,
    w: kwest,
    nw: knorthwest
  },
  will: {
    straight: wstraight,
    n: wnorth,
    ne: wnortheast,
    e: weast,
    s: wsouth,
    se: wsoutheast,
    s: wsouth,
    sw: wsouthwest,
    w: wwest,
    nw: wnorthwest
  }
};
const OuterContainer = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  // justify-content: space-evenly;
  align-content: center;
  border: 1px solid red;

  height: 100%;
  width: 100%;
  padding: 300px 0;
`;

const FaceContainer = styled.div`
  background-color: red;
  position: relative;
  // top: 30;
  width: 20%;
`;
export default function App() {
  const [xCord, setxCord] = useState(0);
  const [yCord, setyCord] = useState(0);

  const faces = [];
  [
    "ben",
    "kerry",
    "will",
    "ben",
    "kerry",
    "will",
    "ben",
    "kerry",
    "will",
    "ben",
    "kerry",
    "will",
    "ben",
    "kerry",
    "will",
    "ben",
    "kerry",
    "will",
    "ben",
    "kerry",
    "will",
    "ben",
    "kerry",
    "will"
  ].forEach(e => {
    faces.push(
      <FaceContainer>
        <SwivelFace // will
          type={"will"}
          xCord={xCord}
          yCord={yCord}
          {...images[e]}
        />
      </FaceContainer>
    );
  });

  return (
    <OuterContainer
      onMouseMove={e => {
        setxCord(e.nativeEvent.clientX);
        setyCord(e.nativeEvent.clientY);
      }}
    >
      {faces}
    </OuterContainer>
  );
}
