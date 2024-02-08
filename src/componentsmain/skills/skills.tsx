
import { ScrollParallax } from 'react-just-parallax';
import MainTitle from './MainTtile';
import SkillsItem from './skillsitem';
import styled from 'styled-components';

const SkillsSection = styled.section`
    // Ваши стили для секции skills
    padding-top: 67px;
    padding-bottom: 50px;
`;
 export const Container = styled.div`
    max-width: 1408px;
    padding: 0 17px;
    margin: 0 auto;
    color:white;
`;

const SubContainer = styled.div`
    max-width: 1174px;
    padding: 0 17px;
    padding-bottom:190px;
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
  .container, .sub-container {
    padding: 0 25px;
  }
}

@media all and (max-width: 485px) {
  .container, .sub-container {
    padding: 0 16px;
  }
}
`;

const SkillsList = styled.ul`
    // Ваши стили для списка навыков
    list-style-type: none;
    margin: 0;
    padding: 0;
    padding-top: 52px;
    padding-left: 50px;
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

const Skills1 = () => {
    return (
        <ScrollParallax>
        <SkillsSection id="skills">
            <Container>
            <MainTitle text='Skills' />
            </Container>
            <SubContainer>
                <SkillsList>
                    <SkillsItem
                        title='Веб-Разработка'
                        text='Javascript, Coffeescript, JAVA, Python, PHP, Go, Node.js, MongoDB, Redis, PostgreSQL, WebStorm.'
                        iconClass="web"
                    />
                    <SkillsItem
                     title='UI/UX Дизайн'
                     text='Photoshop, Illustrator, Sketch, Axure, XMind, Прототипирование, Wireframing, Исследование Пользователей, Юзабилити-Тестирование'
                     iconClass="ux"
                 />
                 <SkillsItem
                     title='Разработка Frontend'
                     text='HTML, CSS, LESS, SASS, Bootstrap, Wordpress, Drupal, Phonegap / Cordova, Ionic, Foundation, Angular.js.'
                     iconClass="front"
                 />
                 <SkillsItem
                     title='Консалтинг и SEO-Аудит'
                     text='Screaming Frog, Woorank, Raventools, Semrush, Moz, WebCEO, Google Analytics, ChartBeat, CrazyEgg.'
                     iconClass="seo"
                 />
             </SkillsList>
         </SubContainer>
     </SkillsSection>
     </ScrollParallax>
 );
}

export default Skills1;