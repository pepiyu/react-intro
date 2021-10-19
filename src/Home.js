import SearchBar from './components/SearchBar.js';
import PostsList from './PostsList.js';
import React, { useState } from 'react';

function Home() {

    const [searchValue, setSearchValue] = useState('')

    const onSearch = (value) => {
        setSearchValue(value)
    }

    return (
        <>
            <SearchBar
            onSearch={(searchValue)=> onSearch(searchValue)}
            />
            
            <PostsList 
            searchValue={searchValue}/>
        </>
    )
}

export default Home