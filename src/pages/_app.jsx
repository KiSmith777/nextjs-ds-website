import { useEffect } from "react";
import PropTypes from "prop-types";
import { useRouter } from "next/router";
import { MoralisProvider } from "react-moralis";
import sal from "sal.js";
import { ThemeProvider } from "next-themes";
import { EthersProvider } from "../context/EthersContext";
import "../assets/css/bootstrap.min.css";
import "../assets/css/feather.css";
import "../assets/scss/style.scss";
import "react-toastify/dist/ReactToastify.css";

const moralisAppId = "mA662H4sq1aE80GfLnmPSqrWV8xFok9m7VfPPeis";
const moralisServerURL = "https://twjtxas0hhtj.usemoralis.com:2053/server";

const MyApp = ({ Component, pageProps }) => {
    const router = useRouter();
    useEffect(() => {
        sal({ threshold: 0.1, once: true });
    }, [router.asPath]);

    useEffect(() => {
        sal();
    }, []);
    useEffect(() => {
        document.body.className = `${pageProps.className}`;
    });
    return (
        <MoralisProvider appId={moralisAppId} serverUrl={moralisServerURL}>
            <ThemeProvider defaultTheme="dark">
                <Component {...pageProps} />
            </ThemeProvider>
        </MoralisProvider>
    );
};

MyApp.propTypes = {
    Component: PropTypes.elementType,
    pageProps: PropTypes.shape({
        className: PropTypes.string,
    }),
};

export default MyApp;
