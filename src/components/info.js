import Iframe from './iframe'

const Info = ({Name, wTeaser, wUrl, yUrl}) => {
  
  return (
    <div className="row" style={{ paddingTop: 30 }}>
      {yUrl && (
        <div className="column">
          <Iframe src={yUrl} title={Name} />
        </div>
      )}
      <div className="column">
        <h2>You searched: {Name}</h2>
        <p>{wTeaser}</p>
        <a 
          href={wUrl} 
          target="_blank" 
          rel="noreferrer noopener"
          className="button"
          style= {{backgroundColor:"rgba(0,212,255,1)", border: "0"}}
        >
          LEARN MORE
        </a>
      </div>
    </div>
  )
}

export default Info