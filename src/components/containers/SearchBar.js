const SearchBar = () => {
    return (
        <div className="search-bar" id="search">
            <input type="text" class="search-input" placeholder="Search query..."/>
            <button type="submit" class="search-button">Search</button>
        </div>
    )
}
export default SearchBar;