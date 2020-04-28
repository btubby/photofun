import React from "react";
import { TitleContainer, Title, TellMeHow } from "../styles/styles";

export default function Home() {
    return (
      <TitleContainer>
        <Title>
            Get your mug on this page!
        </Title>
        <TellMeHow>
          <a href='/how'>tell me how</a>
        </TellMeHow>
      </TitleContainer>
    );
  }