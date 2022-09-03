import { useRouter } from 'next/router'
import { useCallback, useMemo } from 'react'
import { t } from "@lingui/macro"
import Box from '@mui/material/Box';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import styles from './LanguageSwitcher.module.css';
import { useThemeContext } from '../../contexts/theme';

const LanguageSwitcher = () => {
    const [{ themeName }] = useThemeContext()

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
                name: t`Pseudo`
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
                sx={{ 
                    color: 'var(--clr-fg)',
                    '& .MuiSvgIcon-root': { color: 'unset' },
                    '&::before': {
                        borderColor: 'var(--clr-primary)',
                        borderBottom: '1px solid var(--clr-primary)',
                    },
                    '&::after': {
                        borderColor: 'var(--clr-primary)',
                        borderBottom: '2px solid var(--clr-primary)',
                    }
                }}
                MenuProps={{ 
                    className: themeName,
                    sx: {
                        '& .MuiPaper-root': { 
                            borderRadius: 0, 
                            backgroundColor: 'var(--clr-bg-alt)',
                            color: 'var(--clr-fg)'
                        }, 
                        '& .MuiList-root': { padding: 0 } 
                    } 
                }}
                labelId="demo-simple-select-standard-label"
                id="demo-simple-select-standard"
                value={router.locale}
                onChange={(event) => handleChange(event.target.value)}
                label={t`Language`}
                renderValue={(locale) =>
                    <Box component="li" className={styles.wrapper}>
                        {languages[locale].name}
                        {languages[locale].flag && <span className={`fp fp-rounded ${languages[locale].flag} ${styles.justify}`} />}
                    </Box>
                }
            >
                {Object.keys(languages).map((locale) =>
                    <MenuItem value={locale} key={locale} sx={{
                        display: 'flex',
                        justifyContent: 'space-between'
                    }}>
                        {languages[locale].name}
                        {languages[locale].flag && <span className={`fp fp-rounded ${languages[locale].flag}`} />}
                    </MenuItem>
                )}
            </Select>
        </FormControl>
    )
}

export default LanguageSwitcher