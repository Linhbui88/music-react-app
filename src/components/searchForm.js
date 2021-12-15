import './searchForm.css'
const SearchForm =(props) => {
  const handleChange =(e)=>{
   props.setSearchTerm(e.target.value)
  }

  return (
    <form >
      <input
        className ="searchForm"
        name = "searchTerm"
        value ={props.searchTerm}
        onChange = {handleChange}
        type = "search"
      >
      </input>
      <button
        className="button button-white"
        type ="submit"
      >
        Search
      </button>
    </form>
    
  )
}

export default SearchForm