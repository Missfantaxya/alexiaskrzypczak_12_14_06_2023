import "./ActivityButton.css"

export default function ActivityButton(props) {
  return (
      <button className="buttonLink">
        <img className="buttonLink__img" src={props.src} alt={props.name} />
      </button>
    )
}
