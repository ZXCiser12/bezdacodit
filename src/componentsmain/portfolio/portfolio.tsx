import styled from "styled-components";
import MainTitle from "../skills/MainTtile";

import { BlogCard, CardInfo, ExternalLinks, GridContainer, HeaderThree, Hr, Img, Tag, TagList, TitleContent, UtilityList } from "./portfolioStyles";
import { projects } from './constants';
import { Container } from "../skills/skills";
const Porfolio = () => {
  


const Section = styled.section`
  margin: 0 auto;
  max-width: 1340px;
  box-sizing: content-box;
  position: relative;
  overflow: hidden;
  grid-template-columns: 1fr 1fr;
  padding-top:70px;

`


    return (
      <Container>
      <MainTitle text=" Portfolio" />
      <Section>
          <GridContainer>
      {projects.map((p, i) => {
        return (
          <BlogCard key={i}>
          <Img src={p.image} />
            <TitleContent>
              <HeaderThree title="">{p.title}</HeaderThree>
              <Hr />
            </TitleContent>
            <CardInfo className="card-info">{p.description}</CardInfo>
            <div>
              <TitleContent>Stack</TitleContent>
              <TagList>
                {p.tags.map((t, i) => {
                  return <Tag key={i}>{t}</Tag>;
                })}
              </TagList>
            </div>
            <UtilityList>
              <ExternalLinks href={p.visit}>Code</ExternalLinks>
              <ExternalLinks href={p.source}>Source</ExternalLinks>
            </UtilityList>
          </BlogCard>
        );
      })}
    </GridContainer>
        </Section>
        </Container>
    );
  };
  export default Porfolio;
  