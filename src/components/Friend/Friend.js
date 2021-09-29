import React from 'react';

const Friend = ( props ) => {
    const { name, email, phone, website, address } = props.friend;

    const friendStyle = {
        border: '3px solid blue',
        padding: '10px',
        borderRadius: '10px',
        margin: '20px'
    }

    return (
        <div style={ friendStyle }>
            <h2>This is my friend: { name }</h2>
            <h4>Mail me: { email }</h4>
            <h4>Call me: { phone }</h4>
            <h4>Visit me: { website }</h4>
            <h4>I live in: { address.city }</h4>
        </div>
    );
};

export default Friend;