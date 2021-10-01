import React from 'react';
import { NavLink, useHistory } from 'react-router-dom';

const postStyle = {
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

const Post = ( props ) => {
    const { userId, id, title, body } = props.post;
    const history = useHistory()
    const handleClick = () => {
        history.push( `/post/${ id }` );
    }
    return (
        <div style={ postStyle }>
            <h3>User ID: { userId }</h3>
            <h3>Post ID: { id }</h3>
            <h2>Title: { title }</h2>
            <p>{ body }</p>
            <NavLink
                style={ anchorStyle }
                to={ `/post/${ id }` }
                activeStyle={ activeStyle }>
                Post Detail
            </NavLink>
            <br />
            <button onClick={ handleClick }>Click to see details</button>
        </div>
    );
};

export default Post;