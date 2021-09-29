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

const About = () => {
    return (
        <div>
            <h2>This is About Us Page</h2>
            <p>If you bring some Kebab and Fried Rice then you will know about us</p>
            <NavLink
                style={ anchorStyle }
                to="/about/culture"
                activeStyle={ activeStyle }>
                About Our Culture
            </NavLink>
        </div>
    );
};

export default About;