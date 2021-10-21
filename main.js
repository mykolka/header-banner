const button = document.getElementById("btn"),
	  bannerBox = document.getElementById("bannerBox");	  

const banner = document.createElement('baner');

const createBanner = function() {
	button.style.display = 'none';	
	banner.innerHTML = `
		<style>
			.bannerWrapper{
			 	display: flex;
			 	flex-direction: row;
			 	height: 400px;
			 	width: 800px;
			 	margin: auto auto;
			 }
			 baner{
			 	width: 100%;
				position: relative;
			 }
			 .leftPart{
			 	width: 50%;
			 	height: 100%;
			 	background-color: rgb(132, 139, 167);
			 	display: flex;
			 	flex-direction: column;
			 	align-items: center;
			 	justify-content: center;
			 }
			 h2{
			 	padding-bottom: 20px;
			 }
			 .btn{
			 	width: 50%;
			 	height: 25px;
			 	background-color: rgb(41, 55, 85);
			 	color: white;
			 	display: flex;
			 	align-items: center;
			 	justify-content: center;
			 	cursor: pointer;
			 	border-radius: 5px;
			 }
			 .rightPart{
			 	height: 100%;
			 	width: 50%;
			 	background-image: url('icons/bgr.jpeg');
			 	background-position: center center;
			 	position: relative;
			 }
			.rightPart:hover{
				cursor: pointer;
			}
		</style>


<div class="bannerWrapper">
	<div class="leftPart">
		<h1>Lorem ipsum, dolor.</h1>
		<h2>Lorem ipsum dolor sit, amet.</h2>
		<div class="btn">кнопка</div>
	</div>
	<div class="rightPart">		
		<div class="close" id="closeBanner">+</div>	
	</div>
</div>

	`
	bannerBox.appendChild(banner);
	const bannerWrap = document.querySelector(".bannerWrapper"),
		bannerImage = document.querySelector(".rightPart"),
		closeBanner = document.getElementById("closeBanner");

		closeBanner.addEventListener('click', (e) => {	
			bannerWrap.style.display = 'none';
			banner.innerHTML = "";
			button.style.display = "block";
			e.stopPropagation();		
		})


	bannerImage.addEventListener('click', () => { 			
 		const subBanner = document.createElement('div');
	subBanner.innerHTML = `
		<style>
			.subBaner{
				width: 800px;
				height: 400px;				
				background-color: rgb(103, 143, 230);
				opacity: 0.9;
				display: flex;
				align-items: center;
				justify-content: center;
				position: absolute;
				top: 0;
				left: 0;
			}
			h3{
				width: 70%;
				color: white;
			}

		</style>
	<div class="subBaner">
		<h3>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Blanditiis minus labore, rem reprehenderit culpa iusto provident omnis.</h3>
		<div id="closeSubBaner" class="close">+</div>
	</div>

	`
	banner.appendChild(subBanner);
	const closeSubBaner = document.getElementById("closeSubBaner");

		closeSubBaner.addEventListener('click', () => {				
			subBanner.innerHTML = "";			
		})
 })
}








