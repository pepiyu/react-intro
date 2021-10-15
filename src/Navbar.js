//import React from "react"

function Navbar ({onProfileClick, onNavClick, navOpen, onLogoClick}) {
    return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <a className="navbar-brand" onClick={()=>{onLogoClick()}}>SocialMedia</a>
        <button className="navbar-toggler" onClick={() => {onNavClick()}} id="navbutton" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
        </button>
        <div className={navOpen ? `collapse navbar-collapse d-block` : `collapse navbar-collapse`} id="navbarSupportedContent">
            <a className="user btn" id="user" onClick={() => {onProfileClick()}}><i className="far fa-user-circle"></i></a>
        </div>
    </nav>
    )
}


export default Navbar