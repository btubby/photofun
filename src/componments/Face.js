import React, {  useState,useEffect } from 'react'

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

export default function SwivellingFace(props) {
    const {
        xCord, yCord,                       // the x and y coords of the mouse pointer on the screen
        type,                               // identifier for this image
        N, S, E, W,                         // the coords of our containers sides
        straight, w, e, n, s, nw, ne, sw,se // images to display
    } = props;
    
    const [image, setImage] = useState(straight);

    useEffect(() => {
        let map = { n:0, e:0, s:0, w:0}
        console.log(`${type} top: ${N} bottom: ${S} right: ${E} left: ${W}` ); 

        if (yCord <= N) { map.n=1 }
        if (xCord >= E ){ map.e=1 }
        if (xCord <= W ) { map.w=1 }
        if (yCord >= S ){ map.s=1 }
        
        console.log(`x:${xCord}, y:${yCord} ${type}`, map,  ) 

        setImage(straight)
        if (map.n) { setImage(n) }
        if (map.e) { setImage(e)}
        if (map.n && map.e){ setImage(ne) }
        if (map.s) { setImage(s) }
        if (map.s && map.e){ setImage(se) }
        if (map.w) { setImage(w) }
        if (map.s && map.w){ setImage(sw) }
        if (map.w && map.n){ setImage(nw) }
      });
      return (
          <Container>
            <IMG src={image} alt="{image}" />
          </Container>
      )
  }