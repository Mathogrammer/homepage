/* eslint-disable react/jsx-props-no-spreading */
import { i18n } from '@lingui/core';
import { I18nProvider } from '@lingui/react';
import { de, en } from 'make-plural/plurals';
import { useRouter } from 'next/router';
import { useEffect, useRef } from 'react';
import { ThemeProvider } from '../src/contexts/theme';
import { messages } from '../src/locales/en/messages';
import '../src/index.css';
import 'flagpack/dist/flagpack.css';

i18n.loadLocaleData({
    en: { plurals: en },
    de: { plurals: de },
    pseudo: { plurals: en }
});

// This default export is required in a new `pages/_app.js` file.
export default function MyApp({ Component, pageProps }) {
    const router = useRouter();
    const locale = router.locale || router.defaultLocale;
    const firstRender = useRef(true);

    if (pageProps.translation && firstRender.current) {
        //load the translations for the locale
        i18n.load(locale, pageProps.translation);
        i18n.activate(locale);
        // render only once
        firstRender.current = false;
    }

    useEffect(() => {
        if (pageProps.translation) {
            i18n.load(locale, pageProps.translation);
            i18n.activate(locale);
        }
        else {
            i18n.load('en', messages);
            i18n.activate('en');
        }
    }, [locale, pageProps.translation]);

    return (
        <ThemeProvider>
            <I18nProvider i18n={i18n}>
                <Component {...pageProps} />
            </I18nProvider>
        </ThemeProvider>
    );
}
