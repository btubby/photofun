import React, {  useState } from 'react'
import styled from 'styled-components';
import Face from './componments/Face'

const Container = styled.div`
  display:flex;
  justify-content: space-around;
  
  background-color: tomato;
  height: 100%;
  width: 100%;
  padding: 300px 0;
`;
export default function App() {
 
    const [xCord, setxCord] = useState(0);
    const [yCord, setyCord] = useState(0);

    const [ITop1, setITop1] = useState(0);
    const [IBottom1, setIBottom1] = useState(0);
    const [IRight1, setIRight1] = useState(0);
    const [ILeft1, setILeft1] = useState(0);
 
    const [ITop2, setITop2] = useState(0);
    const [IBottom2, setIBottom2] = useState(0);
    const [IRight2, setIRight2] = useState(0);
    const [ILeft2, setILeft2] = useState(0);
 
    const [ITop3, setITop3] = useState(0);
    const [IBottom3, setIBottom3] = useState(0);
    const [IRight3, setIRight3] = useState(0);
    const [ILeft3, setILeft3] = useState(0);

    const [ITop4, setITop4] = useState(0);
    const [IBottom4, setIBottom4] = useState(0);
    const [IRight4, setIRight4] = useState(0);
    const [ILeft4, setILeft4] = useState(0);

    const [ITop5, setITop5] = useState(0);
    const [IBottom5, setIBottom5] = useState(0);
    const [IRight5, setIRight5] = useState(0);
    const [ILeft5, setILeft5] = useState(0);

    return (
      <Container
        onMouseMove={(e) => { 
          setxCord(e.nativeEvent.clientX);
          setyCord(e.nativeEvent.clientY);
        }}
      >
        <div
           ref={(el) => {
            if (!el) return;
            setITop1(el.getBoundingClientRect().top);
            setIBottom1(el.getBoundingClientRect().bottom);
            setIRight1(el.getBoundingClientRect().right);
            setILeft1(el.getBoundingClientRect().left)
          }}
        >
          <Face type={'will'} xCord={xCord} yCord={yCord} ITop={ITop1} IBottom={IBottom1} IRight={IRight1} ILeft={ILeft1}/>
        </div>
        
        <div
           ref={(el2) => {
            if (!el2) return;
            setITop2(el2.getBoundingClientRect().top);
            setIBottom2(el2.getBoundingClientRect().bottom);
            setIRight2(el2.getBoundingClientRect().right);
            setILeft2(el2.getBoundingClientRect().left)
          }}
        >
          <Face type={'will'} xCord={xCord} yCord={yCord}  ITop={ITop2} IBottom={IBottom2} IRight={IRight2} ILeft={ILeft2} />
        </div>

        <div
           ref={(el3) => {
            if (!el3) return;
            setITop3(el3.getBoundingClientRect().top);
            setIBottom3(el3.getBoundingClientRect().bottom);
            setIRight3(el3.getBoundingClientRect().right);
            setILeft3(el3.getBoundingClientRect().left)
          }}
        >
          <Face type={'will'} xCord={xCord} yCord={yCord} ITop={ITop3} IBottom={IBottom3} IRight={IRight3} ILeft={ILeft3} />
        </div>


        <div
           ref={(el4) => {
            if (!el4) return;
            setITop4(el4.getBoundingClientRect().top);
            setIBottom4(el4.getBoundingClientRect().bottom);
            setIRight4(el4.getBoundingClientRect().right);
            setILeft4(el4.getBoundingClientRect().left)
          }}
        >
          <Face type={'will'} xCord={xCord} yCord={yCord} ITop={ITop4} IBottom={IBottom4} IRight={IRight4} ILeft={ILeft4} />
        </div>


        <div
           ref={(el5) => {
            if (!el5) return;
            setITop5(el5.getBoundingClientRect().top);
            setIBottom5(el5.getBoundingClientRect().bottom);
            setIRight5(el5.getBoundingClientRect().right);
            setILeft5(el5.getBoundingClientRect().left)
          }}
        >
          <Face type={'will'} xCord={xCord} yCord={yCord} ITop={ITop5} IBottom={IBottom5} IRight={IRight5} ILeft={ILeft5} />
        </div>


      </Container>
    );
}

