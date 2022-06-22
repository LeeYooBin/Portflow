import './style.css';
import Header from "../../components/Header";
import Banner from '../../components/Banner';
import Gallery from '../../components/Gallery';
import Footer from '../../components/Footer';

export default function Main(){
    return(
        <>
            <Header />
            <Banner />
            <Gallery />
            <Footer />
        </>
    );
}