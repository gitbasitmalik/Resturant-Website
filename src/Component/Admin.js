import "../style/Admin.css";
import { Link} from "react-router-dom";


function Admin() {

    return ( 
        <div>
            <h1 id="title" >Welcome to the Admin Panel</h1>
            <div id="mySidenav" class="sidenav">
		
	  <Link to="/dashboard">Dashboard</Link>
	  <Link to="/customer">Customers</Link>
	  <Link tp="/projects">Projects</Link>
	  <Link to="/orderDashboard">Orders</Link>
	  <Link to="/inventory">Inventory</Link>
	  <Link to="/accounts">Accounts</Link>
	  <Link to="/login">Logout</Link>

	
        </div>
		</div>
     );
}

export default Admin;