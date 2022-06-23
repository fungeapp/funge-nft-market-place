import { Auth0Provider, useAuth0 } from '@auth0/auth0-react';

const ProfileLogin = () => {

    const {loginWithPopup, loginWithRedirect, logout, user, isAuthenticated} = useAuth0();

    return(
        <div className="App">
            <button className={"primary"} onClick={loginWithPopup}>Sign In</button> :
        </div>
    );

}

export default ProfileLogin;