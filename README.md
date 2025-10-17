## Project Name:

## Project Description:  

## Features:

## Live Site Link:

## Project Video:

## What I Learned New while Building This Project:

1. How to implement theme using DaisyUI and toggle theme

```jsx
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router';

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
        <div className="navbar bg-base-100 shadow-lg fixed z-100 ">
            <div className="flex-1">
                <Link
                    to='/'
                    className='btn btn-ghost gap-0 text-secondary normal-case text-2xl'
                >
                    Byte<span className='text-primary'>Blaze</span>
                </Link>
            </div>
            <div className="flex-none">
                <ul className="menu menu-horizontal px-1">
                    <li><a>Home</a></li>
                    <li><a>Blogs</a></li>
                    <li><a>Bookmarks</a></li>
                </ul>
                <label className="toggle text-base-content">
                    <input onChange={handleToggle} type="checkbox" className="theme-controller" />

                    <svg aria-label="sun" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><g strokeLinejoin="round" strokeLinecap="round" strokeWidth="2" fill="none" stroke="currentColor"><circle cx="12" cy="12" r="4"></circle><path d="M12 2v2"></path><path d="M12 20v2"></path><path d="m4.93 4.93 1.41 1.41"></path><path d="m17.66 17.66 1.41 1.41"></path><path d="M2 12h2"></path><path d="M20 12h2"></path><path d="m6.34 17.66-1.41 1.41"></path><path d="m19.07 4.93-1.41 1.41"></path></g></svg>

                    <svg aria-label="moon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><g strokeLinejoin="round" strokeLinecap="round" strokeWidth="2" fill="none" stroke="currentColor"><path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z"></path></g></svg>

                </label>
            </div>
        </div>
    );
};

export default Navbar;
```

```jsx
@import "tailwindcss";

@plugin "daisyui" {
    themes: light --default, synthwave --prefersdark;
}
```

## Contact With Me: 

tamim.muhammad2005@gmail.com | +8801586090360 (WhatsApp)  

https://www.linkedin.com/in/tamim-muhammad
