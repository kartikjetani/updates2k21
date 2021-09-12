import React from 'react';
import Sponser1 from "./poster/sponser1.jpeg";
import Sponser2 from "./poster/sponser2.jpeg";
import Sponser3 from "./poster/sponser3.png";

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
				if(i > 0){
					images[(i-1)].classList.add("active")
				}else{
					images[images.length].classList.add("active")
				}
				break;
			}
		}
	}

	setInterval(
		function(){
			Handlenext()
		},3000)
    
    return (
        <>
		<div className="mx-auto my-3" style={{ color: "white", textAlign: "center" }}>
						<p style={{ margin: "12px 0px 4px 12px",fontSize:"20px"}} className="title">Sponsors</p>
					</div>
<section class="homeSlider" id="scrolling"> 
	<div id="carouselExampleControls" class="carousel slide" data-bs-ride="carousel">
		<div class="carousel-inner">
			<div class="carousel-item active" id="card1">
				<div class="carousel-caption d-sm-none d-md-block">
				<img src={Sponser3} alt="Event" class="img-fluid"/>
				</div>
			</div>
			<div class="carousel-item" id="card2">
				<div class="carousel-caption d-sm-none d-md-block">
				<img src={Sponser2} alt="Event" class="img-fluid"/>
				</div>
			</div>
			<div class="carousel-item">
				<div class="carousel-caption d-sm-none d-md-block">
				<img src={Sponser1} alt="Event" class="img-fluid"/>
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
