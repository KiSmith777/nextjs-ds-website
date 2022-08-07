const path = require("path");
const ContentSecurityPolicy = `
  default-src 'self';
  script-src 'self' 'unsafe-inline' ajax.cloudflare.com https://kit.fontawesome.com https://defiskeptic.com/cdn-cgi/* static.cloudflareinsights.com
  img-src 'self';
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