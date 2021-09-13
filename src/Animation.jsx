import React from 'react'
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import Button from '@material-ui/core/Button';
import Update from "./poster/UpdatePoster.png";
import Update2 from "./poster/UpdatePoster2.jpg";


const Animation = () => {
  
    return (
        <>
            <div >
                {
                    (window.screen.width>425)?<img src={Update} style={{ height: "93vh", width: "99vw", position: "relative" }} alt="updates" />:<img src={Update2} style={{ height: "93vh", width: "99vw", position: "relative" }} alt="updates" />

                }
               <Button href="#scrolling" style={{left:"45%", backgroundColor: "white", position: "absolute", bottom: 0, borderRadius: "20px", height: "30px", width: "30px", opacity: "0.5" }}><ExpandMoreIcon /></Button>
            </div>
        </>
    );
}

export default Animation;
