import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "../style/Cart.css";

function Cart() 
{
    const cancel = useNavigate();
    const [quantity , setQuanity] = useState(0);
    function handleIncrease()
    {
        setQuanity(quantity+1);
    }
    function handleDecrease()
    {
        setQuanity(quantity-1);
    }

   function handleCancel()
    {
        cancel("/order");
    }
    return  ( 

        <div>
              
<article class="cart">
  
    <div class="cart__thumb"><img style={{height:"200px" , width:"295px",objectFit:"cover"}} src="https://media.istockphoto.com/id/488481490/photo/fish-biryani-with-basmati-rice-indian-food.jpg?s=612x612&w=0&k=20&c=9xEw3VOQSz9TP8yQr60L47uExyKF9kogRhQdlghlC00=" alt="" ></img></div>
    <div class="cart__content" >
      <h5 class="cart__title">Foodie Piece Chicken Biryani</h5 >
      
      <button className="btnCart" onClick={handleDecrease}>-</button>
      &nbsp; {quantity}
      <button className="btnCart" onClick={handleIncrease}>+</button>
      <button className="orderplace-btn" > <Link to="/order/cart/payment" style={{textDecoration:'none', color:"black"}}>Confirm Payment </Link></button>
      <button className="cancel" onClick={handleCancel}>Cancel</button>
    </div>
  
</article>
        </div>
     );
}

export default Cart;
