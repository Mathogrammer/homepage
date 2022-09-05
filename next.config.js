const { PHASE_DEVELOPMENT_SERVER } = require("next/constants");

module.exports = (phase) => ({
    reactStrictMode: true,
    i18n: {
        // These are all the locales you want to support in
        // your application
        locales: ['en', 'de', ...(phase === PHASE_DEVELOPMENT_SERVER ? ['pseudo'] : [])],
        // This is the default locale you want to be used when visiting
        // a non-locale prefixed path e.g. `/hello`
        defaultLocale: 'de',
    },
    async rewrites() {
        return {
            fallback: [{ source: "/:path*", destination: "/_404/:path*" }],
        };
    },
})