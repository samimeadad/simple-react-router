import React from 'react';
import { NavLink } from 'react-router-dom';

const anchorStyle = {
    marginRight: '10px',
    textDecoration: 'none',
    color: 'blue'
}

const activeStyle = {
    fontWeight: "bold",
    color: "red"
}

const Header = () => {
    return (
        <nav>
            <NavLink
                style={ anchorStyle }
                to="/home"
                activeStyle={ activeStyle }>
                Home
            </NavLink>
            <NavLink
                style={ anchorStyle }
                to="/friends"
                activeStyle={ activeStyle }>
                Friends
            </NavLink>
            <NavLink
                style={ anchorStyle }
                to="/about"
                activeStyle={ activeStyle }>
                About
            </NavLink>
        </nav>
    );
};

export default Header;