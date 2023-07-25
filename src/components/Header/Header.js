import React from 'react'
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import classes from './header.module.css';

export default function Header() {
  return (
    <header>
        <nav className={classes.nav}>
            <div className={classes.navCh}>
                <h1>Movie App</h1>
                <div className={classes.navMenu}>
                    <ul className={classes.navUl}>
                        <li>
                            <a hDref="/">Popular</a>
                        </li>
                        <li>
                            <a hDref="/">Top Rated</a>
                        </li>
                        <li>
                            <a hDref="/">Upcoming</a>
                        </li>
                    </ul>
                </div>
                <div>
                    <AccountCircleIcon />
                </div>
            </div>
        </nav>
    </header>
  )
}
