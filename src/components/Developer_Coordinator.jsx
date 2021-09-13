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
					<a href={props.LinkedIn}><img src={props.ImgSrc} class="leader-image" alt="" /></a>
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
				<a href={props.LinkedIn}><img src={props.ImgSrc} class="leader-image" alt="" /></a>
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
						<p className="title" style={{ margin: "12px 0px 20px 12px",fontSize:"40px"}}>Developers</p>
					</div>
					<div class="row mx-auto">
						<DeveloperCard  name="Keyur Kakadiya" LinkedIn="https://www.linkedin.com/in/keyur-kakadiya/" designation="Frontend Developer" year="3rd Year-Div1"  ImgSrc={Keyur}/>
						<DeveloperCard  name="Kartik Jetani" LinkedIn="https://www.linkedin.com/in/kartik-jetani/" designation="Backend Developer" year="3rd Year-Div1" ImgSrc={Kartik}/>
						<DeveloperCard  name="Pritam Davda" LinkedIn="https://www.linkedin.com/in/pritam-davda-028650204/" designation="Frontend Developer" year="2nd Year-Div1"  ImgSrc={Pritam}/>
					</div>
				
					<div className="mx-auto my-3" style={{ color: "white", textAlign: "center" }}>
						<p style={{ margin: "30px 0px 20px 12px",fontSize:"40px"}} className="title">Student Coordinators</p>
					</div>
					<div class="row">
						<CoordinatorCard name="Varun Bhuva" LinkedIn="https://www.linkedin.com/in/bhuva-varun-ba402a20b/" designation="Coordinator" year="4th Year-Div1" ImgSrc={Varun}/>
						<CoordinatorCard name="Divyaraj Thakaria" LinkedIn="https://www.linkedin.com/in/divyaraj-thakaria/" designation="Coordinator" year="4th Year-Div1" ImgSrc={Divyaraj}/>
						<CoordinatorCard name="Nency Badiyani" LinkedIn="https://www.linkedin.com/in/nency-badiyani/" designation="Coordinator" year="4th Year-Div2" ImgSrc={Nency}/>
						<CoordinatorCard name="Abhi Patel" LinkedIn="" designation="Coordinator" year="3rd Year-Div1" ImgSrc={Abhi}/>
					</div>
					<div className="mx-auto my-3 " style={{ color: "white", textAlign: "center" }}>
						<p className="title" style={{ margin: "30px 0px 20px 12px",fontSize:"40px"}}>Faculty Coordinators</p>
					</div>
					<div class="row mx-auto">
						<DeveloperCard name="Jayesh Chaudhary" LinkedIn="https://www.linkedin.com/in/jayeshgchaudhary/" ImgSrc={Jayesh}/>
						<DeveloperCard name="Bhavesh Patel" LinkedIn="https://www.linkedin.com/in/bhavesh-patel-0a528949/" ImgSrc={Bhavesh}/>
						<DeveloperCard name="Jaydeep Barad" LinkedIn="https://www.linkedin.com/in/jaydeep-barad-03b2115a/" ImgSrc={Jaydeep}/>
					</div>
				</div>
			</section>
		</>
	);
}

export default Developer_Coordinator;

