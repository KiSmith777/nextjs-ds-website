import SEO from "@components/seo";
import Wrapper from "@layout/wrapper";
import Header from "@layout/header";
import Footer from "@layout/footer";
import { normalizedData } from "@utils/methods";
import homepageData from "../data/homepages/home.json";
import UXUIDesignArea from "../containers/ux-ui-design";

export async function getStaticProps() {
    return { props: { className: "template-color-1" } };
}

const UXUIDesign = () => {
    const content = normalizedData(homepageData?.content || []);
  
    return (
        <Wrapper>
            <SEO pageTitle="UX & UI Design" />
            <Header />
            <main id="main-content">
                <UXUIDesignArea/>
               
            </main>
            <Footer />
        </Wrapper>
    );
};

export default UXUIDesign;
