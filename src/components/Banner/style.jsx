import styled from 'styled-components';

export const Banner = styled.div`
    width: 100%;
    height: 95vh;
    background-image: url(https://cdn-sharing.adobecc.com/content/storage/id/urn:aaid:sc:US:13ead2e1-3ac9-44a1-b4cb-14736da07bb0;revision=0?component_id=90838487-a7fa-4a2c-8cf4-a4748238ac5c&api_key=CometServer1&access_token=1655944010_urn%3Aaaid%3Asc%3AUS%3A13ead2e1-3ac9-44a1-b4cb-14736da07bb0%3Bpublic_c5b357e1882d88eaa6b40257c186b4f3d2c36303);
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