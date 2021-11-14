import React, { useState } from 'react';
import {getProfile} from '../services/API.js'
import { useHistory } from 'react-router-dom'


function Login(props) {

    const { replace } = useHistory()
    const {setSection, onLoginComplete} = props
    const [error, setError] = useState(false)


    const onSubmit = (e) => {
        e.preventDefault()

        if (e.target.username.value !== '' && e.target.password.value !== '') {

            const body = {
                username: e.target.username.value,
                password: e.target.password.value,
            }
    
            getProfile(body)
                .then(response => {
                    console.log(response)
                    setError(false)
                    onLoginComplete(response)
                    replace('/')
        
                })
                .catch(err => {
                    if (err.response.status === 401) {
                        setError(true)
                        setSection('home')
                        replace('/login')

                    }else 
                    if (err.response.status === 400) {
                        setError(true)
                    }

                })
        }

        else

        {
            e.target.username.classList += ' is-invalid'
            setError(true)
        }

    }


    return (

        

        
        <div className="row">
            <div id="log-in" className="col-12 col-md-6 offset-md-3">

                <div className="card">

                    <form onSubmit={onSubmit} className="p-5">
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
                            defaultValue="P4ssW0rd!#"
                            />

                        </div>
                        <div className={error == true ? "invalid-feedback d-block" : "invalid-feedback "} >
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

export default Login