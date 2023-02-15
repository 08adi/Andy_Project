import React from "react";
import "../Styles/subscribe.css";
import { Link } from 'react-router-dom';
import { useState } from 'react';
import axios from 'axios'
const Subscribe = () => {



    const setSubscribe = async (e) => {
        console.log(e);
        const id = localStorage.getItem("id")

        const body = {
            Subscription: e,
            userId: id

        }
        const data = await axios.post("http://localhost:2000/subscribe", { ...body })
        console.log(data)
    }




    return (
        <>
            <div className="subscribe" >

                <div>
                    <h1>1 Month</h1>
                    <h3>Unlock Ad Free Music </h3>
                    <h4>Unlimited Downloads</h4>
                    <h4>7 day Free Trail</h4>
                    <div className='register' value="450" onClick={(e) => setSubscribe(e.target.innerText)} ><Link to="/Login" >&#8377; 199</Link></div>
                </div>
                <div>
                    <h1>6 Months</h1>
                    <h3>Unlock Ad Free Music </h3>
                    <h4>Unlimited Downloads</h4>
                    <h4>30 day Free Trail</h4>
                    <div className='register' value="500" onClick={(e) => setSubscribe(e.target.innerText)}><Link to="/Login" >&#8377; 799</Link></div>
                </div>
                <div>
                    <h1>1 Year</h1>
                    <h3>Unlock Ad Free Music </h3>
                    <h4>Unlimited Downloads</h4>
                    <h4>30 day Free Trail</h4>
                    <div className='register' value="1000" onClick={(e) => setSubscribe(e.target.innerText)} ><Link to="/Login" > &#8377; 1299</Link></div>
                </div>
            </div>
        </>
    )
}


export default Subscribe;
