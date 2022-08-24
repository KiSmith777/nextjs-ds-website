import Document, { Html, Head, Main, NextScript } from "next/document";
// import clsx from "clsx";
// import { useTheme } from "../context/theme-context";
import generateNonce from "../utils/generate-nonce";
import generateCSP from "@utils/generate-csp";
import Script from "next/script";

class MyDocument extends Document {
    static async getInitialProps(ctx) {
        const nonce = generateNonce();
        ctx.res.setHeader("Content-Security-Policy", generateCSP({ nonce }));
        const initialProps = await Document.getInitialProps(ctx);
        const additionalProps = { nonce };
        return { ...initialProps, ...additionalProps };
    }

    render() {
        const { nonce } = this.props;
        return (
            <Html>
                <Head nonce={nonce}>
                    <Script
                        strategy="afterInteractive"
                        nonce={nonce}
                        dangerouslySetInnerHTML={{
                            __html: `window.__webpack_nonce__ = "${nonce}"`,
                        }}
                    />
                    <Script
                        strategy="beforeInteractive"
                        src="https://kit.fontawesome.com/bd483e6735.js"
                        nonce={nonce}
                        crossOrigin="anonymous"
                    ></Script>

                    <link
                        nonce={nonce}
                        rel="preconnect"
                        href="https://fonts.googleapis.com"
                        crossOrigin="anonymous"
                    />
                    <link
                        nonce={nonce}
                        rel="preconnect"
                        href="https://fonts.gstatic.com/*"
                        crossOrigin="anonymous"
                    />
                    <link
                        nonce={nonce}
                        href="https://fonts.googleapis.com/css2?family=Roboto:wght@400;500;700&display=swap"
                        rel="stylesheet"
                        crossOrigin="anonymous"
                    />
                </Head>
                <body>
                    <Main />
                    <NextScript nonce={nonce} />
                </body>
            </Html>
        );
    }
}

export default MyDocument;

