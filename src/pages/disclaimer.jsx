import SEO from "@components/seo";
import Wrapper from "@layout/wrapper";
import Header from "@layout/header";
import Footer from "@layout/footer";
import Breadcrumb from "@components/breadcrumb";
import DisclaimerArea from "@containers/disclaimer";

export async function getStaticProps() {
    return { props: { className: "template-color-1" } };
}

const Disclaimer = () => (
    <Wrapper>
        <SEO pageTitle="Disclaimer" />
        <Header />
        <main id="main-content">
            <Breadcrumb
                pageTitle="DeFi Skeptic Disclaimer"
                currentPage="Disclaimer"
            />
            <DisclaimerArea />
        </main>
        <Footer />
    </Wrapper>
);

export default Disclaimer;
