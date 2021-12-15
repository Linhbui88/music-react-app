import {useState, useEffect} from 'react'
import Header from './components/header'
import SearchForm from './components/searchForm';
import API from'./ultils/API'
import Spinner from './components/spinner'
import './App.css';

function App() {
  const [searchTerm, setSearchTerm]= useState('')
  const [loading, setLoading] = useState(true)
  const [info, setInfo] =  useState(null)
  const [results, setResults] =  useState([])

  useEffect(() => {
    getRecommendations()
  }, [])
  const getRecommendations = async () =>{
    setLoading(true)
    try {
      const results =await API.getRecommendations(searchTerm)
      if(results?.data?.Similar?.Info && results.data.Similar.Info.length > 0) {
        setInfo(results.data.Similar.Info[0])
      }
      if(results?.data?.Similar?.Results){
        setResults(results.data.Similar.Results)

      }
    } catch(error) {
      alert(error)
    } 
    setLoading(false)  
  
  }


  return(
    <>
      <Header>
       <SearchForm 
          searchTerm={searchTerm}
          setSearchTerm={setSearchTerm}
          getRecommendations ={getRecommendations}
        />
      </Header>
      <div className='container'>
        {loading ? <Spinner /> : (
          <>
          <pre>{JSON.stringify(info, null, 2)}</pre>
          <pre>{JSON.stringify(info, null, 2)}</pre>
          </>
        ) }
      
        {/* // loading && <Spinner /> */}
      </div>
    </>
  )

}

export default App;
