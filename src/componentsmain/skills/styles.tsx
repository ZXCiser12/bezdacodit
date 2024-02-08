import styled from 'styled-components';

const Skills = styled.div`
  padding-top: 67px;
  padding-bottom: 50px;

  @media all and (max-width: 1080px) {
    padding-top: 48px;
  }
`;

const List = styled.ul`
  list-style-type: none;
  margin: 0;
  padding: 0;
  padding-top: 52px;
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 1fr 1fr;
  grid-column-gap: 32px;
  grid-row-gap: 105px;

  @media all and (max-width: 1080px) {
    padding-top: 39px;
    grid-column-gap: 24px;
    grid-row-gap: 85px;
  }

  @media all and (max-width: 800px) {
    padding-top: 12px;
    grid-column-gap: 18px;
    grid-row-gap: 50px;
  }

  @media all and (max-width: 620px) {
    display: block;
  }

  @media all and (max-width: 485px) {
    padding-top: 16px;
  }
`;

const Item = styled.li`
  @media all and (max-width: 620px) {
    &:not(:last-child) {
      margin-bottom: 24px;

      @media all and (max-width: 485px) {
        margin-bottom: 50px;
      }
    }
  }
`;

const Title = styled.h3`
  margin: 0;
  margin-bottom: 38px;
  padding-top: 12px;
  background-repeat: no-repeat;
  font-family: 'Raleway';
  font-weight: 600;
  font-size: 22px;
  color: #F2F2F2;

  @media all and (max-width: 1080px) {
    margin-bottom: 33px;
  }

  @media all and (max-width: 800px) {
    font-size: 18px;
    margin-bottom: 24px;
    background-position-y: -6px;
  }
`;

const TitleText = styled.span`
  padding-left: 57px;

  @media all and (max-width: 800px) {
    padding-left: 54px;
  }
`;

const TitleBorder = styled.span`
  max-width: 248px;
  margin-top: 19px;
  display: block;
  height: 2px;
  background: linear-gradient(89.99deg, #00D1FF 0%, rgba(255, 34, 141, 0) 100%);

  @media all and (max-width: 1080px) {
    margin-top: 9px;
  }

  @media all and (max-width: 800px) {
    margin-top: 5px;
  }
`;

const Image = styled.div`
  &.web {
    background-image: url('/image/icon web.svg');
  }

  &.ux {
    background-image: url('/img/ux.svg');
  }

  &.front {
    background-image: url('/img/front.svg');
  }

  &.seo {
    background-image: url('/img/seo.svg');
  }
`;

const Text = styled.p`
  margin: 0;
  font-family: 'Lato';
  font-weight: 400;
  font-size: 20px;
  line-height: 24px;
  color: #BDBDBD;

  @media all and (max-width: 1080px) {
    font-size: 18px;
  }

  @media all and (max-width: 800px) {
    font-size: 16px;
  }

  @media all and (max-width: 485px) {
    line-height: 22px;
  }
`;

export { Skills, List, Item, Title, TitleText, TitleBorder, Image, Text };