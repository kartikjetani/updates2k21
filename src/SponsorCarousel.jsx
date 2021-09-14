import React from 'react';


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
				<img src={"https://i.ibb.co/rp68ZQD/sponser1.png"} alt="Event" className="img-fluid"/>
				</div>
			</div>
			<div className="carousel-item" id="card2">
				<div className="carousel-caption d-sm-none d-md-block">
				<img src={"https://i.ibb.co/HHSK0s5/sponser2.png"} alt="Event" className="img-fluid"/>
				</div>
			</div>
			<div className="carousel-item">
				<div className="carousel-caption d-sm-none d-md-block">
				<img src={"https://i.ibb.co/RCywd1w/sponser3.png"} alt="Event" className="img-fluid"/>
				</div>
			</div>
			<div className="carousel-item">
				<div className="carousel-caption d-sm-none d-md-block">
				<img src={"https://i.ibb.co/ZJQprz4/sponser4.png"} alt="Event" className="img-fluid"/>
				</div>
			</div>
			<div className="carousel-item">
				<div className="carousel-caption d-sm-none d-md-block">
				<img src={"https://i.ibb.co/tzmF98w/sponser5.png"} alt="Event" className="img-fluid"/>
				</div>
			</div>
			<div className="carousel-item">
				<div className="carousel-caption d-sm-none d-md-block">
				<img src={"https://i.ibb.co/fH252SC/sponser6.png"} alt="Event" className="img-fluid"/>
				</div>
			</div>
			<div className="carousel-item">
				<div className="carousel-caption d-sm-none d-md-block">
				<img src={"https://i.ibb.co/W2JmyVy/sponser7.png"} alt="Event" className="img-fluid"/>
				</div>
			</div>
			<div className="carousel-item">
				<div className="carousel-caption d-sm-none d-md-block">
				<img src={"https://i.ibb.co/12mc7vy/sponser8.png"} alt="Event" className="img-fluid"/>
				</div>
			</div>
			<div className="carousel-item">
				<div className="carousel-caption d-sm-none d-md-block">
				<img src={"https://i.ibb.co/6n8WGvZ/sponser9.png"} alt="Event" className="img-fluid"/>
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
