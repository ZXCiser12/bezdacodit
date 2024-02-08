import styled from 'styled-components';



export const SocialListItem = styled.li`
    position: relative;
    cursor: pointer;
    display: flex;
    align-items: center;

    &:not(:last-child) {
        margin-bottom: 25px;
    }
`;

export const SocialLink = styled.a`
    display: flex;
    align-items: center;
    font-family: 'Lato';
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
`;

export const SocialIcon = styled.div`
    position: relative;
    display: inline-block;
    border: 2px solid rgba(255, 255, 255, 0.5);
    border-radius: 50%;
    height: 40px;
    width: 40px;
    transition: background-color .3s ease-in-out;

    & img {
        position: absolute;
        top: 0;
        left: 0;
        z-index: 1;
    }
    
    &.iconfb img {
        top: 10px;
        left: 9px;
    }

    &.iconvk img {
        top: 12px;
        left: 6px;
    }

    &.iconyt img {
        top: 10px;
        left: 7px;
    }
`;

export const SocialText = styled.span`
    margin-right: 25px;
`;

