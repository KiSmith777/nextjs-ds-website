import SEO from "@components/seo";
import Wrapper from "@layout/wrapper";
import Header from "@layout/header";
import Footer from "@layout/footer";
import { normalizedData } from "@utils/methods";
import homepageData from "../data/homepages/home.json";


export async function getStaticProps() {
    return { props: { className: "template-color-1" } };
}

const ArbitrageService = () => {
    const content = normalizedData(homepageData?.content || []);
  
    return (
        <Wrapper>
            <SEO pageTitle="Arbitrage as a Service (AaaS)" />
            <Header />
            <main id="main-content">
                
               
            </main>
            <Footer />
        </Wrapper>
    );
};

export default ArbitrageService;
