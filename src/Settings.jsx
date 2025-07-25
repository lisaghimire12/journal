import './Settings.css'
import { useState, useEffect } from 'react';


function Settings(){
    const[darkMode,setDarkMode]= useState(false);

    useEffect(() => {
  if (darkMode) {
    document.documentElement.classList.add("dark");
  } else {
    document.documentElement.classList.remove("dark");
  }
}, [darkMode]);
    const handleThemeToggle= ()=>{
        setDarkMode(prev => !prev);
    }
    return(
        <>
        <h1 className='settings'>Settings</h1>
        <button className='toggle' onClick={()=> handleThemeToggle()} >Theme 🌙 </button>
        {/*HEAR A REMINDER*/}
        
        </>
    )
}
export default Settings;