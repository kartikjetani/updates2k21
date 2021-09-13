import React from 'react'
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import Button from '@material-ui/core/Button';
import Update from "./poster/UpdatePoster.png";
import Update2 from "./poster/UpdatePoster2.png"

const Animation = () => {
    console.log(window.screen.width)
  
    return (
        <>
            <div >
                {
                    (window.screen.width>425)?<img src={Update} style={{ height: "93vh", width: "99vw", position: "relative" }} alt="updates" />:<img src={Update2} style={{ height: "93vh", width: "99vw", position: "relative" }} alt="updates" />

                }
               <Button href="#scrolling" style={{ backgroundColor: "white", position: "absolute", bottom: 0, left: "48vw", borderRadius: "20px", height: "30px", width: "30px", opacity: "0.5" }}><ExpandMoreIcon /></Button>
            </div>
        </>
    );
}

export default Animation;
