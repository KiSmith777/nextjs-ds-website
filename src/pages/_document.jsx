import Document, { Html, Head, Main, NextScript } from "next/document";
// import clsx from "clsx";
// import { useTheme } from "../context/theme-context";
import generateNonce from "../utils/generate-nonce";
import generateCSP from "@utils/generate-csp";

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
                    <script
                        nonce={nonce}
                        dangerouslySetInnerHTML={{
                            __html: `window.__webpack_nonce__ = "${nonce}"`,
                        }}
                    />
                    <script
                        src="https://kit.fontawesome.com/bd483e6735.js"
                        nonce={nonce}
                        crossOrigin="anonymous"
                    ></script>

                    <link
                        nonce={nonce}
                        rel="preconnect"
                        href="https://fonts.googleapis.com"
                    />
                    <link
                        nonce={nonce}
                        rel="preconnect"
                        href="https://fonts.gstatic.com/*"
                        crossorigin
                    />
                    <link
                        nonce={nonce}
                        href="https://fonts.googleapis.com/css2?family=Roboto:wght@400;500;700&display=swap"
                        rel="stylesheet"
                    />
                </Head>
                <body>
                    <Main />
                    <NextScript nonce={nonce}/>
                </body>
            </Html>
        );
    }
}

export default MyDocument;

