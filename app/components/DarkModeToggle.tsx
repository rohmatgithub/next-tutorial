'use client'
import { useEffect, useState } from 'react';

const DarkModeToggle = () => {
    const [theme, setTheme] = useState('');

    useEffect(() => {
        const savedTheme = localStorage.getItem('theme');
        const systemPrefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
        if (savedTheme) {
            console.log(savedTheme);
            setTheme(savedTheme);
        } else if (systemPrefersDark) {
            console.log(systemPrefersDark);

            setTheme('dark');
        }
    }, []);

    useEffect(() => {
        if (theme === 'dark') {
            document.documentElement.classList.add('dark');
            document.body.classList.add('bg-gray-900', 'text-white');
            document.body.classList.remove('bg-white', 'text-black');
            // localStorage.setItem('theme', 'dark');
        } else {
            document.documentElement.classList.remove('dark');
            document.body.classList.add('bg-white', 'text-black');
            document.body.classList.remove('bg-gray-900', 'text-white');
            // localStorage.setItem('theme', 'light');
        }
    }, [theme]);

    const toggleTheme = () => {
        setTheme((prevTheme) => (prevTheme === 'light' ? 'dark' : 'light'));
    };

    return (
        <button
            onClick={toggleTheme}
            className="p-2 bg-gray-200 dark:bg-gray-800 rounded"
        >
            {theme === 'light' ? 'Switch to Dark Mode' : 'Switch to Light Mode'}
        </button>
    );
};

export default DarkModeToggle;
