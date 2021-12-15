import {useState, useEffect} from 'react'
import Header from './components/header'
import SearchForm from './components/searchForm';
import API from'./ultils/API'
import Spinner from './components/spinner'
import './App.css';

function App() {
  const [searchTerm, setSearchTerm]= useState('Abba')
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    getRecommendations()
  }, [])
  const getRecommendations = async()=>{
    setLoading(true)
    try {
      const results =await API.getRecommendations(searchTerm)
      console.log(results)
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
        />
      </Header>
      <div className='container'>
        {loading ? <Spinner /> : null}
      
        {/* // loading && <Spinner /> */}
      </div>
    </>
  )

}

export default App;
