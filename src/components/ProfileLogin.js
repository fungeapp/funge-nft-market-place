import { Auth0Provider, useAuth0 } from '@auth0/auth0-react';
import { useEffect, useHistory, useState } from 'react';
import env from 'react-dotenv';
import { 
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
//import {useChain, useMoralis} from "react-moralis";
//import Moralis from "moralis";
import Web3 from 'web3/dist/web3.min.js'


const ProfileLogin = (props) => {

    //const {loginWithPopup, loginWithRedirect, logout, user, isAuthenticated} = useAuth0();
    //const {authenticate, isAuthenticated, isAuthenticating, user, account, logout} = useMoralis();
    let web3 = new Web3();
    const {btnText} = props;
    const [open, setOpen] = useState(false);
    const [terms, setTerms] = useState(false);
    const [btnStatus, setBtnStatus] = useState(true);
    const [chain, setChain] = useState("");
    const [wallet, setWallet] = useState("");
    const [isAuthenticated, setIsAuthenticated] = useState(false)

    useEffect(() => {
        
    });

    const changeChain = (value) => {
        console.log(`change ${value}`)
        setChain(value);
        if (wallet !== "") {
            setBtnStatus(false);
        }
    };

    const changeWallet = (value) => {
        setWallet(value);
        
    };

    const emailAddress = (value) => {
        console.log(`Register via magic link`)
    }

    const phoneNumber = (value) => {

    }

    const handleDialogClose = () => {
        setOpen(false);
        setTerms(false);
        setChain("");
        setWallet("");
        setBtnStatus(true);
    };

    const handleCheckboxChange = (event) => {
        setTerms(event.target.checked);
    };

    const login = async () => {
        
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
                                                onClick={() => emailAddress("Email")}
                                            >
                                                <img alt={''} src={"./assets/images/metamask.svg"}/>
                                                
                                            </Button>
                                            <br/>
                                            Email Address
                                        </Grid>
                                        <Grid item xs={4}>
                                            <Button
                                                aria-label="Phone Number"
                                                disabled="true"
                                                className='btn-primary'
                                                onClick={() => phoneNumber("Phone Number")}
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