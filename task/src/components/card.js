import React, { useEffect, useState } from "react";
import "../Styles/card.css";



const Card = ({ card }) => {
    
    console.log(card);

    return (
        <>
            <div className="card_main">

                <div className="g1">

                    <div>Firstname : {card && card.data && card.data.Firstname}</div>
                    <div>lastname : {card && card.data && card.data.Lastname}</div>
                    <div>email : {card && card.data && card.data.Email}</div>
                    <div>address : {card && card.data && card.data.Address}</div>
                    <div>id_number : {card && card.data && card.data._id}</div>
                    <div>Subscription type : {card && card.data && card.data.Subscription}</div>

                </div>

                <div className="g2" >

                    <div className="id_logo"></div>
                    <div>
                        <h4>Address: head office Address</h4>
                        <h4>EMail: head office email</h4>
                        <h4>Contact/suort/toll free number</h4>
                    </div>

                </div>

            </div>

            <div className="down">  <button className="download" onClick={()=>{
             
                window.print();
               
            }}>Save/Print</button> </div>


        </>
    )
}
export default Card;