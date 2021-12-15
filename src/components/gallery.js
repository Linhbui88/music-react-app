import ResultCard from "./resultCard"
function Gallery({results}) {
 console.log(results)
  return (
    results.map((result)=> {
      return <ResultCard {...result}/>
    })
  )
}

export default Gallery
