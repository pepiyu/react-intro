import React from 'react'

function Profile(props) {

    const {profile, logout} = props

    return (
        <div className={props.toggleOpen ? `profile d-block` : `profile d-none `}>
            <div className="text-center"><img src={profile.avatar} width="100" className="rounded-circle"/> </div>
                <h5 className="mt-2 mb-0">{profile.username} </h5>
                <div className="px-4 mt-1">
                    <p className="fonts">{profile.bio}</p>
                    <button id="signin-btn" onClick={logout}>Log out</button>
                </div>
        </div>
    )

}

export default Profile