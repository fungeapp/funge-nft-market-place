import { Auth0Provider, useAuth0 } from '@auth0/auth0-react';
import { useEffect, useHistory } from 'react';
import env from 'react-dotenv'

const ProfileLogin = () => {

    const {loginWithPopup, loginWithRedirect, logout, user, isAuthenticated} = useAuth0();

    useEffect(() => {

        if (isAuthenticated) {
            //direct to profile page
            //useHistory.push(env.LOGIN_REDIRECT_URL);
        }
        else {
            //stay or redirect to landing page
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [isAuthenticated]);

    function onRedirectCallback() {
        useHistory.push(env.LOGIN_REDIRECT_URL);
    }

        return(
            <div className="App">
                <Auth0Provider
                                            domain={env.AUTH0_DOMAIN}
                                            clientId={env.AUTH0_CLIENT_ID}
                                            redirectUrl={env.LOGIN_REDIRECT_URL}
                                            onRedirectCallback={onRedirectCallback}
                            >
                <button style={{
                                backgroundColor: '#71AFAC',
                                color: '#FFFFFF',
                                borderRadius: '40px',
                                paddingTop: '10px',
                                paddingBottom: '10px',
                                paddingLeft: '18px',
                                paddingRight: '18px'}} 
                        onClick={loginWithPopup}
                >
                    Sign-In to Profile
                </button>
                </Auth0Provider>
            </div>
        );
    
    
}

export default ProfileLogin;