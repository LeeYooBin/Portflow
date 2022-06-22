import styled from 'styled-components';

export const Header = styled.nav`
    width: 100%;
    height: 6vh;
    padding: 0;
    display: flex;
    justify-content: left;
    align-items: center;
    background: #fff;

    @media (min-width: 700px){
        height: 12vh;
        text-align: center;
        flex-direction: row-reverse;
        justify-content: space-between;
        padding-left: 7.5vw;
        padding-right: 4vw;
    }
`;

export const Logo = styled.img`
    width: 35vw;
    margin-left: 9vw;

    @media (min-width: 700px){
        position: fixed;
        left: 7.5vw;
        width: 9.7vw;
        margin: 0;
    }
`;