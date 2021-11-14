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

export const getProfile = (body) => http.post('/login', body)

export const getProfileByID = (id) => http.get(`/users/${id}`)

export const getPosts = () => http.get('/posts')
export const createPost = () => http.post('/posts')
export const createComment = (postId, body) => http.post(`/posts/${postId}/comments`, body)

export const giveLike = (postId) => http.post(`/posts/${postId}/like`)

export const logout = () => http.post('/logout')