import React from 'react'

const PerspectiveCard = ({title, text, size}) => {
     let column;

        if(size=="large")
        {
            column = "col-md-8"
        }
        else if(size == "small")
        {
            column = "col-md-4"
        }
        else if(size == "medium")
        {
            column = "col-md-12"
        }
        else{
            column = "col-md-6"
        }
  return (
    <>
       <div className={column} >
        <div className='card p-4 h-100' style={{
        backgroundColor: "#9CAB84",
        color: "black",
        borderRadius: "20px"
      }}>
            <h3>
                {title}
            </h3>
            <p>
                {text}
            </p>

        </div>

       </div>
    
    </>
  )
}

export default PerspectiveCard