import React, { useEffect } from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import Alert from '@material-ui/lab/Alert';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import { NavLink } from 'react-router-dom';


function Copyright() {
    return (
        <Typography variant="body2" color="textSecondary" align="center">
            {'Copyright © '}
            <Link color="inherit" href="https://material-ui.com/">
                Scet
            </Link>{' '}
            {new Date().getFullYear()}
            {'.'}
        </Typography>
    );
}

const useStyles = makeStyles((theme) => ({
    paper: {
        marginTop: theme.spacing(8),
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
    },
    avatar: {
        margin: theme.spacing(1),
        backgroundColor: theme.palette.secondary.main,
    },
    form: {
        width: '100%', // Fix IE 11 issue.
        marginTop: theme.spacing(3),
    },
    submit: {
        margin: theme.spacing(3, 0, 2),
    },
}));

export default function SignUp() {
    const classes = useStyles();
    const [fname, setFname] = React.useState('');
    const [lname, setLname] = React.useState('');
    const [pmail, setPmail] = React.useState('');
    const [branch, setBranch] = React.useState('');
    const [scetid, setScetid] = React.useState('');
    const [mobile, setMobile] = React.useState('');
    const [year, setYear] = React.useState('');
    const [shift, setShift] = React.useState('');
    const [password, setPassword] = React.useState('');
    const [enrollment, setEnrollment] = React.useState('');
    const [alert, setAlert] = React.useState(false);
    const [success, setSuccess] = React.useState(false);
    const [checked, setChecked] = React.useState(false);
    const [alertmsg, setAlertmsg] = React.useState("");

    useEffect(() => {
        setTimeout(() => {
            setAlert(false);
        }, 5000)
    }, [alert, success])

    async function onSubmitHandler(e) {
        e.preventDefault();
        if (fname === "" || lname === '' || pmail === '' || branch === '' || mobile === "" || password === "" || enrollment === "" || year==="" ) {
            setAlert(true);
            setAlertmsg("Fill required details.")
            return;
        } else if (scetid.slice(-11) !== '@scet.ac.in' && scetid !== "") {
            setAlert(true);
            setAlertmsg("Enter Valid Scet email.")
            return;
        } else if (mobile.length !== 10 || isNaN(mobile)) {
            setAlert(true);
            setAlertmsg("Enter Valid Mobile no.")
            return;
        } else if (isNaN(enrollment)) {
            setAlert(true);
            setAlertmsg("Enter valid Enrollment")
            return;
        } else if (!checked) {
            setAlert(true);
            setAlertmsg("Check the checkbox before continue.")
            return;
        }

        let formData = {
            "scetid": scetid,
            "enrollment": enrollment,
            "password": password,
            "firstname": fname,
            "lastname": lname,
            "year": year,
            "dept": branch,
            "shift": shift,
            "phoneno": mobile,
            "personalid": pmail
        }

        try {
            var response = await fetch("http://localhost:5000/signup", {
                method: "POST",
                headers: {
                    'Accept': '*/*',
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(formData),
            }).then(res => res.json())

            if (response.message === "USER_EXIST") {
                setAlert(true);
                setAlertmsg("User Already Exist.")
            } else if (response.message === "SUCCESS") {
                setSuccess(true);
                setAlertmsg("Hurray! Sign up Successfull. You can now login.")
                setTimeout(() => {
                    setSuccess(false)
                }, 10000);
            } else {
                setAlert(true);
                setAlertmsg("Please try again later. or Contact Co-ordinators");
            }
        } catch {
            setAlert(true);
            setAlertmsg("Oops! Something went wrong. please try again later.");
        }

    }


    return (
        <Container component="main" maxWidth="xs" style={{ backgroundColor: "white", borderRadius: "10px" }}>
            <div style={{ position: 'fixed', top: "10px", zIndex: 10, width: "30vw" }} >
                {alert && <Alert severity="error">{alertmsg}</Alert>}
                {success && <Alert severity="success">{alertmsg}</Alert>}
            </div>
            <CssBaseline />
            <div className={classes.paper}>
                <Avatar className={classes.avatar}>
                    <LockOutlinedIcon />
                </Avatar>
                <Typography component="h1" variant="h5">
                    Sign up
                </Typography>
                <form className={classes.form} noValidate>
                    <Grid container spacing={2}>
                        <Grid item xs={12} sm={6}>
                            <TextField
                                autoComplete="fname"
                                name="firstName"
                                variant="outlined"
                                required
                                fullWidth
                                id="firstName"
                                label="First Name"
                                autoFocus
                                onChange={(e) => setFname(e.target.value)}
                            />
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <TextField
                                variant="outlined"
                                required
                                fullWidth
                                id="lastName"
                                label="Last Name"
                                name="lastName"
                                autoComplete="lname"
                                onChange={(e) => setLname(e.target.value)}
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <TextField
                                variant="outlined"
                                required
                                fullWidth
                                id="email"
                                label="Email Address"
                                name="email"
                                autoComplete="email"
                                onChange={(e) => setPmail(e.target.value)}
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <TextField
                                variant="outlined"
                                required
                                fullWidth
                                id="enrollment"
                                label="Enrollment"
                                name="enrollment"
                                onChange={(e) => setEnrollment(e.target.value)}
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <TextField
                                variant="outlined"
                                required
                                fullWidth
                                name="password"
                                label="Create Password"
                                id="Password"
                                onChange={(e) => setPassword(e.target.value)}
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <TextField
                                variant="outlined"
                                required
                                fullWidth
                                name="mobileno"
                                label="Mobile No."
                                id="mobile"
                                autoComplete="current-password"
                                onChange={(e) => setMobile(e.target.value)}
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <TextField
                                variant="outlined"
                                fullWidth
                                name="scetid"
                                label="Scet mail"
                                id="scetid"
                                type="email"
                                onChange={(e) => setScetid(e.target.value)}
                            />
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <FormControl required variant="outlined" className={classes.formControl}>
                                <InputLabel id="demo-simple-select-outlined-label">Department</InputLabel>
                                <Select
                                    labelId="demo-simple-select-outlined-label"
                                    id="demo-simple-select-outlined"
                                    onChange={(e) => setBranch(e.target.value)}
                                    label="Branch"
                                >
                                    <MenuItem value={"CO"}>CO</MenuItem>
                                    <MenuItem value={"IT"}>IT</MenuItem>
                                    <MenuItem value={"EL"}>EL</MenuItem>
                                    <MenuItem value={"EC"}>EC</MenuItem>
                                    <MenuItem value={"Civil"}>Civil</MenuItem>
                                    <MenuItem value={"TT"}>TT</MenuItem>
                                    <MenuItem value={"IC"}>IC</MenuItem>
                                    <MenuItem value={"Chemical"}>Chemical</MenuItem>
                                    <MenuItem value={"Mechanical"}>Mechanical</MenuItem>
                                    <MenuItem value={"Environment"}>Environment</MenuItem>
                                </Select>
                            </FormControl>
                        </Grid>
                       {(branch==="CO" || branch === "EL")? <Grid item xs={12} sm={6} >
                            <FormControl required variant="outlined" className={classes.formControl}>
                                <InputLabel id="demo-simple-select-outlined-label">Shift</InputLabel>
                                <Select
                                    labelId="demo-simple-select-outlined-label"
                                    id="demo-simple-select-outlined"
                                    value={shift}
                                    required={(branch==="CO" || branch === "EL")}
                                    onChange={(e) => setShift(e.target.value)}
                                    label="Shift"
                                >
                                    <MenuItem value={"1"}>Shift-1</MenuItem>
                                    <MenuItem value={"2"}>Shift-2</MenuItem>
                                </Select>
                            </FormControl>
                        </Grid>:null}
                        <Grid item xs={12} sm={6} >
                            <FormControl variant="outlined" className={classes.formControl}>
                                <InputLabel id="demo-simple-select-outlined-label">Year</InputLabel>
                                <Select
                                    labelId="demo-simple-select-outlined-label"
                                    id="demo-simple-select-outlined"
                                    value={year}
                                    required
                                    onChange={(e) => setYear(e.target.value)}
                                    label="Year"
                                >
                                    <MenuItem value={"2"}>2</MenuItem>
                                    <MenuItem value={"3"}>3</MenuItem>
                                    <MenuItem value={"4"}>4</MenuItem>
                                </Select>
                            </FormControl>
                        </Grid>
                        <Grid item xs={12}>
                            <FormControlLabel
                                control={<Checkbox required checked={checked} onChange={() => setChecked(!checked)} color="primary" />}
                                label="I'm hereby declare that all the above details are correct and certificates will be given according to that details."
                            />
                        </Grid>
                    </Grid>

                    <Button
                        type="submit"
                        fullWidth
                        onClick={(e) => onSubmitHandler(e)}
                        variant="contained"
                        color="primary"
                        className={classes.submit}
                    >
                        Sign Up
                    </Button>
                    <Grid container justifyContent="flex-end">
                        <Grid item>
                            <NavLink to="/login" variant="body2">
                                Already have an account? Sign in
                            </NavLink>
                        </Grid>
                    </Grid>
                </form>
            </div>
            <Box mt={5}>
                <Copyright />
            </Box>
        </Container>
    );
}