import * as S from './style';
import Navbar from '../Navbar';
import logo from '../../imgs/portflow.png';

export default function Header(){
    return(
        <>
            <S.Header id='top'>
                <Navbar />
                <S.Logo src={logo} alt="Portflow" />
            </S.Header>
        </>
    );
}