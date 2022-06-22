import * as S from './style';
import youtube from '../../imgs/YOUTUBE_icon-icons.com_65487.svg';
import instagram from '../../imgs/icon insta.svg';
import telegram from '../../imgs/icon telegram.svg';
import zap from '../../imgs/icon zap.svg';
import twitter from '../../imgs/TWITTER_icon-icons.com_65486.svg';
import facebook from '../../imgs/facebook icons.com_65484.svg';

export default function Footer(){
    return(
        <S.Footer>
            <S.SocialMedias class="social-medias">
                <a href="#" target="_blank" rel="noopener noreferrer"><S.Image src={youtube} alt="youtube"/></a>
                <a href="#" target="_blank" rel="noopener noreferrer"><S.Image src={telegram} alt="telegram"/></a>
                <a href="#" target="_blank" rel="noopener noreferrer"><S.Image src={instagram} alt="instagram"/></a>
                <a href="#" target="_blank" rel="noopener noreferrer"><S.Image src={zap} alt="whatsapp"/></a>
                <a href="#" target="_blank" rel="noopener noreferrer"><S.Image src={twitter} alt="twitter"/></a>
                <a href="#" target="_blank" rel="noopener noreferrer"><S.Image src={facebook} alt="facebook"/></a>
            </S.SocialMedias>

            <S.Copyright class="copyright">
                <S.Copy><strong>Copyright</strong></S.Copy>
                <S.Text className='p'>Layout Produzido por Vai Na Web Para Fins Exclusivamente Educacionais.</S.Text>
            </S.Copyright>
            <S.A href="#top"><S.Button class="button">Topo</S.Button></S.A>
        </S.Footer>
    );
}