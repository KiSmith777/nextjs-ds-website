import SEO from "@components/seo";
import Wrapper from "@layout/wrapper";
import Header from "@layout/header";
import Footer from "@layout/footer";
import HeroArea from "@containers/hero";
import ServiceArea from "@containers/services";
import FunfactArea from "@containers/funfact";
import AboutArea from "@containers/about";
import QuoteArea from "@containers/quote-area";

/* import NewestItmesArea from "@containers/product/layout-04";
import TopSellerArea from "@containers/top-seller/layout-01";
import ExploreProductArea from "@containers/explore-product/layout-01";
import CollectionArea from "@containers/collection/layout-01"; */
import { normalizedData } from "@utils/methods";

// Demo Data
import homepageData from "../data/homepages/home.json";
import aboutData from "../data/innerpages/about.json";

export async function getStaticProps() {
    return { props: { className: "template-color-1" } };
}

const Home = () => {
    const content = normalizedData(homepageData?.content || []);
    const aboutContent = normalizedData(aboutData?.content || []);

    return (
        <Wrapper>
            <SEO pageTitle="Home" />
            <Header />
            <main id="main-content">
                <HeroArea data={content["hero-section"]} />
                <ServiceArea data={content["service-section"]} />
                <FunfactArea data={aboutContent["funfact-section"]} />
                <AboutArea data={aboutContent["about-section"]} />
                <QuoteArea
                    reverse="true"
                    data={aboutContent["strategy-section"]}
                />
                <QuoteArea data={aboutContent["for-developers-section"]} />
                <QuoteArea
                    reverse="true"
                    data={aboutContent["for-users-section"]}
                />
            </main>
            <Footer />
        </Wrapper>
    );
};

export default Home;

