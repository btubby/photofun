import styled from "styled-components";

export const OuterContainer = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  align-content: center;
  width:100%;
`;

export const FloatingContent = styled.div`
  align-content: center;
  position:absolute;
  top:3%;
  text-align: center;
  width:100%;
  height: 100%;
  z-index:1000;
`;

export const TitleContainer = styled.div`
  padding-top:5%;
`;

export const Title = styled.div`
  display: inline-block;
  text-align: center;
  font-size:4em;
  font-weight: 900;
  border-top: 200px;
  width:60%;
  padding-bottom: 50px;
`;

export const TellMeHow = styled.div`
  display: inline-block;
  text-align: center;
  font-size:4em;
  font-weight: 900;
  width:60%;
`;

export const HowText = styled.div`
  display: inline-block;
  text-align: center;
  font-size:4em;
  font-weight: 900;
  line-height:1.6;
`;
export const Rest = styled.div`
  font-size:2em;
  font-weight: 900;
`;

export const Rest2 = styled.div`
  padding-top:50px;
  font-weight: 900;
  font-size:1.5em;
`;

export const FaceContainer = styled.div`
  background-color: red;
  position: relative;
  opacity:0.3;
  width: 20%;
`;

export const ImgContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  border: 1px solid green;
`;

export const ImgWrapper = styled.div`
  max-width:30%;
  border: 1px solid tomato;
`;

