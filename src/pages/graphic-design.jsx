
import SEO from "@components/seo";
import Wrapper from "@layout/wrapper";
import Header from "@layout/header";
import Footer from "@layout/footer";
import { normalizedData } from "@utils/methods";
import homepageData from "../data/homepages/home.json";
import GraphicDesignArea from "../containers/graphic-design";

export async function getStaticProps() {
    return { props: { className: "template-color-1" } };
}

const GraphicDesign = () => {
    const content = normalizedData(homepageData?.content || []);
  
    return (
        <Wrapper>
            <SEO pageTitle="Graphic Design" />
            <Header />
            <main id="main-content">
                <GraphicDesignArea/>
               
            </main>
            <Footer />
        </Wrapper>
    );
};

export default GraphicDesign;
