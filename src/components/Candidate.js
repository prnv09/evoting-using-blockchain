import React from 'react'
function Candidate(props){
    return(
        <div>
        <div clasName="card img-fluid ">
    <img className="h-25 w-25 " src={'../candidate.png'} alt="Card"/>
    <div className="card-body">
    <p className="card-text">This image is in the middle</p>
    </div>
   </div>
        </div>

    );
}
export default Candidate;