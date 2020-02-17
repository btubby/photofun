import React, { Component, useState,useRef,useEffect } from 'react'
import styled from 'styled-components';
import ReactDOM from 'react-dom'


import Face from './componments/Face'

const Title = styled.h1`
  font-size: 1.5em;
  text-align: center;
  color: palevioletred;
`;
const Container = styled.div`
  display:flex;
  justify-content: space-between;
  background-color: palevioletred;
  height: 100%;
  padding: 300px;
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
    return (
      <Container
        onMouseMove={(e) => { 
          setxCord(e.nativeEvent.clientX);
          setyCord(e.nativeEvent.clientY);
        }}
      >
        <Title>hello</Title>
        <div
           ref={(el) => {
            if (!el) return;
            setITop1(el.getBoundingClientRect().top);
            setIBottom1(el.getBoundingClientRect().bottom);
            setIRight1(el.getBoundingClientRect().right);
            setILeft1(el.getBoundingClientRect().left)
          }}
        >
          <Face type={'will1'} xCord={xCord} yCord={yCord} ITop={ITop1} IBottom={IBottom1} IRight={IRight1} ILeft={ILeft1}/>
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
          <Face type={'will2'} xCord={xCord} yCord={yCord}  ITop={ITop2} IBottom={IBottom2} IRight={IRight2} ILeft={ILeft2} />
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
          <Face type={'will3'} xCord={xCord} yCord={yCord}  ITop={ITop3} IBottom={IBottom3} IRight={IRight3} ILeft={ILeft3} />
        </div>

      </Container>
    );
}

