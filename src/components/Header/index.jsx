import * as S from './style';
import Navbar from '../Navbar';

export default function Header(){
    return(
        <>
            <S.Header id='top'>
                <Navbar />
                <S.Logo src="https://cdn-sharing.adobecc.com/content/storage/id/urn:aaid:sc:US:13ead2e1-3ac9-44a1-b4cb-14736da07bb0;revision=0?component_id=5f3f6cef-8002-4f2f-a5ea-6d6c41e4f4f9&api_key=CometServer1&access_token=1655944010_urn%3Aaaid%3Asc%3AUS%3A13ead2e1-3ac9-44a1-b4cb-14736da07bb0%3Bpublic_c5b357e1882d88eaa6b40257c186b4f3d2c36303" alt="Portflow" />
            </S.Header>
        </>
    );
}