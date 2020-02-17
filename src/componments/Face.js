import React, {  useState,useEffect } from 'react'

import straight from '../straight.jpg'
import west from '../w.jpg'
import east from '../e.jpg'
import north from '../n.jpg'
import south from '../s.jpg'
import northeast from '../ne.jpg'
import northwest from '../nw.jpg'
import southeast from '../se.jpg'
import southwest from '../sw.jpg'

import styled from 'styled-components';

const Container = styled.div`
    display:flex;
    background-color: black;
    height:200px; 
    width: 200px;
`;
const IMG = styled.img`
    max-width:100%;
    height:auto;
`;

export default function Face(props) {
    const {xCord, yCord, type, ITop, IBottom, IRight, ILeft} = props;

    const [image, setImage] = useState(straight);
    
    useEffect(() => {
        let map = { n:0, e:0, s:0, w:0, s:0 }
        console.log(`${type} top: ${ITop} bottom: ${IBottom} right: ${IRight} left: ${ILeft}` ); 

        if (yCord <= ITop) {map.n=1; }
        if (xCord >= IRight ){ map.e=1 }
        if (xCord <= ILeft ) { map.w=1; }
        if (yCord >= IBottom ){ map.s=1; }
        
        console.log(`${type}`, map) 

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
        
            // onMouseEnter={(e) => { 
            // //   console.log('onMouseEnter', e.clientX, e.clientY) 
            // }}
            // onMouseMove={(e) => { 
               
            // }}
            // onMouseLeave={ (e) => {
            // //   console.log('onMouseLeave', e.clientX, e.clientY)
            // }}
          >
            <IMG src={image} alt="{image}" />
          </Container>
      )
  }