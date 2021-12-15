import {useState, useEffect} from 'react'
import Header from './components/header'
import SearchForm from './components/searchForm';
import API from'./ultils/API'
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
    </>
  )

}

export default App;
