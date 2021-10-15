function Profile({profileOpen, profile}) {

    return(
        <div className={profileOpen ? `profile d-block` : `profile d-none `}>
            <div className="text-center"><img src={profile.avatar} width="100" className="rounded-circle"/> </div>
                <h5 className="mt-2 mb-0">{profile.user} </h5>
                <div className="px-4 mt-1">
                    <p className="fonts">{profile.bio}</p>
                </div>
        </div>
    )
}

export default Profile