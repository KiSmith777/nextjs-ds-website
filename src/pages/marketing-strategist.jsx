import SEO from "@components/seo";
import Wrapper from "@layout/wrapper";
import Header from "@layout/header";
import Footer from "@layout/footer";
import MarketingStrategistArea from "../containers/marketing-strategist";

export async function getStaticProps() {
    return { props: { className: "template-color-1" } };
}

const MarketingStrategist = () => {
    return (
        <Wrapper>
            <SEO pageTitle="Marketing Strategist" />
            <Header />
            <main id="main-content">
                <MarketingStrategistArea/>
               
            </main>
            <Footer />
        </Wrapper>
    );
};

export default MarketingStrategist;
