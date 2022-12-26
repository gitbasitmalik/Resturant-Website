import "../style/Order.css";

import { Link } from "react-router-dom";
import { useState } from "react";
// import Cart from "./Cart.js";


function Order()  {
  // eslint-disable-next-line no-unused-vars
  const [Orderdata, setOrderdata] =useState([
    {
      id:1,
      image: (
        
        <img
          src="https://www.cubesnjuliennes.com/wp-content/uploads/2020/07/Chicken-Biryani-Recipe-500x500.jpg"
          alt=""
        ></img>
      ),
      foodname: "Foodie-Piece Bariyani(1kg)",
      ingredient: "Rice / Raita / Drink",
      price: "500Rs/-",
    },
    {
      id:2,
      image: (
        <img
          src="https://www.cubesnjuliennes.com/wp-content/uploads/2019/11/Mutton-Curry-500x500.jpg"
          alt=""
        ></img>
      ),
      foodname: "Foodie-Piece Mutton(full)",
      ingredient: "Meat / Cheese / Lemon",
      price: "1000Rs/-",
    },
    {
      id:3,
      image: (
        <img
          src="https://spicecravings.com/wp-content/uploads/2018/05/Tandoori-Chicken-3-500x500.jpg"
          alt=""
        ></img>
      ),
      foodname: "Foodie-Piece Tandori Chicken(full)",
      ingredient: "Chicken / Masala / Salad",
      price: "800Rs/-",
    },
    {
      id:4,
      image: (
        <img
          src="https://glebekitchen.com/wp-content/uploads/2017/04/jalfrezirestaurantstyletopsceneclose-500x500.jpg"
          alt=""
        ></img>
      ),
      foodname: "Foodie-Piece Chicken Jalphari(full)",
      ingredient: "Salad / chowmein  / Drink",
      price: "800Rs/-",
    },
    {
      id:5,
      image: (
        <img
          src="https://www.cubesnjuliennes.com/wp-content/uploads/2020/06/Awadhi-Mutton-Yakhni-Pulao-500x500.jpg"
          alt=""
        ></img>
      ),
      foodname: "Foodie-Piece Yakhni Pulao(full)",
      ingredient: "Fried Rice / Raita / Qaiwa",
      price: "1400Rs/-",
    },
    {
      id:6,
      image: (
        <img
          src="https://www.cookshideout.com/wp-content/uploads/2013/04/Mix-Vegetable-Salan_FI-500x500.jpg"
          alt=""
        ></img>
      ),
      foodname: "Foodie-Piece Vegetable(full)",
      ingredient: "Vegetables / Salad / Drink",
      price: "600Rs/-",
    },
    {
      id:7,
      image: (
        <img
          src="https://www.chilitochoc.com/wp-content/uploads/2019/02/Baked-Seekh-Kabab-featured-image-500x500.jpg"
          alt=""
        ></img>
      ),
      foodname: "Foodie-Piece Seekh Kabab(6p)",
      ingredient: "Chicken / Meat / Drink",
      price: "400Rs/-",
    },
    {
      id:8,
      image: (
        <img
          src="https://yellowchilis.com/wp-content/uploads/2022/04/samosa-chaat-500x500.jpg"
          alt=""
        ></img>
      ),
      foodname: "Foodie-Piece Samosa Chat",
      ingredient: "Samosa / Masala / Drink",
      price: "150Rs/-",
    },
    {
      id:9,
      image: (
        <img
          src="https://www.mirchitales.com/wp-content/uploads/2019/05/Chana-Chaat-1-500x500.jpg"
          alt=""
        ></img>
      ),
      foodname: "Foodie-Piece Channa Chat ",
      ingredient: "Masala / Salt / Drink",
      price: "150Rs/-",
    },
    {
      id:10,
      image: (
        <img 
          src="https://www.cookwithmanali.com/wp-content/uploads/2019/10/Dahi-Bhalla-500x500.jpg"
          alt=""
        ></img>
      ),
      foodname: "Foodie-Piece  Dahi Baaly",
      ingredient: "Bhally / Masala / Drink",
      price: "150Rs/-",
    },
    {
      id:11,
      image: (
        <img
          src="https://www.saltandlavender.com/wp-content/uploads/2016/05/ground-chicken-burgers-1-500x500.jpg"
          alt=""
        ></img>
      ),
      foodname: "Foodie-Piece Chicken Burger ",
      ingredient: "Chicken / Sauces  / Drink",
      price: "200Rs/-",
    },
    {
      id:12,
      image: (
        <img
          src="https://bakeitwithlove.com/wp-content/uploads/2021/08/Western-Bacon-Cheeseburger-sq-500x500.jpg"
          alt=""
        ></img>
      ),
      foodname: "Foodie-Piece Cheese Burger",
      ingredient: "Cheese / Sauces / Drink",
      price: "250Rs/-",
    },
    {
      id:13,
      image: (
        <img
          src="https://greenmountaingrills.com/wp-content/uploads/2014/05/burger-1.jpg"
          alt=""
        ></img>
      ),
      foodname: "Foodie-Piece Beef Burger(1kg)",
      ingredient: "Beef / Sauces / Drink",
      price: "300Rs/-",
    },
    {
      id:14,
      image: (
        <img
          src="https://loseweightbyeating.com/wp-content/uploads/2021/06/AdobeStock_227845832-500x500.jpeg"
          alt=""
        ></img>
      ),
      foodname: "Foodie-Piece Chicken Shawarma",
      ingredient: "Chicken / Mayo / Drink",
      price: "200Rs/-",
    },
    {
      id:15,
      image: (
        <img
          src="https://spicecravings.com/wp-content/uploads/2020/12/Chicken-Kathi-Roll-Featured-1-500x500.jpg"
          alt=""
        ></img>
      ),
      foodname: "Foodie-Piece Paratha Roll",
      ingredient: "Chicken / Sauces / Drink",
      price: "250Rs/-",
    },
    {
      id:16,
      image: (
        <img
          src="https://5.imimg.com/data5/EO/XI/MY-38256129/ice-cream-500x500.jpg"
          alt=""
        ></img>
      ),
      foodname: "Foodie-Piece Ice-Cream(Family)",
      ingredient: "Tutti-Frutti / Kulfa / Others",
      price: "500Rs/-",
    },


    
  ])
  function handleClick()
  {
    
  }
  
  return (
    <div className="grid-container">
      {Orderdata.map((odata) => (
 
              <div class="grid__item">
                <article class="card">{odata.image}</article>
                {/* <Cart ordercart = {Orderdata}/> */}
                <article>
                  <h5>{odata.foodname} </h5>
                </article>
                <article>
                  <h6>Ingredient: {odata.ingredient} </h6> 
                </article>
                <article>
                  <h6>Price: {odata.price}</h6>
                  <Link to="/order/cart" style={{textDecoration:'none', color:"black"}}><button onClick={handleClick} className="orderbtn" >
                   Add To Cart</button></Link>
                </article>
              </div>
      ))}
      
    </div>
  );
};

export default Order;
