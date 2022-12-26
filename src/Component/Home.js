/* eslint-disable jsx-a11y/anchor-is-valid */
import "../style/Home.css";
import { Link } from "react-router-dom";
import { Title , Description, Detail1, Detail2, Detail3 } from "./MyContext.js";
import { useContext } from "react";

function Home() 
{
	
	// useContext Hook
	const ptitle = useContext(Title);
    const pdescription = useContext(Description);
	const centraldetail = useContext(Detail1);
	const halldetail = useContext(Detail2);
	const outdoordetail = useContext(Detail3);
	
    return ( 
		
        <div>
            
          <section id="home" >
	<div class="container">
		<div class="row">
			<div class="col-md-12 col-sm-12">
				
				<h1 >{ptitle.title}</h1>
				<h2>{pdescription.description}</h2>
				<button className="learn-more-btn">
				<Link to="/about" style={{textDecoration:'none', color:"black" }}>
                LEARN MORE
                </Link></button>
			</div>
		</div>
	</div>		
</section>
<br></br>
<section>
<div class="content-part-2">
	<div class="content-part-2-inner">
    	<h2 style={{textDecoration:"underline",marginLeft:"450px"}}>Restaurant Interior</h2>
		<br></br>
    	<div className="align-center">
   	    	<img src="https://restaurantindia.s3.ap-south-1.amazonaws.com/s3fs-public/content13085.jpg" alt="" width="400" height="250"/>
			
            <h4 >&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; ( Non AC Hall )</h4>
        </div>
		<div>{halldetail.detail2} </div>
		<br></br>
		<br></br>
        <div className="align-center">
   	    	<img src="https://media.istockphoto.com/id/1084572788/photo/3d-render-of-luxury-restaurant.jpg?s=612x612&w=0&k=20&c=qGxC0jvu17bspV4CFcwyAvFvyGMeGZdigRsCYbwfoZM=" alt="" width="400" height="250"/> 
            <h4>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;( Central AC Hall )</h4>
        </div>
		<div>{centraldetail.detail}</div>
		<br></br>
		<br></br>
		<div className="align-center">
   	    	<img src="https://media-cdn.tripadvisor.com/media/photo-s/06/34/41/55/only-the-restaurant-with.jpg"alt="" width="400" height="250"/> 
            <h4> &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;( Outdoor Hall )</h4>
        </div>
		<div>{outdoordetail.detail3}</div>
    </div>
</div>
</section>
<br></br>
<br></br>

<footer>
		<div class="footer-container">
			<div class="footer-logo">
				<h2>FOODIE PIECE</h2>
				<p>With seamlessly connects your members with commmunity,
				resources.</p>
				
			</div>
			<div class="footer-links">
				<div class="platform">
					<h3>Platform</h3>
					<ul>
						<a href="#"><li>How it Works</li></a>
						<a href="#"><li>Checkout</li></a>
						<a href="#"><li>Fraud</li></a>
						<a href="#"><li>Protection</li></a>
						<a href="#"><li>Payments</li></a>
						<a href="#"><li>Accounts</li></a>
					</ul>
				</div>
				<div class="learning">
					<h3>Learn</h3>
					<ul>
						<a href="#"><li>Resources</li></a>
						<a href="#"><li>Blog</li></a>
						<a href="#"><li>FAQs</li></a>
						<a href="#"><li>ThinkShop</li></a>
					</ul>
				</div>
				<div class="About">
					<h3>About</h3>
					<ul>
						<a href="#"><li>Careers</li></a>
						<a href="#"><li>Team</li></a>
						<a href="#"><li>Partners</li></a>
						<a href="#"><li>Contact Us</li></a>
						<a href="#"><li>News & Press</li></a>
					</ul>
				</div>
			</div>
			<div class="footer-contactus">
				<h2>Contact US</h2>
				<button>Get in touch</button>
			</div>
		</div>
		<div class="copywright-tag">Copyright Foodie Piece. All rights reserved</div>
	</footer>
        </div>
    );
}

export default Home;