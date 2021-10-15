import './App.css';
import Navbar from './Navbar.js';
import SearchBar from './SearchBar.js';
import PostsList from './PostsList.js';
import posts from './data/posts.json';
import profile from './data/profile.json';
import Profile from './Profile.js';
import React from 'react'


class App extends React.Component {
  timeout = null

  state = {
    filtered: false,
    searchValue: '',
    posts: [],
    profileOpen: false,
    navOpen: false,
    profile: [],
  }



  searchFilter(searchValue) {
    this.setState({searchValue: searchValue})
  }
  
  
  componentDidMount() {
    this.timeout = setTimeout(() => {
      this.setState({posts})
    }, 500)
    this.setState({profile})
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
    
  }
  
  onProfileClick() {
    this.setState({profileOpen: !this.state.profileOpen})
    
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



    return (
    <div className="App">
      <Navbar
      onProfileClick={()=>this.onProfileClick()}
      onLogoClick={()=>this.onLogoClick()}
      onNavClick={()=>this.onNavClick()}
      profileOpen={this.state.profileOpen}
      navOpen={this.state.navOpen}
      />
      <div className="profile-back">
        <Profile profileOpen={this.state.profileOpen} profile={this.state.profile}/>
      </div>
      <main className="container">
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
      </main>

    </div>
    )
  }
}


export default App;
