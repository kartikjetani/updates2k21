import React from 'react'
import Cources from "./poster/cources.jpg";
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Navbar from "./Navbar";
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import TextField from '@material-ui/core/TextField';
import Checkbox from '@material-ui/core/Checkbox';
import { useLocation } from 'react-router';
import Alert from '@material-ui/lab/Alert';
import event_list from "./data/eventdata";
import Accordion from '@material-ui/core/Accordion';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';



const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
  },
  heading: {
    fontSize: theme.typography.pxToRem(15),
    fontWeight: theme.typography.fontWeightRegular,
  },
}));

const Explore = (props) => {
  const [open, setOpen] = React.useState(false);
  const [checked, setChecked] = React.useState(false);
  const [alertmsg, setAlertmsg] = React.useState('');
  const [enrollment2, setEnrollment2] = React.useState('');
  const [enrollment3, setEnrollment3] = React.useState('');
  const [alert, setAlert] = React.useState(false);
  const [success, setSuccess] = React.useState(false);

  const location = useLocation()
  const path = location.pathname
  const EventName = path.substr(1, path.length)
  const classes = useStyles();

  const data = event_list[EventName]


  React.useEffect(() => {
    setTimeout(() => {
      setAlert(false);
      setSuccess(false);
    }, 5000)

  }, [alert, success])


  const handleClickOpen = () => {
    setOpen(true);
    if (EventName === "Valorant") {
      window.open("https://forms.gle/TBsDTaywqSUe6MjeA")
      setOpen(false);
    }
  };

  const verifyHandler = async (enroll) => {

    let bodydata = {
      "enrollment": enroll,
      "eventname": EventName
    }

    var response = await fetch("http://localhost:5000/enrollment-exist", {
      method: "POST",
      headers: {
        'Accept': '*/*',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(bodydata),
    }).then(res => res.json())

    if (response.message === "USER_NOT_EXIST") {
      setAlert(true);
      setAlertmsg(enroll + " Enrollment not exist. Tell them to Signup first.");
      return;
    } else if (response.message === "ALREADY_REGISTERED") {
      setAlert(true);
      setAlertmsg(response.desc);
      return;
    } else if (response.message === "NOT_REGISTERED") {
      setSuccess(true);
      setAlertmsg(response.desc);
      return;
    }


  }
  const handleSubmit = async () => {
    if (localStorage.getItem("token") === "") {
      setAlert(true);
      setAlertmsg("Please login to register.");
      return;
    }
    else if (!checked) {
      setAlert(true);
      setAlertmsg("Please tick the checkbox.");
      return;
    }

    let members = [enrollment2, enrollment3].filter((item) => (item !== ''));
    console.log(members);

    let bodydata = {
      "eventname": EventName,
      "token": localStorage.getItem("token"),
      "members": members
    }
    console.log("bodydata", bodydata);

    var response = await fetch("http://localhost:5000/event-register", {
      method: "POST",
      headers: {
        'Accept': '*/*',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(bodydata),
    }).then(res => res.json()).catch(() => {
      setAlert(true);
      setAlertmsg("Oops! Something went wrong. please try again later.");
    })

    // setOpen(false);
    if (!response) {
      return
    }
    else if (response.message === "USER_NOT_EXIST") {
      setAlert(true);
      setAlertmsg(response.desc)
    } else if (response.message === "SUCCESS") {
      setSuccess(true);
      setAlertmsg(response.desc)
      setTimeout(() => {
        setSuccess(false)
      }, 10000);
    } else if (response.message === "ALREADY_REGISTERED") {
      setAlert(true);
      setAlertmsg(response.desc);
    }
    console.log(response);
    console.log("submitted")
  }

  const handleClose = () => {
    setOpen(false);
  }

  return (
    <>
      <div className="row mx-auto">
        <div className="col-sm-12 col-md-4">
          <img className="my-4 mx-auto" src={data.ImgSrc} style={{ width: "100%" }} alt="" />
          <div className="mx-auto" style={{ color: "white", textAlign: "center" }}>
            <p>Event Name : {data.Eventname}</p>
            <p>Time : {data.Eventtime}</p>
            <p>Venue : {data.Eventvanue}</p>
            <Button onClick={handleClickOpen} style={{ color: "white", backgroundColor: "blue" }}>Register</Button>
            <Dialog
              open={open}
              onClose={handleClose}
              aria-labelledby="alert-dialog-title"
              aria-describedby="alert-dialog-description"
            >

              <div style={{ position: 'fixed', top: "10px", zIndex: 10, width: "25rem" }} >
                {success && <Alert severity="success">{alertmsg}</Alert>}
                {alert && <Alert severity="error">{alertmsg}</Alert>}
              </div>

              <DialogTitle id="alert-dialog-title">{"Confirm Your Registration"}</DialogTitle>


              <DialogContent>
                <p> Add other team member's enrollment. not yours!</p>

                {(EventName === "BidWiser" || EventName === "BingeWatch" || EventName === "Zodiac" || EventName == "CodeStorm" || EventName == "ScvengerHunt" || EventName === "Avishkar" || EventName === "Abhivyakti" || EventName === "Predictaholic") && <div className="my-4">
                  <span className="mx-2">Member 2:</span>
                  <TextField
                    id="Enrollment2"
                    label="Enrollment No."
                    type="Enrollment No."
                    autoComplete="current-enrollment"
                    variant="outlined"
                    onChange={(e) => setEnrollment2(e.target.value)}
                    style={{ height: "15px !important" }}
                  />
                  <Button className="mx-3" variant="contained" onClick={() => verifyHandler(enrollment2)} color="primary">verify</Button>
                </div>}
                {(EventName === "BingeWatch" || EventName === "Avishkar") && <div className="my-4">
                  <span className="mx-2">Member 3:</span>
                  <TextField
                    id="Enrollment3"
                    label="Enrollment No."
                    type="Enrollment No."
                    autoComplete="current-enrollment"
                    variant="outlined"
                    onChange={(e) => setEnrollment3(e.target.value)}
                    style={{ height: "15px !important" }}
                  />
                  <Button className="mx-3" variant="contained" onClick={() => verifyHandler(enrollment3)} color="primary">verify</Button>
                </div>}

                <div>
                  <Checkbox
                    checked={checked}
                    onChange={() => setChecked(!checked)}
                    inputProps={{ 'aria-label': 'primary checkbox' }}
                  />Verify all the enrollment before submission.</div>
              </DialogContent>
              <DialogActions>

                <Button onClick={handleSubmit} color="primary" autoFocus>
                  Submit
                </Button>
              </DialogActions>
            </Dialog>

          </div>
        </div>
        <div className="col-sm-12 col-md-8 text-left" >

          <div style={{ color: "white", textAlign: "left" }}>
            <p ><span style={{ color: "red" }}>Event Name:</span> {data.Eventname}</p>
            <p><span style={{ color: "red" }}>Tagline:</span>“{data.Tagline}”
            </p>
              {data.Description.map((val) => {
                return (<>
                  <p>{val}</p> <br/>
                </>)
              }
              )}
              <p>
                <span style={{ color: "red" }}> Student Co-Ordinators:</span><br />
                {data.Student_CoOrdinators.map((val) => {
                  return (
                    <p>{val}</p>
                  )
                })}</p>
              <p>
                <span style={{ color: "red" }}>Faculty Co-Ordinators:</span><br />
                {data.Faculty_CoOrdinators.map((val) => {
                  return (
                    <p>{val}</p>
                  )
                })}</p>

          </div>
        </div>
      </div>
    </>
  );
}

export default Explore;
