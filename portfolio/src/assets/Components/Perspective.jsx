import React from 'react'
import PerspectiveCard from './PerspectiveCard';

const Perspective = () => {
    const details = [
        {
            title : "Who Am I?",
            text : "I am a BCA student passionate about software development, problem solving and learning new technologies.",
            size : "large"
        },
        {
            title : "Passion",
            text : "Building projects and improving my coding skills.",
            size : "small"
    
        },
        {
            title: "Current Focus",
            text: "Currently focusing on Java, DSA and React development.",
            size: "bottom"
        },
        {
            title: "Goals",
            text: "To become a skilled software engineer and work on impactful projects.",
            size: "bottom"
        },
        {
            title: "What I'm Learning",
            text: "Currently learning React, JavaScript, Java, Data Structures & Algorithms, and building  projects to strengthen my development skills.",
            size: "medium"
        }
    ];
  return (
    <>
        <div className='d-grid min-vh-100 pt-3 ps-4 justify-content-center align-items-center'>
            <h1 className='display-1 fw-bolder mt-4 ms-4'>THE PERSPECTIVE</h1>
            <div className='row g-3 mt-3'>
                {details.map((item, index) => (
                    <PerspectiveCard
                    key = {index}
                    title = {item.title}
                    text = {item.text}
                    size = {item.size}/>
                ))}

            </div>
        </div>
    </>
  )
}

export default Perspective