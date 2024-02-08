import styled from 'styled-components';

export const Img = styled.img`
  width:100%;
  height:100%;
  object-fit: cover;
  overflow: hidden;
  z-index:0;
`

export const GridContainer = styled.div`
display: grid;
grid-template-columns: repeat(auto-fill, minmax(400px, 1fr));
padding: 1rem;
place-items: center;
column-gap: 2rem;
row-gap: 3rem;


`
export const BlogCard = styled.div`
  border-radius: 10px;
  box-shadow: 5px 10px 30px rgba(255, 0, 191, 0.5);
  text-align: center;
  //width: 400px;
 
`;
export const TitleContent = styled.div`
  text-align: center;
  z-index: 20;
  width: 100%;

`;


export const HeaderThree = styled.h3`
  font-weight: 500;
  letter-spacing: 2px;
  color: #ff9c1c;
  padding: .5rem 0;
 
`;

export const Hr = styled.hr`
  width: 50px;
  height: 3px;
  margin: 20px auto;
  border: 0;
  background: #1ad113;
`;




export const CardInfo = styled.p`
  width: 80%;
  padding: 0 40px;
  color: #f0f0f0;
  font-style: 2rem;
  line-height: 24px;
  //text-align: justify;

`;


export const UtilityList = styled.ul`
  list-style-type: none;
  padding: 0;
  display: flex;
  justify-content: space-around;
  margin: 2.5rem 0;
`;

export const ExternalLinks = styled.a`
color:#d4c0c0;
font-size: 1.6rem;
padding:1rem 1rem;
background: #6b3068;
border-radius: 25px;
transition: 0.5s;
color:#08A6CE;
  &:hover {
        background: radial-gradient(142.65% 2282.99% at 100% -31.65%, #08A6CE 0%, #6352B1 43.75%, #8B0EB7 68.75%);
        transform: scale(1.5);
        transition: 2s;
        border-radius: 200px;
        
    }

`;

export const TagList = styled.ul`
display: flex;
justify-content: space-around;
padding: 2rem;
`
export const Tag = styled.li`
color: #d8bfbf;
font-size: 1rem;
`