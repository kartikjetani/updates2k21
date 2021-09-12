import React from 'react'
import EventCard from "./components/EventCard";
import { NavLink } from "react-router-dom";

const Events = () => {
    return (
        <>
            <div id="non-tech">
                <div class="mx-auto" style={{ color: "white", textAlign: "center" }}>
                    <p style={{ margin: "12px 0px 0px 12px",fontSize:"20px"}} className="title">Non-Technical Events</p>
                </div>
                <div className="row mx-auto" >
                    <NavLink className="col-sm-12 col-md-6 col-lg-3 my-2 btn text-left" to="/Valorant">
                        <EventCard
                            EventName="Valorant"
                            ImgSrc="https://i.ibb.co/wKvK3W7/valorant-01.png"
                            EventDescription="events description"
                        />
                    </NavLink>
                    <NavLink className="col-sm-12 col-md-6 col-lg-3 my-2 btn text-left" to="/BidWiser">
                        <EventCard
                            EventName="Bid Wars"
                            ImgSrc="https://i.ibb.co/f1vnPB6/BIDWARS-FINAL1.jpg"
                            EventDescription="events description"
                        />
                    </NavLink>
                    <NavLink className="col-sm-12 col-md-6 col-lg-3 my-2 btn text-left" to="/BingeWatch">
                        <EventCard
                            EventName="Watch Craft"
                            ImgSrc="https://i.ibb.co/W6sczcn/watch-craft-final1.png"
                            EventDescription="events description"
                        />
                    </NavLink>
                    <NavLink className="col-sm-12 col-md-6 col-lg-3 my-2 btn text-left" to="/ScvengerHunt">
                        <EventCard
                            EventName="Scavenger Hunt"
                            ImgSrc="https://i.ibb.co/2kyqjTX/scavenger-hunt-01.png"
                            EventDescription="events description"
                        />
                    </NavLink>
                </div>
                <div id="tech">
                    <div className="mx-auto" style={{ color: "white", textAlign: "center" }}>
                        <p style={{ margin: "12px 0px 0px 12px",fontSize:"20px" }} className="title">Technical Events</p>
                    </div>
                    <div className="row mx-auto">
                        <NavLink className="col-sm-12 col-md-6 col-lg-3 my-2 btn text-left" to="/Abhivyakti">
                            <EventCard
                                EventName="Abhivyakti"
                                ImgSrc="https://i.ibb.co/7Vqz5FB/Abhivyakti-final.png"
                                EventDescription="events description"
                            />
                        </NavLink>
                        <NavLink className="col-sm-12 col-md-6 col-lg-3 my-2 btn text-left" to="/Avishkar">
                            <EventCard
                                EventName="Avishkar"
                                ImgSrc="https://i.ibb.co/dcJJ7SK/Avishkar-final-1.jpg"
                                EventDescription="events description"
                            />
                        </NavLink>
                        <NavLink className="col-sm-12 col-md-6 col-lg-3 my-2 btn text-left" to="/Predictaholic">
                            <EventCard
                                EventName="Predictaholic"
                                ImgSrc="https://i.ibb.co/G0HZ80S/Predictaholic-final.png"
                                EventDescription="events description"
                            />
                        </NavLink>
                        <NavLink className="col-sm-12 col-md-6 col-lg-3 my-2 btn text-left" to="/Zodiac">
                            <EventCard
                                EventName="The Enigma"
                                ImgSrc="https://i.ibb.co/GWPrhzw/The-Enigma.png" 
                                EventDescription="events description"
                            />
                        </NavLink>
                        <NavLink className="col-sm-12 col-md-6 col-lg-3 my-2 btn text-left" to="/Niyukti">
                            <EventCard
                                EventName="Niyukti"
                                ImgSrc="https://i.ibb.co/0sVvSk2/Niyukti-final.png"
                                EventDescription="events description"
                            />
                        </NavLink>
                        <NavLink className="col-sm-12 col-md-6 col-lg-3 my-2 btn text-left" to="/Codechef">
                            <EventCard
                                EventName="Code Fiesta(Code Chef)"
                                ImgSrc="https://i.ibb.co/nqXN5cq/CODE-FIESTA-FINAL1.jpg"
                                EventDescription="events description"
                            />
                        </NavLink>
                        <NavLink className="col-sm-12 col-md-6 col-lg-3 my-2 btn text-left" to="/CodeStorm">
                            <EventCard
                                EventName="Code Storm(DSC)"
                                ImgSrc="https://i.ibb.co/LkkChTz/Code-storm-Final.png"
                                EventDescription="events description"
                            />
                        </NavLink>
                        <NavLink className="col-sm-12 col-md-6 col-lg-3 my-2 btn text-left" to="/BlindCode">
                            <EventCard
                                EventName="Blind Code(DSC)"
                                ImgSrc="https://i.ibb.co/89kvynn/BLIND-CODE-01.jpg"
                                EventDescription="events description"
                            />
                        </NavLink>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Events;
