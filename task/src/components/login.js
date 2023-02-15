import axios from 'axios'
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import "../Styles/login.css";
const Login = ({ setCard }) => {

    const [Login, setLogin] = useState();

    const handleInput = (e) => {

        console.log(e.target.value);
        setLogin({ phone: e.target.value });

  

    
  
    }
    const handleSubmit = (e) => {
        e.preventdefault();
        console.log(e);

    };

    const login = async () => {
        const data = await axios.post("http://localhost:2000/login", { ...Login })

     
        setCard(data)

    }
       
    return (
        <div className='login'>
            <form className='lgnform' action="" onSubmit={handleSubmit}>
 
<div className='headq'><h3>LOGIN</h3></div>
                <div className='inpp1'>
                    <label htmlFor="Phone">Phone:</label>
                    <input type="text" name="phone" id="phone" onChange={(e) => handleInput(e)} autoComplete="off"  />

                </div>
                <div className='inpp1'>
                    <label htmlFor="OTP">OTP:</label>
                    <input type="OTP" name="OTP" id="OTP" />
                </div>
                <div className='lgnbtn'><Link to="/card" onClick={login}>Login</Link></div>
            </form>






        </div>


    )
}
export default Login


















//if input fields are empty it should not render to next page?

 










