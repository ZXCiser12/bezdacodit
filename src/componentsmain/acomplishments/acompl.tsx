import styled from 'styled-components';
import MainTitle from '../skills/MainTtile';
import { Container } from '../skills/skills';
import { Box, Boxes, BoxNum, BoxText } from './acomplStyles';
import { ScrollParallax } from 'react-just-parallax';
const data = [
  { number: 20, text: 'Open Source Projects'},
  { number: 1000, text: 'Students', },
  { number: 1900, text: 'Github Followers', },
  { number: 5000, text: 'Github Stars', },
  { number: 20, text: 'Open Source Projects'},
  { number: 1000, text: 'Students', },
  { number: 1900, text: 'Github Followers', },
  { number: 5000, text: 'Github Stars', }
  
];
const Cont = styled.div`
  padding-top:56px;
  padding-bottom:210px;
`
const SubContainer = styled.div`
padding-left:0px;
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

const Acomplishments = () => (
  <ScrollParallax>
  <Cont>
  <Container>
    <MainTitle text="Personal Achievements " />
    <SubContainer>
    <Boxes>
      {data.map((card, index) => (
        <Box key={index}>
          <BoxNum>{`${card.number}+`}</BoxNum>
          <BoxText>{card.text}</BoxText>
        </Box>
      ))}
    </Boxes>
    </SubContainer>
  </Container>
  </Cont>
  </ScrollParallax>
);

export default Acomplishments;