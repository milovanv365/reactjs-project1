import React from 'react'
import { Link } from "react-router-dom";
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import SearchIcon from '@material-ui/icons/Search';
import ShoppingBasketIcon from '@material-ui/icons/ShoppingBasket';
import styles from '../assests/styles/header.module.scss';


const Header = () => {
    return (
        <header>
            <nav className={styles.topNavBar}>
                <div>
                    <IconButton color="inherit" aria-label="Menu">
                        <MenuIcon />
                    </IconButton>
                </div>
                <div><Link className="link-item" to="/"><h1>SONOS</h1></Link></div>
                <div>
                    <ul>
                        <li>
                            <IconButton color="inherit" aria-label="Search">
                                <SearchIcon />
                            </IconButton>
                        </li>
                        <li>
                            <IconButton color="inherit" aria-label="Cart">
                                <Link className="link-item" to={{ pathname: "/cart" }}>
                                    <ShoppingBasketIcon />
                                </Link>
                            </IconButton>
                        </li>
                    </ul>
                </div>
            </nav>
        </header>
    )
};

export default Header


