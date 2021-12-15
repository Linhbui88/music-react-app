import './gallery.css'
import ResultCard from "./resultCard"
function Gallery({results}) {
 console.log(results)
  return (
    <div className ="gallery">
      {results.map((result)=> {
      return <ResultCard {...result}/>
    })}
    </div>
  )
}

export default Gallery
