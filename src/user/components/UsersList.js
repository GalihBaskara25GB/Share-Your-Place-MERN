import React from 'react';
import UsersItem from './UserItem';

import Card from '../../shared/components/UIElements/Card';
import './UsersList.css';

const UsersList = (props) => {   
    if(props.items.length === 0) {
        return (
            <div className="center">
                <Card>
                    <h2>No Users Yet</h2>
                </Card>
            </div>
        );
    }

    return (
        <ul className="users-list">
            {
                props.items.map(user => ( 
                    <UsersItem 
                        key={user.id}
                        id={user.id}
                        name={user.name}
                        placesCount={user.places}
                        image={user.image}
                    /> 
                ))
            }
        </ul>
    );
}

export default UsersList;