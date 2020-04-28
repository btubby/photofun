import React, { useState } from "react";
import SwivellingFace from "./componments/Face";
import Home from "./componments/Home";
import How from "./componments/How";
import SnapMug from "./componments/SnapMug";
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import { OuterContainer,FaceContainer, FloatingContent } from "./styles/styles";
import './App.css';
// import { CameraFeed } from "./componments/camera-feed"
// import './fonts/FiraSans-Regular.ttf'

 // TODO these imports need to be dynamic.
 // Sort out where the images will be hosted




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


// array of objects representing the mugs to display.  NOTE they are rendered in this order
const MugMap = [
  {
    straight: require("./mugs/ben/straight.jpg"),
    n:  require("./mugs/ben/n.jpg"),
    ne: require("./mugs/ben/se.jpg"),
    e: require("./mugs/ben/e.jpg"),
    s: require("./mugs/ben/s.jpg"),
    se: require("./mugs/ben/se.jpg"),
    sw: require("./mugs/ben/nw.jpg"),
    w: require("./mugs/ben/w.jpg"),
    nw: require("./mugs/ben/nw.jpg")
  },
  {
    straight: require("./mugs/kerry/straight.jpg"),
    n: require("./mugs/kerry/n.jpg"),
    ne: require("./mugs/kerry/ne.jpg"),
    e: require("./mugs/kerry/e.jpg"),
    s: require("./mugs/kerry/s.jpg"),
    se: require("./mugs/kerry/ne.jpg"),
    sw: require("./mugs/kerry/sw.jpg"),
    w: require("./mugs/kerry/w.jpg"),
    nw: require("./mugs/kerry/nw.jpg"),
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

]

export default function App() {
  const [xCord, setxCord] = useState(0);
  const [yCord, setyCord] = useState(0);
  
  const maxMugsToDisplay = 20;
  const loops = maxMugsToDisplay / MugMap.length;

  const faces = [];
  for (var i = 0; i < loops; i++) {
    for (var j = 0; j < MugMap.length; j++) {
      faces.push(
        <FaceContainer>
          <SwivellingFace
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
            <Route path="/snapMug">
              <SnapMug />
            </Route>
          </Switch>
        </FloatingContent>
        {faces}
      </OuterContainer>
    </Router>
  );
}