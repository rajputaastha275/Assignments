import React from 'react'
import { useState } from 'react'
import { FaSun, FaMoon } from 'react-icons/fa'

const Theme = () => {
    const [dark, setDark] = useState(false)

    const changeTheme = () =>{
        setDark(!dark);
        if(!dark){
            //document.body.style.backgroundColor = "#000";
            // document.body.style.color = "#C77DFF";
            //document.body.style.color = "#4F738E"
            // document.body.style.color = "#e7bf3a"
             //document.body.style.color = "#0387D9"
             document.body.style.backgroundColor = "#778873"
             document.body.style.color = "#000000"
        }
        else{
            // document.body.style.backgroundColor = "#a7d1f1"
            //document.body.style.backgroundColor = "#f0eee9"
             //document.body.style.color = "#f7f2f2"
            // document.body.style.color = "#0387D9"
             document.body.style.backgroundColor = "#3C3D37"
             document.body.style.color = "#ffffff"
        }
    }
  return (
    <>
        <button onClick={changeTheme} className='rounded-'>
            {dark? <FaSun/> : <FaMoon/>}
        </button>
    </>
  )
}

export default Theme