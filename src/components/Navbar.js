//import React from "react"

function Navbar ({onProfileClick, onLogoClick, section}) {

    const profileIcon = () => {
        return (
            section === 'home' ? '' : 
            <a className="user btn" id="user" onClick={() => {onProfileClick()}}><i className="far fa-user-circle"></i></a>

        )
    }

    return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <a className="navbar-brand" onClick={()=>{onLogoClick()}}>SocialMedia</a>

            {profileIcon()}
        
    </nav>
    )
}


export default Navbar