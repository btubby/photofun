import React, {  useState } from 'react'
import styled from 'styled-components';
import SwivelFace from './componments/Face'

import kstraight from './kerry/straight.jpg'
import kwest from './kerry/w.jpg'
import keast from './kerry/e.jpg'
import knorth from './kerry/n.jpg'
import ksouth from './kerry/s.jpg'
import knortheast from './kerry/ne.jpg'
import knorthwest from './kerry/nw.jpg'
import ksoutheast from './kerry/se.jpg'
import ksouthwest from './kerry/sw.jpg'

import wstraight from './will/straight.jpg'
import wwest from './will/w.jpg'
import weast from './will/e.jpg'
import wnorth from './will/n.jpg'
import wsouth from './will/s.jpg'
import wnortheast from './will/ne.jpg'
import wnorthwest from './will/nw.jpg'
import wsoutheast from './will/se.jpg'
import wsouthwest from './will/sw.jpg'

import bstraight from './ben/straight.jpg'
import bwest from './ben/w.jpg'
import beast from './ben/e.jpg'
import bnorth from './ben/n.jpg'
import bsouth from './ben/s.jpg'
import bnortheast from './ben/ne.jpg'
import bnorthwest from './ben/nw.jpg'
import bsoutheast from './ben/se.jpg'
import bsouthwest from './ben/sw.jpg'


const Container = styled.div`
  display:flex;
  justify-content: space-around;
  
  background-color: palevioletred;
  height: 100%;
  width: 100%;
  padding: 300px 0;
`;
export default function App() {
 
    const [xCord, setxCord] = useState(0);
    const [yCord, setyCord] = useState(0);

    const [N1, setN1] = useState(0);
    const [S1, setS1] = useState(0);
    const [E1, setE1] = useState(0);
    const [W1, setW1] = useState(0);
 
    const [N2, setN2] = useState(0);
    const [S2, setS2] = useState(0);
    const [E2, setE2] = useState(0);
    const [W2, setW2] = useState(0);
 
    const [N3, setN3] = useState(0);
    const [S3, setS3] = useState(0);
    const [E3, setE3] = useState(0);
    const [W3, setW3] = useState(0);
 
    return (
      <Container
        onMouseMove={(e) => { 
          setxCord(e.nativeEvent.clientX);
          setyCord(e.nativeEvent.clientY);
        }}
      >
        <div
           ref={(dd) => {
            if (!dd) return;
            setN1(dd.getBoundingClientRect().top);
            setS1(dd.getBoundingClientRect().bottom);
            setE1(dd.getBoundingClientRect().right);
            setW1(dd.getBoundingClientRect().left)
          }}
        >
          <SwivelFace  // will
            ITop={N1} IBottom={S1} IRight={E1} ILeft={W1} xCord={xCord} yCord={yCord} 
            straight={wstraight} w={wwest} e={weast} n={wnorth} s={wsouth} ne={wnortheast} nw={wnorthwest} se={wsoutheast} sw={wsouthwest}
            />
        </div>
        
        <div
           ref={(dd) => {
            if (!dd) return;
            setN2(dd.getBoundingClientRect().top);
            setS2(dd.getBoundingClientRect().bottom);
            setE2(dd.getBoundingClientRect().right);
            setW2(dd.getBoundingClientRect().left)
          }}
        >
          <SwivelFace  // kerry
            ITop={N2} IBottom={S2} IRight={E2} ILeft={W2} xCord={xCord} yCord={yCord} 
            straight={kstraight} w={kwest} e={keast} n={knorth} s={ksouth} ne={knortheast} nw={knorthwest} se={ksoutheast} sw={ksouthwest}
            />
        </div>

        <div
           ref={(dd) => {
            if (!dd) return;
            setN3(dd.getBoundingClientRect().top);
            setS3(dd.getBoundingClientRect().bottom);
            setE3(dd.getBoundingClientRect().right);
            setW3(dd.getBoundingClientRect().left)
          }}
        >
          <SwivelFace  // ben
            ITop={N3} IBottom={S3} IRight={E3} ILeft={W3} xCord={xCord} yCord={yCord} 
            straight={bstraight} w={bwest} e={beast} n={bnorth} s={bsouth} ne={bnortheast} nw={bnorthwest} se={bsoutheast} sw={bsouthwest}
          />
        </div>

      </Container>
    );
}

