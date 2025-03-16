import { PHASE_DEVELOPMENT_SERVER } from "next/constants.js";

const config = (phase) => ({
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
    webpack(config) {
        // Grab the existing rule that handles SVG imports
        const fileLoaderRule = config.module.rules.find((rule) =>
            rule.test?.test?.('.svg'),
        );

        config.module.rules.push(
            // Reapply the existing rule, but only for svg imports ending in ?url
            {
                ...fileLoaderRule,
                test: /\.svg$/i,
                resourceQuery: /url/, // *.svg?url
            },
            // Convert all other *.svg imports to React components
            {
                test: /\.svg$/i,
                issuer: fileLoaderRule.issuer,
                resourceQuery: { not: [...fileLoaderRule.resourceQuery.not, /url/] }, // exclude if *.svg?url
                use: ['@svgr/webpack'],
            },
        );

        // Modify the file loader rule to ignore *.svg, since we have it handled now.
        fileLoaderRule.exclude = /\.svg$/i;

        return config;
    },
});

export default config;