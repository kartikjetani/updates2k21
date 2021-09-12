import React from 'react'
import Kartik from "../poster/kartik.jpeg";
import Keyur from "../poster/keyur.jpeg";
import Pritam from "../poster/pritam.jpg";
import Nency from "../poster/nency.jpg";
import Divyaraj from "../poster/divyaraj.jpeg";
import Varun from "../poster/varun.jpg";
import Abhi from "../poster/abhi.jpg";
import Jayesh from "../poster/jayesh.jpg";
import Jaydeep from "../poster/jaydeep.jpg";
import Bhavesh from "../poster/bhavesh.jpg";

const CoordinatorCard = (props) => {
	return (
		<>
			<div class="col-sm-3">
				<center>
					<img src={props.ImgSrc} class="leader-image" alt="" />
				</center>
				<center>
					<h3 style={{ color: "white" }} class="mt-3">{props.name}</h3>
					<h5 style={{ color: "white" }}>{props.designation}</h5>
					<h5 style={{ color: "white" }}>{props.year}</h5>
				</center>
			</div>
		</>
	)
}

const DeveloperCard = (props) => {
	return (
		<>
			<div class="col-sm-4">
				<center>
					<img src={props.ImgSrc} class="leader-image" alt="" />
				</center>
				<center>
					<h3 style={{ color: "white" }} class="mt-3">{props.name}</h3>
					<h5 style={{ color: "white" }}>{props.designation}</h5>
					<h5 style={{ color: "white" }}>{props.year}</h5>
				</center>
			</div>
		</>
	)
}


const Developer_Coordinator = () => {
	return (
		<>
			<section class="section-3a p-4">
				<div class="container-fluid p-5">
				<div className="mx-auto my-3 " style={{ color: "white", textAlign: "center" }}>
						<p className="title" style={{ margin: "12px 0px 4px 12px",fontSize:"20px"}}>Feculty Coordinator</p>
					</div>
					<div class="row mx-auto">
						<DeveloperCard name="Jaydeep Barad"  ImgSrc={Jaydeep}/>
						<DeveloperCard name="Bhavesh Patel" ImgSrc={Bhavesh}/>
						<DeveloperCard name="Jayesh Chaudhari" ImgSrc={Jayesh}/>
					</div>
					<div className="mx-auto my-3" style={{ color: "white", textAlign: "center" }}>
						<p style={{ margin: "12px 0px 4px 12px",fontSize:"20px"}} className="title">Student Coordinators</p>
					</div>
					<div class="row">
						<CoordinatorCard name="Varun Bhuva" designation="Coordinator" year="4th Yr-Div1" ImgSrc={Varun}/>
						<CoordinatorCard name="Divyaraj Thakaria" designation="Coordinator" year="4th Yr-Div1" ImgSrc={Divyaraj}/>
						<CoordinatorCard name="Nency Badiyani" designation="Coordinator" year="4th Yr-Div2" ImgSrc={Nency}/>
						<CoordinatorCard name="Abhi Patel" designation="Coordinator" year="3rd Yr-Div1" ImgSrc={Abhi}/>
					</div>
					<div className="mx-auto my-3 " style={{ color: "white", textAlign: "center" }}>
						<p className="title" style={{ margin: "12px 0px 4px 12px",fontSize:"20px"}}>Developers</p>
					</div>
					<div class="row mx-auto">
						<DeveloperCard name="Keyur Kakadiya" designation="Frontend Developer" year="3rd Yr-Div1"  ImgSrc={Keyur}/>
						<DeveloperCard name="Kartik Jetani" designation="Backend Developer" year="3rd Yr-Div1" ImgSrc={Kartik}/>
						<DeveloperCard name="Pritam Davda" designation="Frontend Developer" year="2nd Yr-Div1"  ImgSrc={Pritam}/>
					</div>
				</div>
			</section>
		</>
	);
}

export default Developer_Coordinator;

