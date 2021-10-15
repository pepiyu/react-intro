import './App.css';
import Navbar from './Navbar.js';
import SearchBar from './SearchBar.js';
import PostsList from './PostsList.js';

function App() {
  return (
    <div className="App">
        <Navbar/>
        <main class="container" style={{minHeight: '100vh'}}>
            <div className="row my-3">
                <SearchBar/>
                <PostsList/>
            </div>
        </main>
      <div class="row" id="tweets-container">

      </div>
    </div>
  );
}

export default App;
