import React, { useEffect, useState } from 'react';
import { CiMenuFries } from 'react-icons/ci';
import { Link, NavLink } from 'react-router';

const Navbar = () => {
    const [theme, setTheme] = useState("light")
    const handleToggle = (e) => {
        if (e.target.checked) {
            setTheme('synthwave')
        }
        else {
            setTheme('light')
        }
    }


    useEffect(() => {
        localStorage.setItem("theme", theme)
        const localTheme = localStorage.getItem("theme")
        document.querySelector('html').setAttribute('data-theme', localTheme)
    }, [theme])

    return (
        <div className='flex justify-between items-center px-3 lg:px-8 py-3 lg:py-4 bg-base-200 shadow-lg fixed z-100 w-full'>
            <div>
                <Link
                    to='/'
                    className='btn btn-ghost gap-0 p-0 text-secondary normal-case text-2xl'
                >
                    Byte<span className='text-primary'>Blaze</span>
                </Link>
            </div>
            <div className='flex items-center gap-2'>
                <label className="toggle text-base-content lg:hidden">
                    <input onChange={handleToggle} type="checkbox" className="theme-controller" />

                    <svg aria-label="sun" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><g strokeLinejoin="round" strokeLinecap="round" strokeWidth="2" fill="none" stroke="currentColor"><circle cx="12" cy="12" r="4"></circle><path d="M12 2v2"></path><path d="M12 20v2"></path><path d="m4.93 4.93 1.41 1.41"></path><path d="m17.66 17.66 1.41 1.41"></path><path d="M2 12h2"></path><path d="M20 12h2"></path><path d="m6.34 17.66-1.41 1.41"></path><path d="m19.07 4.93-1.41 1.41"></path></g></svg>

                    <svg aria-label="moon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><g strokeLinejoin="round" strokeLinecap="round" strokeWidth="2" fill="none" stroke="currentColor"><path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z"></path></g></svg>

                </label>
                <div className="drawer drawer-end lg:hidden">
                    <input id="my-drawer-5" type="checkbox" className="drawer-toggle" />
                    <div className="drawer-content">
                        {/* Page content here */}
                        <label htmlFor="my-drawer-5" className="drawer-button btn  btn-sm"><CiMenuFries /></label>
                    </div>
                    <div className="drawer-side">
                        <label htmlFor="my-drawer-5" aria-label="close sidebar" className="drawer-overlay"></label>
                        <ul className="menu bg-base-200 min-h-full w-56 p-4">
                            {/* Sidebar content here */}
                            <li><NavLink to="/" className={({ isActive }) => isActive ? "text-primary text-bold" : "font-bold"}>Home</NavLink></li>
                            <li><NavLink to="blogs" className={({ isActive }) => isActive ? "text-primary text-bold" : "font-bold"}>Blogs</NavLink></li>
                            <li><NavLink to="/bookmarks" className={({ isActive }) => isActive ? "text-primary text-bold" : "font-bold"}>Bookmarks</NavLink></li>
                        </ul>
                    </div>
                </div>

                <ul className="items-center gap-10 hidden lg:flex">
                    <li><NavLink to="/" className={({ isActive }) => isActive ? "text-primary text-bold" : "font-bold"}>Home</NavLink></li>
                    <li><NavLink to="blogs" className={({ isActive }) => isActive ? "text-primary text-bold" : "font-bold"}>Blogs</NavLink></li>
                    <li><NavLink to="/bookmarks" className={({ isActive }) => isActive ? "text-primary text-bold" : "font-bold"}>Bookmarks</NavLink></li>
                    <li>
                        <label className="toggle text-base-content">
                            <input onChange={handleToggle} type="checkbox" className="theme-controller" />

                            <svg aria-label="sun" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><g strokeLinejoin="round" strokeLinecap="round" strokeWidth="2" fill="none" stroke="currentColor"><circle cx="12" cy="12" r="4"></circle><path d="M12 2v2"></path><path d="M12 20v2"></path><path d="m4.93 4.93 1.41 1.41"></path><path d="m17.66 17.66 1.41 1.41"></path><path d="M2 12h2"></path><path d="M20 12h2"></path><path d="m6.34 17.66-1.41 1.41"></path><path d="m19.07 4.93-1.41 1.41"></path></g></svg>

                            <svg aria-label="moon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><g strokeLinejoin="round" strokeLinecap="round" strokeWidth="2" fill="none" stroke="currentColor"><path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z"></path></g></svg>

                        </label>
                    </li>
                </ul>
            </div>
        </div>

    );
};

export default Navbar;