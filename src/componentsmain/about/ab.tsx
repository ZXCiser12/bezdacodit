
import { Icon, Link, List, ListItem, Textt } from './stylesabout';



const SocialList = () => {
  return (
    <List>
      <ListItem>
        <Link href="https://github.com/">
          <Textt>GitHub</Textt>
          <Icon>
            <img src="/image/github-142-svgrepo-com.svg" />
          </Icon>
        </Link>
      </ListItem>
      <ListItem>
        <Link href="https://vk.com/feed">
          <Textt>ВКонтакте&nbsp;&nbsp;</Textt>
          <Icon>
            <img src="/image/vk.svg" />
          </Icon>
        </Link>
      </ListItem>
      <ListItem>
        <Link href="https://www.youtube.com/">
          <Textt>YouTube &nbsp;&nbsp;</Textt>
          <Icon>
            <img src="/image/youtube.svg"  />
          </Icon>
        </Link>
      </ListItem>
    </List>
  );
}
export default SocialList;