import styled from "styled-components";
import { TitleBorder } from "./styles";

const StyledMainTitle = styled.h2``;


const MainTitle = ({ text }: { text: string }) => (
    <>
        <StyledMainTitle>
            {text.toUpperCase()}
        </StyledMainTitle>
        <TitleBorder />
    </>
);

export default MainTitle;