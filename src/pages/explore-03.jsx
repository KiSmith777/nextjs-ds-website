import SEO from "@components/seo";
import Wrapper from "@layout/wrapper";
import Header from "@layout/header";
import Footer from "@layout/footer";
import Breadcrumb from "@components/breadcrumb";
import ExploreCarouselBothArea from "@containers/explore-product/layout-07";
import { normalizedData } from "@utils/methods";

// Demo data
import partnerData from "../data/innerpages/partners.json";

export async function getStaticProps() {
    return { props: { className: "template-color-1" } };
}

const Home02 = () => {
    
    const content = normalizedData(partnerData?.content || []);
    return (
    <Wrapper>
        <SEO pageTitle="Explore Carousel" />
        <Header />
        <main id="main-content">
            <Breadcrumb
                pageTitle="Explore Carousel"
                currentPage="Explore With Carousel"
            />
            
            

            <ExploreCarouselBothArea
                space={4}
                data={content["partner-section"]}
            />
           
        </main>
        <Footer />
    </Wrapper>
    )
};

export default Home02;
