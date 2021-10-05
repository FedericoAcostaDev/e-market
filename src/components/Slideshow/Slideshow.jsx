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
    <div>
      <p>Featured Products</p>
      <MainContainer>
        <SlideshowContainer>
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
          <Buttons>
            <LeftArrow />
          </Buttons>
          <Buttons right>
            <RightArrow />
          </Buttons>
        </Controls>
      </MainContainer>
    </div>
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
  width: 100%;
  height: 100%;
  pointer-events: none;
`;

const Buttons = styled.button`
  pointer-events: all;
  background: none;
  border: none;
  cursor: pointer;
  outline: none;
  width: 50px;
  height: 100%;
  text-align: center;
  position: absolute;
  transition: 0.3s ease all;

  path {
    filter: ${(props) =>
      props.right
        ? "drop-shadow(-2px 0px 0px #fff)"
        : "drop-shadow(2px 0px 0px #fff)"};
  }

  ${(props) => (props.right ? "right: 0" : "left: 0")}
`;

export default Slideshow;
