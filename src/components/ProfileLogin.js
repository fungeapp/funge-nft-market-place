import { Auth0Provider, useAuth0 } from '@auth0/auth0-react';
import { useEffect, useHistory, useState } from 'react';
import env from 'react-dotenv';
import { 
    TextField,
    Button, 
    Avatar, 
    List, 
    ListItem, 
    ListItemAvatar, 
    ListItemText,
    DialogTitle, 
    Dialog, 
    DialogContent,
    Grid,
    Typography,
    IconButton,
    Divider, 
    FormControlLabel,
    Colors,
    Checkbox,
    DialogActions,
} from '@mui/material';
import MaterialIcon, {colorPalette} from 'material-icons-react';
import Web3 from 'web3/dist/web3.min.js'
import { Magic } from 'magic-sdk';
import { OAuthExtension } from '@magic-ext/oauth'


const ProfileLogin = (props) => {

    //const {loginWithPopup, loginWithRedirect, logout, user, isAuthenticated} = useAuth0();
    //const {authenticate, isAuthenticated, isAuthenticating, user, account, logout} = useMoralis();
    let web3 = new Web3();
    const {btnText} = props;
    const [isAuthenticated, setIsAuthenticated] = useState(false)
    const [open, setOpen] = useState();
    const [btnStatus, setBtnStatus] = useState();
    const [magickey, setMagicKey] = useState(env.MAGIC_LINK_API_KEY);
    const magic = new Magic(magickey, {
        extensions: [new OAuthExtension()]
    });
    const [email, setemail] = useState();
    const [phone, setphone] = useState();

    
    useEffect(() => {
        
    });

    const emailAddress = async (e, value) => {
        e.preventDefault();
        setemail("jaypersanchez@gmail.com");
        console.log(email)
        await magic.auth.loginWithMagicLink({
            email: email,
            showUI: true,
            redirectURI: "http://localhost:3000/profile"
        });
    }

    const phoneNumber = (value) => {
        //e.preventDefault();
        console.log(`Register by phone`)
    }

    const handleDialogClose = () => {
        setOpen(false);
        /*setTerms(false);
        setChain("");
        setWallet("");*/
        setBtnStatus(true);
    };

    
    const login = async () => {
        console.log(`login triggered ${email}`)
        await magic.oauth.loginWithRedirect({
            email: email,
            showUI: true,
            redirectURI: "https://dev.fungeapp.com/profile"
        });
    }

        return(
            <>
            {isAuthenticated && btnText === 'Sign-In' ?
                <button className={"btn btn-success"} ></button> :
    
                <button onClick={() => setOpen(true)} className="btn-primary btn">
                    {btnText}
                </button>}
                    <Dialog
                        open={open}
                        width="500px"
                        fullWidth={true}
                        onClose={handleDialogClose}
                    >
                        <DialogTitle>Sign In</DialogTitle>
                        <DialogContent>
                            <List>
                                <ListItem>
                                    <Typography variant="h6" xs={12} color="initial">
                                    Hey! Welcome to Funge. Please login or sign up with your email address or mobile number.
                                    </Typography>
                                </ListItem>
                                
                                <ListItem>
                                    <Grid container alignItems={"center"} spacing={2}>
                                        <Grid item xs={4}>
                                            <Button
                                                aria-label="Email"
                                                className='btn-primary'
                                                onClick={(e) => emailAddress(e, "jaypersanchez@gmail.com")}
                                            >
                                                <img alt={''} src={"./assets/images/metamask.svg"}/>
                                                
                                            </Button>
                                            <br/>
                                            Email Address
                                        </Grid>
                                        <Grid item xs={4}>
                                            <Button
                                                aria-label="Phone Number"
                                                className='btn-primary'
                                                onClick={() => setphone("7786787565")}
                                            >
                                                <img alt={''} src={"./assets/images/wallet_connect.svg"}/>
                                                
                                            </Button>
                                            <br/>
                                           Phone Number
                                        </Grid>
                                    </Grid>
                                </ListItem>
                            </List>
                        </DialogContent>
                        <DialogActions>
                            <Button
                                disabled={btnStatus}
                                sx={{float: "right"}}
                                variant="outlined"
                                color="primary"
                                onClick={login}
                            >
                                Connect
                            </Button>
                        </DialogActions>
                    </Dialog>
                </>
        );
    
    
}

export default ProfileLogin;