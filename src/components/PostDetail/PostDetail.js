import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { NavLink } from 'react-router-dom';

const anchorStyle = {
    marginRight: '10px',
    textDecoration: 'none',
    color: 'blue'
};

const activeStyle = {
    fontWeight: "bold",
    color: "red"
};

const PostDetail = () => {
    const { postId } = useParams();
    const [ postDetail, setPostDetail ] = useState( [] );
    const { title, body } = postDetail;

    useEffect( () => {
        const url = `https://jsonplaceholder.typicode.com/posts/${ postId }`;
        fetch( url )
            .then( res => res.json() )
            .then( data => setPostDetail( data ) );
    }, [] );



    return (
        <div>
            <h2>Post Detail { postId }</h2>
            <h2>Title: { title }</h2>
            <p>{ body }</p>
            <NavLink
                style={ anchorStyle }
                to='/posts'
                activeStyle={ activeStyle }>
                All Post
            </NavLink>

        </div>
    );
};

export default PostDetail;