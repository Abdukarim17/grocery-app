const SearchItem = ({searchQuery, handleSearch}) => {
  return (
    <form className='searchForm'>
      <label htmlFor='search'>Search</label>
      <input
        id='search'
        type='text'
        role='searchbox'
        placeholder='Search Items'
        value={searchQuery}
        onChange={handleSearch}
      />
    </form>
  );
};

export default SearchItem;
