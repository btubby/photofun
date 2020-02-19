import React, {  useState,useEffect } from 'react'

import styled from 'styled-components';

const Container = styled.div`
    display:flex;
    height:100%; 
    width: 100%;
`;
const IMG = styled.img`
    width:80%;
    height:auto;
`;

export default function SwivelFace(props) {
    const {xCord, yCord, type, ITop, IBottom, IRight, ILeft, 
    straight, w, e, n, s, nw, ne, sw,se} = props;
    
    const [image, setImage] = useState(straight);

    useEffect(() => {
        let map = { n:0, e:0, s:0, w:0}
        console.log(`${type} top: ${ITop} bottom: ${IBottom} right: ${IRight} left: ${ILeft}` ); 

        if (yCord <= ITop) { map.n=1 }
        if (xCord >= IRight ){ map.e=1 }
        if (xCord <= ILeft ) { map.w=1 }
        if (yCord >= IBottom ){ map.s=1 }
        
        // console.log(`${type}`, map) 
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
          <Container
          >
            <IMG src={image} alt="{image}" />
          </Container>
      )
  }