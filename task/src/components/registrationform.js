import React, { useState } from 'react';
import "../Styles/registrationform.css";
import axios from "axios"
import { Link } from 'react-router-dom';
const Registration = () => {

     const [Registration, setRegistraion] = useState({

          Firstname: "",
          Lastname: "",
          phone: "",
          Email: "",
          Address: "",
          Subscription: ""
     });
     const [users, SetUsers] = useState([]);
     const handleInput = (e) => {

          const name = e.target.name;
          const value = e.target.value;
          console.log(name);
          console.log(value)
          setRegistraion({ ...Registration, [name]: value });
     }
     const handleSubmit = (e) => {
  
          e.preventdefault();
          const newUser = { ...Registration, }
          console.log(users);
          SetUsers([...users, newUser])
          console.log(users);
          setRegistraion({
               Firstname: "",
               Lastname: "",
               phone: "",
               Email: "",
               Address: "",
               // Subscription: ""
          });
     }

     console.log( { ...Registration })



     const reg = async () => {
          const data = await axios.post("http://localhost:2000/addUser", { ...Registration })
        

          localStorage.setItem("id",data.data.insertedId)
     }

     return (
          <div className='full'>
               <div className='Entire'>

                    <form action="" onSubmit={handleSubmit}>
                         <div className='reg'>
                              <h1>Register</h1>

                         </div>

                         <div className='inpp'>
                              <label htmlFor="Firstname">First name :</label>
                              <input type="text" name="Firstname" id="Firstname" placeholder='Enter your first name'  value={Registration.Firstname} onChange={handleInput} autoComplete="off" required />
                         </div>
                         <div className='inpp'>
                              <label htmlFor="Lastname">Last name :</label>
                              <input type="text" name="Lastname" id="Lastname" placeholder='Enter your last name' value={Registration.Lastname} onChange={handleInput} autoComplete="off" />
                         </div>
                         <div className='inpp'>
                              <label htmlFor="Phone">Phone:</label>
                              <input type="number" name="phone" id="phone" placeholder='Enter your number' value={Registration.phone} onChange={handleInput}  autoComplete="off" />
                         </div>
                         <div className='inpp'>
                              <label htmlFor="Email">Email:</label>
                              <input type="email" name="Email" id="Email" placeholder='Enter your email' value={Registration.Email} onChange={handleInput}  autoComplete="off"/>
                         </div>
                         <div className='inpp'>
                              <label htmlFor="Address">Address:</label>
                              <input type="text" name="Address" id="Address" placeholder='Enter your address' value={Registration.Address} onChange={handleInput}  autoComplete="off" required/>
                         </div>
                         {/* <div className='inpp'>
                              <label htmlFor="Subscription">Subscription:</label>
                              <input type="text" name="Subscription" id="Subscription" value={Registration.Subscription} onChange={handleInput} />
                         </div> */}

                         <div className='butt'>
                              <div className='register'> <p>Already Registered !</p>
                                   <Link to="/login" onClick={reg} >Login</Link>
                                   </div>
                                   <div className='register'><p>Proceed Further</p>
                             < Link  href="/buttons/41" to="/subscribe"  onClick={reg}>Paynow</Link>
                              </div>
                         </div>
                    </form>




               </div>
          </div>
     );
}

export default Registration;