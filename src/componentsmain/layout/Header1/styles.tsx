import styled, { keyframes } from "styled-components";

export const Backpage = styled.div`
  margin-top: 0;
  background-image: url("/image/main/img.png");
  background-position: center;
  background-size: cover;
  height: 140vh;
  @media (max-width: 768px) {
    height: 100vh;
  }
`;

export const Logo = styled.div`
  margin-top: 0;
  display: flex;
  max-width: 100%;
  height: 24px;
  justify-content: center;
  align-items: center;
  //padding-top: 10px;
  gap: 907px;
  @media (max-width: 768px) {
    gap: 20px;
  }
`;

export const LogoName = styled.div`
  color: #fff;
  text-align: center;
  font-size: 20px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  cursor: pointer;
  border-radius: 25px;
  transition: 0.5s;
&:hover{
  background: #00fdfd;
  color:black;

  @media (max-width: 768px) {
    font-size: 16px;
  }
}
`;

export const NavStction = styled.div`
  position: fixed;
  display: flex;
  justify-content: center;
  align-items: center;
  align-content: center;
  flex-wrap: wrap;
  gap: 30px;
  z-index:5;
  @media (max-width: 768px) {
    flex-direction: column;
    gap: 10px;
  }
`;
  const gradientAnimation = keyframes`
  0% { background-position: 0% 50%; }
  50% { background-position: 100% 50%; }
  100% { background-position: 0% 50%; }
`; 
export const TextDecor = styled.div`
  display: flex;
  left: 50%;
  flex-direction: column;
  justify-content: center;
  padding-top: 380px;
  text-align: center;
  font-size: 96px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  background: linear-gradient(90deg, #3903fd, #ffffff, #de0ce6);
  background-size: 200% 200%;
  color: transparent;
  -webkit-background-clip: text;
  background-clip: text;
  animation: ${gradientAnimation} 10s linear infinite;

  @media (max-width: 768px) {
    font-size: 60px;
    padding-top: 100px;
  }
`;

export const TextDecor2 = styled.div`
  color: #f1d5e6;
  font-family: Montserrat;
  font-size: 30px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  left: 50%;
  @media (max-width: 768px) {
    font-size: 20px;
  }
`;

export const NavItemDecoration = styled.span`
  position: absolute;
  top: 50%;
  left: 52%;
  transform: translate(-50%, -50%);
  width: 120%;
  height: 200%;
  background-color: #0609a17c;
  z-index: -1;
  border-radius: 100px;

  @media (max-width: 768px) {
    display: none;
  }
`;
