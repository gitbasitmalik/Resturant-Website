import '../style/Loginstyle.css';
import { useRef, useState , useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

function Login() 
{
    const nav = useNavigate();
    // useRef Hook 
    const ref = useRef(null);
    const[username,setUsername]= useState("");
    const[password, setPassword]= useState("");

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
    function handleSubmit(event) 
    {
        event.preventDefault();
      
        try {
          
          nav("/");
        } 
        catch (e) {
          alert(e.message);
        }
      }

      useEffect(() => ref.current.focus(), []);

    return ( 

      <div class="row">
          <div class="col-lg-3 col-md-2"></div>
          <div class="col-lg-6 col-md-8 login-box" >
              
              <div class="col-lg-12 login-form">
                  <div class="col-lg-12 login-form">
                      <form  onSubmit={handleSubmit}>
                          <div class="form-group">
                              <label class="form-control-label" value={username} onChange={handleChangeUsername}>USERNAME</label>
                              <input ref={ref} type="text" placeholder="Enter Your Name" class="form-control"/>
                          </div>
                          <div class="form-group">
                              <label class="form-control-label" value={password} onChange={handleChangePassword}>PASSWORD</label>
                              <input type="password" placeholder="Password Here" class="form-control" i/>
                          </div>

                          <div class="col-lg-12 loginbttm">
                              <div class="col-lg-6 login-btm login-text">
                                  {/* <button  style={{width:"130px",height:"20px"}}>Focus User Field </button> */}
                              </div>
                              <div class="col-lg-6 login-btm login-button">
                                  <button type="submit"  class="btn btn-outline-primary">LOGIN</button>
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
export default Login;
