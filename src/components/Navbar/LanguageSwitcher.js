import { useRouter } from 'next/router'
import { useCallback, useMemo, useState } from 'react'
import { t } from "@lingui/macro"
import styles from './LanguageSwitcher.module.css';
import { Divider } from '@mui/material';

const LanguageSwitcher = () => {
    const router = useRouter();

    const [selected, setSelected] = useState(router.locale);

    const languages = useMemo(() => {
        const result = {
            en: {
                name: 'EN',
                flag: 'gb'
            },
            de: {
                name: 'DE',
                flag: 'de'
            }
        }

        // enable 'pseudo' locale only for development environment
        if (process.env.NODE_ENV !== 'production') {
            result.pseudo = {
                name: t`Pseudo`
            }
        }

        return result;
    }, []);

    const handleChange = useCallback((locale) => {
        router.push(router.pathname, router.pathname, { locale })
    }, [router]);

    return (
        <ul className={styles.lang__wrapper}>
            {
                Object.entries(languages).map(([locale, { name, flag }]) => (
                    <li className={styles.lang__item} key={`lang-${locale}`}>
                        <button
                            href=''
                            rel='alternate'
                            onClick={() => handleChange(locale)}
                            onMouseOver={() => setSelected(locale)}
                            onMouseLeave={() => setSelected(router.locale)}
                            className={`link link--nav ${styles.lang__link} ${selected === locale && styles.lang__selected}`}
                        >
                            {name}
                            {flag && <span className={`fp ${flag} ${styles.lang__flag}`} />}
                        </button>
                    </li>
                )).reduce((acc, cur, index) => {
                    if (index > 0)
                        acc.push(<Divider key={`divider-${index}`} orientation="vertical" flexItem />);

                    acc.push(cur);
                    return acc;
                }, [])
            }
        </ul>
    )
}

export default LanguageSwitcher