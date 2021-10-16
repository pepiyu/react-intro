import React from 'react'
import {getProfile} from './services/profileService.js'

class Login extends React.Component {

    state = {
        error: false,
    }


    onSubmit = (e) => {
        e.preventDefault()

        if (e.target.username.value !== '' && e.target.password.value !== '') {

            const body = {
                username: e.target.username.value,
                password: e.target.password.value,
            }
    
    
            
            getProfile(body)
                .then(response =>{
                    console.log(response);
                    this.state.error = false
                    this.props.changeSection('login')
                    this.props.onLoginComplete(response.data)
        
                })
                .catch(err => {
                    if (err.response.status === 401) {
                        this.state.error = true
                        this.props.changeSection('home')
                    }
                    if (err.response.status === 400) {
                        this.state.error = true
                    }
                })
        }

        else

        {
            e.target.username.classList += ' is-invalid'
            this.state.error = true
        }

        
        


    }

    render() {
        return (

            

            
            <div className="row">
                <div id="log-in" className="col-12 col-md-6 offset-md-3">

                    <div className="card">

                        <form onSubmit={this.onSubmit} className="p-5">
                            <div className="col-12 mb-2">
                                <input type="text" 
                                className='form-control'
                                placeholder="username"
                                name="username"

                                />
                                
                            </div>
                            <div className="col-12 mb-2">
                                <input type="password" 
                                className='form-control'
                                placeholder="password"
                                name="password"
                                value="P4ssW0rd!#"
                                />

                            </div>
                            <div className={this.state.error == true ? "invalid-feedback d-block" : "invalid-feedback "} >
                            Invalid username or password
                            </div>
                            <div className="col-12 mb-2">
                                <button type="submit" id="signin-btn">Sign in</button>

                            </div>
                        </form>

                    </div>

                </div>

            </div>
        )
    }
}

export default Login