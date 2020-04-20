import React, { useState } from "react";
import styled from "styled-components";
import SwivelFace from "./componments/Face";
import './App.css';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";



import './fonts/FiraSans-Regular.ttf'


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
  align-content: center;
  /* border: 1px solid red; */
  width:100%;
`;
const FloatingContent = styled.div`
  align-content: center;
  position:absolute;
  top:10%;
  text-align: center;
  width:100%;
  height: 100%;
  z-index:1000;
`;
const TitleContainer = styled.div`
  padding-top:5%;

`;
const Title = styled.div`
  display: inline-block;
  text-align: center;
  font-size:4em;
  font-weight: 900;
  border-top: 200px;
  width:60%;
`;
const TellMeHow = styled.div`
  display: inline-block;
  text-align: center;
  font-size:4em;
  font-weight: 900;
  line-spacing: 20px;
  width:60%;
`;

const HowText = styled.div`
  display: inline-block;
  text-align: center;
  font-size:4em;
  font-weight: 900;
  line-height:1.6;
`;
const Rest = styled.div`
  font-size:2em;
  font-weight: 900;
`;
const Rest2 = styled.div`
  padding-top:50px;
  font-weight: 900;
  font-size:1.5em;
`;
const FaceContainer = styled.div`
  background-color: red;
  position: relative;
  opacity:0.3;
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
    <Router>
      <OuterContainer
        onMouseMove={e => {
          setxCord(e.nativeEvent.clientX);
          setyCord(e.nativeEvent.clientY);
        }}
      >
        <FloatingContent>
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route path="/how">
              <How />
            </Route>
          </Switch>
        </FloatingContent>
        {faces}
      </OuterContainer>
    </Router>
  );
}

function Home() {
  return (
    <TitleContainer>
      <Title>
          Get your mug on this page!
          <p/> 
      </Title>
      <TellMeHow>
        <a href='/how'>tell me how</a>
      </TellMeHow>
    </TitleContainer>
  );
}
function How() {
  return (
    <div>
    <HowText>
        1. Take photos*<br/>
        2. <a href="mailto:btubby@gmail.com">email them</a>
    </HowText>
    <Rest>
      (the rest will be done for you!)<p/>
    </Rest>
    <Rest2>
      * We need 8 photos of you looking in all directions.
      <br/>Use a tripod, or a family member to take the photos.
      <p/>
    [<a href='/'>back</a>]
    </Rest2>
    </div>
  );
}