import SEO from "@components/seo";
import Wrapper from "@layout/wrapper";
import Header from "@layout/header";
import Footer from "@layout/footer";
import TokenNFTArea from "@containers/token-nft"

/* import NewestItmesArea from "@containers/product/layout-04";
import TopSellerArea from "@containers/top-seller/layout-01";
import ExploreProductArea from "@containers/explore-product/layout-01";
import CollectionArea from "@containers/collection/layout-01"; */
import { normalizedData } from "@utils/methods";

// Demo Data
import homepageData from "../data/homepages/home.json";


export async function getStaticProps() {
    return { props: { className: "template-color-1" } };
}

const Token = () => {
    const content = normalizedData(homepageData?.content || []);
  
    return (
        <Wrapper>
            <SEO pageTitle="Skeptic Token (SKP)" />
            <Header />
            <main id="main-content">
                <TokenNFTArea/>
               
            </main>
            <Footer />
        </Wrapper>
    );
};

export default Token;
