import styled from 'styled-components';

export const Banner = styled.div`
    width: 100%;
    height: 95vh;
    background-image: url(https://github.com/LeeYooBin/Portflow/blob/main/src/imgs/main.png?raw=true);
    background-size: cover;
    background-position: 85%;
    color: #FFF;
    padding-left: 7.5vw;

    @media screen and (min-width: 700px){
        height: 75vh;
    }
`;

export const Text =  styled.div`
    position: absolute;
    top: 60%;
    left: 15vw;
    color: #FFF;

    @media screen and (min-width: 700px){
        left: 7.5vw;
    }

    @media screen and (min-width: 920px){
        top: 40%;
    }
`;

export const Slogan = styled.h2`
    font-size: 2.8em;
`;

export const P = styled.div`
    font-size: 1.7em;
    font-weight: 100;
    margin-top: 2vh;
`;