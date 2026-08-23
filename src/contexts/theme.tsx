import { createContext, useState, useContext, useMemo, useSyncExternalStore } from 'react';

type ThemeName = 'light' | 'dark';

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

const DARK_QUERY = '(prefers-color-scheme: dark)';

const subscribeToSystemTheme = (onStoreChange: () => void) => {
    const mediaQuery = window.matchMedia(DARK_QUERY);
    mediaQuery.addEventListener('change', onStoreChange);
    return () => mediaQuery.removeEventListener('change', onStoreChange);
};

const getSystemTheme = (): ThemeName =>
    window.matchMedia(DARK_QUERY).matches ? 'dark' : 'light';

// The server has no media query to read; match the pre-hydration default.
const getServerTheme = (): ThemeName => 'light';

const ThemeProvider = ({ children }: { children: React.ReactNode }) => {
    const systemTheme = useSyncExternalStore(
        subscribeToSystemTheme,
        getSystemTheme,
        getServerTheme,
    );
    // An explicit toggle overrides the system preference until reload.
    const [override, setOverride] = useState<ThemeName | null>(null);

    const themeName = override ?? systemTheme;

    const isLightTheme = useMemo(() => {
        return themeName !== 'dark';
    }, [themeName]);

    const toggleTheme = () => {
        const name: ThemeName = themeName === 'dark' ? 'light' : 'dark';
        localStorage.setItem('themeName', name);
        setOverride(name);
    };

    const value: Context = useMemo(
        () => [{ themeName, toggleTheme, isLightTheme }],
        // eslint-disable-next-line react-hooks/exhaustive-deps
        [themeName, isLightTheme],
    );

    return (
        <ThemeContext.Provider value={value}>
            {children}
        </ThemeContext.Provider>
    );
};

const useThemeContext = () => useContext(ThemeContext);

export { ThemeProvider, useThemeContext };
