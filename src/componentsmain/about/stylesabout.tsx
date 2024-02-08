import styled from "styled-components";
import { keyframes } from 'styled-components';
export const AboutSection = styled.section`
  padding-top: 140px;
  padding-bottom: 210px;

  @media all and (max-width: 1080px) {
    padding-top: 86px;
  }

  @media all and (max-width: 800px) {
    padding-top: 230px;
    padding-bottom: 44px;
  }

  @media all and (max-width: 485px) {
    padding-top: 0;
    padding-bottom: 22px;
  }
`;

export const SubContainer = styled.div`
  padding-left:168px;
  padding-top: 56px;
  display: flex;
  align-items: flex-start;

  @media all and (max-width: 1080px) {
    padding-top: 41px;
    padding-bottom: 26px;
    padding-left:100px;
  }

  @media all and (max-width: 800px) {
    padding-top: 6px;
    padding-bottom: 18px;
    padding-left: 60px;
  }

  @media all and (max-width: 630px) {
    flex-direction: column;
  }

  @media all and (max-width: 485px) {
    padding-top: 0;
    padding-bottom: 0;
    //padding-left: 20px;
  }
`;



const blinkAnimation = keyframes`
  0%, 100% {
    box-shadow: 0 0 40px 20px rgba(7, 67, 196, 0.8);
  }
  50% {
    box-shadow: 0 0 10px 5px rgba(255, 255, 255, 0);
  }
`;

export const RoundedImage = styled.img`
  margin-right: 102px;
 width: 38.6%;
  animation: ${blinkAnimation} 3s infinite;
  animation-delay: 1s;

  @media all and (max-width: 1080px) {
    width: 48%;
    margin-right: 26px;
  }

  @media all and (max-width: 800px) {
    width: 49%;
    margin-right: 15px;
  }

  @media all and (max-width: 630px) {
    width: 100%;
    margin-right: 0;
    height: 450px;
    margin-bottom: 24px;
  }

  @media all and (max-width: 485px) {
    height: 290px;
  }
`;

export const Title = styled.h3`
  margin: 0;
  margin-bottom: 18px;
  font-family: "Raleway";
  font-weight: 600;
  font-size: 36px;
  color: #f2f2f2;

  @media all and (max-width: 1080px) {
    font-size: 28px;
    margin-bottom: 47px;
  }

  @media all and (max-width: 800px) {
    font-size: 20px;
    margin-bottom: 30px;
  }
`;

export const TitleBorder = styled.span`
  padding-top: 2px;
  position: relative;
  display: block;
  height: 60px;

  @media all and (max-width: 1080px) {
    padding-top: 18px;
    height: auto;
  }

  @media all and (max-width: 800px) {
    padding-top: 10px;
  }
`;

export const Line = styled.span`
  display: block;
  height: 2px;
`;

export const Text = styled.div`
  margin: 0;
  max-width: 512px;
  font-family: "Lato";
  font-weight: 400;
  font-size: 20px;
  line-height: 26px;
  color: #f2f2f2;

  @media all and (max-width: 1080px) {
    font-size: 18px;
  }

  @media all and (max-width: 800px) {
    font-size: 16px;
    line-height: 24px;
  }

  &:nth-child(2) {
    margin-bottom: 54px;

    @media all and (max-width: 485px) {
      margin-bottom: 13px;
    }
  }
`;

export const TextDecor = styled.div``;

export const List = styled.ul`
  list-style: none;
  padding: 0;
`;

export const ListItem = styled.li`
  margin-bottom: 15px;
`;

export const Link = styled.a`
  display: flex;
  align-items: center;
  text-decoration: none;
  color: #f5f5f5;
`;

export const Icon = styled.span`
  margin-right: 10px;
  &:hover {
    transform: scale(1.5);
        transition: 1s;
  }
`;

export const Textt = styled.span`
  font-weight: bold;
  color:#08A6CE;
  &:hover {
        background: radial-gradient(142.65% 2282.99% at 100% -31.65%, #08A6CE 0%, #6352B1 43.75%, #8B0EB7 68.75%);
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
        background-clip: text;
    transform: scale(1.1);
        transition: 1s;
    }
`;
