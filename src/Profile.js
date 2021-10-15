function Profile({profileOpen, profile}) {

console.log(profile.bio);
    return(
        <div className={profileOpen ? `profile d-block` : `profile d-none `}>
            <div className="text-center"> <img src="https://ssbworld.com/images/character-profiles/square/Mii-Brawler-Profile-Square.png" width="100" className="rounded-circle"/> </div>
                <h5 className="mt-2 mb-0">Alexender Schidmt</h5> <span>UI/UX Designer</span>
                <div className="px-4 mt-1">
                    <p className="fonts">{profile.bio}</p>
                </div>
        </div>
    )
}

export default Profile