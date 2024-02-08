import { MouseParallax, ScrollParallax } from "react-just-parallax";
import SocialList from "./ab";
import { Container } from "../skills/skills";
import MainTitle from "../skills/MainTtile";
import {
  AboutSection,
  Line,
  RoundedImage,
  SubContainer,
  Text,
  Title,
  TitleBorder,
} from "./stylesabout";
import styled, { keyframes } from "styled-components";
const gradientAnimation = keyframes`
  0% { background-position: 0% 50%; }
  50% { background-position: 100% 50%; }
  100% { background-position: 0% 50%; }
`;

const TextDecor12 = styled.div`
  text-align: center;
  background: linear-gradient(90deg, #fd0303, #dbdbdb, #090dec);
  background-size: 200% 200%;
  color: transparent;
  -webkit-background-clip: text;
  background-clip: text;
  animation: ${gradientAnimation} 2s linear infinite;
`;

const About = () => {
  return (
    <ScrollParallax>
      <AboutSection>
        <Container>
          <MainTitle text="About me " />
          <SubContainer>
            <RoundedImage src="/image/logo/Logo.png" alt="avatar" />
            <div>
              <Title>
                <TextDecor12>Протас Герман</TextDecor12>
                <TitleBorder>
                  <Line />
                </TitleBorder>
              </Title>
              <Text>
                <TextDecor12>
                  Расположенный в Хартфорде, штат Коннектикут. В настоящее время
                  я работаю по совместительству Удаленным младшим
                  веб-разработчиком для Coolor, расположенного в Лас-Вегасе.
                </TextDecor12>
              </Text>
              <Text>
                <TextDecor12>
                  Я ищу, чтобы взять на себя больше работы и повысить свои
                  навыки в качестве веб-разработчика.
                </TextDecor12>
                <SocialList />
              </Text>
            </div>
          </SubContainer>
        </Container>
      </AboutSection>
    </ScrollParallax>
  );
};

export default About;
