import React, { useState, useEffect } from 'react';
import { HiMoon, HiMiniSun } from "react-icons/hi2";

function useDarkMode() {
    const [darkMode, setDarkMode] = useState(() => {
        const savedMode = localStorage.getItem('darkMode');
        return savedMode ? JSON.parse(savedMode) : false;
    });

    useEffect(() => {
        document.body.classList.toggle('dark', darkMode);
        localStorage.setItem('darkMode', JSON.stringify(darkMode));
    }, [darkMode]);

    return [darkMode, setDarkMode];
}

function Dark() {
    const [darkMode, setDarkMode] = useDarkMode();

    const makeItDarkMode = () => {
        // Toggle dark mode
        setDarkMode(!darkMode);
    };

    return (
        <div onClick={makeItDarkMode} className='dark-light'>
            <div>
                {darkMode ? <HiMoon /> : <HiMiniSun />}
            </div>
        </div>
    );
}

export default Dark;
