import React from "react";
import { HowText, Rest, Rest2 } from "../styles/styles";

export default function How() {
    return (
      <>
        <HowText>
            1. Take photos*<a href='/snapMug'>use webcam</a>
            <br/> 
            2. <a href="mailto:btubby@gmail.com">email them</a> / WhatsApp to me
        </HowText>
        <Rest>
          (the rest will be done for you!)<p/>
        </Rest>
        <Rest2>
          * We need 9 photos of you looking in all directions.
          <br/>Use a tripod, or a family member to take the photos.
          <p/>
        [<a href='/'>back</a>]
        </Rest2>
      </>
    );
  }
  