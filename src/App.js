import './App.css';
import Navbar from './components/Navbar.js';
import PostsList from './components/PostsList.js';
import Profile from './components/Profile.js';
import React, { Fragment, useState, useEffect } from 'react';
import Login from './components/Login.js'
import {getProfileByID, getPosts, giveLike} from './services/API.js'
import { Route, Switch, useHistory } from 'react-router-dom'
import SearchBar from './components/SearchBar.js';



function App () {


  const [timeout, setTimeout] = useState(null)
  const [toggleOpen, setToggleOpen] = useState(false)
  const [navOpen, setNavOpen] = useState(false)
  const [profile, setProfile] = useState([])
  const [section, setSection] = useState('home')
  const [comment, setComment] = useState('')
  const [search, setSearch] = useState("")
  const[posts, setPosts] = useState([])

  const history = useHistory()

  useEffect(() => {

    const id = localStorage.getItem('id')
    
    if(id){

      getPosts()
        .then(response => {
            setPosts(response)
        })

      getProfileByID(id).then(response =>{
        setSection('login')
        onLoginComplete(response)
          history.push('/')
        })
    }else{
      history.push('/login')
    }
    
  }, [])


  function onLoginComplete (profile) {
    localStorage.setItem('id', profile.id);
    setProfile(profile)
  }

  const logout = () => {
    localStorage.removeItem('id')
    setSection('home')
  }


  function addComment(id, commentArea) {
    const newPosts = posts.map(post => {
      if(post.id === id) {
        const newComments = post.comments.slice(0)
        newComments.push(commentArea)
        return { ...post, comments: newComments} 
      } 
      return {...post} 
    })
    
    setPosts({posts: newPosts})
  }
  

  function componentWillUnmount() {
    clearTimeout(timeout)
  }

  function onLogoClick() {
    setSearch('')
    setToggleOpen(false)
    
  }
  
  function onProfileClick() {
    setToggleOpen(!toggleOpen)
    
  }
  
  function onNavClick() {
    setNavOpen(!navOpen)

  }

  function onChangeComment(comment) {
    setComment({comment: comment})
  }
  


    return (
    <div className="App">
      <Navbar
      onProfileClick={()=>onProfileClick()}
      onLogoClick={()=>onLogoClick()}
      onNavClick={()=>onNavClick()}
      toggleOpen={setToggleOpen}
      navOpen={setNavOpen}
      section={setSection}
      />

      
      <main className="container py-5">
      <Switch>
      <Route path="/login" exact component={() => {
        return(
          <Login setSection={setSection} onLoginComplete={(profile)=>onLoginComplete(profile)}/>   
        )
      }}>

      </Route>

      <Route path="/" exact component={() => {
          return(
            <Fragment>
            <Profile profile={profile} logout={logout}/>
            <div className="row my-3">
              <SearchBar
              search={search}
              setSearch={setSearch}
              />
              <PostsList
              posts={posts}
              setPosts={setPosts}
              addComment = {(id, commentArea)=> addComment(id, commentArea)} 
              onChangeComment = {(comment)=> onChangeComment(comment)} 
              search={search}
              />

            </div>
            </Fragment>
          )
        }}></Route>


    </Switch>
      </main>

    </div>

    )
}


export default App;
