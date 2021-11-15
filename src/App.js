import './App.css';
import Navbar from './components/Navbar.js';
import PostsList from './components/PostsList.js';
import Profile from './components/Profile.js';
import React, { Fragment, useState, useEffect } from 'react';
import Login from './components/Login.js'
import {getProfileByID, getPosts, logOut} from './services/API.js'
import { Route, Switch, useHistory } from 'react-router-dom'



function App () {


  const [toggleOpen, setToggleOpen] = useState(false)
  const [navOpen, setNavOpen] = useState(false)
  const [profile, setProfile] = useState([])
  const[posts, setPosts] = useState([])
  const[loggedIn, setLoggedIn] = useState(false)
  const [resetFilter, setResetFilter] = useState(false)

  const history = useHistory()

  useEffect(() => {

    const id = localStorage.getItem('id')
    
    if(id){
      getProfileByID(id).then(response =>{
        onLoginComplete(response)
          history.push('/')
        })
    }else{
      history.push('/login')
    }
    
  }, [])


  function onLoginComplete (profile) {
    localStorage.setItem('id', profile.id);
    getPosts()
    .then(response => {
        setPosts(response)
    })
    setLoggedIn(true)
    setProfile(profile)
  }
  
  const logout = () => {
    
    logOut().then(
      localStorage.removeItem('id')
      
      )
      setLoggedIn(false)
      history.push('/login')

  }
  
  function onLogoClick() {

    setResetFilter(true)
    
  }
  
  function onProfileClick() {
    
    toggleOpen ? history.push('/') : history.push('/profile')
    setToggleOpen(!toggleOpen)
    
  }
  
  function onNavClick() {
    
    setNavOpen(!navOpen)
  }
  


    return (
    <div className="App">
      <Navbar
      onProfileClick={()=>onProfileClick()}
      onLogoClick={()=>onLogoClick()}
      onNavClick={()=>onNavClick()}
      toggleOpen={setToggleOpen}
      navOpen={setNavOpen}
      loggedIn={loggedIn}
      />

      
      <main className="container py-5">
      <Switch>
      <Route path="/login" exact component={() => {
        return(
          <Login onLoginComplete={(profile)=>onLoginComplete(profile)}/>   
        )
      }}>

      </Route>
      <Route path="/profile" exact component={() => {
        return(
          <Profile profile={profile} logout={logout}/>
        )
      }}>

      </Route>

          <Route path="/" exact component={() => {
            return(
            <Fragment>
            <div className="row my-3">

              <PostsList
              posts={posts}
              setPosts={setPosts}
              resetFilter={resetFilter}
              setResetFilter={setResetFilter}
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
