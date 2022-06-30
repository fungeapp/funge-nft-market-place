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
import {useChain, useMoralis} from "react-moralis";
import Moralis from "moralis";
import Web3 from 'web3/dist/web3.min.js'

const Profile = (props) => {

    return(
        <>
            <div className="header">Profile</div>
        </>
    )

}

export default Profile;