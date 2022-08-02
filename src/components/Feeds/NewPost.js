import React, { useEffect, useHistory, useState } from 'react';
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
import axios from 'axios';

const NewPost = (props) => {

    const [postcontent, setpostcontent] = useState();

    useEffect(() => {
        //get profile info based on localstorage

    });

    const savePost = async (e) => {
        let sessionUserId = localStorage.getItem("user_id");
        let sessionEmail = localStorage.getItem("user_email")
        
            axios({
                    method: 'post',
                    url: `${env.FUNGE_EXPRESSJS_SERVER_BASE_URL}/feeds/post/save`,
                    data: {
                        "user_id": sessionUserId,
                        "post_content": postcontent,
                        "post_date": "2016-06-23 19:10:25-07",
                        "post_tm": "2016-06-23 19:10:25-07"
                    }
            })
    }

    return (
        <>
            <div className="card border-radius my-4 border-0">
                <div className="card-body">
                    <div className="container-fluid p-0">
                        <div className="row">
                            <div className="col-md-1 mt-3 my-2">
                                <img src="./assets/images/nft-5.png" className="rounded-circle me-3" alt="Cinque Terre" width="30" height="30" />
                            </div>
                            <div className="col-md-11 my-2 align-self-end">
                                <TextField className="post-text-area" placeholder='Type Text Here' variant="outlined" onChange={(e) => setpostcontent(e.target.value)}/>
                            </div>
                        </div>
                        <div className="row mb-2 mt-4 px-2">
                            <div className="col-4 d-flex justify-content-between align-self-center newpost-controls">
                                <i className="fas fa-image"></i>
                                <i className="fas fa-user-plus"></i>
                                <i className="far fa-smile"></i>
                                <i className="fas fa-map-marker-alt"></i>
                            </div>
                            <div className="col-8 text-end">
                            
                                <Button
                                    className='btn-primary:hover'
                                    onClick={(e) => savePost(e)}
                                >
                                    Post
                                </Button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
};

export default NewPost;