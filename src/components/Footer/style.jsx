import styled from 'styled-components';

export const Footer = styled.footer`
    padding: 5%;
    display: flex;
    flex-direction: column;

    @media (min-width: 920px){
        background: rgb(240, 239, 239);
        width: 100%;
        height: 12vh;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
    }
`;

export const SocialMedias = styled.div`
    background-color: aquamarine;
    padding: 3%;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-evenly;

    @media (min-width: 920px){
        background-color: transparent;
        width: 30%;
    }
`;

export const A = styled.a`
    margin-top: 2vh;
    align-self: center;
`;

export const Image = styled.img`
    height: 4vh;
    width: auto;    
`;

export const Copyright = styled.div`
    margin-top: 2vh;
`;

export const Text = styled.p`
    font-size: 1em;
    text-align: justify;
    width: 90%;
`;

export const Copy = styled.h1`
    font-size: 2.5vh;
    margin-bottom: 0.5vh;
`;

export const Button = styled.button`
    width: 15vw;
    padding: 3%;
    cursor: pointer;
    border: none;
    background-color: rgb(115, 121, 121);

    @media (min-width: 920px){
        width: 5vw;
    }
`;