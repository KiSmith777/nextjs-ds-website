const path = require("path");
const ContentSecurityPolicy = `
  default-src 'self';
  script-src 'self' ajax.cloudflare.com;
  img-src 'self';
  script-src https://kit.fontawesome.com/bd483e6735.js;
  script-src 'self' 'unsafe-inline';
  script-src 'self' https://defiskeptic.com/cdn-cgi/*;
  script-src static.cloudflareinsights.com;
  script-src 'self' /cdn-cgi/challenge-platform/;
  connect-src cloudflareinsights.com;
  child-src https://defiskeptic.com;
  style-src 'self' https://defiskeptic.com https://fonts.googleapis.com/*;
  font-src https://fonts.googleapis.com https://fonts.gstatic.com;
  frame-ancestors 'self' https://defiskeptic.com;

`
const securityHeaders = [
    {
        key: 'Strict-Transport-Security',
        value: 'max-age=63072000; includeSubDomains; preload'
    },
    {
        key: 'X-XSS-Protection',
        value: '1; mode=block'
    },
    {
        key: 'Content-Security-Policy',
        value: ContentSecurityPolicy.replace(/\s{2,}/g, ' ').trim()
    },
    {
        key: 'X-Content-Type-Options',
        value: 'nosniff'
    },
    {
        key: 'Referrer-Policy',
        value: 'same-origin'
    }
]
module.exports = {
    async headers() {
        return [
            {
                source: '/:path*',
                headers: securityHeaders,
            },
        ]
    },
    reactStrictMode: true,
    sassOptions: {
        includePaths: [path.join(__dirname, "./src/assets/scss")],
    },
    webpack: (config, { buildId, dev, isServer, defaultLoaders, webpack }) => {
        // eslint-disable-next-line no-param-reassign
        config.ignoreWarnings = [
            {
                message:
                    /(magic-sdk|@walletconnect\/web3-provider|@web3auth\/web3auth)/,
            },
        ];
        return config;
    },
};