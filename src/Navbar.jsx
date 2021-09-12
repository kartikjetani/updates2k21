import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import InstagramIcon from '@material-ui/icons/Instagram';
import FacebookIcon from '@material-ui/icons/Facebook';
import { NavLink } from 'react-router-dom';
import Logo from "./poster/UpdatesLogo.png";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}));

const Navbar = () => {
  const classes = useStyles();
  const [islogin , setIslogin] = React.useState((localStorage.getItem("token")!==""));

  return (
    <>
      <nav id="navbar">                                                                                                                                                                                
        <ul>
        <li variant="h6" className={classes.title} style={{position:"absolute",left:0}}>
              <img className="mx-2" src={Logo} style={{height:"20px",width:"20px"}} alt="logo"/>updates2k21
              </li>
          <li className="navigation-bar mr-5"><a href="https://www.facebook.com/Computer-Engineering-Department-SCET-106234227938812/"><FacebookIcon /></a></li>
          <li className="navigation-bar mr-5"><a href="https://www.instagram.com/updates2021_scet/?utm_medium=copy_link"><InstagramIcon /></a></li>
          <li className="navigation-bar mr-5"><NavLink to="/">Home</NavLink></li>
          {(!islogin)?  <><li className="navigation-bar mr-5"><NavLink to="/signup">Signup</NavLink></li>
          <li className="navigation-bar mr-5"><NavLink to="/login">Login</NavLink></li></> :<li className="navigation-bar mr-5" style={{cursor:'pointer'}} onClick={()=>{localStorage.setItem("token","");setIslogin(false)}} >Logout </li>  }
        </ul>
      </nav>
    </>
  );
}

export default Navbar;