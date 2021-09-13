import React from 'react';
import Sponser1 from "./poster/sponser1.png";
import Sponser2 from "./poster/sponser2.png";
import Sponser3 from "./poster/sponser3.png";
import Sponser4 from "./poster/sponser4.png";
import Sponser5 from "./poster/sponser5.png";
import Sponser6 from "./poster/sponser6.png";
import Sponser7 from "./poster/sponser7.png";
import Sponser8 from "./poster/Sponser8.png";



export default function SponsorCarousel() {
	const Handlenext = () =>{
		const images = document.getElementsByClassName("carousel-item")
		for(let i=0;i < images.length;i++)
		{
			if(images[i].classList.contains("active")){
				images[i].classList.remove("active");
				images[(i+1)%(images.length)].classList.add("active")
				break;
			}
		}
	}
    
	const Handleprev = () =>{
		const images = document.getElementsByClassName("carousel-item")
		for(let i=0;i < images.length;i++)
		{
			if(images[i].classList.contains("active")){
				images[i].classList.remove("active");
				if(i === 0){
					images[images.length].classList.add("active")
				}else{
					images[(i-1)].classList.add("active")
				}
				break;
			}
		}
	}

	React.useEffect(() => {
		
	setInterval(
		function(){
			Handlenext()
		},3000)
    
	},[])

    return (
        <>
		<div className="mx-auto my-3" style={{ color: "white", textAlign: "center" }}>
						<p style={{ margin: "20px 0px 20px 12px",fontSize:"40px"}} className="title">Sponsors</p>
		</div>
		<section className="homeSlider" id="scrolling"> 
	<div id="carouselExampleControls" className="carousel slide" data-bs-ride="carousel">
		<div className="carousel-inner">
			<div className="carousel-item active" id="card1">
				<div className="carousel-caption d-sm-none d-md-block">
				<img src={Sponser1} alt="Event" className="img-fluid"/>
				</div>
			</div>
			<div className="carousel-item" id="card2">
				<div className="carousel-caption d-sm-none d-md-block">
				<img src={Sponser2} alt="Event" className="img-fluid"/>
				</div>
			</div>
			<div className="carousel-item">
				<div className="carousel-caption d-sm-none d-md-block">
				<img src={Sponser3} alt="Event" className="img-fluid"/>
				</div>
			</div>
			<div className="carousel-item">
				<div className="carousel-caption d-sm-none d-md-block">
				<img src={Sponser4} alt="Event" className="img-fluid"/>
				</div>
			</div>
			<div className="carousel-item">
				<div className="carousel-caption d-sm-none d-md-block">
				<img src={Sponser5} alt="Event" className="img-fluid"/>
				</div>
			</div>
			<div className="carousel-item">
				<div className="carousel-caption d-sm-none d-md-block">
				<img src={Sponser6} alt="Event" className="img-fluid"/>
				</div>
			</div>
			<div className="carousel-item">
				<div className="carousel-caption d-sm-none d-md-block">
				<img src={Sponser7} alt="Event" className="img-fluid"/>
				</div>
			</div>
			<div className="carousel-item">
				<div className="carousel-caption d-sm-none d-md-block">
				<img src={Sponser8} alt="Event" className="img-fluid"/>
				</div>
			</div>
		</div>
		<button onClick={Handleprev} className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
			<span className="carousel-control-prev-icon" aria-hidden="true"></span>
		</button>
		<button onClick={Handlenext} className="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
			<span className="carousel-control-next-icon" aria-hidden="true"></span>
		</button>
	</div>
</section>
</>
    );
}
