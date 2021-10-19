import './App.css';
import Navbar from './components/Navbar.js';
import SearchBar from './components/SearchBar.js';
import PostsList from './components/PostsList.js';
import posts from './data/posts.json';
import Profile from './components/Profile.js';
import React from 'react'
import Login from './components/Login.js'
import {getProfileByID} from './services/profileService.js'


class App extends React.Component {
  timeout = null

  state = {
    filtered: false,
    searchValue: '',
    posts: [],
    toggleOpen: false,
    navOpen: false,
    profile: [],
    section: 'home'
  }

  changeSection = (section) => {
    this.setState({section})
  }

  onLoginComplete = (profile) => {
    localStorage.setItem('id', profile.id);
    this.setState({profile})
  }

  logout = () => {
    localStorage.removeItem('id')
    this.changeSection('home')
  }

  searchFilter(searchValue) {
    this.setState({searchValue: searchValue})
  }
  
  
  componentDidMount() {
    this.timeout = setTimeout(() => {
      this.setState({posts})
    }, 3000)

    const id = localStorage.getItem('id');   
    
    if (id) {

      getProfileByID(id).then(response =>{
        this.changeSection('login')
        this.onLoginComplete(response.data)
  
      })
      .catch(err => {
          if (err.response.status === 401) {
              this.changeSection('home')
            }
            if (err.response.status === 400) {
              this.changeSection('home')
          }
      })
    
    }

  }

  addLike(id) {
    const newLike = this.state.posts.map(post => { 
      if(post.id === id) return { ...post, likes: ++post.likes} 
      return {...post} 
    })
    
    this.setState({posts: newLike})
  }


  addComment(id, commentArea) {
    const newPosts = this.state.posts.map(post => {
      if(post.id === id) {
        const newComments = post.comments.slice(0)
        newComments.push(commentArea)
        return { ...post, comments: newComments} 
      } 
      return {...post} 
    })
    
    this.setState({posts: newPosts})
  }
  

  componentWillUnmount() {
    clearTimeout(this.timeout)
  }

  onLogoClick() {
    this.setState({searchValue: ''})
    this.setState({toggleOpen: false})
    
  }
  
  onProfileClick() {
    this.setState({toggleOpen: !this.state.toggleOpen})
    
  }
  
  onNavClick() {
    this.setState({navOpen: !this.state.navOpen})

  }

  onChangeComment(comment) {
    this.setState({comment: comment})
  }
  
  onSearch(searchValue) {
    this.setState({searchValue})
    this.setState({filtered: true})

    
  }

  render() {
    const getComponent = () => {
      switch (this.state.section) {
        case "home":
          return (
          <>
          <Login toggleOpen={this.state.toggleOpen} changeSection={this.changeSection} onLoginComplete={this.onLoginComplete}/>
          </>

          )
          case "login":
            
            return (
            <>
              <Profile toggleOpen={this.state.toggleOpen} profile={this.state.profile} logout={this.logout}/>
                {this.state.posts.length > 0 ?
                (
                  <div className="row my-3">
                  <SearchBar
                    value={this.state.searchValue}
                    onSearch={(searchValue)=> this.onSearch(searchValue)}
                    />

                  
                  <PostsList 
                  addComment = {(id, commentArea)=> this.addComment(id, commentArea)} 
                  onChangeComment = {(comment)=> this.onChangeComment(comment)} 
                  addLike = {(id)=> this.addLike(id)} 
                  filtered = {this.state.filtered}
                  posts = {this.state.posts}
                  searchValue={this.state.searchValue}/>
                </div>
                )  : 'Loading...'
                
                }
            </>

            )
            
      }
    }


    return (
    <div className="App">
      <Navbar
      onProfileClick={()=>this.onProfileClick()}
      onLogoClick={()=>this.onLogoClick()}
      onNavClick={()=>this.onNavClick()}
      toggleOpen={this.state.toggleOpen}
      navOpen={this.state.navOpen}
      section={this.state.section}
      />

      
      <main className="container py-5">

        
        {getComponent()}
      </main>

    </div>
    )
  }
}


export default App;
