import React from 'react'

function Nav(){
    return(
        <nav class="navbar navbar-expand-lg bg-light">
    <div class="container-fluid">
    <a class="navbar-brand" href="/">E-voting</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
    <button type="button" class="btn btn-warning align-item-end">Connect Wallet</button>
    </div>
  </div>
</nav>
    );
}

export default Nav;