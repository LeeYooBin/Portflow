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
                <a href="#" target="_blank" rel="noopener noreferrer"><S.Image src='https://raw.githubusercontent.com/LeeYooBin/Portflow/0522cb9b5d26b03f04f554d37c917cc257cfccb5/src/imgs/YOUTUBE_icon-icons.com_65487.svg' alt="youtube"/></a>
                <a href="#" target="_blank" rel="noopener noreferrer"><S.Image src='https://raw.githubusercontent.com/LeeYooBin/Portflow/0522cb9b5d26b03f04f554d37c917cc257cfccb5/src/imgs/icon%20telegram.svg' alt="telegram"/></a>
                <a href="#" target="_blank" rel="noopener noreferrer"><S.Image src='https://raw.githubusercontent.com/LeeYooBin/Portflow/0522cb9b5d26b03f04f554d37c917cc257cfccb5/src/imgs/icon%20insta.svg' alt="instagram"/></a>
                <a href="#" target="_blank" rel="noopener noreferrer"><S.Image src='https://raw.githubusercontent.com/LeeYooBin/Portflow/0522cb9b5d26b03f04f554d37c917cc257cfccb5/src/imgs/icon%20zap.svg' alt="whatsapp"/></a>
                <a href="#" target="_blank" rel="noopener noreferrer"><S.Image src='https://raw.githubusercontent.com/LeeYooBin/Portflow/0522cb9b5d26b03f04f554d37c917cc257cfccb5/src/imgs/TWITTER_icon-icons.com_65486.svg' alt="twitter"/></a>
                <a href="#" target="_blank" rel="noopener noreferrer"><S.Image src='https://raw.githubusercontent.com/LeeYooBin/Portflow/0522cb9b5d26b03f04f554d37c917cc257cfccb5/src/imgs/facebook%20icons.com_65484.svg' alt="facebook"/></a>
            </S.SocialMedias>

            <S.Copyright class="copyright">
                <S.Copy><strong>Copyright</strong></S.Copy>
                <S.Text className='p'>Layout Produzido por Vai Na Web Para Fins Exclusivamente Educacionais.</S.Text>
            </S.Copyright>
            <S.A href="#top"><S.Button class="button">Topo</S.Button></S.A>
        </S.Footer>
    );
}