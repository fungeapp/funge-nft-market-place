import { Auth0Provider, useAuth0 } from '@auth0/auth0-react';
import React, { useEffect, useHistory, useState, createContext } from 'react';
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
import { Magic, RPCError } from 'magic-sdk';
import { OAuthExtension } from '@magic-ext/oauth';
import axios from 'axios';
import { instanceOf } from 'prop-types';
import { profileData } from './UserProfile'


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
    const [dataprofile, setdataprofile] = useState();
    
    const emailAddress = async (e) => {
        console.log(`By email ${email}`)
        //save email info already
        axios.get(`${env.FUNGE_EXPRESSJS_SERVER_BASE_URL}/users/exist/${email}`)
        .then(response => {
            let exist = response.data
            console.log(`email exist ${exist} :: ${email}`)
            if(!exist) {
                //insert nothing else to do if email already exist.
                //profile data
                profileData.given_name = ""
                profileData.family_name = ""
                profileData.phonenumber = ""
                profileData.nickname = ""
                profileData.name = ""
                profileData.picture = ""
                profileData.locale = "en"
                profileData.updated_at = ""
                profileData.email = email
                profileData.email_verified = false
                console.log(`profileData ${profileData.email}`)
                axios({
                        method: 'post',
                        url: `${env.FUNGE_EXPRESSJS_SERVER_BASE_URL}/users/save`,
                        data: profileData
                    })
            }
            return email
        })
        .then( email => {
            magic.auth.loginWithMagicLink({
                email: email,
                showUI: true,
                redirectURI: `${env.BASE_URL}/feeds?email=${email}`
            })
            //return email;
        })
    }

    const phoneNumber = async (e) => {
        //e.preventDefault();
        console.log(`By phone ${phone}`);
        const DID = await magic.auth.loginWithSMS({
            phoneNumber: `+${phone}`,
            redirectURI: `${env.BASE_URL}/feeds`
        });
    }

    const saveUserProfile = async(response) => {
            //save localStorage for session management.  Magic opens to a new tab so sessionStorage is not persisted after email verification
            console.log(`Profile ${response.id} :: ${email} :: ${response.picture} :: ${response.email} :: ${response.nickname}`)
            //need to improve for user session management, Wang currently working on this
            localStorage.setItem("user_id", response.id)
            localStorage.setItem('user_email',email)
            

    }

    const handleDialogClose = () => {
        setOpen(false);
        /*setTerms(false);
        setChain("");
        setWallet("");*/
        setBtnStatus(true);
    };

    
    
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
                                    <TextField id="outlined-basic" label="Email" variant="outlined" onChange={(e) => setemail(e.target.value)}/>
                                </ListItem>
                                <ListItem>
                                    <Grid container alignItems={"center"} spacing={2}>
                                        <Grid item xs={4}>
                                            <Button
                                                aria-label="Email"
                                                className='btn-primary:hover'
                                                onClick={(e) => emailAddress(e)}
                                            >
                                                <img alt={''} src={"./assets/images/email.svg"}/>
                                                
                                            </Button>
                                            <br/>
                                            Login by Email
                                        </Grid>
                                        
                                    </Grid>
                                </ListItem>
                                <br/>
                                <ListItem>
                                    <TextField id="outlined-basic" label="Mobile" variant="outlined" onChange={(e) => setphone(e.target.value)}/>
                                </ListItem>
                                <ListItem>
                                <Grid container alignItems={"center"} spacing={2}>
                                <Grid item xs={4}>
                                            <Button
                                                aria-label="Phone Number"
                                                className='btn-primary:hover'
                                                onClick={(e) => phoneNumber(e)}
                                            >
                                                <img alt={''} src={"./assets/images/wallet_connect.svg"}/>
                                                
                                            </Button>
                                            <br/>
                                           Login by Mobile Number
                                        </Grid>
                                </Grid>
                                </ListItem>
                            </List>
                        </DialogContent>
                        
                    </Dialog>
                    
                </>
        );
    
    
}

export default ProfileLogin;