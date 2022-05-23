import SEO from "@components/seo";
import Wrapper from "@layout/wrapper";
import Header from "@layout/header";
import Footer from "@layout/footer";
import Breadcrumb from "@components/breadcrumb";
import CookiePolicyArea from "@containers/cookie-policy";

export async function getStaticProps() {
    return { props: { className: "template-color-1" } };
}

const CookiePolicy = () => (
    <Wrapper>
        <SEO pageTitle="Cookie Policy" />
        <Header />
        <main id="main-content">
            <Breadcrumb
                pageTitle="DeFi Skeptic Cookie Policy"
                currentPage="Cookie Policy"
            />
            <CookiePolicyArea />
        </main>
        <Footer />
    </Wrapper>
);

export default CookiePolicy;
