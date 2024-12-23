import SEO from "@components/seo";
import Wrapper from "@layout/wrapper";
import Header from "@layout/header";
import Footer from "@layout/footer";
import { normalizedData } from "@utils/methods";
import homepageData from "../data/homepages/home.json";
import FIATArea from "../containers/fiat-onboarding";


export async function getStaticProps() {
    return { props: { className: "template-color-1" } };
}

const Fiat = () => {
    const content = normalizedData(homepageData?.content || []);
  
    return (
        <Wrapper>
            <SEO pageTitle="FIAT Onboarding" />
            <Header />
            <main id="main-content">
                <FIATArea/>
               
            </main>
            <Footer />
        </Wrapper>
    );
};

export default Fiat;
