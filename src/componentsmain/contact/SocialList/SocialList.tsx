import { IconFb, IconVk, IconYt } from "../../layout/Footer/sociallist";
import { SocialListItem,SocialLink, SocialText} from "./SocialListContactStyle";
import styled from "styled-components";

const SocialList1 = styled.ul`
  list-style-type: none;
  padding: 0;
  margin: 0;
`;

const SocialList = () => (
  <SocialList1>
    <SocialListItem>
      <SocialLink href="https://github.com/">
        <SocialText>Git Hub</SocialText>
        <IconFb>
          <img src="/image/github-142-svgrepo-com.svg" alt="facebook" />
        </IconFb>
      </SocialLink>
    </SocialListItem>
    <SocialListItem>
      <SocialLink href="https://vk.com/feed">
        <SocialText>ВКонтакте</SocialText>
        <IconVk>
          <img src="/image/vk.svg" alt="ВКонтакте" />
        </IconVk>
      </SocialLink>
    </SocialListItem>
    <SocialListItem>
      <SocialLink href="https://www.youtube.com/">
        <SocialText>YouTube</SocialText>
        <IconYt>
          <img src="/image/youtube.svg" alt="YouTube" />
        </IconYt>
      </SocialLink>
    </SocialListItem>
  </SocialList1>
);

export default SocialList;
