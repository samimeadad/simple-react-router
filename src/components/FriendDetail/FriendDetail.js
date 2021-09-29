import React, { useEffect, useState } from 'react';
import { useHistory, useParams } from 'react-router';

const FriendDetail = () => {
    const { friendId } = useParams();
    const [ singleFriend, setSingleFriend ] = useState( {} );
    const { name, email, phone, website, address, company } = singleFriend;
    const history = useHistory();

    useEffect( () => {
        fetch( `https://jsonplaceholder.typicode.com/users/${ friendId }` )
            .then( res => res.json() )
            .then( data => setSingleFriend( data ) );
    }, [] );

    const handleClick = () => {
        history.push( "/friends" );
    }

    return (
        <div>
            <h2>This is my friend: { name }. Id: { friendId }</h2>
            <h4>Mail me: { email }</h4>
            <h4>Call me: { phone }</h4>
            <h4>Visit me: { website }</h4>
            {/* <h4>I live in: { address?.city }</h4>
            <h4>I work at: { company?.name }</h4> */}
            <button onClick={ handleClick }>See All Friends</button>
        </div>
    );
};

export default FriendDetail;