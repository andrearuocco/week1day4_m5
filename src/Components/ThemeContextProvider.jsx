import {  createContext, useState } from 'react';

export const ThemeContext = createContext(null);

export function ThemeContextProvider({children}) {
    const [theme, setTheme] = useState('light')
    const value = {theme, setTheme};

    return(
        <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>
    )
}