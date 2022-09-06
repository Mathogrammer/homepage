import { createContext, useEffect, useState, useContext, useMemo } from 'react';
import PropTypes from 'prop-types';

type Context = [{
    themeName: string;
    toggleTheme?: () => void;
    isLightTheme: boolean;
}]

const defaultContext: Context = [{ 
    themeName: 'light',
    toggleTheme: undefined,
    isLightTheme: true,
}];

const ThemeContext = createContext(defaultContext);

const ThemeProvider = ({ children }: { children: React.ReactNode }) => {
    const [themeName, setThemeName] = useState('light');

    useEffect(() => {
        const darkMediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
        setThemeName(darkMediaQuery.matches ? 'dark' : 'light');
        darkMediaQuery.addEventListener('change', (e) => {
            setThemeName(e.matches ? 'dark' : 'light');
        });
    }, []);

    const isLightTheme = useMemo(() => {
        return themeName !== 'dark';
    }, [themeName]);

    const toggleTheme = () => {
        const name = themeName === 'dark' ? 'light' : 'dark';
        localStorage.setItem('themeName', name);
        setThemeName(name);
    };

    return (
        <ThemeContext.Provider value={[{ themeName, toggleTheme, isLightTheme }]}>
            {children}
        </ThemeContext.Provider>
    );
};

ThemeProvider.propTypes = {
    children: PropTypes.node.isRequired,
};

const useThemeContext = () => useContext(ThemeContext);

export { ThemeProvider, useThemeContext };
