
import { Item, Text, Title, TitleBorder, TitleText } from './styles';

interface ISkillsItem {
    text: string;
    title: string;
    iconClass: string;
}



const SkillsItem = ({ text, title, iconClass }: ISkillsItem) => {
    return (
        <Item>
            <Title className={iconClass}>
                <TitleText>{title}</TitleText>
                <TitleBorder />
            </Title>
            <Text>{text}</Text>
            {/* Здесь можно использовать Image для ваших изображений */}
        </Item>
    );
}

export default SkillsItem;