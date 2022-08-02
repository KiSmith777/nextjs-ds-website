import SEO from "@components/seo";
import Wrapper from "@layout/wrapper";
import Header from "@layout/header";
import Footer from "@layout/footer";
import HeroArea from "@containers/hero";
import ServiceArea from "@containers/services";

/* import NewestItmesArea from "@containers/product/layout-04";
import TopSellerArea from "@containers/top-seller/layout-01";
import ExploreProductArea from "@containers/explore-product/layout-01";
import CollectionArea from "@containers/collection/layout-01"; */
import { normalizedData } from "@utils/methods";
import GetVettedArea from "../containers/get-vetted";

// Demo Data



export async function getStaticProps() {
    return { props: { className: "template-color-1" } };
}

const GetVetted = () => {
  
  
    return (
        <Wrapper>
            <SEO pageTitle="Get Vetted" />
            <Header />
            <main id="main-content">
                <GetVettedArea />
            </main>
            <Footer />
        </Wrapper>
    );
};

export default GetVetted;
