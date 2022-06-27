import CheckIcon from "@mui/icons-material/Check";
import {Button, DialogActions, Divider, FormControlLabel, Grid, IconButton} from "@mui/material";
import Checkbox from "@mui/material/Checkbox";
import Dialog from "@mui/material/Dialog";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import Typography from "@mui/material/Typography";
import {React, useEffect, useState} from "react";
import {useChain, useMoralis} from "react-moralis";
import Moralis from "moralis";
import Web3 from "web3";

const Wallet = (props) => {

    const {authenticate, isAuthenticated, isAuthenticating, user, account, logout} = useMoralis();
    let web3 = new Web3();
    const {btnText} = props;
    const [open, setOpen] = useState(false);
    const [terms, setTerms] = useState(false);
    const [btnStatus, setBtnStatus] = useState(true);
    const [chain, setChain] = useState("");
    const [wallet, setWallet] = useState("");
    const {switchNetwork} = useChain();

    useEffect(() => {

        if (isAuthenticated) {

        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [isAuthenticated]);

    const login = async () => {
        if (!isAuthenticated) {
            let type, network;
            switch (wallet) {
                case "Metamask":
                    type = "metamask";
                    break;
                case "WalletConnect":
                    type = "walletconnect";
                    break;
                default:
                    type = "metamask";
            }
            switch (chain) {
                case "Ethereum":
                    network = 4;
                    break;
                case "Polygon" :
                    network = 80001;
                    break;
                default:
                    network = 4;
                    break;
            }

            await authenticate({
                signingMessage: "Log in using Funge App", chainId: network, provider: type
            })
                .then(function (user) {
                    console.log("logged in user:", user);
                    console.log(user?.get("ethAddress"));
                    if (isAuthenticated) {
                        switchNetwork(web3.utils.toHex(network));
                    }
                    setOpen(false);
                })
                .catch(function (error) {
                    console.log(error);
                });


        }
    }

    const changeChain = (value) => {
        setChain(value);
        if (wallet !== "") {
            setBtnStatus(false);
        }
    };

    const changeWallet = (value) => {
        setWallet(value);
        if (chain !== "") {
            setBtnStatus(false);
        }
    };

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

    return (<>
        {isAuthenticated && btnText === 'Connect Wallet' ?
            <button className={"btn btn-danger"} onClick={logout}>Disconnect</button> :

            <button onClick={() => setOpen(true)} className="btn-primary btn">
                {btnText}
            </button>}
        <Dialog
            open={open}
            width="500px"
            fullWidth={true}
            onClose={handleDialogClose}
        >
            <DialogTitle>Connect Wallet</DialogTitle>
            <DialogContent>
                <List>
                    <ListItem>
                        <FormControlLabel
                            label="Click here to Agree to our terms"
                            control={<Checkbox
                                value={terms}
                                checked={terms}
                                onChange={handleCheckboxChange}
                                color="primary"
                            />}
                        />
                    </ListItem>
                    <Divider/>
                    <ListItem>
                        <Typography variant="h6" xs={12} color="initial">
                            Select Chain
                        </Typography>
                    </ListItem>
                    <ListItem>
                        <Grid container alignItems={"center"} spacing={2}>
                            <Grid item xs={4}>
                                <IconButton
                                    aria-label="Ethereum"
                                    disabled={!terms}
                                    onClick={() => changeChain("Ethereum")}
                                >
                                    <img alt={''} src={"./assets/images/ETH.png"}/>
                                    {chain === "Ethereum" ? (<CheckIcon color="success"/>) : (<></>)}
                                </IconButton>
                                <br/>
                                Ethereum
                            </Grid>
                            <Grid item xs={4}>
                                <IconButton
                                    aria-label="Polygon"
                                    disabled={!terms}
                                    onClick={() => changeChain("Polygon")}
                                >
                                    <img src={"./assets/images/polygon.png"}/>
                                    {chain === "Polygon" ? (<CheckIcon color="success"/>) : (<></>)}
                                </IconButton>
                                <br/>
                                Polygon
                            </Grid>
                        </Grid>
                    </ListItem>
                    <Divider/>
                    <ListItem>
                        <Typography variant="h6" xs={12} color="initial">
                            Select Wallet
                        </Typography>
                    </ListItem>
                    <ListItem>
                        <Grid container alignItems={"center"} spacing={2}>
                            <Grid item xs={4}>
                                <IconButton
                                    aria-label="Metamask"
                                    disabled={!terms}
                                    onClick={() => changeWallet("Metamask")}
                                >
                                    <img alt={''} src={"./assets/images/metamask.svg"}/>
                                    {wallet === "Metamask" ? (<CheckIcon color="success"/>) : (<></>)}
                                </IconButton>
                                <br/>
                                Metamask
                            </Grid>
                            <Grid item xs={4}>
                                <IconButton
                                    aria-label="WalletConnect"
                                    disabled={!terms}
                                    onClick={() => changeWallet("WalletConnect")}
                                >
                                    <img alt={''} src={"./assets/images/wallet_connect.svg"}/>
                                    {wallet === "WalletConnect" ? (<CheckIcon color="success"/>) : (<></>)}
                                </IconButton>
                                <br/>
                                Wallet Connect
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
    </>);
};

export default Wallet;
