import React from 'react'
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';

const Footer = () => {

    return (
        <AppBar position="static" style={{backgroundColor:"#5f5454",  zIndex: 6,opacity: 0.7}}>
          <Container maxWidth="md">
            <Toolbar>
              <Typography className="mx-auto" variant="body1" style={{bottom:0}}>
              ⒸSarvajanik Collage of Engineering and Technology
              </Typography>
            </Toolbar>
          </Container>
        </AppBar>
    )
}

export default Footer;
