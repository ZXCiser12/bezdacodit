import styled from "styled-components"



export const Boxes = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 24px;
  margin: 24px 0 40px;

  @media ${768}{
    gap: 16px;
    margin: 20px 0 32px;
    grid-template-columns: repeat(auto-fit, minmax(140px, 1fr));
  }

  @media ${640}{
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 10px;
    max-width: 500px;
    margin: 24px auto;
  }

`

export const Box = styled.div`
  background: #212D45;
  border-radius: 12px;
  height: 144px;
  padding: 15px;
  @media ${1024} {
    height: 210px;

  }

  @media ${768} {
    height: 135px;
    padding: 16px;
  }

  @media ${640} {
    height: 110px;
    padding: 12px;
    
    &:nth-child(2n){
      grid-row:2;
    }
  }
  &:hover {
    transform: scale(1.1);
        transition: 1s;
    }
`
export const BoxNum = styled.h5`
  font-style: normal;
  font-weight: 600;
  font-size: 36px;
  line-height: 40px;
  letter-spacing: 0.01em;
  color: #FFFFFF;
  margin-bottom: 8px;
  text-align: center;
  &:hover {
    color: #6352B1;


  }

  @media ${768} {
    font-size: 28px;
    line-height: 32px;
  }
  @media ${640} {
    font-size: 24px;
    line-height: 26px;
    
    
}
`

export const BoxText = styled.p`
  font-style: normal;
  font-weight: normal;
  font-size: 18px;
  line-height: 24px;
  letter-spacing: 0.02em;
  text-align: center;
  color: rgba(255, 255, 255, 0.75);

  @media ${768}{
    font-size: 16px;
    line-height: 20px;
  };

  @media ${640} {
    font-size: 10px;
    line-height: 14px;
  }
  &:hover {
    color: #6352B1;
  }
`

export const Join = styled.div`
  display: flex;
  max-width: 1040px;
  justify-content: center;
  align-items: center;
  padding-bottom: 80px;

  @media ${768}{
    display: flex;
    justify-content: center;
    padding-bottom: 64px;
  }

  @media ${640}{
    display: flex;
    flex-direction: column;
    align-items: center;
    padding-bottom: 32px;
    
  }
`

export const JoinText = styled.h5`
  display: flex;
  font-size: 24px;
  line-height: 40px;
  letter-spacing: 0.02em;
  color: rgba(255, 255, 255, 0.5);

@media ${768}{
  line-height: 32px;
  font-size: 20px;
};

@media ${640}{
  font-size: 16px;
  line-height: 24px;
  margin: 0 0 16px;
}
`

export const IconContainer = styled.div`
  display: flex;

  @media ${640}{
    width: 160px;
    justify-content: space-between;
  }
`