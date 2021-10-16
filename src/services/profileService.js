import axios from 'axios'

export function getProfile(body) {
    return axios.post('https://three-points.herokuapp.com/api/login', body)
        
}

export function getProfileByID(id) {
    return axios.get('https://three-points.herokuapp.com/api/users/'+id)
        
}