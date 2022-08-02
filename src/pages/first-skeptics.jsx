import SEO from "@components/seo";
import Wrapper from "@layout/wrapper";
import Header from "@layout/header";
import Footer from "@layout/footer";
import HeroArea from "@containers/hero";
import ServiceArea from "@containers/services";
import NFTArea from "@containers/nft"
import Breadcrumb from "@components/breadcrumb";


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

const NFT = () => {
    const content = normalizedData(homepageData?.content || []);
  
    return (
        <Wrapper>
            <SEO pageTitle="First Skeptics NFT" />
            <Header />
            <main id="main-content">
           
                <NFTArea/>
               
            </main>
            <Footer />
        </Wrapper>
    );
};

export default NFT;
