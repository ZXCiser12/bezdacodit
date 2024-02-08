import MainTitle from "../skills/MainTtile";
import styled from "styled-components";
import SocialList from "./SocialList/SocialList";
import ContactForm1 from "./ContactForm";
import { useMediaQuery } from "../hooks";
import { ScrollParallax } from "react-just-parallax";

const Container = styled.div`
  max-width: 1408px;
  padding: 0 17px;
  margin: 0 auto;
  color: white;
`;

const ContactStyle = styled.section`
  padding-top: 139px;
  padding-bottom: 70px;

  @media all and (max-width: 1440px) {
    padding-bottom: 15px;
  }

  @media all and (max-width: 1080px) {
    padding-top: 103px;
    padding-bottom: 40px;
  }

  @media all and (max-width: 800px) {
    padding-top: 78px;
  }

  @media all and (max-width: 485px) {
    padding-top: 52px;
    padding-bottom: 20px;
  }
`;
const SubContainer = styled.div`
  max-width: 1174px;
  padding: 0 17px;
  padding-left: 110px;
  margin: 0 auto;
  @media all and (max-width: 1080px) {
    .container {
      padding: 0 32px;
    }

    .sub-container {
      max-width: 833px;
    }
  }

  @media all and (max-width: 800px) {
    .container,
    .sub-container {
      padding: 0 25px;
    }
  }

  @media all and (max-width: 485px) {
    .container,
    .sub-container {
      padding: 0 16px;
    }
  }
`;

const Inner = styled.div`
  padding-top: 71px;
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-column-gap: 70px;

  @media all and (max-width: 1440px) {
    padding-top: 58px;
  }

  @media all and (max-width: 1080px) {
    padding-top: 40px;
  }

  @media all and (max-width: 675px) {
    display: block;
    padding-top: 0;
  }
`;
const ContactLeft = styled.div`
  margin-bottom: 40px;
`;
const ContactRight = styled.div``;

const TextContact = styled.p`
  margin: 0;
  max-width: 500px;
  font-family: "Raleway";
  font-weight: 500;
  font-size: 24px;
  line-height: 31px;
  color: #f2f2f2;

  @media all and (max-width: 1080px) {
    font-size: 22px;
    line-height: 28px;
  }

  @media all and (max-width: 800px) {
    font-size: 18px;
    line-height: 26px;
  }
`;

const TitleContact = styled.h3`
  margin: 0;
  margin-bottom: 67px;
  max-width: 154px;
  position: relative;
  margin-top: 70px;

  @media all and (max-width: 1440px) {
    margin-bottom: 59px;
    margin-top: 20px;
  }

  @media all and (max-width: 1080px) {
    margin-bottom: 33px;
    margin-top: 15px;
  }
`;

const TitleText = styled.span`
  font-family: "Raleway";
  font-weight: 600;
  font-size: 24px;
  color: #ffffff;

  @media all and (max-width: 1080px) {
    font-size: 22px;
  }
`;



const TitleBorder = styled.span`
  margin-top: 17px;
  display: block;
  height: 2px;
  background: linear-gradient(89.99deg, #00d1ff 0%, rgba(255, 34, 141, 0) 100%);

  @media all and (max-width: 1080px) {
    margin-top: 9px;
  }
`;

const Contact = () => {
  const isMobile485 = useMediaQuery(485);

  return (
    <ScrollParallax>
    <ContactStyle>
      <Container>
        <MainTitle text=" Contact " />
        <SubContainer>
          <Inner>
            <ContactLeft>
              <TextContact>
                Вы работаете над чем-то великим? Я с удовольствием помогу вам в
                этом! Напишите мне письмо и мы начнем проект прямо сейчас!
              </TextContact>
              {!isMobile485 && <>
              <TitleContact>
                <TitleText>Я в соцсетях:</TitleText>
                <TitleBorder />
              </TitleContact>
              <SocialList />
              </>}
            </ContactLeft>
            <ContactRight>
            <ContactForm1/>
            </ContactRight>
          </Inner>
        </SubContainer>
      </Container>
    </ContactStyle>
    </ScrollParallax>
  );
};
export default Contact;
