import { i18n } from '@lingui/core';
import { I18nProvider } from '@lingui/react';
import { useRouter } from 'next/router';
import { useMemo } from 'react';
import { ThemeProvider } from '../src/contexts/theme';
import { messages } from '../src/locales/en/messages';
import '../src/index.css';
import 'flagpack/dist/flagpack.css';
import { AppProps } from 'next/app';
import Head from 'next/head';
import { generateDefaultSeo } from 'next-seo/pages';
import { t } from '@lingui/core/macro';
import { getLocaleWithTerritory } from '../src/utils';

// This default export is required in a new `pages/_app.js` file.
export default function MyApp({ Component, pageProps }: AppProps) {
    const router = useRouter();
    const locale = router.locale || router.defaultLocale || 'de';
    const canonicalUrl: string = useMemo(() => {
        return (
            `https://www.amantel.de` + (router.asPath === "/" ? "" : router.asPath)
        ).split("?")[0];
    }, [router]);

    // Activate the catalog synchronously so the very first render is already
    // translated. Guarded on i18n's own state instead of a render-mutated ref,
    // so it re-activates whenever the route locale changes.
    if (pageProps.translation) {
        if (i18n.locale !== locale) {
            i18n.loadAndActivate({ locale, messages: pageProps.translation });
        }
    }
    else if (i18n.locale !== 'en') {
        i18n.loadAndActivate({ locale: 'en', messages });
    }

    return (
        <ThemeProvider>
            <I18nProvider i18n={i18n}>
                <Head>
                    {generateDefaultSeo({
                        canonical: canonicalUrl,
                        openGraph: {
                            url: canonicalUrl,
                            locale: getLocaleWithTerritory(locale),
                            title: t`Alexander Mantel's Homepage`,
                            description: t`Showcase of my CV, skills and portfolio`,
                            type: 'website',
                            images: [{
                                url: '/profile/profilePicRounded.png',
                                type: 'image/png',
                                alt: t`Picture of Alexander Mantel's face in a circular frame.`
                            }],
                            site_name: t`Alexander Mantel's Homepage`
                        }
                    })}
                </Head>
                <Component {...pageProps} />
            </I18nProvider>
        </ThemeProvider>
    );
}
