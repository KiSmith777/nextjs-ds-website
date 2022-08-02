import SEO from "@components/seo";
import Wrapper from "@layout/wrapper";
import Header from "@layout/header";
import Footer from "@layout/footer";
import { normalizedData } from "@utils/methods";
import homepageData from "../data/homepages/home.json";
import WebDevelopmentArea from "../containers/web-development";

export async function getStaticProps() {
    return { props: { className: "template-color-1" } };
}

const WebDevelopment = () => {
    const content = normalizedData(homepageData?.content || []);
  
    return (
        <Wrapper>
            <SEO pageTitle="Web Development" />
            <Header />
            <main id="main-content">
                <WebDevelopmentArea/>
               
            </main>
            <Footer />
        </Wrapper>
    );
};

export default WebDevelopment;
