import Link from 'next/link';
import { Border, Copygory, Footer1, FooterBottom, FooterItem, FooterLink, FooterList, Inner, Left, Right, Text } from './styles';
import { Container } from '@/componentsmain/skills/skills';
import SocialList from './sociallist';
import { useMediaQuery } from '@/componentsmain/hooks';

const Footer = () => {
  const isMobile640 = useMediaQuery(640);
    return (
      <Footer1>
        <Container>
          <Border />
          <Inner>
            <Left>
              <Copygory>© 2023-2024 <br />«Герман»</Copygory>
            </Left>
            <div>
              <Right>
                <p>Поделитесь сайтом с друзьями и раскажите обо мне): </p>
                {!isMobile640 && <SocialList marginBottom={25} />}
              </Right>
              <FooterBottom>
                <FooterList>
                  <FooterItem>
                    <Link href="/dashboard" legacyBehavior>
                      <FooterLink>Политика использования файлов cookie</FooterLink>
                    </Link>
                    <Link href="/page2" legacyBehavior>
                      <FooterLink>Политика конфиденциальности</FooterLink>
                    </Link>
                    <Link href="/page3" legacyBehavior>
                      <FooterLink>Политика обработки персональных данных</FooterLink>
                    </Link>
                    <Link href="/page4" legacyBehavior>
                      <FooterLink> Согласие на обработку персональных данных клиентов - физических лиц</FooterLink>
                    </Link>
                  </FooterItem>
                </FooterList>
              </FooterBottom>
            </div>
          </Inner>
        </Container>
        </Footer1>
      );
    };


export default Footer;