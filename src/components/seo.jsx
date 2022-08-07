import Head from "next/head";
import PropTypes from "prop-types";
import generateCSP from "../utils/generate-csp";

const SEO = ({ pageTitle }) => (
    <Head>
        <title> {pageTitle} || DeFi Skeptic </title>
  
        <meta
            name="description"
            content="DeFi Skeptic - Dedicated to bettering DeFi."
        />
        <meta name="robots" content="index, follow" />
        <meta
            name="viewport"
            content="width=device-width, initial-scale=1, shrink-to-fit=no"
        />
        <link rel="icon" href="/images/favicon.ico" />
    </Head>
);

SEO.propTypes = {
    pageTitle: PropTypes.string.isRequired,
};

export default SEO;

