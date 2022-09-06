import { Trans } from "@lingui/macro";
import CloseIcon from '@mui/icons-material/Close';
import MenuIcon from '@mui/icons-material/Menu';
import Switch from '@mui/material/Switch';
import { useState } from 'react';
import { useThemeContext } from '../../contexts/theme';
import LanguageSwitcher from "./LanguageSwitcher";
import styles from './Navbar.module.css';

const Navbar = ({ projects, skills, contact }) => {
    const [{ toggleTheme, isDarkTheme }] = useThemeContext();
    const [showNavList, setShowNavList] = useState(false);

    const toggleNavList = () => setShowNavList(!showNavList);

    return (
        <nav className={`center ${styles.nav}`}>
            <ul
                style={{ display: showNavList ? 'flex' : null }}
                className={styles.nav__list}
            >
                <li className={`${styles.nav__list_item} ${styles.nav__home}`}>
                    <a
                        href='#top'
                        onClick={toggleNavList}
                        className='link link--nav'
                    >
                        <Trans>
                            Intro
                        </Trans>
                    </a>
                </li>

                {projects.length ? (
                    <li className={styles.nav__list_item}>
                        <a
                            href='#projects'
                            onClick={toggleNavList}
                            className='link link--nav'
                        >
                            <Trans>
                                Projects
                            </Trans>
                        </a>
                    </li>
                ) : null}

                {skills ? (
                    <li className={styles.nav__list_item}>
                        <a
                            href='#skills'
                            onClick={toggleNavList}
                            className='link link--nav'
                        >
                            <Trans>
                                Skills
                            </Trans>
                        </a>
                    </li>
                ) : null}

                {contact.email ? (
                    <li className={styles.nav__list_item}>
                        <a
                            href='#contact'
                            onClick={toggleNavList}
                            className='link link--nav'
                        >
                            <Trans>
                                Contact
                            </Trans>
                        </a>
                    </li>
                ) : null}
            </ul>

            <Switch
                checked={isDarkTheme}
                onClick={toggleTheme}
                className={`${styles.nav__theme}`}
                aria-label='toggle theme'
                sx={{
                    '& .MuiSwitch-switchBase': {
                        margin: 1,
                        padding: 0,
                        transform: 'translateX(0px)',
                        '&.Mui-checked': {
                            color: '#fff',
                            transform: 'translateX(22px)',
                            '& .MuiSwitch-thumb': {
                                backgroundColor: '#2978b5',
                                '&:before': {
                                    backgroundImage: `url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" height="20" width="20" viewBox="0 0 24 24"><path fill="${encodeURIComponent(
                                        '#fcfcfc',
                                    )}" d="M10 2c-1.82 0-3.53.5-5 1.35C7.99 5.08 10 8.3 10 12s-2.01 6.92-5 8.65C6.47 21.5 8.18 22 10 22c5.52 0 10-4.48 10-10S15.52 2 10 2z"/></svg>')`,
                                }
                            },
                            '& + .MuiSwitch-track': {
                                opacity: 1,
                                backgroundColor: '#2978b5',
                            },
                        },
                    },
                    '& .MuiSwitch-thumb': {
                        backgroundColor: '#444',
                        '&:before': {
                            content: "''",
                            position: 'absolute',
                            width: '100%',
                            height: '100%',
                            backgroundRepeat: 'no-repeat',
                            backgroundPosition: 'center',
                            backgroundSize: '90%',
                            backgroundImage: `url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" height="20" width="20" viewBox="0 0 24 24"><path fill="${encodeURIComponent(
                                '#fcfcfc',
                            )}" d="M12,7c-2.76,0-5,2.24-5,5s2.24,5,5,5s5-2.24,5-5S14.76,7,12,7L12,7z M2,13l2,0c0.55,0,1-0.45,1-1s-0.45-1-1-1l-2,0 c-0.55,0-1,0.45-1,1S1.45,13,2,13z M20,13l2,0c0.55,0,1-0.45,1-1s-0.45-1-1-1l-2,0c-0.55,0-1,0.45-1,1S19.45,13,20,13z M11,2v2 c0,0.55,0.45,1,1,1s1-0.45,1-1V2c0-0.55-0.45-1-1-1S11,1.45,11,2z M11,20v2c0,0.55,0.45,1,1,1s1-0.45,1-1v-2c0-0.55-0.45-1-1-1 C11.45,19,11,19.45,11,20z M5.99,4.58c-0.39-0.39-1.03-0.39-1.41,0c-0.39,0.39-0.39,1.03,0,1.41l1.06,1.06 c0.39,0.39,1.03,0.39,1.41,0s0.39-1.03,0-1.41L5.99,4.58z M18.36,16.95c-0.39-0.39-1.03-0.39-1.41,0c-0.39,0.39-0.39,1.03,0,1.41 l1.06,1.06c0.39,0.39,1.03,0.39,1.41,0c0.39-0.39,0.39-1.03,0-1.41L18.36,16.95z M19.42,5.99c0.39-0.39,0.39-1.03,0-1.41 c-0.39-0.39-1.03-0.39-1.41,0l-1.06,1.06c-0.39,0.39-0.39,1.03,0,1.41s1.03,0.39,1.41,0L19.42,5.99z M7.05,18.36 c0.39-0.39,0.39-1.03,0-1.41c-0.39-0.39-1.03-0.39-1.41,0l-1.06,1.06c-0.39,0.39-0.39,1.03,0,1.41s1.03,0.39,1.41,0L7.05,18.36z"/></svg>')`,
                        },
                    },
                    '& .MuiSwitch-track': {
                        opacity: 1,
                        backgroundColor: '#444',
                        borderRadius: 20 / 2,
                    },
                }}
            />

            <LanguageSwitcher />


            <button
                type='button'
                onClick={toggleNavList}
                className={`btn btn--icon ${styles.nav__hamburger}`}
                aria-label='toggle navigation'
            >
                {showNavList ? <CloseIcon /> : <MenuIcon />}
            </button>
        </nav>
    );
};

export default Navbar;
