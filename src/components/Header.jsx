import React, { useState, useContext } from "react";
import  ThemeContext  from "../context/ThemeContext";

export const Header = () => {
    const [darkMode, setDarkMode] = useState(false);
    const { theme, setTheme} = useContext(ThemeContext);

    const handleClick = () => {
        setDarkMode(!darkMode);
        setTheme(!theme);
    }

    return(
    <div className={theme ? 'Header-dark-mode' : 'Header-light-mode'}>        
        <h1>ReactHooks</h1>
        <button type="button" onClick={handleClick}>{theme ? 'Dark Mode' : 'Light Mode'}</button>
    </div>
    );
}