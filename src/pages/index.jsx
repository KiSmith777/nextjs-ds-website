import SEO from "@components/seo";
import Wrapper from "@layout/wrapper";
import Header from "@layout/header";
import Footer from "@layout/footer";
import HeroArea from "@containers/hero";
import ServiceArea from "@containers/services";
import FunfactArea from "@containers/funfact";
import AboutArea from "@containers/about";
import QuoteArea from "@containers/quote-area";
import FeaturedOnArea from "../containers/featured-on";
import StrategyArea from "../containers/strategic-partnerships";
/* import NewestItmesArea from "@containers/product/layout-04";
import TopSellerArea from "@containers/top-seller/layout-01";
import ExploreProductArea from "@containers/explore-product/layout-01";
import CollectionArea from "@containers/collection/layout-01"; */
import { normalizedData } from "@utils/methods";

// Demo Data
import homepageData from "../data/homepages/home.json";
import aboutData from "../data/innerpages/about.json";
import featureData from "../data/innerpages/featured.json";

export async function getStaticProps() {
    return { props: { className: "template-color-1" } };
}

const Home = () => {
    const content = normalizedData(homepageData?.content || []);
    const aboutContent = normalizedData(aboutData?.content || []);
    const featureContent = normalizedData(featureData?.content || []);

    return (
        <Wrapper>
            <SEO pageTitle="Home" />
            <Header />
            <main id="main-content">
                <HeroArea data={content["hero-section"]} />
                <FeaturedOnArea
                    space={1}
                    data={featureContent["featured-on-section"]}
                />
                <ServiceArea data={content["service-section"]} />
                <StrategyArea data={aboutContent["strategy-section"]} />
                <StrategyArea data={aboutContent["token-nft-pair-section"]} />
                <AboutArea data={aboutContent["about-section"]} />
                <QuoteArea data={aboutContent["for-developers-section"]} />
                <QuoteArea
                    reverse="true"
                    data={aboutContent["for-users-section"]}
                />
                <FunfactArea data={aboutContent["funfact-section"]} />
            </main>
            <Footer />
        </Wrapper>
    );
};

export default Home;

