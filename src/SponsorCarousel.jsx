import React from 'react';
import Sponser1 from "./poster/sponser1.png";
import Sponser2 from "./poster/sponser2.png";
import Sponser3 from "./poster/sponser3.png";
import Sponser4 from "./poster/sponser4.png";
import Sponser5 from "./poster/sponser5.png";
import Sponser6 from "./poster/sponser6.png";


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
<section class="homeSlider" id="scrolling"> 
	<div id="carouselExampleControls" class="carousel slide" data-bs-ride="carousel">
		<div class="carousel-inner">
			<div class="carousel-item active" id="card1">
				<div class="carousel-caption d-sm-none d-md-block">
				<img src={Sponser1} alt="Event" class="img-fluid"/>
				</div>
			</div>
			<div class="carousel-item" id="card2">
				<div class="carousel-caption d-sm-none d-md-block">
				<img src={Sponser2} alt="Event" class="img-fluid"/>
				</div>
			</div>
			<div class="carousel-item">
				<div class="carousel-caption d-sm-none d-md-block">
				<img src={Sponser3} alt="Event" class="img-fluid"/>
				</div>
			</div>
			<div class="carousel-item">
				<div class="carousel-caption d-sm-none d-md-block">
				<img src={Sponser4} alt="Event" class="img-fluid"/>
				</div>
			</div>
			<div class="carousel-item">
				<div class="carousel-caption d-sm-none d-md-block">
				<img src={Sponser5} alt="Event" class="img-fluid"/>
				</div>
			</div>
			<div class="carousel-item">
				<div class="carousel-caption d-sm-none d-md-block">
				<img src={Sponser6} alt="Event" class="img-fluid"/>
				</div>
			</div>
		</div>
		<button onClick={Handleprev} class="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
			<span class="carousel-control-prev-icon" aria-hidden="true"></span>
		</button>
		<button onClick={Handlenext} class="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
			<span class="carousel-control-next-icon" aria-hidden="true"></span>
		</button>
	</div>
</section>
</>
    );
}
