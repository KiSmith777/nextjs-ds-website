import PropTypes from "prop-types";
import SEO from "@components/seo";
import Wrapper from "@layout/wrapper";
import Header from "@layout/header";
import Footer from "@layout/footer";
import PartnersArea from "@containers/partners";
import Breadcrumb from "@components/breadcrumb";
import QuoteArea from "@containers/quote-area";
import FunfactArea from "@containers/funfact";
import CTAArea from "@containers/cta";
import BlogArea from "@containers/blog";
import { normalizedData } from "@utils/methods";


// Demo data
import partnersData from "../data/innerpages/partners.json";

const Partners = ({ posts }) => {
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

export async function getStaticProps() {
    const posts = getAllPosts([
        "title",
        "date",
        "slug",
        "image",
        "category",
        "timeToRead",
    ]);

    return {
        props: {
            posts: posts.slice(0, 4),
            className: "template-color-1",
        },
    };
}

Partners.propTypes = {
    posts: PropTypes.arrayOf(PropTypes.shape({})),
};

export default Partners;
