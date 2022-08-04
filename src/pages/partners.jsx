import PropTypes from "prop-types";
import SEO from "@components/seo";
import Wrapper from "@layout/wrapper";
import Header from "@layout/header";
import Footer from "@layout/footer";
import PartnersArea from "@containers/partners";
import { normalizedData } from "@utils/methods";

// Demo data
import partnersData from "../data/innerpages/partners.json";

export async function getStaticProps() {
    return { props: { className: "template-color-1" } };
}
const Partners = () => {
    const content = normalizedData(partnersData?.content || []);
    return (
        <Wrapper>
            <SEO pageTitle="Partners & Affiliates" />
            <Header />
            <main id="main-content">
                <PartnersArea data={content["partner-section"]} />
            </main>
            <Footer />
        </Wrapper>
    );
};

Partners.propTypes = {
    posts: PropTypes.arrayOf(PropTypes.shape({})),
};

export default Partners;
