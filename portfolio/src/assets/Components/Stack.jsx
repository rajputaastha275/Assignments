import React from 'react'

const Stack = () => {
  return (
    <>
        <div className='container mt-5'>
            <h1 className='display-1 fw-bolder'>
                THE STACK
            </h1>
            <div className='row g-4 mt-4'>
                <div className='col-md-6'>
                    <div className='card p-4 h-70'
                    style={{
                    backgroundColor: "#9CAB84",
                    borderRadius: "20px",
                    minHeight: "150px"
                    }}>
                        <h3 className="text-center">Programming Languages</h3>
                        <div className='d-flex flex-wrap gap-2 mt-3 justify-content-center align-items-center'>
                            <button className="btn btn-dark btn-sm px-4 rounded-pill">
                                Java
                            </button>

                            <button className="btn btn-dark btn-sm px-4 rounded-pill">
                                 C
                            </button>

                            <button className="btn btn-dark btn-sm px-4 rounded-pill">
                                C++
                            </button>

                            <button className="btn btn-dark btn-sm px-4 rounded-pill">
                                 Python
                            </button>

                        </div>

                    </div>
                    

                </div>
                <div className='col-md-6'>
                    <div className='card p-4 h-70'
                    style={{
                    backgroundColor: "#9CAB84",
                    borderRadius: "20px",
                    minHeight: "150px"
                    }}>
                        <h3 className="text-center">Frontend Development</h3>
                        <div className='d-flex flex-wrap gap-2 mt-3 justify-content-center align-items-center'>
                            <button className="btn btn-dark btn-sm px-4 rounded-pill">
                                HTML
                            </button>

                            <button className="btn btn-dark btn-sm px-4 rounded-pill">
                                 CSS
                            </button>

                            <button className="btn btn-dark btn-sm px-4 rounded-pill">
                                JavaScript
                            </button>

                            <button className="btn btn-dark btn-sm px-4 rounded-pill">
                                 React
                            </button>
                            <button className="btn btn-dark btn-sm px-4 rounded-pill">
                                 Bootstrap
                            </button>

                        </div>

                    </div>
                    

                </div>
                 <div className='col-md-6'>
                    <div className='card p-4 h-70'
                    style={{
                    backgroundColor: "#9CAB84",
                    borderRadius: "20px",
                    minHeight: "150px"
                    }}>
                        <h3 className="text-center">Backend Development</h3>
                        <div className='d-flex flex-wrap gap-2 mt-3 justify-content-center align-items-center'>
                            <button className="btn btn-dark btn-sm px-4 rounded-pill">
                                Node.js
                            </button>

                            <button className="btn btn-dark btn-sm px-4 rounded-pill">
                                Express.js
                            </button>

                            <button className="btn btn-dark btn-sm px-4 rounded-pill">
                                MongoDB
                            </button>

                            <button className="btn btn-dark btn-sm px-4 rounded-pill">
                                MySQL
                            </button>
                            

                        </div>

                    </div>
                    

                </div>
                 <div className='col-md-6'>
                    <div className='card p-4 h-70'
                    style={{
                    backgroundColor: "#9CAB84",
                    borderRadius: "20px",
                    minHeight: "150px"
                    }}>
                        <h3 className="text-center">Tools & Concepts</h3>
                        <div className='d-flex flex-wrap gap-2 mt-3 justify-content-center align-items-center'>
                            <button className="btn btn-dark btn-sm px-4 rounded-pill">
                                GitHub
                            </button>

                            <button className="btn btn-dark btn-sm px-4 rounded-pill">
                                DSA
                            </button>

                            <button className="btn btn-dark btn-sm px-4 rounded-pill">
                                Problem Solving
                            </button>

                        </div>

                    </div>
                    

                </div>

            </div>

        </div>
    
    </>
  )
}

export default Stack