import "../style/Payment.css";
function Payment() {
    return ( 
        <div>
        <div class="container-payment">
        <form action="">      
            <h1 class="main-heading">PAYMENT FORM</h1>
            
            <p>* indicates a required field</p>
            <h2>User Information</h2>
            <div>Name: *<input type="text" placeholder="Enter Your Name" required/></div>
            
                
           
            <div>
                Address: <textarea name="address" id="address" cols="70" rows="4"
                    placeholder="Enter Address"></textarea>
            </div>
            <div>
                Email: * <input type="email" name="email" id="email" placeholder="abc@gmail.com" required/>
            </div>
            <div>
                Pincode: <input type="number" name="pincode" id="pincode" placeholder="123456"/>
            </div>
            
            <h2>Payment Information</h2>
            <div>
                Accepted Cards <br/>
                <div>
                    <img src="https://img.favpng.com/19/9/14/credit-card-visa-logo-mastercard-png-favpng-vxqN24BTtEGesfxhqhc3HHqZW.jpg" alt="Visa" class="cards" id="visa"/>
                    <img src="https://seeklogo.com/images/E/easypaisa-logo-477156A1F0-seeklogo.com.png" alt="Easypaisa" class="cards" id="easypaisa"/>
                    <img src="https://www.pngall.com/wp-content/uploads/2016/07/Mastercard-Download-PNG.png" alt="MasterCard" class="cards" id="mastercard"/>
                </div>
                Card Type: *
                <select name="card_type" id="card_type" required>
                    <option value="">--Select a Card Type</option> 
                    <option value="visa">Visa</option>
                    <option value="easypaisa">Easypaisa</option>
                    <option value="mastercard">MasterCard</option>
                </select>
            </div>
            <div>
                Card Number: * <input type="number" name="card_number" id="card_number"
                    placeholder="5555-6666-7777-8888" required/>
            </div>
            <div>
                Expiration Date: * <input type="date" name="exp_date" id="exp_date" required/>
            </div>
            <div>
                CVV: * <input type="password" name="cvv" id="cvv" placeholder="123"/>
            </div>
            <input type="submit" value="Pay Now"/>
        </form>

    </div>
    </div>
    
     );
}

export default Payment;