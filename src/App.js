import React, { useState } from "react";
import SwivelFace from "./componments/Face";
import './App.css';

import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

import { OuterContainer, HowText, TitleContainer, Title, TellMeHow, Rest, Rest2, FaceContainer, FloatingContent } from "./styles/styles";

// import './fonts/FiraSans-Regular.ttf'

 // TODO these imports need to be dynamic.
 // Sort out where the images will be hosted
import bstraight from "./mugs/ben/straight.jpg";
import bwest from "./mugs/ben/w.jpg";
import beast from "./mugs/ben/e.jpg";
import bnorth from "./mugs/ben/n.jpg";
import bsouth from "./mugs/ben/s.jpg";
import bnortheast from "./mugs/ben/ne.jpg";
import bnorthwest from "./mugs/ben/nw.jpg";
import bsoutheast from "./mugs/ben/se.jpg";
import bsouthwest from "./mugs/ben/sw.jpg";

import kstraight from "./mugs/kerry/straight.jpg";
import kwest from "./mugs/kerry/w.jpg";
import keast from "./mugs/kerry/e.jpg";
import knorth from "./mugs/kerry/n.jpg";
import ksouth from "./mugs/kerry/s.jpg";
import knortheast from "./mugs/kerry/ne.jpg";
import knorthwest from "./mugs/kerry/nw.jpg";
import ksoutheast from "./mugs/kerry/se.jpg";
import ksouthwest from "./mugs/kerry/sw.jpg";

import wstraight from "./mugs/will/straight.jpg";
import wwest from "./mugs/will/w.jpg";
import weast from "./mugs/will/e.jpg";
import wnorth from "./mugs/will/n.jpg";
import wsouth from "./mugs/will/s.jpg";
import wnortheast from "./mugs/will/ne.jpg";
import wnorthwest from "./mugs/will/nw.jpg";
import wsoutheast from "./mugs/will/se.jpg";
import wsouthwest from "./mugs/will/sw.jpg";

import hstraight from "./mugs/hannah/straight.jpeg";
import hwest from "./mugs/hannah/w.jpeg";
import heast from "./mugs/hannah/e.jpeg";
import hnorth from "./mugs/hannah/n.jpeg";
import hsouth from "./mugs/hannah/s.jpeg";
import hnortheast from "./mugs/hannah/ne.jpeg";
import hnorthwest from "./mugs/hannah/nw.jpeg";
import hsoutheast from "./mugs/hannah/se.jpeg";
import hsouthwest from "./mugs/hannah/sw.jpeg";

import estraight from "./mugs/eva/straight.jpeg";
import ewest from "./mugs/eva/w.jpeg";
import eeast from "./mugs/eva/e.jpeg";
import enorth from "./mugs/eva/n.jpeg";
import esouth from "./mugs/eva/s.jpeg";
import enortheast from "./mugs/eva/ne.jpeg";
import enorthwest from "./mugs/eva/nw.jpeg";
import esoutheast from "./mugs/eva/se.jpeg";
import esouthwest from "./mugs/eva/sw.jpeg";

// photo processing
// resize to 724x715px
// with gimp; 
// create new image 
//   and then drag photo drect from phone in
//   color / bnrightness/contract 39/35
//   export as


// array of objects representing the mugs to display
const MugMap = [
  {
    straight: bstraight,
    n: bnorth,
    ne: bnortheast,
    e: beast,
    s: bsouth,
    se: bsoutheast,
    sw: bsouthwest,
    w: bwest,
    nw: bnorthwest
  },
  {
    straight: kstraight,
    n: knorth,
    ne: knortheast,
    e: keast,
    s: ksouth,
    se: ksoutheast,
    sw: ksouthwest,
    w: kwest,
    nw: knorthwest
  },
  {
    straight: wstraight,
    n: wnorth,
    ne: wnortheast,
    e: weast,
    s: wsouth,
    se: wsoutheast,
    sw: wsouthwest,
    w: wwest,
    nw: wnorthwest
  },
  {
    straight: hstraight,
    n: hnorth,
    ne: hnortheast,
    e: heast,
    s: hsouth,
    se: hsoutheast,
    sw: hsouthwest,
    w: hwest,
    nw: hnorthwest
  },
  {
    straight: estraight,
    n: enorth,
    ne: enortheast,
    e: eeast,
    s: esouth,
    se: esoutheast,
    sw: esouthwest,
    w: ewest,
    nw: enorthwest
  },
  
]

export default function App() {
  const [xCord, setxCord] = useState(0);
  const [yCord, setyCord] = useState(0);
  
  // FIXME
  const maxMugsToDisplay = 20;
  const loops = maxMugsToDisplay / MugMap.length;

  const faces = [];
  for (var i = 0; i < loops; i++) {
    for (var j = 0; j < MugMap.length; j++) {
      faces.push(
        <FaceContainer>
          <SwivelFace
            {...MugMap[j]}
            xCord={xCord}
            yCord={yCord}
          />
        </FaceContainer>
      );
    }
  }
  
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
        2. <a href="mailto:btubby@gmail.com">email them</a> / WhatsApp to me
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