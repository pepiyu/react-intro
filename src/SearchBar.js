function SearchBar({onSearch, value}) {
    return(
        <form>
            <div className="col-12 col-md-6 offset-md-3 form-tweet">

                <input 
                type="text" 
                className="form-control" 
                id="description-input" 
                maxLength="280" 
                placeholder="Search"
                value={value}
                onChange={(e)=> onSearch(e.target.value)}
                />

            </div>

        </form>
    )
}

export default SearchBar