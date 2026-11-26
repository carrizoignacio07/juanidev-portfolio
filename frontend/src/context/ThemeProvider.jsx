import { useEffect, useState } from 'react';
import { ThemeContext } from './ThemeContext';

const STORAGE_KEY = 'theme';

const getPreferredTheme = () => {
    if (typeof window === 'undefined') return 'light';
    const stored = window.localStorage.getItem(STORAGE_KEY);
    if (stored === 'light' || stored === 'dark') return stored;
    return window.matchMedia('(prefers-color-scheme: dark)').matches
        ? 'dark'
        : 'light';
};

const applyTheme = (theme) => {
    const root = document.documentElement;
    root.classList.toggle('dark', theme === 'dark');
    root.style.colorScheme = theme;
    const meta = document.querySelector('meta[name="theme-color"]');
    if (meta)
        meta.setAttribute('content', theme === 'dark' ? '#020617' : '#2563eb');
};

export const ThemeProvider = ({ children }) => {
    const [theme, setTheme] = useState(getPreferredTheme);

    useEffect(() => {
        applyTheme(theme);
    }, [theme]);

    useEffect(() => {
        const media = window.matchMedia('(prefers-color-scheme: dark)');
        const handleChange = (event) => {
            const stored = window.localStorage.getItem(STORAGE_KEY);
            if (stored === 'light' || stored === 'dark') return;
            setTheme(event.matches ? 'dark' : 'light');
        };

        media.addEventListener('change', handleChange);
        return () => media.removeEventListener('change', handleChange);
    }, []);

    const setThemePreference = (nextTheme) => {
        const value = nextTheme === 'dark' ? 'dark' : 'light';
        window.localStorage.setItem(STORAGE_KEY, value);
        setTheme(value);
    };

    const toggleTheme = () => {
        setThemePreference(theme === 'dark' ? 'light' : 'dark');
    };

    return (
        <ThemeContext.Provider
            value={{
                theme,
                isDark: theme === 'dark',
                setTheme: setThemePreference,
                toggleTheme,
            }}
        >
            {children}
        </ThemeContext.Provider>
    );
};
