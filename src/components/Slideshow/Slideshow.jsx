import React, { useRef, useEffect } from "react";
import "./Styles.css";
import styled from "styled-components";
import img1 from "../../assets/1.jpg";
import img2 from "../../assets/2.jpg";
import img3 from "../../assets/3.jpg";
import img4 from "../../assets/4.jpg";
import { ReactComponent as LeftArrow } from "../../assets/leftArrow.svg";
import { ReactComponent as RightArrow } from "../../assets/rightArrow.svg";

const Slideshow = () => {
  const slideshow = useRef(null);
  const intervalSlideshow = useRef(null);
  const NextSlide = () => {
    //check for elements
    if (slideshow.current.children.length > 0) {
      //geting the elements
      const firstElement = slideshow.current.children[0];
      //transition effect
      slideshow.current.style.transition = `300ms ease-out all`;

      //obtain slide size
      const slideSize = slideshow.current.children[0].offsetWidth;
      //move slideshow
      slideshow.current.style.transform = `translateX(-${slideSize}px)`;

      //restart initial point
      const restartPoint = () => {
        slideshow.current.style.transition = "none";
        slideshow.current.style.transform = `translateX(0)`;

        //move the first slideshow to finish
        slideshow.current.appendChild(firstElement);

        slideshow.current.removeEventListener("transitionend", restartPoint);
      };
      //event listener finish animation
      slideshow.current.addEventListener("transitionend", restartPoint);
    }
  };

  const PastSlide = () => {
    if (slideshow.current.children.length > 0) {
      //obtain last element
      const index = slideshow.current.children.length - 1;
      const pastElement = slideshow.current.children[index];
      slideshow.current.insertBefore(pastElement, slideshow.current.firstChild);

      slideshow.current.style.transition = "none";

      const slideSize = slideshow.current.children[0].offsetWidth;
      slideshow.current.style.transform = `translateX(-${slideSize}px)`;

      setTimeout(() => {
        slideshow.current.style.transition = "300ms ease-out all";
        slideshow.current.style.transform = `translateX(0)`;
      }, 30);
    }
  };

  useEffect(() => {
    intervalSlideshow.current = setInterval(() => {
      NextSlide();
    }, 5000);
    //delet intervals on hover
    slideshow.current.addEventListener("mouseenter", () => {
      clearInterval(intervalSlideshow.current);
    });
    //restart when not hover
    slideshow.current.addEventListener("mouseleave", () => {
      intervalSlideshow.current = setInterval(() => {
        NextSlide();
      }, 5000);
    });
  }, []);

  return (
    <div>
      <p>Featured Products</p>
      <MainContainer>
        <SlideshowContainer ref={slideshow}>
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
          <Buttons onClick={PastSlide}>
            <LeftArrow />
          </Buttons>
          <Buttons right onClick={NextSlide}>
            <RightArrow />
          </Buttons>
        </Controls>
      </MainContainer>
    </div>
  );
};

/*{const Title = styled.p`
  font-size: 18px;
  font-weight: 700;
  text-transform: uppercase;
  margin-bottom: 10px;
`; }*/

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
