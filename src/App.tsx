import React, {useState} from 'react';
import {Header} from "./components/Header/Header";
import {ProjectsPreview} from "./components/ProjectsPreview/ProjectsPreview";
import {Contact} from "./components/Contact/Contact";
import {Toggle} from "./components/Toggle/Toggle";
import {ThemeContext} from "./context/themeContext";
import {Stack} from "./components/Stack/Stack";

import './App.css';

export const App = () => {
    const [darkMode, setDarkMode] = useState<boolean>(false);

    return (
        <>
            <ThemeContext.Provider value={{darkMode, setDarkMode}}>
                <Toggle/>
                <Header/>
                <Stack/>
                <ProjectsPreview/>
                <Contact/>
            </ThemeContext.Provider>
        </>
    );
}