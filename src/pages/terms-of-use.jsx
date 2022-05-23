import SEO from "@components/seo";
import Wrapper from "@layout/wrapper";
import Header from "@layout/header";
import Footer from "@layout/footer";
import Breadcrumb from "@components/breadcrumb";
import TermsAndConditionsArea from "@containers/terms-of-use";

export async function getStaticProps() {
    return { props: { className: "template-color-1" } };
}

const TermsAndConditions = () => (
    <Wrapper>
        <SEO pageTitle="Terms Of Use" />
        <Header />
        <main id="main-content">
            <Breadcrumb
                pageTitle="Terms Of Use"
                currentPage="Terms Of Use"
            />
            <TermsAndConditionsArea />
        </main>
        <Footer />
    </Wrapper>
);

export default TermsAndConditions;
