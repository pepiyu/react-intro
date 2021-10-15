function SearchBar() {
    return(
    

        <form>
            <div className="col-12 form-tweet">

                <input 
                type="text" 
                className="form-control" 
                id="description-input" 
                style={{margin: "0px 10px 0px 0px"}}
                maxlength="280" 
                placeholder="Search"
                />

                <button type="submit" id="submit-btn">Search</button>
            </div>

        </form>

    
    )
}

export default SearchBar