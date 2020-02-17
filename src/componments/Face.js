import React, {  useState,useEffect } from 'react'
import kstraight from '../kerry/straight.jpg'
import kwest from '../kerry/w.jpg'
import keast from '../kerry/e.jpg'
import knorth from '../kerry/n.jpg'
import ksouth from '../kerry/s.jpg'
import knortheast from '../kerry/ne.jpg'
import knorthwest from '../kerry/nw.jpg'
import ksoutheast from '../kerry/se.jpg'
import ksouthwest from '../kerry/sw.jpg'
import wstraight from '../will/straight.jpg'
import wwest from '../will/w.jpg'
import weast from '../will/e.jpg'
import wnorth from '../will/n.jpg'
import wsouth from '../will/s.jpg'
import wnortheast from '../will/ne.jpg'
import wnorthwest from '../will/nw.jpg'
import wsoutheast from '../will/se.jpg'
import wsouthwest from '../will/sw.jpg'

import styled from 'styled-components';

const Container = styled.div`
    display:flex;
    height:100%; 
    width: 100%;
`;
const IMG = styled.img`
    width:100%;
    height:auto;
`;

export default function Face(props) {
    const {width='100%', xCord, yCord, type, ITop, IBottom, IRight, ILeft} = props;

    let straight = wstraight;
    let west = wwest;
    let east = weast;
    let north = wnorth;
    let south = wsouth;
    let northeast = wnortheast;
    let northwest = wnorthwest;
    let southeast = wsoutheast;
    let southwest = wsouthwest;

    if (type === 'kerry') {
         straight = kstraight;
         west = kwest;
         east = keast;
         north = knorth;
         south = ksouth;
         northeast = knortheast;
         northwest = knorthwest;
         southeast = ksoutheast;
         southwest = ksouthwest;
    }
    
    const [image, setImage] = useState(straight);
    useEffect(() => {
        let map = { n:0, e:0, s:0, w:0}
        console.log(`${type} top: ${ITop} bottom: ${IBottom} right: ${IRight} left: ${ILeft}` ); 

        if (yCord <= ITop) {map.n=1; }
        if (xCord >= IRight ){ map.e=1 }
        if (xCord <= ILeft ) { map.w=1; }
        if (yCord >= IBottom ){ map.s=1; }
        
        console.log(`${type}`, map) 
        setImage(straight)
        if (map.n) { setImage(north) }
        if (map.e) { setImage(east) }
        if (map.n && map.e){ setImage(northeast) }
        if (map.s) { setImage(south) }
        if (map.s && map.e){ setImage(southeast) }
        if (map.w) { setImage(west) }
        if (map.s && map.w){ setImage(southwest) }
        if (map.w && map.n){ setImage(northwest) }
      });
      return (
          <Container
          >
            <IMG width={width} src={image} alt="{image}" />
          </Container>
      )
  }