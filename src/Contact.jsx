import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Avatar from '@material-ui/core/Avatar';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Container from '@material-ui/core/Container';
import CallIcon from '@material-ui/icons/Call';


const useStyles = makeStyles((theme) => ({
    paper: {
        marginTop: theme.spacing(8),
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
    },
    other: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'left',

    }

}));
const Contact = () => {
    const classes = useStyles();

    return (
       <>
            <Container component="main" maxWidth="xs" style={{ paddingBottom:"25px", backgroundColor: "white", borderRadius: "10px" }}>
            <CssBaseline />
            <div className={classes.paper}>
                <Typography className="my-2" component="h1" variant="h5">
                    Contact Us
                </Typography>
            </div>

            <Container component="main" maxWidth="xs" style={{marginBottom:"25px", backgroundColor: "#7ec8e3", borderRadius: "10px" }}>
            <CssBaseline />
            <div className={classes.other}>
                <Typography style={{fontSize:"20px",margin:"2px"}}>
                    <div className="row">
                    <div className="col-sm-6" style={{color:"white"}}>Keyur Kakadiya</div>
                    <div className="col-sm-6" style={{textAlign:"right",color:"white"}}><CallIcon/><a href="tel:8238020140" style={{textDecoration:"none",color:"white"}}>8238020140</a></div>
                    </div>
                </Typography>
            </div>
            </Container>

            <Container component="main" maxWidth="xs" style={{marginBottom:"25px", backgroundColor: "#7ec8e3", borderRadius: "10px" }}>
            <CssBaseline />
            <div className={classes.other}>
                <Typography style={{fontSize:"20px",margin:"2px"}}>
                    <div className="row">
                    <div className="col-sm-6" style={{color:"white"}}>Kartik Jetani</div>
                    <div className="col-sm-6" style={{textAlign:"right",color:"white"}}><CallIcon/><a href="tel:8000907083" style={{textDecoration:"none",color:"white"}}>8000907083</a></div>
                    </div>
                </Typography>
            </div>
            </Container>
            <Container component="main" maxWidth="xs" style={{ marginBottom:"25px", backgroundColor: "#7ec8e3", borderRadius: "10px" }}>
            <CssBaseline />
            <div className={classes.other}>
                <Typography style={{fontSize:"20px",margin:"2px"}}>
                    <div className="row">
                    <div className="col-sm-6" style={{color:"white"}}>Pritam Davda</div>
                    <div className="col-sm-6" style={{textAlign:"right",color:"white"}}><CallIcon/><a href="tel:7359487834" style={{textDecoration:"none",color:"white"}}>7359487834</a></div>
                    </div>
                </Typography>
            </div>
            </Container>
            </Container>
       </>
    )
}

export default Contact;
