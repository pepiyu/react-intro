import React, { Fragment, useState, useEffect } from 'react';

function SearchBar({search, setSearch}) {


    function onChange(e) {
        e.preventDefault()
        setSearch(e.target.value);
    }

    return(
        <form>
            <div className="col-12 col-md-6 offset-md-3 form-tweet">

                <input 
                type="text" 
                className="form-control" 
                id="description-input" 
                maxLength="280" 
                placeholder="Search"
                value={search}
                onChange={onChange}
                />

            </div>

        </form>
    )
}

export default SearchBar