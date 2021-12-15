import './resultCard.css'
const ResultCard = ({Name, wTeaser, wUrl, yUrl}) => {
  return (
    <div className = "card">
      <h3>{Name}</h3>
      {wUrl && (
        <a 
        href={wUrl} 
        target="_blank" 
        rel="noreferrer noopener"
        className="button"
        style= {{backgroundColor:"rgba(0,212,255,1)", border: "0"}}
      >
        LEARN MORE
      </a>
      )}
    </div>
  )
}

export default ResultCard
