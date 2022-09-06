import { createContext, useEffect, useState, useContext, useMemo } from 'react';
import PropTypes from 'prop-types';

const ThemeContext = createContext();

const ThemeProvider = ({ children }) => {
    const [themeName, setThemeName] = useState('light');

    useEffect(() => {
        const darkMediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
        setThemeName(darkMediaQuery.matches ? 'dark' : 'light');
        darkMediaQuery.addEventListener('change', (e) => {
            setThemeName(e.matches ? 'dark' : 'light');
        });
    }, []);

    const [isLightTheme, isDarkTheme] = useMemo(() => {
        if (themeName === 'dark')
            return [false, true];

        return [true, false];
    }, [themeName]);

    const toggleTheme = () => {
        const name = themeName === 'dark' ? 'light' : 'dark';
        localStorage.setItem('themeName', name);
        setThemeName(name);
    };

    return (
        <ThemeContext.Provider value={[{ themeName, toggleTheme, isLightTheme, isDarkTheme }]}>
            {children}
        </ThemeContext.Provider>
    );
};

ThemeProvider.propTypes = {
    children: PropTypes.node.isRequired,
};

const useThemeContext = () => useContext(ThemeContext);

export { ThemeProvider, useThemeContext };
