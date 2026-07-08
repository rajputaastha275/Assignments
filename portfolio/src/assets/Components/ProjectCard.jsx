import React from "react";

const ProjectCard = ({title, text, languages, size}) => {

  return (
    <div className="col-12 mb-4 d-flex justify-content-center">

      <div 
        className="card p-4 d-flex justify-content-center"
         style={{
      width: "400px",
      height: "250px",
      backgroundColor: "#9CAB84",
      borderRadius: "20px"
    }}
      >

        <h2>{title}</h2>

        <p>{text}</p>
        <div className="mt-3">
  {
    languages.map((lang, index) => (
      <button 
        key={index}
        className="btn btn-outline-dark rounded-pill me-2"
      >
        {lang}
      </button>
    ))
  }
</div>


      </div>

    </div>
  );
}

export default ProjectCard;