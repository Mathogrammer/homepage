import type { LinguiConfig } from '@lingui/conf';
import { formatter } from '@lingui/format-po';

const config: LinguiConfig = {
    locales: ['en', 'de', 'pseudo'],
    pseudoLocale: 'pseudo',
    sourceLocale: 'en',
    fallbackLocales: {
        default: 'de',
    },
    catalogs: [
        {
            path: 'src/locales/{locale}/messages',
            include: ['src', 'pages'],
        },
    ],
    // v6 takes a formatter instance rather than a format name.
    format: formatter(),
};

export default config;
