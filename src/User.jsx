import { useState } from "react";
import './User.css';

function User(){
    const[name,setName]=useState('Jake');
    const[email,setEmail]=useState('jake@gmail.com');
    return(
        <>
        <div id="container" >
        <h1 className="name" >Welcome, {name}</h1>
        </div>
        <div className="box">
            <div className="box-text">
            <b>{name}</b><br></br>
            {email}
            <p>Account created on: </p>
            </div>
        </div>
        <div className="mood-summary">
            <h3 id="text" >Mood Summary</h3>
        </div>
        </>
    )
}
export default User;