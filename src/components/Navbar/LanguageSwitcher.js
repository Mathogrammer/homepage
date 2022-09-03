import { useRouter } from 'next/router'
import { useCallback, useMemo } from 'react'
import { t } from "@lingui/macro"
import Box from '@mui/material/Box';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import styles from './LanguageSwitcher.module.css';

const LanguageSwitcher = () => {
    const router = useRouter();

    const languages = useMemo(() => {
        const result = {
            en: {
                name: t`English`,
                flag: 'gb'
            },
            de: {
                name: t`German`,
                flag: 'de'
            }
        }

        // enable 'pseudo' locale only for development environment
        if (process.env.NEXT_PUBLIC_NODE_ENV !== 'production') {
            result.pseudo = {
                name: `Pseudo`
            }
        }

        return result;
    }, []);

    const handleChange = useCallback((locale) => {
        router.push(router.pathname, router.pathname, { locale })
    }, [router]);

    return (
        <FormControl variant="standard" sx={{ m: 1, minWidth: 120 }}>
            <Select
                sx={{ '& .MuiSvgIcon-root': { color: 'unset' } }}
                className={styles.select}
                MenuProps={{ sx: { '& .MuiPaper-root': { borderRadius: 0 }, '& .MuiList-root': { padding: 0 } } }}
                labelId="demo-simple-select-standard-label"
                id="demo-simple-select-standard"
                value={router.locale}
                onChange={(event) => handleChange(event.target.value)}
                label={t`Language`}
                renderValue={(locale) =>
                    <Box component="li" className={styles.wrapper}>
                        {languages[locale].name}
                        { languages[locale].flag && <span className={`fp fp-rounded ${languages[locale].flag} ${styles.justify}`} />}
                    </Box>
                }
            >
                {Object.keys(languages).map((locale) =>
                    <MenuItem value={locale} key={locale} className={styles.switcherItem}>
                        {languages[locale].name}
                        { languages[locale].flag && <span className={`fp fp-rounded ${languages[locale].flag}`} />}
                    </MenuItem>
                )}
            </Select>
        </FormControl>
    )
}

export default LanguageSwitcher