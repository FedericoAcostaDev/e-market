import React from "react";
import "./Styles.css";
import styled from "styled-components";
import img1 from "../../assets/1.jpg";
import img2 from "../../assets/2.jpg";
import img3 from "../../assets/3.jpg";
import img4 from "../../assets/4.jpg";
import { ReactComponent as LeftArrow } from "../../assets/leftArrow.svg";
import { ReactComponent as RightArrow } from "../../assets/rightArrow.svg";

const Slideshow = () => {
  return (
    <MainContainer>
      <SlideshowContainer>
        <p>Feastured Products</p>
        <Slide>
          <a href="https://www.falconmaters.com">
            <img src={img1} alt="" />
          </a>
          <SlideText>
            <p>15% discount in technology</p>
          </SlideText>
        </Slide>
        <Slide>
          <a href="https://www.falconmaters.com">
            <img src={img2} alt="" />
          </a>
          <SlideText>
            <p>15% discount in technology</p>
          </SlideText>
        </Slide>
        <Slide>
          <a href="https://www.falconmaters.com">
            <img src={img3} alt="" />
          </a>
          <SlideText>
            <p>15% discount in technology</p>
          </SlideText>
        </Slide>
        <Slide>
          <a href="https://www.falconmaters.com">
            <img src={img4} alt="" />
          </a>
          <SlideText>
            <p>15% discount in technology</p>
          </SlideText>
        </Slide>
      </SlideshowContainer>

      <Controls>
        <buttons>
          <LeftArrow />
        </buttons>
        <buttons>
          <RightArrow />
        </buttons>
      </Controls>
    </MainContainer>
  );
};

const Title = styled.p`
  font-size: 18px;
  font-weight: 700;
  text-transform: uppercase;
  margin-bottom: 10px;
`;

const MainContainer = styled.div`
  position: relative;
`;

const SlideshowContainer = styled.div`
  display: flex;
  flex-wrap: nowrap;
`;

const Slide = styled.div`
  min-width: 100%;
  overflow: hidden;
  transition: 0.3s ease all;
  z-index: 10;
  max-height: 500px;
  position: relative;

  img {
    width: 100%;
    vertical-align: top;
  }
`;

const SlideText = styled.div`
  background: rgba(0, 0, 0, 0.5);
  color: #fff;
  width: 100%;
  padding: 10px 60px;
  text-align: center;
  position: absolute;
  bottom: 0;

  @media screen and (max-width: 700px) {
    position: relative;
    background: #000;
  }
`;

const Controls = styled.div`
  position: absolute;
  top: 0;
  z-index: 20;
`;

const buttons = styled.button``;

export default Slideshow;
