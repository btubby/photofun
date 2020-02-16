import React, { Component, useState,useRef } from 'react'
import straight from './straight.jpg'
import west from './w.jpg'
import east from './e.jpg'
import north from './n.jpg'
import south from './s.jpg'
import northeast from './ne.jpg'
import northwest from './nw.jpg'
import southeast from './se.jpg'
import southwest from './sw.jpg'

const styles = {
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  backgroundColor: 'E0C7A8'
}

function TiltPhaseTwo(props) {
  
  const [image, setImage] = useState(straight);
  const inputEl = useRef(null);

    return (
      <div>
        <div
          ref={inputEl}
          style={{
            display: 'flex',
            justifyContent: 'center',
            border: '1px solid red',
            paddingTop: '100px',
            paddingBottom: '100px',
          }}
          onMouseEnter={(e) => { 
            console.log('onMouseEnter', e.clientX, e.clientY) 
          }}
          onMouseMove={(e) => { 
            let size  = inputEl.current.getBoundingClientRect();
            console.log(size);

              let xCord = e.nativeEvent.clientX;
              let yCord = e.nativeEvent.clientY;
              console.log('onMouseMove',xCord, yCord) 

              const xNorthCutoff = 200;
              const xSouthCutoff = 900;
              const ySouthCutoff = 380;

              let c = { n:0, e:0, s:0, w:0, s:0 }
              if (yCord <= xNorthCutoff) {c.n=1; }
              if (xCord >= xSouthCutoff ){ c.e=1 }
              if (xCord <= 700 ) { c.w=1; }
              if (yCord >= ySouthCutoff ){ c.s=1; }

              console.log(c);
              let i = straight
              if (c.n) { i=north }
              if (c.e) { i=east }
              if (c.n && c.e){ i=northeast }
              
              if (c.s) { i=south }
              if (c.s && c.e){ i=southeast }

              if (c.w) { i=west }
              if (c.s && c.w){ i=southwest }
              
              if (c.w && c.n){ i=northwest }
              setImage(i)

          }}
          onMouseLeave={ (e) => {
            console.log('onMouseLeave', e.clientX, e.clientY)
          }}
        >
        <img src={image} alt="" width='30%'/>
        </div>
      </div>
    )
}
export default TiltPhaseTwo;
