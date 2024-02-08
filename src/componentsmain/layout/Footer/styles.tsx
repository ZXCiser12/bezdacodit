import styled from "styled-components";

export const Footer1 = styled.footer`
  padding-top: 103px;

  @media all and (max-width: 1440px) {
    padding-top: 31px;
  }
`;

export const Border = styled.span`
  margin-bottom: 24px;
  display: block;
  height: 3px;
  background: linear-gradient(89.99deg, #00d1ff 0%, rgba(255, 34, 141, 0) 100%);

  @media all and (max-width: 1440px) {
    margin-bottom: 40px;
  }
`;

export const Inner = styled.div`
  display: flex;

  @media all and (max-width: 725px) {
    flex-direction: column;
    align-items: center;
  }

  @media all and (max-width: 580px) {
    align-items: flex-start;
  }
`;

export const Left = styled.div`
  width: 17%;

  @media all and (max-width: 1440px) {
    width: 19%;
  }

  @media all and (max-width: 1090px) {
    width: 12%;
  }

  @media all and (max-width: 990px) {
    width: 110px;
    margin-right: 20px;
  }

  @media all and (max-width: 725px) {
    width: auto;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-right: 0;
  }

  @media all and (max-width: 580px) {
    align-items: flex-start;
  }
`;

export const Copygory = styled.p`
  margin: 0;
  font-family: "Montserrat";
  font-weight: 400;
  font-size: 18px;
  color: #b7bfd1;
`;

export const Right = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 40px;

  @media all and (max-width: 1440px) {
    margin-bottom: 53px;
  }

  @media all and (max-width: 1090px) {
    justify-content: center;
  }

  @media all and (max-width: 990px) {
    justify-content: start;
  }
`;

export const Text = styled.p`
  margin: 0;
  margin-right: 50px;
  font-family: "Montserrat";
  font-weight: 400;
  font-size: 18px;
  color: #f2f2f2;

  @media all and (max-width: 1090px) {
    display: none;
  }
`;


export const FooterBottom = styled.div`
  // стили для нижней части футера
`;

export const FooterList = styled.ul`
  padding: 0;
  margin: 0;
  list-style-type: none;
  column-count: 2;

  @media all and (max-width: 990px) {
    column-count: auto;
  }

  @media all and (max-width: 725px) {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
`;

export const FooterItem = styled.li`
  &:not(:last-child) {
    @media all and (max-width: 990px) {
      margin-bottom: 16px;
    }
  }

  &:first-child {
    margin-bottom: 16px;

    @media all and (max-width: 1440px) {
      margin-left: 93px;
      margin-bottom: 20px;
    }

    @media all and (max-width: 990px) {
      margin-left: 0;
    }
  }

  &:nth-child(2) {
    margin-left: 7px;

    @media all and (max-width: 990px) {
      margin-left: 0;
    }
  }
`;

export const FooterLink = styled.a`
  font-family: 'Montserrat';
  font-weight: 400;
  font-size: 14px;
  color: #06CAF9;
  display: block;
  cursor:pointer;

  @media all and (max-width: 725px) {
    text-overflow: ellipsis;
    white-space: nowrap;
    overflow: hidden;
    width: auto;
  }

  @media all and (max-width: 580px) {
    text-align: center;
    width: 290px;
  }
`;
