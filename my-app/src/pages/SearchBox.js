const SearchBox =  (props) => {
    const { searchTerm, onSearch } = props;
    return (
        <input
         placeholder="Search the directory..."
         value={searchTerm}
         onChange={(e) => onSearch(e.target.value)}
         />
    );
};
    export default SearchBox;