
import { Link , useNavigate } from "react-router-dom";
import "../style/NavStyle.css";

function Navbar() 
{
  const navigate = useNavigate();
  function handleNavigate()
  {
    navigate("/");
  }
  
    return ( 
        <div id="main">
          <header >

            {/* useNavigate Hook */}
            <h1 id="logo"  onClick={handleNavigate}> FOODIE PIECE </h1> 
            
          <nav>
            <ul>
              <li>
                <Link to="/" style={{textDecoration:'none', color:"black" }}>
                Home
                </Link>

              </li>
              {/* <li>
              <Link to="/about" style={{textDecoration:'none', color:"black" }}>
                About
                </Link>

              </li> */}
              <li>
                <Link to="/menu" style={{textDecoration:'none', color:"black" }}>
                Menu
                </Link>
                </li>
                <li>
                <Link to="/order" style={{textDecoration:'none', color:"black" }}>
                Order Now
                </Link>
                </li>

              <li>
                <button className="nav_btn" style={{borderRadius:10}}>
              <Link to="/login" style={{textDecoration:'none', color:"black"}}>
                Login In
                </Link>
                </button>

              </li>
              <li>
                <button className="nav_btn" style={{borderRadius:10 }}>
              <Link to="/signup" style={{textDecoration:'none', color:"black"}}>
                Sign Up
                </Link>
                </button>

              </li>
            </ul>
            </nav>
            </header>

        </div>
     );
}

export default Navbar;