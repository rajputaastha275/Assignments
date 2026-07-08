import React from 'react'
import { FaLinkedin, FaGithub, FaEnvelope } from 'react-icons/fa'
import { SiLeetcode } from 'react-icons/si'

const About = () => {
  return (
    <>
        <div className='text-center d-flex flex-column justify-content-center min-vh-100 '>
            <p>Hi, I am</p>
            <h1 className='display-1 fw-bolder'>Aastha Rajput</h1>
            <pre className='fs-5'>
                BCA Student | Java & C Developer (Learning) | 
                Data Structures & Algorithms | MERN Stack Developer
                {/* Code. Learn. Build. */}
                
            </pre>
            <div className='d-flex gap-3 justify-content-center'>
                <button className='px-5 rounded-5 btn btn-dark social-btn ' onClick={() => window.open("https://www.linkedin.com/in/aastha-rajput-566684413?utm_source=share_via&utm_content=profile&utm_medium=member_android")}>
                <FaLinkedin/>
            </button>
            <button className='px-5 rounded-5 btn btn-dark social-btn' onClick={() => window.open("https://github.com/rajputaastha275")}>
                <FaGithub/>
            </button>
            <button className='px-5 rounded-5 btn btn-dark social-btn' onClick={() => window.open("https://leetcode.com/u/rajputaastha275/")}>
                <SiLeetcode/>
            </button>
            <button className='px-5 rounded-5 btn btn-dark social-btn' onClick={() => {
            alert("Button clicked");
            window.location.href = "mailto:rajputaastha0275@gmail.com";
    }}
>
                <FaEnvelope/>
            </button>
            </div>
            

            
               
        </div>
        
    </>
  )
}

export default About