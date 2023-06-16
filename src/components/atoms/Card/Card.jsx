import "./Card.css"

export default function Card(props) {
  return (
    <div className="card">
      <img className="card__picture" src={ props.src } alt={ props.alt } />
      <div className="card__text">
        <p className="card__data">{ props.nutriData }&nbsp;{ props.unity }</p>
        <h2 className="card__title">{ props.title }</h2>
      </div>
    </div>
  )
}
