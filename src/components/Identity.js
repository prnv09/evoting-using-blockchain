import React from 'react'

function Identity (){
    return(
        <div className="">
        <input className="form-control mt-5 mx-auto w-25" type="text" placeholder="Enter your Aadhar number" aria-label="default input example"></input>
        <div class="text-center mt-2">
      <button type="button" class="btn btn-success">Validate</button>
    </div>

        </div>
    );
}

export default Identity;