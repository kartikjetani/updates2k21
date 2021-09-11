import React from 'react';
import Cources from "../poster/cources.jpg";

const EventCard = (props) => {
  return (
    <div className="card border-0">
                <img src={props.ImgSrc} className="card__image" alt="" />
                <div className="card__overlay">
                    <center>
                        <p className="card__description">{props.EventName}</p>
                    </center>
                </div>
                </div>
  );
}

export default EventCard;