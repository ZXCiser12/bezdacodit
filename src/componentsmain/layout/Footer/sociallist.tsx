import styled from "styled-components";

const SocialListContainer = styled.ul`
  list-style-type: none;
  padding: 0;
  margin: 0;
  display: flex;
  align-items: center;

  @media all and (max-width: 630px) {
    display: block;
  }
`;

const SocialListItem = styled.li`
  position: relative;
  cursor: pointer;
  display: flex;
  align-items: center;
  margin-bottom: 25px;

  &:not(:last-child) {
    margin-right: 28px;
  }

  @media all and (max-width: 1080px) {
    margin-bottom: 0;
    margin-right: 0;

    &:not(:last-child) {
      margin-bottom: 16px;
    }
  }
`;

const SocialLink = styled.a`
  padding-left: 40px;
  text-decoration: none;
  display: flex;
  align-items: center;
  font-family: "Lato";
  font-weight: 600;
  font-size: 20px;
  text-decoration-line: underline;
    color: #00add8;

    &:hover {
        background: radial-gradient(142.65% 2282.99% at 100% -31.65%, #08A6CE 0%, #6352B1 43.75%, #8B0EB7 68.75%);
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
        background-clip: text;
    transform: scale(1.3);
        transition: 1s;
    }
  @media all and (max-width: 800px) {
    font-size: 18px;
  }
`;

const SocialListIcon = styled.span`
  position: relative;
  display: inline-block;
  border: 2px solid rgba(255, 255, 255, 0.5);
  border-radius: 50%;
  height: 40px;
  width: 40px;
  transition: background-color 0.3s ease-in-out;

  & img {
    position: absolute;
    top: 0;
    left: 0;
    z-index: 1;
  }
`;

export const IconFb = styled(SocialListIcon)`
  & img {
    top: 7px;
    left: 3px;
  }
`;

export const IconVk = styled(SocialListIcon)`
  & img {
    top: 14px;
    left: 8px;
  }
`;

export const IconYt = styled(SocialListIcon)`
  & img {
    top: 10px;
    left: 9px;
  }
`;

const Text = styled.div`
margin-right: 25px;
`;

export default function SocialList({
  marginBottom,
}: {
  marginBottom?: number;
}) {
  return (
    <SocialListContainer style={{ marginBottom }}>
      <SocialListItem>
        <SocialLink href="https://github.com/">
          <Text>Git Hub</Text>
          <IconFb>
            <img src="/image/github-142-svgrepo-com.svg" alt="Git Hub" />
          </IconFb>
        </SocialLink>
      </SocialListItem>
      <SocialListItem>
        <SocialLink href="https://vk.com/feed">
          <Text>ВКонтакте</Text>
          <IconVk>
            <img src="/image/vk.svg" alt="ВКонтакте" />
          </IconVk>
        </SocialLink>
      </SocialListItem>
      <SocialListItem>
        <SocialLink href="https://www.youtube.com/">
          <Text>YouTube</Text>
          <IconYt>
            <img src="/image/youtube.svg" alt="YouTube" />
          </IconYt>
        </SocialLink>
      </SocialListItem>
    </SocialListContainer>
  );
}
