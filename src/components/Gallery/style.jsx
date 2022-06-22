import styled from 'styled-components';

export const Wrapper = styled.section`
    padding: 5%;
    width: 100%;
    height: auto;

    @media (min-width: 700px){
        padding: 10vh 7.5vw 10vh 7.5vw;
    }
`;

export const Gallery = styled.div`
    display: grid;
    grid-template-columns: repeat(1, 1fr);
    grid-gap: 20px;
    margin-top: 1vh;

    @media (min-width: 700px){
        grid-template-columns: repeat(4, 1fr);
        grid-template-rows: repeat(3, auto);
    }
`;

export const IMG = styled.img`
    width: 100%;
    height: 100%;
    object-fit: cover;
`;

export const A = styled.a`
    :hover{
        transform: scale(1.10);
    }
`;