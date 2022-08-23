import React from 'react';
export const UserContext = React.createContext();

const User = (props) => {
    //console.log(`${props.value.email} :: ${props.value}`)
    return (
        <UserContext.Provider value={props.value}>{props.value}</UserContext.Provider> 
    )

}

export default User;