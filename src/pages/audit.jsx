import SEO from "@components/seo";
import Wrapper from "@layout/wrapper";
import Header from "@layout/header";
import Footer from "@layout/footer";
import HeroArea from "@containers/hero";
import ServiceArea from "@containers/services";
import MyApp from "@components/pdf-viewer";





// Demo Data
import homepageData from "../data/homepages/home.json";
import PDF from "@components/pdf-viewer";


export async function getStaticProps() {
    return { props: { className: "template-color-1" } };
}


const Audit = () => {
    
  
    return (
        <Wrapper>
            <SEO pageTitle="Audit" />
            <Header />
            <main id="main-content">
                <MyApp />
               
            </main>
            <Footer />
        </Wrapper>
    );
};

export default Audit;