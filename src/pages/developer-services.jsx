import SEO from "@components/seo";
import Wrapper from "@layout/wrapper";
import Header from "@layout/header";
import Footer from "@layout/footer";
import HeroArea from "@containers/hero";
import ServiceArea from "@containers/services-page";

/* import NewestItmesArea from "@containers/product/layout-04";
import TopSellerArea from "@containers/top-seller/layout-01";
import ExploreProductArea from "@containers/explore-product/layout-01";
import CollectionArea from "@containers/collection/layout-01"; */
import { normalizedData } from "@utils/methods";

// Demo Data
import serviceData from "../data/innerpages/services.json";


export async function getStaticProps() {
    return { props: { className: "template-color-1" } };
}

const Services = () => {
    const content = normalizedData(serviceData?.content || []);
  
    return (
        <Wrapper>
            <SEO pageTitle="Developer Services" />
            <Header />
            <main id="main-content">
                <ServiceArea data={content["developer-services-section"]} />
               
            </main>
            <Footer />
        </Wrapper>
    );
};

export default Services;
