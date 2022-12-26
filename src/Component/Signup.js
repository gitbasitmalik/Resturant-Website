import '../style/Signup.css';
import { useState ,useRef , useEffect} from 'react';

function Signup()
 {
    // useEffect Hook 
    const ref = useRef();
    useEffect(() => ref.current.focus(), []); 
    
    const[username , setUsername]= useState("");
    const[password , setPassword]= useState("");
    const[email , setEmail] = useState("");
    const[name , setName] = useState("");
    

    function handleChangeName(e)
    {
       const updatedName = e.target.value;
        setName(updatedName);
        console.log("Name Updated"); 
    }
    function handleChangeUsername (e)
    {
       const updatedUsername = e.target.value;
        setUsername(updatedUsername);
        console.log("Username Updated");
        
    }
    function handleChangePassword(e)
    {
       const updatedPassword = e.target.value;
        setPassword(updatedPassword);
        console.log("Password Updated");
        
    }
    function handleChangeEmail(e)
    {
       const updatedEmail = e.target.value;
        setEmail(updatedEmail);
        console.log("Email Updated");  
    }
    function handleSubmit (e)
    {
        e.preventDefault();
    }
    return ( 
        
    <div class="row">
            <div class="col-lg-3 col-md-2">

            </div>
    <div class="col-lg-6 col-md-8 login-box" >
        
        <div class="col-lg-12 login-form">
            <div class="col-lg-12 login-form">
                <form  onSubmit={handleSubmit}>
                    <div class="form-group">
                        <label class="form-control-label">FIRSTNAME</label>
                        <input type="text" ref={ref} value={name} onChange={handleChangeName} placeholder="First Name Here" class="form-control"/>
                    </div>
                    <div class="form-group">
                        <label class="form-control-label" >LASTNAME</label>
                        <input type="text"  value={name} onChange={handleChangeName} placeholder="Last Name Here" class="form-control"/>
                    </div>
                    <div class="form-group">
                        <label class="form-control-label">EMAIL</label>
                        <input type="text" value={email} onChange={handleChangeEmail} placeholder="abc@gmail.com" class="form-control"/>
                    </div>
                    <div class="form-group">
                        <label class="form-control-label" >USERNAME</label>
                        <input type="username" value={username} onChange={handleChangeUsername} placeholder="Choose Username" class="form-control"/>
                    </div>
                    <div class="form-group">
                        <label class="form-control-label" >PASSWORD</label>
                        <input type="password" value={password} onChange={handleChangePassword} placeholder="Password Here" class="form-control" i/>
                    </div>

                    <div class="col-lg-12 loginbttm">
                        
                        <div class="col-lg-6 login-btm login-button">
                            <button type="submit" class="btn btn-outline-primary">SIGN UP</button>
                        </div>
                    </div>
                </form>
            </div>
        </div>
        <div class="col-lg-3 col-md-2"></div>
    </div>
</div>
        
     );
    }

export default Signup;