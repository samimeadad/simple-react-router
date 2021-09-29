import React from 'react';
import { Link, NavLink, useHistory } from 'react-router-dom';

const Friend = ( props ) => {
    const { id, name, email, phone, website, address } = props.friend;

    const history = useHistory();

    const friendStyle = {
        border: '3px solid blue',
        padding: '10px',
        borderRadius: '10px',
        margin: '20px'
    };

    const anchorStyle = {
        marginRight: '10px',
        textDecoration: 'none',
        color: 'blue'
    };

    const activeStyle = {
        fontWeight: "bold",
        color: "red"
    };

    const url = `/friend/${ id }`;

    const handleButtonClick = () => {
        history.push( `/friend/${ id }` );
    }

    return (
        <div style={ friendStyle }>
            <h2>This is my friend: { name }. Id: { id }</h2>
            <h4>Mail me: { email }</h4>
            <h4>Call me: { phone }</h4>
            <h4>Visit me: { website }</h4>
            <h4>I live in: { address.city }</h4>
            <NavLink
                style={ anchorStyle }
                to={ url }
                activeStyle={ activeStyle }>
                Visit Me
            </NavLink>
            <br />
            <Link to={ url }>
                <button>Visit Me</button>
            </Link>
            <br />
            <button onClick={ handleButtonClick }>Visit Me with Handler</button>
        </div>
    );
};

export default Friend;