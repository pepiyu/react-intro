import React from 'react'

class Profile extends React.Component{

    render() {


    return(
        <div className={this.props.toggleOpen ? `profile d-block` : `profile d-none `}>
            <div className="text-center"><img src={this.props.profile.avatar} width="100" className="rounded-circle"/> </div>
                <h5 className="mt-2 mb-0">{this.props.profile.username} </h5>
                <div className="px-4 mt-1">
                    <p className="fonts">{this.props.profile.bio}</p>
                    <button id="signin-btn" onClick={()=>{this.props.logout()}}>Log out</button>
                </div>
        </div>
    )
}

}

export default Profile