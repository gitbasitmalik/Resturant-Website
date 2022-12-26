import Navbar from "../src/Component/NavBar.js";
// import About from "./About";
import Home from "../src/Component/Home.js";
import { Routes , Route } from "react-router-dom";
import Order from "../src/Component/Order.js";
import Menu from "../src/Component/Menu.js";
import Login from "../src/Component/Login.js";
import Signup from "../src/Component/Signup.js";
import Cart from "../src/Component/Cart.js";
import Payment from "../src/Component/Payment.js";
import Admin from "./Component/Admin.js";
import Animate from "./Component/Animate.js";
// import UseMemo from "../src/UseMemo";
// import UseContextExample from "../src/Component/UseContext";
// import UseContext from "../src/Component/UseContext";
// import TimeDisplay from "../src/Component/TimeDisplay";
// import Time from "../src/Component/Time";
// import UseCallbackCounterParent from "../src/Component/UseCallbackCounterParent";
// import Timer from "../src/Component/UseEffect";

function App() {
  
  return ( 
  <div>
    
    <Navbar/>
    <Animate/>
    {/* <UseMemo/> */}
    {/* <UseContext/> */}
    {/* <Timer/> */}
    {/* <UseContextExample/> */}

    {/* <TimeDisplay/> */}
    {/* <UseCallbackCounterParent/> */}
    {/* <Time/> */}
     
    <Routes>
      
          <Route path="/" element={<Home/>}>
          </Route>
          {/* <Route path="/about" element={<About/>}>
          </Route> */}
          <Route path="/order" element={<Order/>}>
          </Route>
          <Route path="/menu" element={<Menu/>}>
          </Route>
          <Route path="/login" element={<Login/>}>
          </Route>
          <Route path="/signup" element={<Signup/>}>
          </Route>
        <Route path="/order/cart" element={<Cart/>}/>
        <Route path="/order/cart/payment" element={<Payment/>}/>
        <Route path="/Admin" element={<Admin/>}/>
    </Routes>
  </div>
   );
}
export default App;