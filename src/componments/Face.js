import React, { useState, useEffect } from "react";
import { Container, Image } from "./Face.styles";

export default function SwivellingFace(props) {
  const {
    xCord,
    yCord, // the x and y coords of the mouse pointer on the screen
    type, // identifier for this image

    straight,
    w,
    e,
    n,
    s,
    nw,
    ne,
    sw,
    se // images to display
  } = props;

  const [image, setImage] = useState(straight);

  const [N, setN1] = useState(0);
  const [S, setS1] = useState(0);
  const [E, setE1] = useState(0);
  const [W, setW1] = useState(0);

  useEffect(() => {
    let map = { n: 0, e: 0, s: 0, w: 0 };
    console.log(`${type} top: ${N} bottom: ${S} right: ${E} left: ${W}`);

    if (yCord <= N) {
      map.n = 1;
    }
    if (xCord >= E) {
      map.e = 1;
    }
    if (xCord <= W) {
      map.w = 1;
    }
    if (yCord >= S) {
      map.s = 1;
    }

    console.log(`x:${xCord}, y:${yCord} ${type}`, map);

    setImage(straight);
    if (map.n) {
      setImage(n);
    }
    if (map.e) {
      setImage(e);
    }
    if (map.n && map.e) {
      setImage(ne);
    }
    if (map.s) {
      setImage(s);
    }
    if (map.s && map.e) {
      setImage(se);
    }
    if (map.w) {
      setImage(w);
    }
    if (map.s && map.w) {
      setImage(sw);
    }
    if (map.w && map.n) {
      setImage(nw);
    }
  });
  return (
    <Container
      ref={dd => {
        if (!dd) return;
        setN1(dd.getBoundingClientRect().top);
        setS1(dd.getBoundingClientRect().bottom);
        setE1(dd.getBoundingClientRect().right);
        setW1(dd.getBoundingClientRect().left);
      }}
    >
      <Image src={image} alt="{image}" />
    </Container>
  );
}
