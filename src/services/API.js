import axios from "axios"

const http = axios.create({
    baseURL: "https://3p.apps-dev.tid.es/api",
    withCredentials: true

})

http.interceptors.response.use(
    (response) => response.data,
    (error) => {
        if(error?.response.status === 401) {
            localStorage.removeItem('userId')
            window.location.replace('/login')
        }
    }
)

export const getProfile = async (body) => {

    return await http.post('/login', body)
}
export const getProfileByID = async (id) => {

    return await http.get(`/users/${id}`)
}
export const getPosts = async () => {

    return await http.get('/posts')
}
export const createPost = async () => {

    return await http.post('/posts')
}

export const createComment = async (postId, body) => {

    return await http.post(`/posts/${postId}/comments`, body)
}
export const giveLike = async (postId) => {

    return await http.post(`/posts/${postId}/like`)
}
export const logOut = async () => {

    return await http.post('/logout')
}